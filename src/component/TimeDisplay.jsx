const TimeDisplay = (props) => {
  const { totalTimeSpent, totalTimeWasted } = props;
  return (
    <div className="row mt-4">
      <div className="col">
        <div className="alert alert-info fw-bold">
          Total Hours in a week:
          {24 * 7} hrs
        </div>
      </div>
      <div className="col">
        <div className="alert alert-info fw-bold">
          Total Hours Spent:
          {totalTimeSpent}
        </div>
      </div>
      <div className="col">
        <div className="alert alert-danger fw-bold">
          Total Hours you could have saved:
          {totalTimeWasted}
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;
