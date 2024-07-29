import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style.css';

const Discover = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get('http://localhost:5001/articles');
      setArticles(res.data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="frame">
      <h1 className="sa-ka-f-te">SA KA FÊTE?</h1>
      {articles.map(article => (
        <div key={article.id} className="article">
          <iframe src={article.image} width="300" height="200" allow="autoplay" className="article-image"></iframe>
          <h3>{article.title}</h3>
          <p>{article.paragraphs[0].text}</p>
          <a href={`/article/${article.id}`}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default Discover;