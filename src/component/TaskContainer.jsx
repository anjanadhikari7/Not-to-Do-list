import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TimeDisplay from "./TimeDisplay";

const TaskContainer = () => {
  const storedTaskedList = JSON.parse(localStorage.getItem("taskList")) || [];
  const [taskList, setTaskList] = useState(storedTaskedList);

  // Function to add Task
  const addTask = (taskObject) => {
    const newTotalTime = totalTimeSpent + Number(taskObject.taskTime);
    if (
      taskList.find(
        (item) =>
          item.taskName.toLowerCase() === taskObject.taskName.toLowerCase()
      )
    ) {
      alert("This task already exists");
      return;
    }
    if (newTotalTime > totalWeekTime) {
      alert("Total spent time exceeds the total available weekly time.");
      return;
    }

    setTaskList([...taskList, taskObject]);
  };

  // Function to switch or toggle task
  const switchTask = (taskID) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskID) {
        task.type = task.type === "entry" ? "unwanted" : "entry";
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  // Function to delete the task

  const handleOnDelete = (taskID) => {
    if (window.confirm(" Are you sure you want to delete the task?")) {
      const updatedTaskList = taskList.filter((task) => task.id != taskID);
      // Once a task is deleted the taskList is now updated, so should be DOM
      setTaskList(updatedTaskList);
    }
  };

  const entryTask = taskList.filter((task) => task.type === "entry");
  const unwantedTask = taskList.filter((task) => task.type === "unwanted");

  // Defining time variables
  const totalWeekTime = 24 * 7;
  const totalTimeSpent = taskList.reduce((acc, curr) => {
    return acc + Number(curr.taskTime);
  }, 0);

  const totalWastedtime = unwantedTask.reduce((acc, curr) => {
    return acc + Number(curr.taskTime);
  }, 0);
  // Save task list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <div className="shadow-lg border p-4 rounded">
      <div className="row gap-2">
        {/* <!--First Column--> */}
        <div className="col border p-4 rounded align-self-center">
          {/* <!--- Form to Add task--> */}
          <AddTaskForm addTask={addTask} />
        </div>
        {/* <!--Second Column--> */}
        <TaskList
          title="Task List"
          taskList={entryTask}
          switchTask={switchTask}
          handleOnDelete={handleOnDelete}
        />
        {/* <!--Third Column--> */}
        <TaskList
          title="Unwanted Task List"
          taskList={unwantedTask}
          switchTask={switchTask}
          handleOnDelete={handleOnDelete}
        />
      </div>

      {/* <!--Second row--> */}
      <TimeDisplay
        totalTimeSpent={totalTimeSpent}
        totalTimeWasted={totalWastedtime}
        totalWeekTime={totalWeekTime}
      />
    </div>
  );
};

export default TaskContainer;
