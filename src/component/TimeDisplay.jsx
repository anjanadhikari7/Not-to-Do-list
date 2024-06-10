const TimeDisplay = (props) => {
  const { totalTimeSpent, totalTimeWasted, totalWeekTime } = props;

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="alert alert-info fw-bold">
          Total Hours in a week:
          {totalWeekTime} hrs
        </div>
      </div>
      <div className="col">
        <div className="alert alert-info fw-bold">
          Total Hours Spent:
          {totalTimeSpent} hrs
        </div>
      </div>
      <div className="col">
        <div className="alert alert-danger fw-bold">
          Total Hours you could have saved:
          {totalTimeWasted} hrs
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;
