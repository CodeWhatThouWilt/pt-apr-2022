import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReports } from "../store/reports";

import ReportIndexItem from "./ReportIndexItem";
import { resetDatabase } from "../mocks/storage";

const ReportIndex = () => {
    const dispatch = useDispatch();
    const reports = useSelector((state) => state.reports); // populate from Redux store

    useEffect(() => {
        dispatch(getAllReports());
    }, [dispatch]);

    /* **DO NOT CHANGE THE RETURN VALUE** */
    return (
        <section>
            <ul>
                {Object.values(reports).map((report) => (
                    <ReportIndexItem report={report} key={report.id} />
                ))}
            </ul>
            <Link className="back-button new" to="/reports/new">
                New Report
            </Link>
            <button onClick={resetDatabase}>Reset the Database</button>
        </section>
    );
};

export default ReportIndex;
