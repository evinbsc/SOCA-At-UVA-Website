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

const getEventsForMonth = (events, month, year) => {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });
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

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2024-08-01'));

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
    </div>
  );
};

export default Calendar;
