function Task({ task, toggleTask, deleteTask }) {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <span onClick={() => toggleTask(task.id)}>
        {task.text}
      </span>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  );
}

export default Task;