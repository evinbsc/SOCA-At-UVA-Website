import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import Popup from './Popup';

// Importing stay connected icons (from misc folder)
import instagramLogo from '../assets/misc/instagram_logo.png';
import mailIcon from '../assets/misc/mail_icon.png';
import uvaLogo from '../assets/misc/uva_logo.jpg';
import socaHomePagePicMobile from '../assets/misc/soca_home_page_img.png';

// Importing article images (from article_images folder)
import hurricaneBerylArticleImage from '../assets/article_images/hurricane_beryl_article_image.jpg';
import caribbeanCarnivalArticleImage from '../assets/article_images/caribbean_carnival_article_image.jpg';

// Importing event flyers (from events folder)
import blockPartyFlyer from '../assets/events/soca_black_block_party_flyer.png';
import poolPartyFlyer from '../assets/events/soca_pool_party_flyer.png';

// Importing flag images (from caribbean_flags folder)
import haitiFlag from '../assets/caribbean_island_flags/haiti_flag.png';
import dominicanRepublicFlag from '../assets/caribbean_flags/dominican_republic_flag.png';
import cubaFlag from '../assets/caribbean_flags/cuba_flag.png';
import panamaFlag from '../assets/caribbean_flags/panama_flag.png';
import jamaicaFlag from '../assets/caribbean_flags/jamaica_flag.png';
import trinidadAndTobagoFlag from '../assets/caribbean_flags/trinidad_and_tobago_flag.png';
import barbadosFlag from '../assets/caribbean_flags/barbados_flag.png';
import guyanaFlag from '../assets/caribbean_flags/guyana_flag.png';
import grenadaFlag from '../assets/caribbean_flags/grenada_flag.png';
import dominicaFlag from '../assets/caribbean_flags/dominica_flag.png';
import saintLuciaFlag from '../assets/caribbean_flags/saint_lucia_flag.png';
import saintVincentAndGrenadinesFlag from '../assets/caribbean_flags/saint_vincent_and_grenadines_flag.png';
import antiguaAndBarbudaFlag from '../assets/caribbean_flags/antigua_and_barbuda_flag.png';
import saintKittsAndNevisFlag from '../assets/caribbean_flags/saint_kitts_and_nevis_flag.png';

// Importing background images (from caribbean_island folder)
import saintLuciaBackground from '../assets/caribbean_island_flags/saint_lucia_background.png';
import haitiBackground from '../assets/caribbean_island_flags/haiti_background.png';
import puertoBackground from '../assets/caribbean_island_flags/puerto_background.png';
import cubaBackground from '../assets/caribbean_island_flags/cuba_background.png';
import antiguaBackground from '../assets/caribbean_island_flags/antigua_background.png';
import dominicaBackground from '../assets/caribbean_island_flags/dominica_background.png';
import caymanBackground from '../assets/caribbean_island_flags/cayman_background.png';
import saintKittsBackground from '../assets/caribbean_island_flags/saint_kitts_background.png';
import guadeloupeBackground from '../assets/caribbean_island_flags/guadeloupe_background.png';
import martiniqueBackground from '../assets/caribbean_island_flags/martinique_background.png';
import arubaBackground from '../assets/caribbean_island_flags/aruba_background.png';
import grenadaBackground from '../assets/caribbean_island_flags/grenada_background.png';
import saintVincentBackground from '../assets/caribbean_island_flags/saint_vincent_background.png';
import jamaicaBackground from '../assets/caribbean_island_flags/jamaica_background.png';
import dominicanBackground from '../assets/caribbean_island_flags/dominican_background.png';
import netherlandsBackground from '../assets/caribbean_island_flags/netherlands_background.png';
import trinidadBackground from '../assets/caribbean_island_flags/trinidad_background.png';
import barbadosBackground from '../assets/caribbean_island_flags/barbados_background.png';

const events = [
  { id: 1, title: 'Pool Party', date: '2024-08-26', image: poolPartyFlyer },
  { id: 2, title: 'Block Party', date: '2024-08-25', image: blockPartyFlyer },
];

const articles = [
  {
    id: 1,
    title: 'The Impact of Hurricane Beryl on the Caribbean in 2024',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: hurricaneBerylArticleImage,
    paragraphs: [
      {
        id: 1,
        text: 'Hurricane Beryl, the first major hurricane of the 2024 Atlantic hurricane season, brought severe devastation to many Caribbean islands...',
      },
    ],
  },
  {
    id: 2,
    title: 'The Essence of Carnival: A Celebration of Festivity and Tradition',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: caribbeanCarnivalArticleImage,
    paragraphs: [
      {
        id: 1,
        text: 'Carnival in the Caribbean is a vibrant display of colors, music, and dance, rooted in history and cultural significance...',
      },
    ],
  },
];

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2024-09-01'));
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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

  const nextMonth = () => {
    const nextDate = new Date(currentDate);
    nextDate.setMonth(currentDate.getMonth() + 1);
    if (nextDate <= new Date('2025-08-01')) {
      setCurrentDate(nextDate);
    }
  };

  const prevMonth = () => {
    const prevDate = new Date(currentDate);
    prevDate.setMonth(currentDate.getMonth() - 1);
    if (prevDate >= new Date('2024-08-01')) {
      setCurrentDate(prevDate);
    }
  };

  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const eventsForMonth = events.filter(
    (event) =>
      new Date(event.date).getMonth() === currentDate.getMonth() &&
      new Date(event.date).getFullYear() === currentDate.getFullYear()
  );

  return (
    <div className="frame">
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      <img
        src={socaHomePagePicMobile}
        width="980"
        height="530"
        alt="SOCA Home"
        className="main-image"
      />

      <div className="intro-text hidden" data-animation="animate-slide-in-left">
        <p>
          The Student Organization for Caribbean Awareness (SOCA) is a University of Virginia
          student-run organization that is committed to promoting awareness of issues facing the
          Caribbean and creating a community based around Caribbean cultures. The goal of SOCA is to
          bring together peoples with Caribbean descent, heritage and/or interest, in an effort to
          foster educational, cultural and social growth. SOCA welcomes and encourages all people to
          join and contribute to the organization, regardless of national or ethnic origin.
        </p>
      </div>

      {/* Flag containers for outer ends */}
      <div className="flag-container left">
        <img src={saintLuciaBackground} alt="Saint Lucia" className="flag-image" />
        <img src={haitiBackground} alt="Haiti" className="flag-image" />
        <img src={puertoBackground} alt="Puerto Rico" className="flag-image" />
        <img src={cubaBackground} alt="Cuba" className="flag-image" />
        <img src={antiguaBackground} alt="Antigua" className="flag-image" />
        <img src={dominicaBackground} alt="Dominica" className="flag-image" />
        <img src={caymanBackground} alt="Cayman Islands" className="flag-image" />
        <img src={saintKittsBackground} alt="Saint Kitts" className="flag-image" />
        <img src={guadeloupeBackground} alt="Guadeloupe" className="flag-image" />
      </div>
      <div className="flag-container right">
        <img src={martiniqueBackground} alt="Martinique" className="flag-image" />
        <img src={arubaBackground} alt="Aruba" className="flag-image" />
        <img src={grenadaBackground} alt="Grenada" className="flag-image" />
        <img src={saintVincentBackground} alt="Saint Vincent" className="flag-image" />
        <img src={jamaicaBackground} alt="Jamaica" className="flag-image" />
        <img src={dominicanBackground} alt="Dominican Republic" className="flag-image" />
        <img src={netherlandsBackground} alt="Netherlands Antilles" className="flag-image" />
        <img src={trinidadBackground} alt="Trinidad" className="flag-image" />
        <img src={barbadosBackground} alt="Barbados" className="flag-image" />
      </div>

      {/* Upcoming Events */}
      <h1 className="UPCOMING-event hidden" data-animation="animate-slide-in-left">
        UPCOMING EVENTS
      </h1>
      <div className="events-section box">
        <div className="calendar-header hidden" data-animation="animate-slide-in-right">
          <button onClick={prevMonth} className="calendar-nav">
            &lt;
          </button>
          <h1 className="calendar-title">{formatMonthYear(currentDate)}</h1>
          <button onClick={nextMonth} className="calendar-nav">
            &gt;
          </button>
        </div>
        <div className="events-grid">
          {eventsForMonth.length > 0 ? (
            eventsForMonth.map((event) => (
              <div key={event.id} className="event hidden" data-animation="animate-fade-in">
                <img src={event.image} className="event-image-full" alt={event.title} />
              </div>
            ))
          ) : (
            <div className="no-events">
              <p>No Events</p>
              <div className="palm-trees">🌴🌴🌴</div>
            </div>
          )}
        </div>
      </div>

      {/* Articles Section */}
      <div className="articles-section">
        <h2 className="sa-ka-f-te hidden" data-animation="animate-slide-in-right">
          SA KA FÊTE?
        </h2>

        <div className="video-container hidden" data-animation="animate-fade-in">
          <iframe
            className="video"
            width="980"
            height="550"
            src="https://www.youtube.com/embed/5WWuoR2NS4c?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <div
              key={article.id}
              className="article-card hidden"
              data-animation="animate-fade-in"
              onClick={() => navigate(`/article/${article.id}`)}
            >
              <img src={article.image} alt={article.title} className="article-card-image" />
              <div className="article-card-text">
                <h3>{article.title}</h3>
                <p>{article.paragraphs[0].text}</p>
                <p className="article-date">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="stay-connected-title hidden" data-animation="animate-slide-in-left">
        Stay Connected!
      </h1>

      <div className="stay-connected-section hidden" data-animation="animate-fade-in">
        <div className="stay-connected-links">
          <a
            href="https://www.instagram.com/soca_at_uva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram" className="stay-connected-icon" />
            <span>@soca_at_uva</span>
          </a>
          <a
            href="https://lists.virginia.edu/sympa/subscribe/soca-uva?previous_action=info#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={uvaLogo} alt="Mail" className="stay-connected-icon" />
            <span>Subscribe to our UVA Mailing List!</span>
          </a>
          <a href="mailto:officialsoca@virginia.edu">
            <img src={mailIcon} alt="Contact" className="stay-connected-icon" />
            <span>officialsoca@virginia.edu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
