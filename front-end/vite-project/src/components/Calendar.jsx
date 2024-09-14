import React, { useState } from 'react';
import '../styles/calendar.css';

// Import images (adjust paths to match your folder structure)
import waterFeteImage from '../assets/events/water_fete.jpg';
import sorrelSaleImage from '../assets/events/sorrel_sale.jpg';
import poolPartyImage from '../assets/events/pool_party.jpg';
import trinidadIndependenceImage from '../assets/events/trinidad_independence.jpg';
import bachataWorkshopImage from '../assets/events/bachata_workshop.jpg';
import blockPartyImage from '../assets/events/block_party.jpg';

// Updated events array with new events and details
const events = [
  {
    id: 1,
    name: 'Water Fete',
    date: '2023-08-30',
    time: '4:00 PM - 6:30 PM',
    location: 'Booker T. Washington Park',
    image: waterFeteImage,
  },
  {
    id: 2,
    name: 'Sorrel Sale',
    date: '2023-09-12',
    time: '11:00 AM - 2:00 PM',
    location: 'Amphitheater Way',
    image: sorrelSaleImage,
  },
  {
    id: 3,
    name: 'Welcome Back Pool Party',
    date: '2023-08-26',
    time: '4:00 PM',
    location: 'Grandmarc',
    image: poolPartyImage,
  },
  {
    id: 4,
    name: 'Trinidad & Tobago Independence Day',
    date: '2023-08-31',
    time: '',
    location: '',
    image: trinidadIndependenceImage,
  },
  {
    id: 5,
    name: 'Bachata 101 Workshop',
    date: '2023-09-07',
    time: '1:00 PM - 3:00 PM',
    location: 'AFE Multi-Purpose Room #1',
    image: bachataWorkshopImage,
  },
  {
    id: 6,
    name: 'Black Block Party',
    date: '2023-08-25',
    time: '10:00 PM - 2:00 AM',
    location: '1533 Virginia Ave, Charlottesville, VA 22903',
    image: blockPartyImage,
  },
  // Add more events as needed
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

const Calendar = () => {
  // Set current date to September 14th, 2023
  const [currentDate, setCurrentDate] = useState(new Date('2023-09-01'));
  const [selectedEvent, setSelectedEvent] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [2023, 2024];

  const nextMonth = () => {
    const nextDate = new Date(currentDate);
    nextDate.setMonth(currentDate.getMonth() + 1);
    if (nextDate <= new Date('2024-12-31')) {
      setCurrentDate(nextDate);
    }
  };

  const prevMonth = () => {
    const prevDate = new Date(currentDate);
    prevDate.setMonth(currentDate.getMonth() - 1);
    if (prevDate >= new Date('2023-01-01')) {
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

  // Assume current date is September 14th, 2023
  const today = new Date('2023-09-14');

  return (
    <div className="frame-calendar">
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={prevMonth} className="calendar-nav" disabled={currentDate <= new Date('2023-01-01')}>
            &#x25C0;
          </button>

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

          <button onClick={nextMonth} className="calendar-nav" disabled={currentDate >= new Date('2024-12-31')}>
            &#x25B6;
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
                  className={`event ${isPastEvent ? 'past-event' : ''}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="event-image-container">
                    <img src={event.image} className="event-image" alt={event.name} />
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
            {/* Add more event details if available */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
