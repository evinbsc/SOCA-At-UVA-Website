import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import Popup from './Popup';

// Importing stay connected icons
import InstagramLogo from '../Assets/Instagram_logo.png';
import MailIcon from '../Assets/Mail_Icon.png';

// Importing article images
import HurricaneBerylArticleImage from '../Assets/HurricaneBerylArticleImage.jpg';
import CaribbeanCarnivalArticleImage from '../Assets/CaribbeanCarnivalArticleImage.jpg';
import BlockPartyFlyer from '../Assets/soca_black_block_party_flyer.png';
import PoolPartyFlyer from '../Assets/soca_pool_party_flyer.png';

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
  { id: 1, title: 'Pool Party', date: '2024-08-26', image: PoolPartyFlyer },
  { id: 2, title: 'Block Party', date: '2024-08-25', image: BlockPartyFlyer }
  // { id: 3, title: 'Haiti Independence Day', date: '2025-01-01', image: HaitiFlag },
  // { id: 4, title: 'Dominican Republic Independence Day', date: '2025-02-27', image: DominicanRepublicFlag },
  // { id: 5, title: 'Grenada Independence Day', date: '2025-02-07', image: GrenadaFlag },
  // { id: 6, title: 'Cuba Independence Day', date: '2025-05-20', image: CubaFlag },
  // { id: 7, title: 'Guyana Independence Day', date: '2025-05-26', image: GuyanaFlag },
  // { id: 8, title: 'Jamaica Independence Day', date: '2024-08-06', image: JamaicaFlag },
  // { id: 9, title: 'Trinidad and Tobago Independence Day', date: '2024-08-31', image: TrinidadTobagoFlag },
  // { id: 10, title: 'Saint Kitts and Nevis Independence Day', date: '2024-09-19', image: SaintKittsNevisFlag },
  // { id: 11, title: 'Saint Vincent and the Grenadines Independence Day', date: '2024-10-27', image: SaintVincentGrenadinesFlag },
  // { id: 12, title: 'Antigua and Barbuda Independence Day', date: '2024-11-01', image: AntiguaBarbudaFlag },
  // { id: 13, title: 'Panama Independence Day', date: '2024-11-03', image: PanamaFlag },
  // { id: 14, title: 'Dominica Independence Day', date: '2024-11-03', image: DominicaFlag },
  // { id: 15, title: 'Barbados Independence Day', date: '2024-11-30', image: BarbadosFlag },
  // { id: 16, title: 'Saint Lucia Independence Day', date: '2025-02-22', image: SaintLuciaFlag },
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
        text: 'Hurricane Beryl, the first major hurricane of the 2024 Atlantic hurricane season, brought severe devastation to many Caribbean islands...'
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
        text: 'Carnival in the Caribbean is a vibrant display of colors, music, and dance, rooted in history and cultural significance...'
      }
    ]
  }
];

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2024-09-01')); 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate(); // Define navigate for navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // 5 second delay
    return () => clearTimeout(timer);
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

  const eventsForMonth = events.filter(event => 
    new Date(event.date).getMonth() === currentDate.getMonth() &&
    new Date(event.date).getFullYear() === currentDate.getFullYear()
  );

  return (
    <div className="frame">
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      <img src={SocaHomePagePicMobile} width="980" height="530" alt="SOCA Home" className="main-image" />

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

      {/* Upcoming Events */}
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
        <h2 className="sa-ka-f-te">SA KA FÊTE?</h2>

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

        <div className="articles-grid">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="article-card" 
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

      <h1 className="stay-connected-title">Stay Connected!</h1>

      <div className="stay-connected-section">
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
