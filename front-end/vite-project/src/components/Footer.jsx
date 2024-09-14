import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        All Content Copyright © 2024 SOCA at University of Virginia
      </div>
      <div className="footer-content">
        <p className="footer-statement">
          The Student Organization for Caribbean Awareness (SOCA) comprises members who are University of Virginia students and may include participation from University employees. However, SOCA operates as a separate and independent entity, distinct from the University. It is solely responsible for managing its own activities and affairs. The University of Virginia does not oversee, direct, or control SOCA's operations and holds no responsibility for the organization's contracts, actions, or omissions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
