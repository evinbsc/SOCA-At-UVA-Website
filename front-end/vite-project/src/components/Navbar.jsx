import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <iframe src="https://drive.google.com/file/d/19wqwQuCQHFnEVmelAMNjHsEc-ITVqb7J/preview" width="30" height="20" className="navbar-logo" alt="SOCA Logo"></iframe>
      <div className="navbar-links">
        <Link to="/" className="text-wrapper-3">Home</Link>
        <Link to="/discover" className="text-wrapper-4">Discover Caribbean</Link>
        <Link to="/calendar" className="text-wrapper-5">Calendar</Link>
        <Link to="/about" className="text-wrapper-6">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
