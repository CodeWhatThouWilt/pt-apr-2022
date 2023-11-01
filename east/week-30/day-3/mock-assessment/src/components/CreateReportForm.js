import ReportForm from './ReportForm';

const CreateReportForm = () => {
  const report = {
    understanding: '',
    improvement: '',
  };

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <ReportForm
      report={report}
      formType="Create Report"
    />
  );
};

export default CreateReportForm;
