// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createMemoryHistory } from "history";

export function createProviders(
  {
    initialEntries = ["/"],
    initialIndex = 0,
    ...routerOptions
  },
  {
    reducer,
    preloadedState = {},
    middleware,
  } = {}
) {
  const result = {
    history: createMemoryHistory({
      initialEntries,
      initialIndex,
      ...routerOptions,
    })
  };
  result.resetStore = function(options = {}) {
    result.store = createStore(
      options.reducer || reducer,
      options.preloadedState || preloadedState,
      options.middleware || middleware || applyMiddleware(thunk),
    );
    return result.store;
  };
  result.resetStore();
  const AllTheProviders = ({ children }) => {
    return (
      <Provider store={result.store}>
        <Router history={result.history}>
          {children}
        </Router>
      </Provider>
    )
  }
  result.wrapper = AllTheProviders;
  return result;
}

// This configures a request mocking server with the given request handlers.
export const createMockServer = (handlers) => {
  const server = setupServer(...handlers);

  return {
    ...server,
    openServer: () => server.listen({
      onUnhandledRequest(req) {
        console.error(
          'Found an unhandled %s request to %s',
          req.method,
          req.url.href,
        )
      }
    }),
    closeServer: () => server.close()
  };
};

// Uses the modern version of the Fisher–Yates shuffle algorithm:
Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = this[i];
    this[i] = this[j];
    this[j] = x;
  }
  return this;
}
