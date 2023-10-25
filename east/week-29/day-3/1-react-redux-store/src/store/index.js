import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// `combineReducers` combines all the reducer functions into one big reducer
// function, which is typically called `rootReducer`. This is the most important
// part of this file. You will add your reducers here to work with your various
// components.

// create rootReducer here:

// `enhancer` allows you to alter the store and add functionality such as the
// Redux DevTools and logger (similar to morgan) middleware
let enhancer;

// `compose` gives you the ability to add more than one enhancer to the store.
// `env` is set up automatically by `create-react-app`. `process.env.NODE_ENV`
// has 3 settings:
//   1. running `npm start` makes process.env.NODE_ENV === 'development`
//   2. running `npm test` makes process.env.NODE_ENV === 'test'
//   3. running `npm run build` makes process.env.NODE_ENV === 'production',
//      which you will use with Heroku
//
// `window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })` along with the
// Chrome extension for Redux DevTools will set up the DevTools in the browser.
// (The checks in the conditional keep the Redux DevTools from breaking the app
// if the app runs in a browser where the DevTools have not been installed.)
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

// `createStore` creates a store object literal {} 
// `preloadedState`--not important for now--is mainly used for hydrating state
// from the server. 
// For `enhancer`, see above.
// `configureStore` is the variable you will use in your root index.js to give
// the Redux store access to the full application.
const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;