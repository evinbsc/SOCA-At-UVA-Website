import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SOCALogo from '../Assets/SOCALogo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Larger hamburger icon */}
      </div>
      <Link to="/" className="logo-container">
        <img src={SOCALogo} className="rectangle" alt="SOCALogo" />
        <span className="organization-name">Student Organization for Caribbean Awareness</span>
      </Link>
      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="text-wrapper-3">Home</Link>
        <Link to="/discover" className="text-wrapper-4">Discover Caribbean</Link>
        <Link to="/calendar" className="text-wrapper-5">Calendar</Link>
        <Link to="/about" className="text-wrapper-6">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
