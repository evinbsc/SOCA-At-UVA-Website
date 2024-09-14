import React, { useEffect } from 'react';
import '../styles/about.css';

// Importing soca image (from about_us_images folder)
import aboutUsSocaImage from '../assets/about_us_images/about_us_soca_image.png';

// Importing executive member images (from about_us_images folder)
import mckenziePresident from '../assets/about_us_images/mckenzie_samuels_president.png';
import daraVicePresident from '../assets/about_us_images/dara_vice_president.png';
import mayaSecretary from '../assets/about_us_images/maya_justilien_secretary.png';
import evinResearchCoChair from '../assets/about_us_images/evin_research_co_chair.jpg';
import aaliyahResearchCoChair from '../assets/about_us_images/aaliyah_taylor_research_co_chair.png';
import monetMarketingCoChair from '../assets/about_us_images/monet_gonda_marketing_co_chair.png';
import ashleyMarketingCoChair from '../assets/about_us_images/ashley_duhaney_marketing_co_chair.png';
import starrEventCoordinator from '../assets/about_us_images/starr_mark_event_coordinator.png';
import jamaicaEventCoordinator from '../assets/about_us_images/jamaica_weaver_event_coordinator.png';
import nadiaSpecialEventCoordinator from '../assets/about_us_images/nadia_pitter_special_event_coordinator.png';
import kennethGeneralChair from '../assets/about_us_images/kenneth_spivey_general_chair.png';
import samiaSocialChair from '../assets/about_us_images/samia_naar_social_chair.png';
import braianTreasurer from '../assets/about_us_images/braian_stubbs_romero_treasurer.png';
import briannaFundraisingChair from '../assets/about_us_images/brianna_adderly_fundraising_chair.png';

const About = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.dataset.animation;
          entry.target.classList.add(animationClass);
          entry.target.classList.remove('hidden');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer on unmount
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="about-frame">
      <h1 className="main-heading hidden" data-animation="animate-slide-in-left">
        About Us
      </h1>
      <div className="mission-section hidden" data-animation="animate-fade-in">
        <img
          src={aboutUsSocaImage}
          alt="SOCA"
          className="about-image image-loading"
          onLoad={(e) => e.target.classList.remove('image-loading')}
        />
        <p>
          The <strong>Student Organization for Caribbean Awareness</strong> (SOCA) is a University of
          Virginia student-run organization that is committed to promoting awareness of issues facing
          the Caribbean and creating a community based around Caribbean cultures. The goal of SOCA is
          to bring together peoples with Caribbean descent, heritage and/or interest, in an effort to
          foster educational, cultural and social growth. SOCA welcomes and encourages all people to
          join and contribute to the organization, regardless of national or ethnic origin.
        </p>
      </div>
      <div className="executive-section">
        <h2 className="sub-heading hidden" data-animation="animate-slide-in-right">
          Our Executive Leadership
        </h2>
        <div className="executive-grid">
          {/* Executive Member Cards */}
          {/* President */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={mckenziePresident}
              alt="Mckenzie Samuels"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Mckenzie Samuels</h3>
            <p className="executive-position">President</p>
          </div>
          {/* Vice President */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={daraVicePresident}
              alt="Dara Cange"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Dara Cange</h3>
            <p className="executive-position">Vice President</p>
          </div>
          {/* Secretary */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={mayaSecretary}
              alt="Maya Justilien"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Maya Justilien</h3>
            <p className="executive-position">Secretary</p>
          </div>
          {/* Research Co-Chairs */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={evinResearchCoChair}
              alt="Evin St Clair"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Evin St Clair</h3>
            <p className="executive-position">Research Co-Chair</p>
          </div>
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={aaliyahResearchCoChair}
              alt="Aaliyah Taylor"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Aaliyah Taylor</h3>
            <p className="executive-position">Research Co-Chair</p>
          </div>
          {/* Marketing Co-Chairs */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={monetMarketingCoChair}
              alt="Monet Gonda"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Monet Gonda</h3>
            <p className="executive-position">Marketing Co-Chair</p>
          </div>
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={ashleyMarketingCoChair}
              alt="Ashley Duhaney"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Ashley Duhaney</h3>
            <p className="executive-position">Marketing Co-Chair</p>
          </div>
          {/* Event Coordinators */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={starrEventCoordinator}
              alt="Starr Mark"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Starr Mark</h3>
            <p className="executive-position">Event Coordinator</p>
          </div>
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={jamaicaEventCoordinator}
              alt="Jamaica Weaver"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Jamaica Weaver</h3>
            <p className="executive-position">Event Coordinator</p>
          </div>
          {/* Special Event Coordinator */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={nadiaSpecialEventCoordinator}
              alt="Nadia Pitter"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Nadia Pitter</h3>
            <p className="executive-position">Special Event Coordinator</p>
          </div>
          {/* General Chair */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={kennethGeneralChair}
              alt="Kenneth Spivey"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Kenneth Spivey</h3>
            <p className="executive-position">General Chair</p>
          </div>
          {/* Social Chair */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={samiaSocialChair}
              alt="Samia Naar"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Samia Naar</h3>
            <p className="executive-position">Social Chair</p>
          </div>
          {/* Treasurer */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={braianTreasurer}
              alt="Braian Stubbs Romero"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Braian Stubbs Romero</h3>
            <p className="executive-position">Treasurer</p>
          </div>
          {/* Fundraising Chair */}
          <div className="executive-card hidden" data-animation="animate-fade-in">
            <img
              src={briannaFundraisingChair}
              alt="Brianna Adderly"
              className="executive-image rounded image-loading"
              onLoad={(e) => e.target.classList.remove('image-loading')}
            />
            <h3 className="executive-name">Brianna Adderly</h3>
            <p className="executive-position">Fundraising Chair</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
