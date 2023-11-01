import { Link } from 'react-router-dom';

const ReportIndexItem = ({ report }) => {
  const handleDelete = (e) => {
    e.preventDefault();
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