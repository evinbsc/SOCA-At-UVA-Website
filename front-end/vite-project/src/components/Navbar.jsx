import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <iframe
        src="https://drive.google.com/file/d/1m_2CRQglbDlI86EjbWox7TYZ01PrNeKx/preview"
        className="rectangle"
        title="SOCALogo"
      ></iframe>
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
