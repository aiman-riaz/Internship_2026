import { useState } from "react";
function TaskItem({ task, deleteTask, editTask, updateStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState(task);
  const saveEdit = () => {
    editTask(task.id, edited);
    setIsEditing(false);
  };
  return (
    <div className={`task ${task.status.replace(" ", "")}`}>
      {isEditing ? (
        <>
          <input
            value={edited.title}
            onChange={(e) =>
              setEdited({ ...edited, title: e.target.value })
            }
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Due: {task.dueDate}</p>
        </>
      )}
      <select
        value={task.status}
        onChange={(e) =>
          updateStatus(task.id, e.target.value)
        }
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
export default TaskItem;