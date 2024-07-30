import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import SOCALogo from '../assets/SOCALogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={SOCALogo} className="rectangle" alt="SOCALogo" />
      </Link>
      <div>
        <Link to="/" className="text-wrapper-3">Home</Link>
        <Link to="/discover" className="text-wrapper-4">Discover Caribbean</Link>
        <Link to="/calendar" className="text-wrapper-5">Calendar</Link>
        <Link to="/about" className="text-wrapper-6">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
