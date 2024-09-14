import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/article.css';

// Importing article images
import hurricaneBerylArticleImage from '../assets/article_images/hurricane_beryl_article_image.jpg';
import caribbeanCarnivalArticleImage from '../assets/article_images/caribbean_carnival_article_image.jpg';

const articles = [
  {
    id: 1,
    title: 'The Impact of Hurricane Beryl on the Caribbean in 2024',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: hurricaneBerylArticleImage,
    summary: 'Hurricane Beryl, the first major hurricane of the 2024 Atlantic hurricane season, brought severe devastation to many Caribbean islands...',
    paragraphs: [
      // ... (full paragraphs as before)
    ],
  },
  {
    id: 2,
    title: 'The Essence of Carnival: A Celebration of Festivity and Tradition',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: caribbeanCarnivalArticleImage,
    summary: 'Carnival in the Caribbean is a vibrant display of colors, music, and dance, rooted in history and cultural significance...',
    paragraphs: [
      // ... (full paragraphs as before)
    ],
  },
  // Add more articles as needed
];

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.dataset.animation;
          entry.target.classList.add(animationClass);
          entry.target.classList.remove('hidden');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer on unmount
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  if (id) {
    // Display individual article view
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) {
      return <div className="article-frame">Article not found</div>;
    }

    return (
      <div className="article-frame">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-meta">
          <strong>By:</strong> {article.author} | <strong>Date:</strong> {article.date}
        </p>
        <img src={article.image} alt={article.title} className="article-image-large" />
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph.id}>{paragraph.text}</p>
        ))}
        <button className="back-button" onClick={() => navigate('/articles')}>
          Back to Articles
        </button>
      </div>
    );
  } else {
    // Display list of articles
    return (
      <div className="articles-page">
        <h1 className="articles-heading hidden" data-animation="animate-slide-in-left">
          Articles
        </h1>
        <div className="article-list">
          {articles.map((article) => (
            <div
              key={article.id}
              className="article-card hidden"
              data-animation="animate-fade-in"
              onClick={() => navigate(`/articles/${article.id}`)}
            >
              <img src={article.image} alt={article.title} className="article-card-image" />
              <div className="article-card-text">
                <h3>{article.title}</h3>
                <p className="article-meta">
                  <strong>By:</strong> {article.author} | <strong>Date:</strong> {article.date}
                </p>
                <p>{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Article;
