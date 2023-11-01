import { setupWorker } from 'msw'

let createHandlers = () => ({ handlers: [] });
let reports = {};

if (process.env.REACT_APP_MOCKED_SERVER_VERSION === "2") {
  ({ createHandlers } = require('./handlers/handlersV2'));
  reports = require('./data/reportSeedsV2.json');
} else {
  ({ createHandlers } = require('./handlers/handlersV1'));
  reports = require('./data/reportSeedsV1.json');
}

const { handlers } = createHandlers(reports);
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
