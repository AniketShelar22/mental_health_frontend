import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../services/api';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      if (!validateEmail(value)) {
        setErrorMsg('Please enter a valid email address.');
      } else {
        setErrorMsg('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    try {
      await API.post('/auth/register', form);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMsg('Email already registered. Try logging in.');
      } else {
        setErrorMsg('Registration failed. Please try again.');
      }
      setTimeout(() => setErrorMsg(''), 3000); // Optional: auto-hide
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Register</h2>

        {errorMsg && <p className="error-popup">{errorMsg}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Register</button>

        <p className="register-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
