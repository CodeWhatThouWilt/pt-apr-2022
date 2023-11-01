import { createMockServer, createProviders } from '../setupTests';
import { screen, waitFor } from '@testing-library/react';
import { combineReducers } from 'redux';
import { render } from '@testing-library/react';

import reportsReducer from '../store/reports';

import App from '../App';

describe('03 - Display a Report\'s Details on "/reports/:reportId"', () => {
  let server, wrapper, history, resetStore, store, createHandlers, reportSeeds;
  
  beforeEach(() => {
    localStorage.clear();
    const report = Object.values(reportSeeds)[0];
    ({ wrapper, history, resetStore, store } = createProviders(
      { initialEntries: [`/reports/${report.id}`] },
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

  describe('Using endpoints on the V1 Server"', () => {
    beforeAll(() => {
      ({ createHandlers } = require('../mocks/handlers/handlersV1'));
      reportSeeds = require('../mocks/data/reportSeedsV1.json');
    });

    it('should update the Redux store with data from GET /api/reports/:reportId after first render', async () => {
      const reportsArr = Object.values(reportSeeds);
      const { rerender } = render(<App />, { wrapper });

      for (let reportIdx = 0; reportIdx < reportsArr.length; reportIdx++) {
        const report = reportsArr[reportIdx];
        if (reportIdx !== 0) {
          store = resetStore();
          history.replace(`/reports/${report.id}`);
          rerender(<App />);
        }
        await waitFor(() => expect(store.getState()).toEqual({
          reports: { [report.id]: report }
        }));
      }
    });

    it('should show a Report\'s improvement and understanding received from GET /api/reports/:reportId', async () => {
      const reportsArr = Object.values(reportSeeds);
      const { rerender } = render(<App />, { wrapper });

      for (let reportIdx = 0; reportIdx < reportsArr.length; reportIdx++) {
        const report = reportsArr[reportIdx];
        if (reportIdx !== 0) {
          store = resetStore();
          history.replace(`/reports/${report.id}`);
          rerender(<App />);
        }
        await waitFor(() => expect(store.getState()).toEqual({
          reports: { [report.id]: report }
        }));
        await waitFor(() => expect(document.body).toHaveTextContent(`Improvement:${report.improvement}`));
        expect(document.body).toHaveTextContent(`Understanding:${report.understanding}`);
      }
    });
  });

  describe('Using endpoints on the V2 Server"', () => {
    beforeAll(() => {
      ({ createHandlers } = require('../mocks/handlers/handlersV2'));
      reportSeeds = require('../mocks/data/reportSeedsV2.json');
    });

    it('should have two Reports in the Redux store if user navigates from one detail page to another', async () => {
      const [report1, report2] = Object.values(reportSeeds);
      render(<App />, { wrapper });

      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report1.id]: report1 }
      }));

      history.push(`/reports/${report2.id}`);
      await waitFor(() => expect(store.getState()).toEqual({
        reports: {
          [report1.id]: report1,
          [report2.id]: report2
        }
      }));
    });

    it('should show a Report\'s improvement and understanding received from GET /api/reports/:reportId and include a "Back to Report Index" link', async () => {
      const { rerender } = render(<App />, { wrapper });

      for (let report of Object.values(reportSeeds)) {
        history.replace(`/reports/${report.id}`);
        const store = resetStore();
        rerender(<App />);
        await waitFor(() => expect(store.getState()).toEqual({
          reports: { [report.id]: report }
        }));
        await waitFor(() => expect(document.body).toHaveTextContent(`Improvement:${report.improvement}`));
        expect(document.body).toHaveTextContent(`Understanding:${report.understanding}`);
        const backToReportsLink = screen.getByRole('link', {
          name: 'Back to Report Index',
        });
        expect(backToReportsLink).toBeInTheDocument();
        expect(backToReportsLink).toHaveAttribute('href', `/`);
      }
    });
  });
});
