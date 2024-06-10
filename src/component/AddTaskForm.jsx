import { useState } from "react";
import { randomIDGenerator } from "../Utilities/RandomIDGenerator";
const initialTaskObject = {
  taskName: "",
  taskTime: "",
  type: "entry",
};

const AddTaskForm = (props) => {
  const { addTask } = props;
  const [taskObject, setTaskObject] = useState(initialTaskObject);
  const handleOnChange = (e) => {
    const keyToUpdate = e.target.name;
    setTaskObject({ ...taskObject, [keyToUpdate]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    //S Stops the default behaviour of form submission
    e.preventDefault();
    //Add the ID to task Object
    const taskWithId = { ...taskObject, id: randomIDGenerator() };

    // Logic to add task
    addTask(taskWithId);

    setTaskObject(initialTaskObject);
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div className="d-flex flex-column gap-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task Name"
          name="taskName"
          value={taskObject.taskName}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <input
          type="number"
          className="form-control"
          placeholder="Enter Hours Spent"
          name="taskTime"
          value={taskObject.taskTime}
          onChange={(e) => handleOnChange(e)}
          min="1"
          max="24"
          required
        />
        <button className="btn btn-primary" type="sumbit">
          Add New Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
