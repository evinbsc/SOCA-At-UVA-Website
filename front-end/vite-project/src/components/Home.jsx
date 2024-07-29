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
      <iframe src="https://drive.google.com/file/d/1AJdF1FSewqpSPTlwFKixhSTS7RpLKVlK/preview" width="100%" height="480" allow="autoplay"></iframe>
      <div className="overlap">
        <h1 className="UPCOMING-event">UPCOMING EVENT</h1>
        {events.map(event => (
          <div key={event.id} className="event">
            <iframe src={event.image} width="300" height="200" allow="autoplay" className="event-image"></iframe>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
      <div className="overlap-group">
        <h2 className="sa-ka-f-te">SA KA FÊTE?</h2>
        {articles.slice(0, 2).map(article => (
          <div key={article.id} className="article">
            <iframe src={article.image} width="300" height="200" allow="autoplay" className="article-image"></iframe>
            <h3>{article.title}</h3>
            <p>{article.paragraphs[0].text}</p>
            <a href={`/article/${article.id}`}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
