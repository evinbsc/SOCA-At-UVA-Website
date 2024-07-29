import React from 'react';
import '../../style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Navigation</h2>
          <p>Discover Caribbean</p>
          <p>Calendar</p>
          <p>About Us</p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>officialsoca@virginia.edu</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All Content Copyright © 2024 University of Virginia SOCA</p>
      </div>
    </footer>
  );
};

export default Footer;
