// src/components/Calendar.jsx
import React, { useState, useEffect, useContext } from 'react';
import '../styles/calendar.css';

// Import arrow images
import rightArrow from '../assets/misc/right_arrow.png';
import leftArrow from '../assets/misc/left_arrow.png';

// Import event images
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
import popTheBalloonImage from '../assets/events/pop_the_balloon.jpg';
import loveAffairPartyImage from '../assets/events/love_affair_party.jpg';
import haitiIndependenceImage from '../assets/events/haiti_independence.jpg';
import friendsgivingImage from '../assets/events/friendsgiving.jpg';
import clayMagnetWorkshopImage from '../assets/events/clay_magnet_workshop.jpg';
import tabooToTempoImage from '../assets/events/taboo_to_tempo.jpg';

// Importing icons for adding events
import { FaPlus, FaTimes } from 'react-icons/fa';

import { AuthContext } from '../context/AuthContext';

const parseDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return parseDate(dateString).toLocaleDateString(undefined, options);
};

const initialEvents = [
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
  },
  {
    id: 12,
    name: 'Love Affair Party',
    date: '2025-02-08',
    time: '10:00 PM - 2:00 AM',
    location: '600 Preston Place',
    image: loveAffairPartyImage,
  },
  {
    id: 13,
    name: 'Pop The Balloon',
    date: '2025-02-08',
    time: '6:00 PM - 8:00 PM',
    location: 'Student Activities Building',
    image: popTheBalloonImage,
  },
  {
    id: 14,
    name: 'Haiti Independence Day',
    date: '2025-01-01',
    time: '',
    location: '',
    image: haitiIndependenceImage,
  },
  {
    id: 15,
    name: 'Friendsgiving',
    date: '2024-11-24',
    time: '6:00 PM - 9:00 PM',
    location: 'PAC Lounge',
    image: friendsgivingImage,
  },
  {
    id: 16,
    name: 'Clay Magnet Workshop',
    date: '2024-11-21',
    time: '6:00 PM - 8:00 PM',
    location: 'Multicultural Student Center',
    image: clayMagnetWorkshopImage,
  },
  {
    id: 17,
    name: 'Taboo To Tempo',
    date: '2025-02-26',
    time: '6:00 PM - 7:30 PM',
    location: 'Multicultural Student Center',
    image: tabooToTempoImage,
  }
];

const Calendar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    image: null,
    imagePreview: '',
    name: '',
    date: '',
    time: '',
    location: '',
  });
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [2024, 2025];

  // Load events from localStorage or use initialEvents
  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(initialEvents);
    }
  }, []);

  // Save events to localStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  // Navigate to next month
  const nextMonth = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(1);
    nextDate.setMonth(currentDate.getMonth() + 1);
    if (nextDate <= new Date('2025-12-31')) {
      setCurrentDate(nextDate);
    }
  };

  // Navigate to previous month
  const prevMonth = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(1);
    prevDate.setMonth(currentDate.getMonth() - 1);
    if (prevDate >= new Date('2024-01-01')) {
      setCurrentDate(prevDate);
    }
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    const newDate = new Date(currentDate);
    newDate.setDate(1);
    newDate.setMonth(newMonth);
    setCurrentDate(newDate);
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value);
    const newDate = new Date(currentDate);
    newDate.setFullYear(newYear);
    setCurrentDate(newDate);
  };

  const eventsForMonth = events.filter((event) => {
    const eventDate = parseDate(event.date);
    return eventDate.getMonth() === currentDate.getMonth() && eventDate.getFullYear() === currentDate.getFullYear();
  });

  // Use the actual current date
  const today = new Date();

  const upcomingEvents = eventsForMonth
    .filter(event => parseDate(event.date) >= today)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));

  const pastEvents = eventsForMonth
    .filter(event => parseDate(event.date) < today)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));

  const sortedEvents = [...upcomingEvents, ...pastEvents];

  // Handle input changes in the add event form
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent(prevState => ({
          ...prevState,
          image: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setNewEvent(prevState => ({
        ...prevState,
        [name]: value
      }));

      // Show preview when user starts typing or selecting file
      if (!isPreviewVisible) {
        setIsPreviewVisible(true);
      }
    }
  };

  // Handle adding a new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    const { imagePreview, name, date, time, location } = newEvent;

    if (!name || !date) {
      alert('Please provide at least an event name and date.');
      return;
    }

    const newId = events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 1;

    const eventToAdd = {
      id: newId,
      name,
      date,
      time,
      location,
      image: imagePreview || '', // Use preview image or empty string
    };

    setEvents([...events, eventToAdd]);
    setNewEvent({
      image: null,
      imagePreview: '',
      name: '',
      date: '',
      time: '',
      location: '',
    });
    setIsPreviewVisible(false);
    setIsAddModalOpen(false);
  };

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
          {/* Add Event Button */}
          {isAuthenticated && (
            <button
              className="add-event-button"
              onClick={() => setIsAddModalOpen(true)}
              aria-label="Add Event"
            >
              <FaPlus className="add-event-icon" />
              <span className="add-event-text">Add Event</span>
            </button>
          )}
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
                    {event.image ? (
                      <img src={event.image} className="event-image" alt={event.name} />
                    ) : (
                      <div className="placeholder-image">No Image</div>
                    )}
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

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="modal" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setSelectedEvent(null)}><FaTimes /></span>
            {selectedEvent.image ? (
              <img src={selectedEvent.image} alt={selectedEvent.name} className="modal-image" />
            ) : (
              <div className="modal-placeholder-image">No Image</div>
            )}
            <h2>{selectedEvent.name}</h2>
            <p>{formatDate(selectedEvent.date)} {selectedEvent.time}</p>
            {selectedEvent.location && (
              <p>{selectedEvent.location}</p>
            )}
          </div>
        </div>
      )}

      {/* Add Event Modal */}
      {isAddModalOpen && isAuthenticated && (
        <div className="modal" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setIsAddModalOpen(false)}><FaTimes /></span>
            <h2>Add New Event</h2>
            <form className="add-event-form" onSubmit={handleAddEvent}>
              <div className="form-group">
                <label htmlFor="image">Event Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Event Title:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newEvent.name}
                  onChange={handleInputChange}
                  placeholder="Enter event title"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Event Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Event Time:</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={newEvent.time}
                  onChange={handleInputChange}
                  placeholder="e.g., 5:00 PM - 7:00 PM"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Event Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={newEvent.location}
                  onChange={handleInputChange}
                  placeholder="Enter event location"
                />
              </div>
              {/* Preview Section */}
              {isPreviewVisible && (
                <div className="preview-section">
                  <h3>Preview:</h3>
                  <div className="preview-card">
                    {newEvent.imagePreview ? (
                      <img src={newEvent.imagePreview} alt="Preview" className="preview-image" />
                    ) : (
                      <div className="preview-placeholder-image">No Image</div>
                    )}
                    <div className="preview-details">
                      <h4>{newEvent.name || 'Event Title'}</h4>
                      <p>{newEvent.date ? formatDate(newEvent.date) : 'Event Date'} {newEvent.time || ''}</p>
                      <p>{newEvent.location || 'Event Location'}</p>
                    </div>
                  </div>
                </div>
              )}
              <button type="submit" className="submit-button">Add Event</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
