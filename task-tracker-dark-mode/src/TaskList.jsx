import Task from "./Task";

function TaskList({ tasks, toggleTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </div>
  );
}

export default TaskList;