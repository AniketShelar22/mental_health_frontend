import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={goToLogin}>
        🧠 MentalCheck
      </div>
      {isLoggedIn && (
        <ul className="navbar-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/checkin">Check-In</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
