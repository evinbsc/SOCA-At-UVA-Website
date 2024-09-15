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
import waterFeteImage from '../assets/events/water_fete.jpg';
import sorrelSaleImage from '../assets/events/sorrel_sale.jpg';
import poolPartyImage from '../assets/events/pool_party.jpg';
import trinidadIndependenceImage from '../assets/events/trinidad_independence_day.jpg';
import bachataWorkshopImage from '../assets/events/bachata_workshop.jpg';
import blockPartyImage from '../assets/events/block_party.jpg';

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
  {
    id: 1,
    name: 'Water Fete',
    date: '2024-08-30',
    time: '4:00 PM - 6:30 PM',
    location: 'Booker T. Washington Park',
    image: waterFeteImage,
  },
  {
    id: 2,
    name: 'Sorrel Sale',
    date: '2024-09-12',
    time: '11:00 AM - 2:00 PM',
    location: 'Amphitheater Way',
    image: sorrelSaleImage,
  },
  {
    id: 3,
    name: 'Welcome Back Pool Party',
    date: '2024-08-26',
    time: '4:00 PM',
    location: 'Grandmarc',
    image: poolPartyImage,
  },
  {
    id: 4,
    name: 'Trinidad & Tobago Independence Day',
    date: '2024-08-31',
    time: '',
    location: '',
    image: trinidadIndependenceImage,
  },
  {
    id: 5,
    name: 'Bachata 101 Workshop',
    date: '2024-09-07',
    time: '1:00 PM - 3:00 PM',
    location: 'AFE Multi-Purpose Room #1',
    image: bachataWorkshopImage,
  },
  {
    id: 6,
    name: 'Black Block Party',
    date: '2024-08-25',
    time: '10:00 PM - 2:00 AM',
    location: '1533 Virginia Ave, Charlottesville, VA 22903',
    image: blockPartyImage,
  },
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

const getEventsForMonth = (events, month, year) => {
  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Home = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date('2024-09-01'));
  const [selectedEvent, setSelectedEvent] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [2024, 2025]; 

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
    if (nextDate <= new Date('2025-12-31')) {
      setCurrentDate(nextDate);
    }
  };

  const prevMonth = () => {
    const prevDate = new Date(currentDate);
    prevDate.setMonth(currentDate.getMonth() - 1);
    if (prevDate >= new Date('2024-01-01')) {
      setCurrentDate(prevDate);
    }
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    const newDate = new Date(currentDate);
    newDate.setMonth(newMonth);
    setCurrentDate(newDate);
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value);
    const newDate = new Date(currentDate);
    newDate.setFullYear(newYear);
    setCurrentDate(newDate);
  };

  const eventsForMonth = getEventsForMonth(events, currentDate.getMonth(), currentDate.getFullYear());

  const today = new Date('2024-09-14');

  return (
    <div className="frame">
      {/* Popup component */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* Main Image */}
      <img
        src={socaHomePagePicMobile}
        width="980"
        height="530"
        alt="SOCA Home"
        className="main-image"
      />

      {/* Intro Text */}
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
            eventsForMonth.map((event) => {
              const eventDate = new Date(event.date);
              const isPastEvent = eventDate < today;
              return (
                <div
                  key={event.id}
                  className={`event hidden ${isPastEvent ? 'past-event' : ''}`}
                  data-animation="animate-fade-in"
                >
                  <div className="event-image-container">
                    <img src={event.image} className="event-image-full" alt={event.name} />
                  </div>
                  <div className="event-details">
                    <h3 className="event-name">{event.name}</h3>
                    <p className="event-date-time">
                      {formatDate(event.date)} {event.time}
                    </p>
                    {event.location && (
                      <p className="event-location">{event.location}</p>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-events">
              <p>No Events</p>
              <div className="palm-trees">🌴🌴🌴</div>
            </div>
          )}
        </div>
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
          <h1 className="calendar-title">{`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</h1>
          <button onClick={nextMonth} className="calendar-nav">
            &gt;
          </button>
        </div>
        <div className="events-grid">
          {eventsForMonth.length > 0 ? (
            eventsForMonth.map((event) => {
              const eventDate = new Date(event.date);
              const isPastEvent = eventDate < today;
              return (
                <div
                  key={event.id}
                  className={`event hidden ${isPastEvent ? 'past-event' : ''}`}
                  data-animation="animate-fade-in"
                >
                  <div className="event-image-container">
                    <img src={event.image} className="event-image-full" alt={event.name} />
                  </div>
                  <div className="event-details">
                    <h3 className="event-name">{event.name}</h3>
                    <p className="event-date-time">
                      {formatDate(event.date)} {event.time}
                    </p>
                    {event.location && (
                      <p className="event-location">{event.location}</p>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-events">
              <p>No Events</p>
              <div className="palm-trees">🌴🌴🌴</div>
            </div>
          )}
        </div>
      </div>
      
      {selectedEvent && (
        <div className="modal" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setSelectedEvent(null)}>&times;</span>
            <img src={selectedEvent.image} alt={selectedEvent.name} className="modal-image" />
            <h2>{selectedEvent.name}</h2>
            <p>{formatDate(selectedEvent.date)} {selectedEvent.time}</p>
            {selectedEvent.location && (
              <p>{selectedEvent.location}</p>
            )}
          </div>
        </div>
      )}
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
