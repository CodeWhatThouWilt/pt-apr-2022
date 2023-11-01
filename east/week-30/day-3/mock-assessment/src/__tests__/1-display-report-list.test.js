import { createMockServer, createProviders } from '../setupTests';
import { screen, waitFor, within } from '@testing-library/react';
import { combineReducers } from 'redux';
import { render } from '@testing-library/react';

import reportsReducer from '../store/reports';

import App from '../App';

describe('01 - Display a list of Reports on the home page ("/")', () => {
  let server, wrapper, store, createHandlers, reportSeeds;

  beforeEach(() => {
    localStorage.clear();
    ({ wrapper, store } = createProviders(
      {},
      { reducer: combineReducers({ reports: reportsReducer }) }
    ));
    const { handlers } = createHandlers(reportSeeds);
    server = createMockServer(handlers);
    server.openServer();
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
    
    it('should update the Redux store with data from GET /api/reports after first render', async () => {
      render(<App />, { wrapper });
  
      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));
    });
  
    it('should render a list of reports received from GET /api/reports', async () => {
      render(<App />, { wrapper });
  
      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));
  
      const reportList = screen.getByRole('list');
      const reportItems = within(reportList).getAllByRole('listitem');
      expect(reportItems).toHaveLength(5);

      const reportsArr = Object.values(initialReports);
      for (let idx = 0; idx < reportsArr.length; idx++) {
        const report = reportsArr[idx];
        const reportItem = reportItems[idx];
        expect(within(reportItem).getByText(`Report #${report.id}`)).toBeInTheDocument();
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

    it('should render a list of reports with an edit link and delete button for each report received from GET /api/reports', async () => {
      render(<App />, { wrapper });
  
      await waitFor(() => expect(store.getState()).toEqual({
        reports: initialReports
      }));
  
      const reportList = screen.getByRole('list');
      const reportItems = within(reportList).getAllByRole('listitem');
      expect(reportItems).toHaveLength(2);
  
      const reportsArr = Object.values(initialReports);
      for (let idx = 0; idx < reportsArr.length; idx++) {
        const report = reportsArr[idx];
        const reportItem = reportItems[idx];
        const reportLink = within(reportItem).getByRole('link', { name: `Report #${report.id}` });
        expect(reportLink).toHaveAttribute('href', `/reports/${report.id}`);
        const reportEditLink = within(reportItem).getByRole('link', { name: "Edit" });
        expect(reportEditLink).toHaveAttribute('href', `/reports/${report.id}/edit`);
        expect(within(reportItem).getByRole('button', { name: "Delete" })).toBeInTheDocument();
      }
    });
  });
});
