import TaskItem from "./TaskItem";
function TaskList({ tasks, deleteTask, editTask, updateStatus }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
}
export default TaskList;