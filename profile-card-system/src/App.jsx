import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "AA", role: "Frontend Developer", description: "React & UI Specialist" },
    { id: 2, name: "BB", role: "UI/UX Designer", description: "Design Systems Expert" },
    { id: 3, name: "CC", role: "Backend Engineer", description: "Node.js & APIs" }
  ];

  return (
    <div className="app">
      <h1>Profile Card System</h1>
      <div className="card-container">
        {users.map(user => (
          <ProfileCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;