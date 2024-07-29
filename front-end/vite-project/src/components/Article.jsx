import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../style.css';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await axios.get(`http://localhost:5001/articles/${id}`);
      setArticle(res.data);
    };

    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="frame">
      <iframe src={article.image} width="100%" height="480" allow="autoplay" className="article-image"></iframe>
      <h1>{article.title}</h1>
      <div className="author">
        <iframe src={`/path/to/${article.author}.png`} width="50" height="50" allow="autoplay" className="author-image"></iframe>
        <p>Published by {article.author}</p>
      </div>
      {article.paragraphs.map(paragraph => (
        <p key={paragraph.id}>{paragraph.text}</p>
      ))}
    </div>
  );
};

export default Article;
