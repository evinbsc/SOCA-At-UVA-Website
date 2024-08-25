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
          <img src={InstagramLogo} alt="Instagram" className="popup-icon" />
          <div>
            <p>@soca_at_uva</p>
          </div>
        </div>
        <div className="popup-section">
          <p>Subscribe to our UVA Mailing List</p>
          <a href="https://lists.virginia.edu/sympa/subscribe/soca-uva?previous_action=info#" target="_blank" rel="noopener noreferrer">
            soca-uva@virginia.edu
          </a>
        </div>
        <div className="popup-section">
          <img src={MailIcon} alt="Mail" className="popup-icon" />
          <div>
            <p>officialsoca@virginia.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
