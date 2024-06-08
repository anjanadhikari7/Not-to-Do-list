const TaskList = (props) => {
  const { title, taskList = [], switchTask, handleOnDelete } = props;
  return (
    <div className="col border p-4 rounded">
      {/* <!--- Task List--> */}
      <h3 className="text-center">{title}</h3>
      <div className="px-4" style={{ height: "40vh", overflowY: "auto" }}>
        <table className="table table-hover border">
          {/* <!-- This is where you add all task--> */}
          <tbody id="taskListelement">
            {taskList.map((task, index) => {
              const arrowButtonClass =
                task.type === "entry"
                  ? "btn btn-success btn-sm"
                  : "btn btn-warning btn-sm";
              const arrowClass =
                task.type === "entry"
                  ? "fa-shar fa-solid fa-arrow-right-long"
                  : "fa-shar fa-solid fa-arrow-left-long";
              return (
                <tr class="table-primary rounded">
                  <th> {index + 1}</th>
                  <td> {task.taskName}</td>
                  <td> {task.taskTime} hrs</td>
                  <td class="text-end">
                    <button
                      class="btn btn-danger btn-sm"
                      onClick={() => {
                        handleOnDelete(task.id);
                      }}
                    >
                      <i class="fa-trash fa-solid "></i>
                    </button>
                    <button
                      class={arrowButtonClass}
                      onClick={() => switchTask(task.id)}
                    >
                      <i class={arrowClass}></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
