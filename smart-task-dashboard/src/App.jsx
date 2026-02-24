import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import Summary from "./components/Summary";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("smartTasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);
  useEffect(() => {
    localStorage.setItem("smartTasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, id: Date.now(), status: "To Do" }
    ]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };
  const updateStatus = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };
  const filteredTasks = tasks
    .filter(
      (task) =>
        (statusFilter === "All" || task.status === statusFilter) &&
        (priorityFilter === "All" || task.priority === priorityFilter)
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate)
    );
  return (
    <div className="app">
      <h1>Smart Task Management Dashboard</h1>
      <Summary tasks={tasks} />
      <TaskForm addTask={addTask} />
      <Filters
        setStatusFilter={setStatusFilter}
        setPriorityFilter={setPriorityFilter}
        setSortOrder={setSortOrder}
      />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        editTask={editTask}
        updateStatus={updateStatus}
      />
    </div>
  );
}
export default App;