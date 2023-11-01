import { createMockServer, createProviders } from '../setupTests';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { combineReducers } from 'redux';
import { render } from '@testing-library/react';

import reportsReducer from '../store/reports';

import App from '../App';

describe('05 - Update a Report at "/reports/:reportId/edit"', () => {
let server, wrapper, history, store, createHandlers, reportSeeds, user;
  
  beforeEach(() => {
    localStorage.clear();
    const report = reportSeeds[2];
    ({ wrapper, history, store } = createProviders(
      { initialEntries: [`/reports/${report.id}/edit`] },
      { reducer: combineReducers({ reports: reportsReducer }) }
    ));
    const { handlers } = createHandlers(reportSeeds);
    server = createMockServer(handlers);
    server.openServer();
    user = userEvent.setup();
  });

  afterEach(() => {
    if (server) server.closeServer();
    server = null;
  });

  describe('Using endpoints on the V1 Server', () => {
    beforeAll(() => {
      ({ createHandlers } = require('../mocks/handlers/handlersV1'));
      reportSeeds = require('../mocks/data/reportSeedsV1.json');
    });
    it('should update the Report in the Redux store and navigate to the Report\'s detail page when form is successfully submitted at PUT /api/reports/:reportId', async () => {
      const report = reportSeeds[2];
      render(<App />, { wrapper });
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report.id]: report }
      }));

      const understandingInput = screen.getByRole('textbox', {
        name: 'Understanding:',
      });
      const improvementInput = screen.getByRole('textbox', {
        name: 'Improvement:',
      });

      expect(understandingInput).toHaveValue(report.understanding);
      expect(improvementInput).toHaveValue(report.improvement);

      const testInputUnderstanding = 'test update input understanding';
      const testInputImprovement = 'test update input improvement';

      userEvent.clear(understandingInput);
      await user.type(understandingInput, testInputUnderstanding);

      userEvent.clear(improvementInput);
      await user.type(improvementInput, testInputImprovement);

      const submitBtn = screen.getByRole('button', { name: 'Update Report' });
      user.click(submitBtn);

      const testUpdateResponse = {
        id: report.id,
        understanding: 'test update input understanding (recently updated)',
        improvement: 'test update input improvement (recently updated)',
      };
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [testUpdateResponse.id]: testUpdateResponse }
      }));

      expect(history.location.pathname).toBe(`/reports/${report.id}`);
    });

    it('should NOT update the Report in the Redux store, but should display the errors on the form for a Report when there is an error response returned from PUT /api/reports/:reportId', async () => {
    const report = reportSeeds[2];
      render(<App />, { wrapper });
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report.id]: report }
      }));

      const understandingInput = screen.getByRole('textbox', {
        name: 'Understanding:',
      });
      const improvementInput = screen.getByRole('textbox', {
        name: 'Improvement:',
      });

      expect(understandingInput).toHaveValue(report.understanding);
      expect(improvementInput).toHaveValue(report.improvement);

      const testInputUnderstanding = 'test update input understanding';
      const testInputImprovement = 'test update input improvement';

      userEvent.clear(understandingInput);
      await user.type(understandingInput, testInputUnderstanding);

      userEvent.clear(improvementInput);
      await user.type(improvementInput, testInputImprovement);

      window.simulateUpdateError();
      const submitBtn = screen.getByRole('button', { name: 'Update Report' });
      user.click(submitBtn);

      await waitFor(() => expect(screen.queryByText(/Improvement is required/)).toBeInTheDocument());
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report.id]: report }
      }));

      expect(history.location.pathname).toBe(`/reports/${report.id}/edit`);
    });
  });

  describe('Using endpoints on the V2 Server', () => {
    beforeAll(() => {
      ({ createHandlers } = require('../mocks/handlers/handlersV2'));
      reportSeeds = require('../mocks/data/reportSeedsV2.json');
    });

    it('should update the Report in the Redux store and navigate to the Report\'s detail page when form is successfully submitted at PUT /api/reports/:reportId', async () => {
    const report = reportSeeds[2];
      render(<App />, { wrapper });
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [report.id]: report }
      }));

      const understandingInput = screen.getByRole('textbox', {
        name: 'Understanding:',
      });
      const improvementInput = screen.getByRole('textbox', {
        name: 'Improvement:',
      });

      expect(understandingInput).toHaveValue(report.understanding);
      expect(improvementInput).toHaveValue(report.improvement);

      const testInputUnderstanding = 'test update input understanding';
      const testInputImprovement = 'test update input improvement';

      userEvent.clear(understandingInput);
      await user.type(understandingInput, testInputUnderstanding);

      userEvent.clear(improvementInput);
      await user.type(improvementInput, testInputImprovement);

      const submitBtn = screen.getByRole('button', { name: 'Update Report' });
      user.click(submitBtn);

      const testUpdateResponse = {
        id: report.id,
        understanding: 'test update input understanding - edited',
        improvement: 'test update input improvement - edited',
      };
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [testUpdateResponse.id]: testUpdateResponse }
      }));

      expect(history.location.pathname).toBe(`/reports/${report.id}`);
    });
  });
});
