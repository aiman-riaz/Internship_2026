import { useState } from "react";
import "./ProfileCard.css";

function ProfileCard({ name, role, description }) {
  const [follow, setFollow] = useState(false);

  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="desc">{description}</p>

      <button onClick={() => setFollow(!follow)}>
        {follow ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
