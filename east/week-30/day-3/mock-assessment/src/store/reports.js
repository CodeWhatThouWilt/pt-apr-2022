/** Action Type Constants: */
export const LOAD_REPORTS = "reports/LOAD_REPORTS";
export const RECEIVE_REPORT = "reports/RECEIVE_REPORT";
export const UPDATE_REPORT = "reports/UPDATE_REPORT";
export const REMOVE_REPORT = "reports/REMOVE_REPORT";

/**  Action Creators: */
export const loadReports = (reports) => ({
    type: LOAD_REPORTS,
    reports,
});

export const receiveReport = (report) => ({
    type: RECEIVE_REPORT,
    report,
});

export const editReport = (report) => ({
    type: UPDATE_REPORT,
    report,
});

export const removeReport = (reportId) => ({
    type: REMOVE_REPORT,
    reportId,
});

/** Thunk Action Creators: */

// Your code here
export const getAllReports = () => async (dispatch) => {
    const res = await fetch("/api/reports");

    if (res.ok) {
        const data = await res.json();
        dispatch(loadReports(data));
        return data;
    }
    return res;
};

export const deleteReport = (reportId) => async (dispatch) => {
    const res = await fetch(`/api/reports/${reportId}`, {
        method: "DELETE",
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(removeReport(reportId));
        return data;
    }
    return res;
};

export const getReportDetails = (reportId) => async (dispatch) => {
    const res = await fetch(`/api/reports/${reportId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReport(data));
        return data;
    }
    return res;
};

export const createReport = (payload) => async (dispatch) => {
    const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReport(data));
        return data;
    }
    return res;
};

export const updateReport = (payload) => async (dispatch) => {
    const res = await fetch(`/api/reports/${payload.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(editReport(data));
        return data;
    }
    return res;
};

/** The reports reducer is complete and does not need to be modified */
const reportsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_REPORTS:
            const reportsState = {};
            action.reports.forEach((report) => {
                reportsState[report.id] = report;
            });
            return reportsState;
        case RECEIVE_REPORT:
            return { ...state, [action.report.id]: action.report };
        case UPDATE_REPORT:
            return { ...state, [action.report.id]: action.report };
        case REMOVE_REPORT:
            const newState = { ...state };
            delete newState[action.reportId];
            return newState;
        default:
            return state;
    }
};

export default reportsReducer;
