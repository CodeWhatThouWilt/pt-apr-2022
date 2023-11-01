import { rest } from 'msw';

import { initializeStorage, DB_KEYS } from '../storage';
const { reports: REPORT_DB_KEYS } = DB_KEYS;

export function createHandlers(initialData) {
  const { getItemFromStorage, setItemInStorage } = initializeStorage("V1", {
    [REPORT_DB_KEYS.SEED]: initialData,
    [REPORT_DB_KEYS.NEW_ID]: 6,
  });

  function compileReports() {
    const reports = getItemFromStorage(REPORT_DB_KEYS.SEED);
    const createdReports = getItemFromStorage(REPORT_DB_KEYS.CREATE);
    const updatedReports = getItemFromStorage(REPORT_DB_KEYS.UPDATE);
    const deletedReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
    for (let report of createdReports) {
      reports[report.id] = report;
    }
    for (let report of updatedReports) {
      reports[report.id] = report;
    }
    for (let report of deletedReports) {
      delete reports[report.id];
    }
    return reports;
  }
  const handlers = [
    rest.get('/api/reports', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(Object.values(compileReports()).map(report => ({ id: report.id })))
      );
    }),
    rest.get('/api/reports/:id', (req, res, ctx) => {
      const { id } = req.params;
      const reports = compileReports();
      if (!(id in reports)) {
        return res(
          ctx.status(404),
          ctx.json({
            message: "Not Found"
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json(reports[id])
      );
    }),
    rest.post('/api/reports', (req, res, ctx) => {
      const { improvement, understanding } = req.body;
      if (getItemFromStorage(REPORT_DB_KEYS.IS_CREATE_ERROR_ACTIVE)) {
        const updateError = getItemFromStorage(REPORT_DB_KEYS.CREATE_ERROR);
        const { status, errors } = updateError;
        if (!status || !errors) throw new Error("CREATE_ERROR needs object with status and errors keys");
        return res(
          ctx.status(status),
          ctx.json({
            errors
          })
        );
      }
      const newId = getItemFromStorage(REPORT_DB_KEYS.NEW_ID);
      if (!newId) throw new Error('Test spec needs an NEW_ID in localStorage\'s mocked db');
      const newReport = {
        id: newId,
        improvement: (improvement || '') + ' (newly created)',
        understanding: (understanding || '') + ' (newly created)',
      };
      const createdReports = getItemFromStorage(REPORT_DB_KEYS.CREATE);
      createdReports.push(newReport);
      setItemInStorage(REPORT_DB_KEYS.CREATE, createdReports);
      setItemInStorage(REPORT_DB_KEYS.NEW_ID, newId + 1);
      return res(
        ctx.status(201),
        ctx.json(newReport)
      );
    }),
    // updateHandler is defined at the bottom of this file
    rest.put('/api/reports/:id', updateHandler),
    rest.patch('/api/reports/:id', updateHandler),
    rest.delete('/api/reports/:id', (req, res, ctx) => {
      if (getItemFromStorage(REPORT_DB_KEYS.IS_DELETE_ERROR_ACTIVE)) {
        const deleteError = getItemFromStorage(REPORT_DB_KEYS.DELETE_ERROR);
        const { status, message } = deleteError;
        if (!status || !message) throw new Error("DELETE_ERROR needs object with status and message keys");
        return res(
          ctx.status(status),
          ctx.json({
            message
          })
        );
      }
      const { id } = req.params;
      const reports = compileReports();
      if (!(id in reports)) {
        return res(
          ctx.status(404),
          ctx.json({
            message: "Not Found"
          })
        );
      }
      const deletedReports = getItemFromStorage(REPORT_DB_KEYS.DELETE);
      deletedReports.push(reports[id]);
      setItemInStorage(REPORT_DB_KEYS.DELETE, deletedReports);
      return res(
        ctx.status(200),
        ctx.json({
          message: 'Successfully deleted'
        })
      );
    }),
  ];
  
  function updateHandler (req, res, ctx) {
    const { id } = req.params;
    const { improvement, understanding } = req.body;
    if (getItemFromStorage(REPORT_DB_KEYS.IS_UPDATE_ERROR_ACTIVE)) {
      const updateError = getItemFromStorage(REPORT_DB_KEYS.UPDATE_ERROR);
      const { status, errors } = updateError;
      if (!status || !errors) throw new Error("UPDATE_ERROR needs object with status and errors keys");
      return res(
        ctx.status(status),
        ctx.json({
          errors
        })
      );
    }
    const reports = compileReports();
    if (!(id in reports)) {
      return res(
        ctx.status(404),
        ctx.json({
          message: "Not Found"
        })
      );
    }
    const report = reports[id];
    if (report.improvement !== improvement) {
      report.improvement = improvement + " (recently updated)";
    }
    if (report.understanding !== understanding) {
      report.understanding = understanding + " (recently updated)";
    }
    const updatedReports = getItemFromStorage(REPORT_DB_KEYS.UPDATE);
    updatedReports.push(report);
    setItemInStorage(REPORT_DB_KEYS.UPDATE, updatedReports);
    return res(
      ctx.status(200),
      ctx.json(report)
    );
  };

  return {
    handlers,
    getItemFromStorage,
    setItemInStorage,
  }
};