import React, { useState } from 'react';
import '../styles/calendar.css';

// Import images (update paths to match your folder structure and naming conventions)
import haitiFlag from '../assets/caribbean_flags/haiti_flag.png';
import dominicanRepublicFlag from '../assets/caribbean_flags/dominican_republic_flag.png';
import cubaFlag from '../assets/caribbean_flags/cuba_flag.png';
import panamaFlag from '../assets/caribbean_flags/panama_flag.png';
import jamaicaFlag from '../assets/caribbean_flags/jamaica_flag.png';
import trinidadTobagoFlag from '../assets/caribbean_flags/trinidad_and_tobago_flag.png';
import barbadosFlag from '../assets/caribbean_flags/barbados_flag.png';
import guyanaFlag from '../assets/caribbean_flags/guyana_flag.png';
import grenadaFlag from '../assets/caribbean_flags/grenada_flag.png';
import dominicaFlag from '../assets/caribbean_flags/dominica_flag.png';
import saintLuciaFlag from '../assets/caribbean_flags/saint_lucia_flag.png';
import saintVincentGrenadinesFlag from '../assets/caribbean_flags/saint_vincent_and_grenadines_flag.png';
import antiguaBarbudaFlag from '../assets/caribbean_flags/antigua_and_barbuda_flag.png';
import saintKittsNevisFlag from '../assets/caribbean_flags/saint_kitts_and_nevis_flag.png';
import blockPartyFlyer from '../assets/events/soca_black_block_party_flyer.png';
import poolPartyFlyer from '../assets/events/soca_pool_party_flyer.png';

const events = [
  { id: 1, title: 'Pool Party', date: '2024-08-26', image: poolPartyFlyer },
  { id: 2, title: 'Block Party', date: '2024-08-25', image: blockPartyFlyer },
];

const getEventsForMonth = (events, month, year) => {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2024-09-01'));
  const [selectedEvent, setSelectedEvent] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [2024, 2025];

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

  return (
    <div className="frame-calendar">
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={prevMonth} className="calendar-nav" disabled={currentDate <= new Date('2024-08-01')}>&#x25C0;</button>
          
          <div className="calendar-selectors">
            <select value={currentDate.getMonth()} onChange={handleMonthChange} className="month-selector">
              {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
            <select value={currentDate.getFullYear()} onChange={handleYearChange} className="year-selector">
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <button onClick={nextMonth} className="calendar-nav" disabled={currentDate >= new Date('2025-08-01')}>&#x25B6;</button>
        </div>
        <div className="events-grid">
          {eventsForMonth.length > 0 ? (
            eventsForMonth.map(event => (
              <div 
                key={event.id} 
                className="event" 
                onClick={() => setSelectedEvent(event)}
              >
                <img src={event.image} className="event-image-full" alt={event.title} />
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{new Date(event.date).toLocaleDateString()}</p>
                </div>
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
      {selectedEvent && (
        <div className="modal" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setSelectedEvent(null)}>&times;</span>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="modal-image" />
            <h2>{selectedEvent.title}</h2>
            <p>{new Date(selectedEvent.date).toLocaleDateString()}</p>
            {/* Add more event details if available */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
