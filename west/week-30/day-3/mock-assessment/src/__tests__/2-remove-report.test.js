import { createMockServer, createProviders } from '../setupTests';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { combineReducers } from 'redux';
import { render } from '@testing-library/react';

import reportsReducer from '../store/reports';

import App from '../App';

import { DB_KEYS } from '../mocks/storage';
const { reports: REPORT_DB_KEYS } = DB_KEYS;

describe('02 - Remove a Report by clicking a "Delete" button on the home page ("/")', () => {
  let server, wrapper, store, createHandlers, getItemFromStorage, reportSeeds, user;
  
  beforeEach(() => {
    localStorage.clear();
    ({ wrapper, store } = createProviders(
      {},
      { reducer: combineReducers({ reports: reportsReducer }) }
    ));
    let handlers;
    ({ handlers, getItemFromStorage } = createHandlers(reportSeeds));
    server = createMockServer(handlers);
    server.openServer();
    user = userEvent.setup();
  });

  afterEach(() => {
    if (server) server.closeServer();
    server = null;
  });

  describe('Using endpoints on the V1 Server', () => {
    let initialReports;

    beforeAll(() => {
      ({ createHandlers } = require('../mocks/handlers/handlersV1'));
      reportSeeds = require('../mocks/data/reportSeedsV1.json');
      initialReports = reportSeeds;
      for (let report of Object.values(initialReports)) {
        initialReports[report.id] = { id: report.id };
      }
    });

    it('should call DELETE /api/reports/:id and update the Redux store when the report\'s "Delete" button is clicked', async () => {
      render(<App />, { wrapper });

      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));

      const reports = Object.values(initialReports);
      const shuffledReportIndexes = Object.keys(reports).shuffle();
      const deleteRecordButtons = screen.getAllByRole('button', {
        name: 'Delete',
      });
      expect(deleteRecordButtons).toHaveLength(5);

      let newReports = { ...initialReports };
      for (let idx of shuffledReportIndexes) {
        const report = reports[idx];
        expect(screen.getByText(`Report #${report.id}`)).toBeInTheDocument();
        user.click(deleteRecordButtons[idx]);
        await waitFor(() => expect(screen.queryByText(`Report #${report.id}`)).not.toBeInTheDocument());
        delete newReports[report.id];
        await waitFor(() => expect(store.getState()).toEqual({
          reports: newReports
        }));
        const deletedServerReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
        expect(report.id).toEqual(deletedServerReports[deletedServerReports.length - 1].id);
      }
      expect((screen.queryAllByRole('button', {
        name: 'Delete',
      }))).toHaveLength(0);
    });

    it('should NOT remove the report from the page or the Redux store when DELETE /api/reports/:id returns an error response', async () => {
      render(<App />, { wrapper });
      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));

      const deleteRecordButtons = screen.getAllByRole('button', {
        name: 'Delete',
      });
      expect(deleteRecordButtons).toHaveLength(5);

      const reports = Object.values(initialReports);
      const shuffledReportIndexes = Object.keys(reports).shuffle();
      window.simulateDeleteError();
      for (let idx of shuffledReportIndexes) {
        const report = reports[idx];
        await waitFor(() => expect(screen.getByText(`Report #${report.id}`)).toBeInTheDocument());
        user.click(deleteRecordButtons[idx]);
      }

      await waitFor(() => expect((screen.getAllByRole('button', {
        name: 'Delete',
      }))).toHaveLength(5));
      const deletedServerReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
      expect(deletedServerReports).toHaveLength(0);

      for (let idx of shuffledReportIndexes) {
        const report = reports[idx];
        await waitFor(() => expect(screen.getByText(`Report #${report.id}`)).toBeInTheDocument());
      }
    });
  });

  describe('Using endpoints on the V2 Server', () => {
    let initialReports;

    beforeAll(() => {
      ({ createHandlers } = require('../mocks/handlers/handlersV2'));
      reportSeeds = require('../mocks/data/reportSeedsV2.json');
      initialReports = reportSeeds;
      for (let report of Object.values(initialReports)) {
        initialReports[report.id] = { id: report.id };
      }
    });

    it('should call DELETE /api/reports/:id and update the Redux store when the report\'s "Delete" button is clicked', async () => {
      render(<App />, { wrapper });

      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));

      const reports = Object.values(initialReports);
      const shuffledReportIndexes = Object.keys(reports).shuffle();
      const deleteRecordButtons = screen.getAllByRole('button', {
        name: 'Delete',
      });
      expect(deleteRecordButtons).toHaveLength(2);

      let newReports = { ...initialReports };
      for (let idx of shuffledReportIndexes) {
        const report = reports[idx];
        expect(screen.getByText(`Report #${report.id}`)).toBeInTheDocument();
        user.click(deleteRecordButtons[idx]);
        await waitFor(() => expect(screen.queryByText(`Report #${report.id}`)).not.toBeInTheDocument());
        delete newReports[report.id];
        await waitFor(() => expect(store.getState()).toEqual({
          reports: newReports
        }));
        const deletedServerReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
        expect(report.id).toEqual(deletedServerReports[deletedServerReports.length - 1].id);
      }
      expect((screen.queryAllByRole('button', {
        name: 'Delete',
      }))).toHaveLength(0);
    });
  });
});
