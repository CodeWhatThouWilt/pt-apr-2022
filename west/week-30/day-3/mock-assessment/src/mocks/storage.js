const PRACTICE_NAME = "version-a-reports-thunk-assessment-";

export const DB_KEYS = {
  reports: {
    SEED: "REPORTS_SEED",
    NEW_ID: "REPORTS_NEW_ID",
    CREATE: "REPORTS_CREATE",
    UPDATE: "REPORTS_UPDATE",
    DELETE: "REPORTS_DELETE",
    CREATE_ERROR: "REPORTS_CREATE_ERROR",
    IS_CREATE_ERROR_ACTIVE: "REPORTS_IS_CREATE_ERROR_ACTIVE",
    UPDATE_ERROR: "REPORTS_UPDATE_ERROR",
    IS_UPDATE_ERROR_ACTIVE: "REPORTS_IS_UPDATE_ERROR_ACTIVE",
    DELETE_ERROR: "REPORTS_DELETE_ERROR",
    IS_DELETE_ERROR_ACTIVE: "REPORTS_IS_DELETE_ERROR_ACTIVE",
    // To simulate an error while creating, enter this in the browser:
    // window.simulateCreateError();
    // To reset create error simulation, enter this in the browser:
    // window.removeCreateErrorSimulation();
    // To simulate an error while updating, enter this in the browser:
    // window.simulateUpdateError();
    // To reset update error simulation, enter this in the browser:
    // window.removeUpdateErrorSimulation();
    // To simulate an unknown error while deleting, enter this in the browser:
    // window.simulateDeleteError();
    // To reset delete error simulation, enter this in the browser:
    // window.removeDeleteErrorSimulation();
  }
};

export function initializeStorage(dbKey, initialData = {}) {
  dbKey = PRACTICE_NAME + dbKey
  const db = localStorage.getItem(dbKey);
  delete initialData.reports;
  if (!db) localStorage.setItem(dbKey, JSON.stringify({
    [DB_KEYS.reports.SEED]: {},
    [DB_KEYS.reports.NEW_ID]: 1,
    [DB_KEYS.reports.CREATE]: [],
    [DB_KEYS.reports.UPDATE]: [],
    [DB_KEYS.reports.DELETE]: [],
    [DB_KEYS.reports.CREATE_ERROR]: {
      status: 400,
      errors: { understanding: "Understanding is required" }
    },
    [DB_KEYS.reports.IS_CREATE_ERROR_ACTIVE]: false,
    [DB_KEYS.reports.UPDATE_ERROR]: {
      status: 400,
      errors: { improvement: "Improvement is required" }
    },
    [DB_KEYS.reports.IS_UPDATE_ERROR_ACTIVE]: false,
    [DB_KEYS.reports.DELETE_ERROR]: {
      status: 400,
      message: "Couldn't delete"
    },
    [DB_KEYS.reports.IS_DELETE_ERROR_ACTIVE]: false,
    ...initialData
  }));

  function getItemFromStorage(key) {
    const db = JSON.parse(localStorage.getItem(dbKey));
    return db[key];
  }

  function setItemInStorage(key, value) {
    const db = JSON.parse(localStorage.getItem(dbKey));
    db[key] = value;
    localStorage.setItem(dbKey, JSON.stringify(db));
  }

  window.simulateCreateError = function() {
    setItemInStorage(DB_KEYS.reports.IS_CREATE_ERROR_ACTIVE, true);
  }

  window.removeCreateErrorSimulation = function () {
    setItemInStorage(DB_KEYS.reports.IS_CREATE_ERROR_ACTIVE, false);
  }

  window.simulateUpdateError = function() {
    setItemInStorage(DB_KEYS.reports.IS_UPDATE_ERROR_ACTIVE, true);
  }

  window.removeUpdateErrorSimulation = function () {
    setItemInStorage(DB_KEYS.reports.IS_UPDATE_ERROR_ACTIVE, false);
  }

  window.simulateDeleteError = function() {
    setItemInStorage(DB_KEYS.reports.IS_DELETE_ERROR_ACTIVE, true);
  }

  window.removeDeleteErrorSimulation = function () {
    setItemInStorage(DB_KEYS.reports.IS_DELETE_ERROR_ACTIVE, false);
  }

  return {
    getItemFromStorage,
    setItemInStorage
  }
}

export const resetDatabase = () => {
  localStorage.clear(); 
  window.location.reload();
}
