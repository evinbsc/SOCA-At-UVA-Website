import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style.css';

const About = () => {
  const [executives, setExecutives] = useState([]);

  useEffect(() => {
    const fetchExecutives = async () => {
      const res = await axios.get('http://localhost:5001/executives');
      setExecutives(res.data);
    };

    fetchExecutives();
  }, []);

  return (
    <div className="frame">
      <h1>About Us</h1>
      <div className="mission-section">
        <h2>SOCA Mission</h2>
        <p>
          The Student Organization for Caribbean Awareness (SOCA) is a University of Virginia student-run organization
          that is committed to promoting awareness of issues facing the Caribbean and creating a community based around Caribbean cultures.
          The goal of SOCA is to bring together peoples with Caribbean descent, heritage and/or interest, in an effort to foster educational,
          cultural and social growth. SOCA welcomes and encourages all people to join and contribute to the organization,
          regardless of national or ethnic origin.
        </p>
        <iframe src="https://drive.google.com/file/d/1KHl8f11iTmGIFnLQGMzgLlvBvofQZQTu/preview" width="100%" height="480" allow="autoplay" className="about-image"></iframe>
      </div>
      <div className="executive-section">
        <h2>Executive Leadership</h2>
        <div className="executive-grid">
          {executives.map(exec => (
            <div key={exec.id} className="executive-card">
              <iframe src={exec.image} width="100" height="100" allow="autoplay" className="executive-image"></iframe>
              <h3>{exec.name}</h3>
              <p>{exec.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
