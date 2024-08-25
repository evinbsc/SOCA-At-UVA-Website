import React from 'react';
import '../styles/Popup.css';
import InstagramLogo from '../Assets/Instagram_logo.png';
import MailIcon from '../Assets/Mail_Icon.png';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Stay Connected</h2>
        <div className="popup-section">
          <a href="https://www.instagram.com/soca_at_uva/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" className="popup-icon" />
            <span>@soca_at_uva</span>
          </a>
        </div>
        <div className="popup-section">
          <a href="https://lists.virginia.edu/sympa/subscribe/soca-uva?previous_action=info#" target="_blank" rel="noopener noreferrer">
            <img src={MailIcon} alt="Mailing List" className="popup-icon" />
            <span>Subscribe to our UVA Mailing List</span>
          </a>
        </div>
        <div className="popup-section">
          <a href="mailto:officialsoca@virginia.edu">
            <img src={MailIcon} alt="Contact Mail" className="popup-icon" />
            <span>officialsoca@virginia.edu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
