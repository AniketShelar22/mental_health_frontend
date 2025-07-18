import { useEffect, useState } from 'react';
import API from '../services/api';
import './Dashboard.css';

function Dashboard() {
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    API.get('/checkins')
      .then((res) => setCheckins(res.data))
      .catch(() => alert("Failed to fetch check-ins"));
  }, []);

  const getMoodEmoji = (mood) => {
    if (mood >= 8) return "😊";
    if (mood >= 5) return "😐";
    return "😢";
  };

  const getStressColor = (level) => {
    if (level <= 3) return "green";
    if (level <= 6) return "orange";
    return "red";
  };

  return (
    <div className="dashboard-container">
      <h2>Your Daily Mental Health Check-ins</h2>

      {checkins.length === 0 ? (
        <p>No check-ins found. Start by submitting one.</p>
      ) : (
        <div className="checkin-grid">
          {checkins.map((item) => (
            <div key={item._id} className="checkin-card">
              <div className="checkin-header">
                <span className="mood-emoji">{getMoodEmoji(item.mood)}</span>
                <span className="checkin-date">
                  {new Date(item.date).toLocaleDateString()}
                </span>
              </div>
              <p><strong>Mood:</strong> {item.mood} / 10</p>
              <p>
                <strong>Stress:</strong>{" "}
                <span style={{ color: getStressColor(item.stress) }}>
                  {item.stress} / 10
                </span>
              </p>
              <p><strong>Feelings:</strong> {item.feelings}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
