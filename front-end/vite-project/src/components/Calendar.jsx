import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5001/events');
      setEvents(res.data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="frame">
      <div className="calendar-container">
        <h1 className="calendar-title">Calendar</h1>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event">
              <iframe src={event.image} width="200" height="150" allow="autoplay" className="event-image" title={event.title}></iframe>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
