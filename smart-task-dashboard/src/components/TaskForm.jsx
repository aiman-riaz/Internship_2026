import { useState } from "react";
function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.dueDate) return;
    addTask(task);
    setTask({ title: "", description: "", priority: "Low", dueDate: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
      />
      <select
        value={task.priority}
        onChange={(e) =>
          setTask({ ...task, priority: e.target.value })
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) =>
          setTask({ ...task, dueDate: e.target.value })
        }
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;