import React from 'react';
import '../styles/about.css';

import AboutUSSocaImage from '../Assets/AboutUSSocaImage.png';

import MckenziePresident from '../Assets/mckenzie_samuels_president.png';
import DaraVicePresident from '../Assets/DaraVicePresident.png';
import MayaSecretary from '../Assets/maya_justilien_secretary.png';
import EvinResearchCoChair from '../Assets/EvinResearchCo-Chair.jpg';
import AshleyMarketingCoChair from '../Assets/ashley_duhaney_marketing_co-chair.png';
import KennethGeneralChair from '../Assets/kenneth_spiveyt_general_chair.png';
import SamiaSocialChair from '../Assets/samia_naar_social_chair.png';
import BriannaFundraisingChair from '../Assets/brianna_adderly_fundraising_chair.png';
import AaliyahResearchCoChair from '../Assets/aaliyah_taylor_research_co-chair.png';
import MonetMarketingCoChair from '../Assets/monet_gonda_marketing_co-chair.png';
import StarrEventCoordinator from '../Assets/starr_mark_event_coordinator.png';
import NadiaSpecialEventCoordinator from '../Assets/nadia_pitter_special_event_coordinator.png';
import JamaicaEventCoordinator from '../Assets/jamaica_weaver_event_coordinator.png';

import BraianTreasurer from '../Assets/braian_stubbs_romero_treasurer.png';

const About = () => {
  return (
    <div className="about-frame">
      <h1 className="main-heading">About Us</h1>
      <div className="mission-section">
        <img src={AboutUSSocaImage} alt="SOCA" className="about-image" />
        <p>
          The <strong>Student Organization for Caribbean Awareness</strong> (SOCA) is a University of Virginia student-run organization that is committed to promoting awareness of issues facing the Caribbean and creating a community based around Caribbean cultures. The goal of SOCA is to bring together peoples with Caribbean descent, heritage and/or interest, in an effort to foster educational, cultural and social growth. SOCA welcomes and encourages all people to join and contribute to the organization, regardless of national or ethnic origin.
        </p>
      </div>
      <div className="executive-section">
        <h2 className="sub-heading">Our Executive Leadership</h2>
        <div className="executive-grid">
          <div className="executive-card">
            <img src={MckenziePresident} alt="Mckenzie Samuels" className="executive-image rounded" />
            <h3 className="executive-name">Mckenzie Samuels</h3>
            <p className="executive-position">President</p>
          </div>
          <div className="executive-card">
            <img src={DaraVicePresident} alt="Dara Cange" className="executive-image rounded" />
            <h3 className="executive-name">Dara Cange</h3>
            <p className="executive-position">Vice President</p>
          </div>
          <div className="executive-card">
            <img src={MayaSecretary} alt="Maya Justilien" className="executive-image rounded" />
            <h3 className="executive-name">Maya Justilien</h3>
            <p className="executive-position">Secretary</p>
          </div>
          <div className="executive-card">
            <img src={EvinResearchCoChair} alt="Evin St Clair" className="executive-image rounded" />
            <h3 className="executive-name">Evin St Clair</h3>
            <p className="executive-position">Research Co-Chair</p>
          </div>
          <div className="executive-card">
            <img src={AaliyahResearchCoChair} alt="Aaliyah Taylor" className="executive-image rounded" />
            <h3 className="executive-name">Aaliyah Taylor</h3>
            <p className="executive-position">Research Co-Chair</p>
          </div>
          <div className="executive-card">
            <img src={MonetMarketingCoChair} alt="Monet Gonda" className="executive-image rounded" />
            <h3 className="executive-name">Monet Gonda</h3>
            <p className="executive-position">Marketing Co-Chair</p>
          </div>
          <div className="executive-card">
            <img src={AshleyMarketingCoChair} alt="Ashley Duhaney" className="executive-image rounded" />
            <h3 className="executive-name">Ashley Duhaney</h3>
            <p className="executive-position">Marketing Co-Chair</p>
          </div>
          <div className="executive-card">
            <img src={StarrEventCoordinator} alt="Starr Mark" className="executive-image rounded" />
            <h3 className="executive-name">Starr Mark</h3>
            <p className="executive-position">Event Coordinator</p>
          </div>
          <div className="executive-card">
            <img src={JamaicaEventCoordinator} alt="Jamaica Weaver" className="executive-image rounded" />
            <h3 className="executive-name">Jamaica Weaver</h3>
            <p className="executive-position">Event Coordinator</p>
          </div>
          <div className="executive-card">
            <img src={NadiaSpecialEventCoordinator} alt="Nadia Pitter" className="executive-image rounded" />
            <h3 className="executive-name">Nadia Pitter</h3>
            <p className="executive-position">Special Event Coordinator</p>
          </div>
          <div className="executive-card">
            <img src={KennethGeneralChair} alt="Kenneth Spivey" className="executive-image rounded" />
            <h3 className="executive-name">Kenneth Spivey</h3>
            <p className="executive-position">General Chair</p>
          </div>
          <div className="executive-card">
            <img src={SamiaSocialChair} alt="Samia Naar" className="executive-image rounded" />
            <h3 className="executive-name">Samia Naar</h3>
            <p className="executive-position">Social Chair</p>
          </div>
          <div className="executive-card">
            <img src={BraianTreasurer} alt="Braian Stubbs Romero" className="executive-image rounded" />
            <h3 className="executive-name">Braian Stubbs Romero</h3>
            <p className="executive-position">Treasurer</p>
          </div>
          <div className="executive-card">
            <img src={BriannaFundraisingChair} alt="Brianna Adderly" className="executive-image rounded" />
            <h3 className="executive-name">Brianna Adderly</h3>
            <p className="executive-position">Fundraising Chair</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
