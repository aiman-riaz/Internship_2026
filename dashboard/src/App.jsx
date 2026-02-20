import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
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
      completed: false,
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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Interactive Task Dashboard</h1>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
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

      <h3>Total Tasks: {tasks.length}</h3>

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;