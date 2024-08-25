import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import Popup from './Popup';

// Importing stay connected icons
import InstagramLogo from '../Assets/Instagram_logo.png';
import MailIcon from '../Assets/Mail_Icon.png';

// Importing article images
import HurricaneBerylArticleImage from '../Assets/HurricaneBerylArticleImage.jpg';
import CaribbeanCarnivalArticleImage from '../Assets/CaribbeanCarnivalArticleImage.jpg';
import BlockPartyFlyer from '../Assets/soca_black_block_party_flyer.png';

// Importing flag images
import HaitiFlag from '../Assets/Haiti_Flag.png';
import DominicanRepublicFlag from '../Assets/Dominican_Republic_Flag.png';
import CubaFlag from '../Assets/Cuba_Flag.png';
import PanamaFlag from '../Assets/Panama_Flag.png';
import JamaicaFlag from '../Assets/Jamaica_Flag.png';
import TrinidadTobagoFlag from '../Assets/Trinidad_and_Tobago_Flag.png';
import BarbadosFlag from '../Assets/Barbados_Flag.png';
import GuyanaFlag from '../Assets/Guyana_Flag.png';
import GrenadaFlag from '../Assets/Grenada_Flag.png';
import DominicaFlag from '../Assets/Dominica_Flag.png';
import SaintLuciaFlag from '../Assets/Saint_Lucia_Flag.png';
import SaintVincentGrenadinesFlag from '../Assets/Saint_Vincent_and_the_Grenadines_Flag.png';
import AntiguaBarbudaFlag from '../Assets/Antigua_and_Barbuda_Flag.png';
import SaintKittsNevisFlag from '../Assets/Saint_Kitts_and_Nevis_Flag.png';

// Importing background images
import StLuciaBackground from '../Assets/st_lucia_background.png';
import HaitiBackground from '../Assets/haiti_background.png';
import PuertoBackground from '../Assets/puerto_background.png';
import CubaBackground from '../Assets/cuba_background.png';
import AntiguaBackground from '../Assets/antigua_background.png';
import DominicaBackground from '../Assets/dominica_background.png';
import CaymanBackground from '../Assets/cayman_background.png';
import StKittsBackground from '../Assets/st_kitts_background.png';
import GuadeloupeBackground from '../Assets/guadeloupe_background.png';
import MartiniqueBackground from '../Assets/martinique_background.png';
import ArubaBackground from '../Assets/aruba_background.png';
import GrenadaBackground from '../Assets/grenada_background.png';
import StVincentBackground from '../Assets/st_vincent_background.png';
import JamaicaBackground from '../Assets/jamaica_background.png';
import DominicanBackground from '../Assets/dominican_background.png';
import NetherlandsBackground from '../Assets/netherlands_background.png';
import TrinidadBackground from '../Assets/trinidad_background.png';
import BarbadosBackground from '../Assets/barbados_background.png';
import SocaHomePagePicMobile from '../Assets/SOCA_home_page_pic_mobile.png';


const events = [
  { id: 1, title: 'Haiti Independence Day', date: '2025-01-01', image: HaitiFlag },
  { id: 2, title: 'Dominican Republic Independence Day', date: '2025-02-27', image: DominicanRepublicFlag },
  { id: 3, title: 'Grenada Independence Day', date: '2025-02-07', image: GrenadaFlag },
  { id: 4, title: 'Cuba Independence Day', date: '2025-05-20', image: CubaFlag },
  { id: 5, title: 'Guyana Independence Day', date: '2025-05-26', image: GuyanaFlag },
  { id: 6, title: 'Jamaica Independence Day', date: '2024-08-06', image: JamaicaFlag },
  { id: 7, title: 'Trinidad and Tobago Independence Day', date: '2024-08-31', image: TrinidadTobagoFlag },
  { id: 8, title: 'Saint Kitts and Nevis Independence Day', date: '2024-09-19', image: SaintKittsNevisFlag },
  { id: 9, title: 'Saint Vincent and the Grenadines Independence Day', date: '2024-10-27', image: SaintVincentGrenadinesFlag },
  { id: 10, title: 'Antigua and Barbuda Independence Day', date: '2024-11-01', image: AntiguaBarbudaFlag },
  { id: 11, title: 'Panama Independence Day', date: '2024-11-03', image: PanamaFlag },
  { id: 12, title: 'Dominica Independence Day', date: '2024-11-03', image: DominicaFlag },
  { id: 13, title: 'Barbados Independence Day', date: '2024-11-30', image: BarbadosFlag },
  { id: 14, title: 'Saint Lucia Independence Day', date: '2025-02-22', image: SaintLuciaFlag },
];

const articles = [
  {
    id: 1,
    title: 'The Impact of Hurricane Beryl on the Caribbean in 2024',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: HurricaneBerylArticleImage,
    paragraphs: [
      {
        id: 1,
        text: 'Hurricane Beryl, the first major hurricane of the 2024 Atlantic hurricane season, brought severe devastation to many Caribbean islands. It formed unusually early in the rainy season on June 28, 2024, and rapidly grew to a Category 5 storm. Beryl has set a record for the earliest Category 5 hurricane in the Atlantic, which was previously held by Hurricane Emily from 2005​. Jamaica was one of the hardest-hit islands as Hurricane Beryl, Category 4 at the time, passed close to Kingston. It reached wind speeds up to 145 mph, causing extensive damage to infrastructure...'
      }
    ]
  },
  {
    id: 2,
    title: 'The Essence of Carnival: A Celebration of Festivity and Tradition',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: CaribbeanCarnivalArticleImage,
    paragraphs: [
      {
        id: 1,
        text: 'Carnival in the Caribbean is a vibrant display of colors, music, and dance, rooted in history and cultural significance. This celebration can be traced back to the late 18th century in Trinidad and Tobago, where enslaved Africans and free people of color created their own festivities in response to exclusion from European masquerade balls. These traditions, infused with perseverance and defiance, have spread throughout the Caribbean over the years, with each island making its unique take on the celebration. Today, carnival celebrations typically span a month long...'
      }
    ]
  }
];

// Upcoming events algorithm
const getUpcomingEvents = (events, startDate) => {
  const sortedEvents = events
    .filter(event => new Date(event.date) >= new Date(startDate))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const upcomingEvents = sortedEvents.slice(0, 4);
  return upcomingEvents;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const day = date.getDate();
  let suffix = 'th';
  if (day === 1 || day === 21 || day === 31) suffix = 'st';
  else if (day === 2 || day === 22) suffix = 'nd';
  else if (day === 3 || day === 23) suffix = 'rd';
  return `${formattedDate}${suffix}`;
};

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2024-07-01'));
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // 5 second delay
    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => setIsPopupOpen(true); // Ensure this function is defined
  const closePopup = () => setIsPopupOpen(false);

  const nextMonth = () => {
    const nextDate = new Date(currentDate);
    nextDate.setMonth(currentDate.getMonth() + 1);
    if (nextDate <= new Date('2025-07-01')) {
      setCurrentDate(nextDate);
    }
  };

  const prevMonth = () => {
    const prevDate = new Date(currentDate);
    prevDate.setMonth(currentDate.getMonth() - 1);
    if (prevDate >= new Date('2024-07-01')) {
      setCurrentDate(prevDate);
    }
  };

  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const eventsForMonth = events.filter(event => 
    new Date(event.date).getMonth() === currentDate.getMonth() &&
    new Date(event.date).getFullYear() === currentDate.getFullYear()
  );

  return (
    <div className="frame">
      <Popup isOpen={isPopupOpen} onClose={closePopup} />

      {/* Main image for all screens */}
      <img src={SOCAHomePageMobile} alt="SOCA Home" className="main-image" />

      {/* Introduction text */}
      <div className="intro-text">
        <p>
          The Student Organization for Caribbean Awareness (SOCA) is a University of Virginia student-run organization that is committed to promoting awareness of issues facing the Caribbean and creating a community based around Caribbean cultures. The goal of SOCA is to bring together peoples with Caribbean descent, heritage and/or interest, in an effort to foster educational, cultural and social growth. SOCA welcomes and encourages all people to join and contribute to the organization, regardless of national or ethnic origin.
        </p>
      </div>

      {/* Flag containers for outer ends */}
      <div className="flag-container left">
        <img src={StLuciaBackground} alt="St Lucia" className="flag-image" />
        <img src={HaitiBackground} alt="Haiti" className="flag-image" />
        <img src={PuertoBackground} alt="Puerto Rico" className="flag-image" />
        <img src={CubaBackground} alt="Cuba" className="flag-image" />
        <img src={AntiguaBackground} alt="Antigua" className="flag-image" />
        <img src={DominicaBackground} alt="Dominica" className="flag-image" />
        <img src={CaymanBackground} alt="Cayman Islands" className="flag-image" />
        <img src={StKittsBackground} alt="St Kitts" className="flag-image" />
        <img src={GuadeloupeBackground} alt="Guadeloupe" className="flag-image" />
      </div>
      <div className="flag-container right">
        <img src={MartiniqueBackground} alt="Martinique" className="flag-image" />
        <img src={ArubaBackground} alt="Aruba" className="flag-image" />
        <img src={GrenadaBackground} alt="Grenada" className="flag-image" />
        <img src={StVincentBackground} alt="St Vincent" className="flag-image" />
        <img src={JamaicaBackground} alt="Jamaica" className="flag-image" />
        <img src={DominicanBackground} alt="Dominican Republic" className="flag-image" />
        <img src={NetherlandsBackground} alt="Netherlands Antilles" className="flag-image" />
        <img src={TrinidadBackground} alt="Trinidad" className="flag-image" />
        <img src={BarbadosBackground} alt="Barbados" className="flag-image" />
      </div>

      <h1 className="UPCOMING-event">UPCOMING EVENTS</h1>
      <div className="events-section box">
        <div className="calendar-header">
          <button onClick={prevMonth} className="calendar-nav">&lt;</button>
          <h1 className="calendar-title">{formatMonthYear(currentDate)}</h1>
          <button onClick={nextMonth} className="calendar-nav">&gt;</button>
        </div>
        <div className="events-grid">
          {eventsForMonth.length > 0 ? (
            eventsForMonth.map(event => (
              <div key={event.id} className="event">
                <img src={event.image} width="200" height="150" className="event-image" alt={event.title} />
                <h3>{event.title}</h3>
                <p>{formatDate(event.date)}</p>
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
      <div className="articles-section">
        <h2 className="sa-ka-f-te">SA KA FÊTE?</h2>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={article.id} className={`article box ${index % 2 === 0 ? 'left' : 'right'}`}>
              {index % 2 === 0 ? (
                <>
                  <img src={article.image} width="300" height="200" alt={article.title} className="article-image" />
                  <div className="article-text">
                    <h3>{article.title}</h3>
                    <p>{article.paragraphs[0].text}</p>
                    <a href={`/article/${article.id}`}>Read more</a>
                  </div>
                </>
              ) : (
                <>
                  <div className="article-text">
                    <h3>{article.title}</h3>
                    <p>{article.paragraphs[0].text}</p>
                    <a href={`/article/${article.id}`}>Read more</a>
                  </div>
                  <img src={article.image} width="300" height="200" alt={article.title} className="article-image" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Section moved under the SA KA FÊTE? section */}
      <div className="video-container">
        <iframe
          className="video"
          width="980"
          height="550"
          src="https://www.youtube.com/embed/5WWuoR2NS4c?si=uh8Orc2207VLwxbv&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="stay-connected-section">
        <h2 className="stay-connected-title">Stay Connected</h2>
        <div className="stay-connected-links">
          <a href="https://www.instagram.com/soca_at_uva/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" className="stay-connected-icon" />
            <span>@soca_at_uva</span>
          </a>
          <a href="https://lists.virginia.edu/sympa/subscribe/soca-uva?previous_action=info#" target="_blank" rel="noopener noreferrer">
            <img src={MailIcon} alt="Mail" className="stay-connected-icon" />
            <span>Subscribe to our UVA Mailing List</span>
          </a>
          <a href="mailto:officialsoca@virginia.edu">
            <img src={MailIcon} alt="Contact" className="stay-connected-icon" />
            <span>officialsoca@virginia.edu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
