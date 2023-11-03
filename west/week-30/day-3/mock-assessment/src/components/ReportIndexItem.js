import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteReport } from "../store/reports";

const ReportIndexItem = ({ report }) => {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteReport(report.id));
    };

    /* **DO NOT CHANGE THE RETURN VALUE** */
    return (
        <li>
            <div className="li-contents-flex">
                <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
                <div className="buttons-container">
                    <Link
                        className="edit-link"
                        to={`/reports/${report.id}/edit`}
                    >
                        Edit
                    </Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
};

export default ReportIndexItem;
