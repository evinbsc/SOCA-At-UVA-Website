import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style.css';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5001/events');
      setEvents(res.data);
    };

    const fetchArticles = async () => {
      const res = await axios.get('http://localhost:5001/articles');
      setArticles(res.data);
    };

    fetchEvents();
    fetchArticles();
  }, []);

  return (
    <div className="frame">
      <div className="video-container">
        <iframe src="https://drive.google.com/file/d/1AJdF1FSewqpSPTlwFKixhSTS7RpLKVlK/preview" allow="autoplay"></iframe>
      </div>
      <div className="events-section">
        <h1 className="UPCOMING-event">UPCOMING EVENT</h1>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event">
              <iframe src={event.image} width="200" height="150" allow="autoplay" className="event-image"></iframe>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="articles-section">
        <h2 className="sa-ka-f-te">SA KA FÊTE?</h2>
        <div className="articles-grid">
          {articles.slice(0, 2).map((article, index) => (
            <div key={article.id} className={`article ${index % 2 === 0 ? 'left' : 'right'}`}>
              <iframe src={article.image} width="300" height="200" allow="autoplay" className="article-image"></iframe>
              <div className="article-text">
                <h3>{article.title}</h3>
                <p>{article.paragraphs[0].text}</p>
                <a href={`/article/${article.id}`}>Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
