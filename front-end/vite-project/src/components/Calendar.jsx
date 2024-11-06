import React, { useState } from 'react';
import '../styles/calendar.css';

import rightArrow from '../assets/misc/right_arrow.png';
import leftArrow from '../assets/misc/left_arrow.png';

import waterFeteImage from '../assets/events/water_fete.jpg';
import sorrelSaleImage from '../assets/events/sorrel_sale.jpg';
import poolPartyImage from '../assets/events/pool_party.jpg';
import trinidadIndependenceImage from '../assets/events/trinidad_independence_day.jpg';
import bachataWorkshopImage from '../assets/events/bachata_workshop.jpg';
import blockPartyImage from '../assets/events/block_party.jpg';
import sunsetMixerImage from '../assets/events/sunset_mixer.jpg';
import dominosDominosImage from '../assets/events/dominos_dominos.jpg';
import repYaFlagImage from '../assets/events/rep_ya_flag.jpg';
import tasteTraditionsImage from '../assets/events/taste_traditions.jpg';
import karibbeanKitchenImage from '../assets/events/karibbean_kitchen.jpg';

const parseDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const getEventsForMonth = (events, month, year) => {
  return events.filter((event) => {
    const eventDate = parseDate(event.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return parseDate(dateString).toLocaleDateString(undefined, options);
};

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
  {
    id: 7,
    name: 'Sunset Mixer',
    date: '2024-09-22',
    time: '5:00 PM - 8:00 PM',
    location: 'Pavillion VIII Garden',
    image: sunsetMixerImage,
  },
  {
    id: 8,
    name: 'Karibbean Kitchen',
    date: '2024-10-23',
    time: '6:00 PM - 7:30 PM',
    location: 'UVA Teaching Kitchen @ SHW',
    image: karibbeanKitchenImage,
  },
  {
    id: 9,
    name: 'Gen Bod Meeting - Dominos & Dominos',
    date: '2024-10-02',
    time: '7:30 PM - 9:00 PM',
    location: 'Multicultural Student Center',
    image: dominosDominosImage,
  },
  {
    id: 10,
    name: 'Taste\'s & Traditions',
    date: '2024-09-28',
    time: '2:00 PM - 5:00 PM',
    location: 'Amphitheater',
    image: tasteTraditionsImage,
  },
  {
    id: 11,
    name: 'Rep Ya Flag Party',
    date: '2024-09-20',
    time: '10:00 PM - 2:00 AM',
    location: '600 Preston Place',
    image: repYaFlagImage,
  }
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [2024, 2025];

  // Navigate to next month
  const nextMonth = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(1); // Prevents issues when moving from months with more days
    nextDate.setMonth(currentDate.getMonth() + 1);
    if (nextDate <= new Date('2025-12-31')) {
      setCurrentDate(nextDate);
    }
  };

  // Navigate to previous month
  const prevMonth = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(1); // Prevents issues when moving from months with more days
    prevDate.setMonth(currentDate.getMonth() - 1);
    if (prevDate >= new Date('2024-01-01')) {
      setCurrentDate(prevDate);
    }
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    const newDate = new Date(currentDate);
    newDate.setDate(1); // Set to first day to prevent date overflow
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

  // Use the actual current date
  const today = new Date();

  const upcomingEvents = eventsForMonth
    .filter(event => parseDate(event.date) >= today)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));

  const pastEvents = eventsForMonth
    .filter(event => parseDate(event.date) < today)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));

  const sortedEvents = [...upcomingEvents, ...pastEvents];

  return (
    <div className="frame-calendar">
      <div className="calendar-container">
        <h1 className="calendar-main-header">Calendar</h1>
        <h2 className="calendar-sub-header">Check Out Our Upcoming Events!</h2>
        <div className="calendar-header">
          <button
            onClick={prevMonth}
            className="calendar-nav"
            disabled={currentDate <= new Date('2024-01-01')}
            aria-label="Previous Month"
          >
            <img src={rightArrow} alt="Previous Month" className="arrow-icon" />
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
          <button
            onClick={nextMonth}
            className="calendar-nav"
            disabled={currentDate >= new Date('2025-12-31')}
            aria-label="Next Month"
          >
            <img src={leftArrow} alt="Next Month" className="arrow-icon" />
          </button>
        </div>
        <p className="calendar-note">*Click On Event To Enlarge*</p>
        <div className="events-grid">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event) => {
              const eventDate = parseDate(event.date);
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;