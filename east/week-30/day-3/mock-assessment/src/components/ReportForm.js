import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createReport, updateReport } from "../store/reports";

const ReportForm = ({ report, formType }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState(report?.understanding);
    const [improvement, setImprovement] = useState(report?.improvement);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        report = { ...report, understanding, improvement };

        let newReport;

        if (formType === "Update Report") {
            newReport = await dispatch(updateReport(report));
        } else {
            newReport = await dispatch(createReport(report));
        }

        if (newReport.id) {
            history.push(`/reports/${newReport.id}`);
        } else {
            const { errors } = await newReport.json();
            setErrors(errors);
        }
    };

    /* **DO NOT CHANGE THE RETURN VALUE** */
    return (
        <form onSubmit={handleSubmit}>
            <h2>{formType}</h2>
            <div className="errors">{errors.understanding}</div>
            <label>
                Understanding:
                <input
                    type="text"
                    value={understanding}
                    onChange={(e) => setUnderstanding(e.target.value)}
                />
            </label>
            <div className="errors">{errors.improvement}</div>
            <label>
                Improvement:
                <textarea
                    value={improvement}
                    onChange={(e) => setImprovement(e.target.value)}
                />
            </label>
            <button type="submit">{formType}</button>
        </form>
    );
};

export default ReportForm;
