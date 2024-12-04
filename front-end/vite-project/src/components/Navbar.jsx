// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SOCALogo from '../assets/misc/SOCALogo.png';
import '../styles/navbar.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container" onClick={closeMenu}>
        <img src={SOCALogo} className="rectangle" alt="SOCALogo" />
        <div className="organization-name">Student Organization for Caribbean Awareness</div>
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>
      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="text-wrapper-3" onClick={closeMenu}>Home</Link>
        <Link to="/discover" className="text-wrapper-4" onClick={closeMenu}>Discover Caribbean</Link>
        <Link to="/calendar" className="text-wrapper-5" onClick={closeMenu}>Calendar</Link>
        <Link to="/about" className="text-wrapper-6" onClick={closeMenu}>About Us</Link>
        {isAuthenticated ? (
          <>
            <span className="user-greeting">Hello, {user.username}</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="text-wrapper-7" onClick={closeMenu}>Account</Link>
        )}
      </div>
      {/* Overlay for the menu */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
