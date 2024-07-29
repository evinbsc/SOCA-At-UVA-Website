import React from 'react';
import '../../style.css';

const About = () => {
  return (
    <div className="frame">
      <div className="mission-section">
        <h2>SOCA'S MISSION</h2>
        <p>The Student Organization for Caribbean Awareness (SOCA) is a University of Virginia student-run organization that is committed to promoting awareness of issues facing the Caribbean and creating a community based around Caribbean cultures. The goal of SOCA is to bring together peoples with Caribbean descent, heritage and/or interest, in an effort to foster educational, cultural and social growth. SOCA welcomes and encourages all people to join and contribute to the organization, regardless of national or ethnic origin.</p>
        <iframe src="https://drive.google.com/file/d/1KHl8f11iTmGIFnLQGMzgLlvBvofQZQTu/preview" width="640" height="480" allow="autoplay" className="about-image" title="AboutImage"></iframe>
      </div>
      <div className="executive-section">
        <h2>EXECUTIVE</h2>
        <div className="executive-grid">
          {/* Repeat the following block for each executive member */}
          <div className="executive-card">
            <img src="https://drive.google.com/file/d/19wqwQuCQHFnEVmelAMNjHsEc-ITVqb7J/preview" className="executive-image" alt="Executive Member" />
            <h3>Chair</h3>
            <p>Chair</p>
          </div>
          {/* Repeat until all executive members are included */}
        </div>
      </div>
    </div>
  );
};

export default About;
