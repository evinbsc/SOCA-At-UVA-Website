import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../style.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const EventComponent = ({ event }) => (
  <div>
    <iframe src={event.image} width="50" height="50" allow="autoplay" style={{ marginRight: '10px' }}></iframe>
    <span>{event.title}</span>
  </div>
);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5001/events');
      const formattedEvents = res.data.map(event => ({
        title: event.title,
        start: new Date(event.date),
        end: new Date(event.date),
        allDay: true,
        image: event.image,
      }));
      setEvents(formattedEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        className="custom-calendar"
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default MyCalendar;
