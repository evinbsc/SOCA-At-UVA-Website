import React from 'react';
import '../styles/about.css';

import AboutUSSocaImage from '../assets/AboutUSSocaImage.png';
import EvinResearchCoChair from '../assets/EvinResearchCo-Chair.jpg';
import DaraVicePresident from '../assets/DaraVicePresident.png';

const About = () => {
  return (
    <div className="about-frame">
      <h1 className="main-heading">About Us</h1>
      <div className="mission-section">
        <img src={AboutUSSocaImage} alt="SOCA" className="about-image" />
        <p>
          The <strong>Student Organization for Caribbean Awareness </strong>(SOCA) is a University of Virginia student-run organization that is committed to promoting awareness of issues facing the Caribbean and creating a community based around Caribbean cultures. The goal of SOCA is to bring together peoples with Caribbean descent, heritage and/or interest, in an effort to foster educational, cultural and social growth. SOCA welcomes and encourages all people to join and contribute to the organization, regardless of national or ethnic origin.
        </p>
      </div>
      <div className="executive-section">
        <h2 className="sub-heading">Our Executive Leadership</h2>
        <div className="executive-grid">
          <div className="executive-card">
            <img src={EvinResearchCoChair} alt="Evin St Clair" className="executive-image rounded" />
            <h3 className="executive-name">Evin St Clair</h3>
            <p className="executive-position">Research Co-Chair</p>
          </div>
          <div className="executive-card">
            <img src={DaraVicePresident} alt="Dara Cange" className="executive-image rounded" />
            <h3 className="executive-name">Dara Cange</h3>
            <p className="executive-position">Vice President</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
