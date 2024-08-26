import React, { useState } from 'react';
import '../styles/calendar.css';
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
import BlockPartyFlyer from '../Assets/soca_black_block_party_flyer.png';
import PoolPartyFlyer from '../Assets/soca_pool_party_flyer.png';

const events = [
  { id: 1, title: 'Pool Party', date: '2024-08-26', image: PoolPartyFlyer },
  { id: 2, title: 'Block Party', date: '2024-08-25', image: BlockPartyFlyer }
];

const getEventsForMonth = (events, month, year) => {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2024-09-01'));

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

  const eventsForMonth = getEventsForMonth(events, currentDate.getMonth(), currentDate.getFullYear());

  return (
    <div className="frame-calendar">
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={prevMonth} className="calendar-nav" disabled={currentDate <= new Date('2024-08-01')}>&lt;</button>
          <h1 className="calendar-title">{formatMonthYear(currentDate)}</h1>
          <button onClick={nextMonth} className="calendar-nav" disabled={currentDate >= new Date('2025-08-01')}>&gt;</button>
        </div>
        <div className="events-grid">
          {eventsForMonth.length > 0 ? (
            eventsForMonth.map(event => (
              <div 
                key={event.id} 
                className="event" 
                onClick={() => console.log(`Navigate to event: ${event.title}`)} // Placeholder for navigation
              >
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
    </div>
  );
};

export default Calendar;
