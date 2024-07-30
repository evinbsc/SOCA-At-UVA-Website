import React from 'react';
import { Link } from 'react-router-dom';
import SOCALogo from '../assets/SOCALogo.png';
import '../styles/navbar.css';


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
