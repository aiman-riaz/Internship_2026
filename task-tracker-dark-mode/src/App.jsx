import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Log state changes
  useEffect(() => {
    console.log("Tasks Updated:", tasks);
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Task Tracker</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>

      <div className="input-section">
        <input
          type="text"
          value={input}
          placeholder="Enter task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;