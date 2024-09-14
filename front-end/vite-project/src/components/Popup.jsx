import React from 'react';
import '../styles/Popup.css';

// Importing stay connected icons (from misc folder)
import instagramLogo from '../assets/misc/instagram_logo.png';
import mailIcon from '../assets/misc/mail_icon.png';
import uvaLogo from '../assets/misc/uva_logo.jpg';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button> {/* Updated close button */}
        <h2 className="popup-header">Stay Connected</h2>
        <div className="popup-section">
          <a href="https://www.instagram.com/soca_at_uva/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="popup-icon" />
            <span>@soca_at_uva</span>
          </a>
        </div>
        <div className="popup-section">
          <a href="https://lists.virginia.edu/sympa/subscribe/soca-uva?previous_action=info#" target="_blank" rel="noopener noreferrer">
            <img src={uvaLogo} alt="Mailing List" className="popup-icon" />
            <span>Subscribe to our UVA Mailing List</span>
          </a>
        </div>
        <div className="popup-section">
          <a href="mailto:officialsoca@virginia.edu">
            <img src={mailIcon} alt="Contact Mail" className="popup-icon" />
            <span>officialsoca@virginia.edu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
