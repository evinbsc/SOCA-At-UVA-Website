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
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/5WWuoR2NS4c?si=uh8Orc2207VLwxbv&autoplay=1&mute=1" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="events-section">
        <h1 className="UPCOMING-event">UPCOMING EVENT</h1>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event">
              <iframe src={event.image} width="200" height="150" allow="autoplay" className="event-image" muted autoplay></iframe>
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
              <iframe src={article.image} width="300" height="200" allow="autoplay" className="article-image" muted autoplay></iframe>
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
