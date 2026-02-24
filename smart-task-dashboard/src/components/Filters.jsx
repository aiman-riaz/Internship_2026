function Filters({ setStatusFilter, setPriorityFilter, setSortOrder }) {
  return (
    <div className="filters">
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="All">All Status</option>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select onChange={(e) => setPriorityFilter(e.target.value)}>
        <option value="All">All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort by Due Date (Asc)</option>
        <option value="desc">Sort by Due Date (Desc)</option>
      </select>
    </div>
  );
}
export default Filters;