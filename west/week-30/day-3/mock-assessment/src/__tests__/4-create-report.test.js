import { createMockServer, createProviders } from '../setupTests';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { combineReducers } from 'redux';
import { render } from '@testing-library/react';

import reportsReducer from '../store/reports';

import App from '../App';

import { DB_KEYS } from '../mocks/storage';
const { reports: REPORT_DB_KEYS } = DB_KEYS;

describe('04 - Create a Report at "/reports/new"', () => {
  let server, wrapper, history, store, createHandlers;
  let setItemInStorage, reportSeeds, user;

  beforeEach(() => {
    localStorage.clear();
    ({ wrapper, history, store } = createProviders(
      { initialEntries: ["/reports/new"] },
      { reducer: combineReducers({ reports: reportsReducer }) }
    ));
    let handlers;
    ({ handlers, setItemInStorage } = createHandlers(reportSeeds));
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

    it('should insert the new Report into the Redux store and navigate to new Report\'s detail page when form is successfully submitted at POST /api/reports', async () => {
      render(<App />, { wrapper });
      await waitFor(() => expect(store.getState()).toEqual({ reports: {} }));

      const understandingInput = screen.getByRole('textbox', {
        name: 'Understanding:',
      });
      const improvementInput = screen.getByRole('textbox', {
        name: 'Improvement:',
      });

      expect(understandingInput).toHaveValue('');
      expect(improvementInput).toHaveValue('');

      const testInputUnderstanding = 'test create input understanding';
      const testInputImprovement = 'test create input improvement';

      await user.type(understandingInput, testInputUnderstanding);
      await user.type(improvementInput, testInputImprovement);

      setItemInStorage(REPORT_DB_KEYS.NEW_ID, 10);
      const submitBtn = screen.getByRole('button', { name: 'Create Report' });
      user.click(submitBtn);

      const testPostResponse = {
        id: 10,
        understanding: 'test create input understanding (newly created)',
        improvement: 'test create input improvement (newly created)',
      };
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [testPostResponse.id]: testPostResponse }
      }));

      expect(history.location.pathname).toBe('/reports/10');
    });

    it('should NOT update the Report in the Redux store, but should display the errors on the form for a Report when there is an error response returned from POST /api/reports', async () => {
      render(<App />, { wrapper });
      await waitFor(() => expect(store.getState()).toEqual({ reports: {} }));

      const understandingInput = screen.getByRole('textbox', {
        name: 'Understanding:',
      });
      const improvementInput = screen.getByRole('textbox', {
        name: 'Improvement:',
      });
      
      expect(understandingInput).toHaveValue('');
      expect(improvementInput).toHaveValue('');
      
      const testInputImprovement = 'test create input improvement';
      
      expect(screen.queryByText(/Understanding is required/)).not.toBeInTheDocument();

      await user.type(improvementInput, testInputImprovement);

      window.simulateCreateError();
      const submitBtn = screen.getByRole('button', { name: 'Create Report' });
      user.click(submitBtn);

      await waitFor(() => expect(screen.queryByText(/Understanding is required/)).toBeInTheDocument());
      expect(store.getState()).toEqual({ reports: {} });

      expect(history.location.pathname).toBe('/reports/new');
    });
  });

  describe('Using endpoints on the V2 Server', () => {
    beforeAll(() => {
      ({ createHandlers } = require('../mocks/handlers/handlersV2'));
      reportSeeds = require('../mocks/data/reportSeedsV2.json');
    });

    it('should insert the new Report into the Redux store and navigate to new Report\'s detail page when form is successfully submitted at POST /api/reports', async () => {
      render(<App />, { wrapper });
      await waitFor(() => expect(store.getState()).toEqual({ reports: {} }));

      const understandingInput = screen.getByRole('textbox', {
        name: 'Understanding:',
      });
      const improvementInput = screen.getByRole('textbox', {
        name: 'Improvement:',
      });

      expect(understandingInput).toHaveValue('');
      expect(improvementInput).toHaveValue('');

      const testInputUnderstanding = 'test create input understanding';
      const testInputImprovement = 'test create input improvement';

      await user.type(understandingInput, testInputUnderstanding);
      await user.type(improvementInput, testInputImprovement);

      setItemInStorage(REPORT_DB_KEYS.NEW_ID, 10);
      const submitBtn = screen.getByRole('button', { name: 'Create Report' });
      user.click(submitBtn);

      const testPostResponse = {
        id: 10,
        understanding: 'test create input understanding - recently added',
        improvement: 'test create input improvement - recently added',
      };
      await waitFor(() => expect(store.getState()).toEqual({
        reports: { [testPostResponse.id]: testPostResponse }
      }));

      expect(history.location.pathname).toBe('/reports/10');
    });
  });
});
