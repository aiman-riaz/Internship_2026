function Task({ task, toggleTask }) {
  return (
    <div
      className={task.completed ? "task completed" : "task"}
      onClick={() => toggleTask(task.id)}
    >
      {task.text}
    </div>
  );
}

export default Task;