import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import './CheckinForm.css';

function CheckinForm() {
  const [form, setForm] = useState({ mood: 5, stress: 5, feelings: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/checkins', form);
      navigate('/dashboard');
    } catch {
      alert("Failed to submit check-in.");
    }
  };

  const getMoodEmoji = (value) => {
    if (value >= 8) return "😊";
    if (value >= 5) return "😐";
    return "😢";
  };

  const getStressEmoji = (value) => {
    if (value <= 3) return "🌿";
    if (value <= 6) return "😬";
    return "😰";
  };

  return (
    <div className="checkin-container">
      <form onSubmit={handleSubmit} className="checkin-form">
        <h2>Daily Check-in</h2>

        <label>
          Mood: {form.mood} {getMoodEmoji(form.mood)}
        </label>
        <input
          type="range"
          min="1"
          max="10"
          name="mood"
          value={form.mood}
          onChange={handleChange}
        />

        <label>
          Stress: {form.stress} {getStressEmoji(form.stress)}
        </label>
        <input
          type="range"
          min="1"
          max="10"
          name="stress"
          value={form.stress}
          onChange={handleChange}
        />

        <textarea
          name="feelings"
          placeholder="How are you feeling today?"
          rows="5"
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit Check-in</button>
      </form>
    </div>
  );
}

export default CheckinForm;
