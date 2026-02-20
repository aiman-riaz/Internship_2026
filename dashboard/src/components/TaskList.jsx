import Task from "./Task";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;