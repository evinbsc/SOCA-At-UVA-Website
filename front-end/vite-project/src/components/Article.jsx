import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/article.css'; // Create a new CSS file for article styling

import HurricaneBerylArticleImage from '../Assets/HurricaneBerylArticleImage.jpg';
import CaribbeanCarnivalArticleImage from '../Assets/CaribbeanCarnivalArticleImage.jpg';

const articles = [
  {
    id: 1,
    title: 'The Impact of Hurricane Beryl on the Caribbean in 2024',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: HurricaneBerylArticleImage,
    paragraphs: [
      {
        id: 1,
        text: 'Hurricane Beryl, the first major hurricane of the 2024 Atlantic hurricane season, brought severe devastation to many Caribbean islands. It formed unusually early in the rainy season on June 28, 2024, and rapidly grew to a Category 5 storm. Beryl has set a record for the earliest Category 5 hurricane in the Atlantic, which was previously held by Hurricane Emily from 2005​. Jamaica was one of the hardest-hit islands as Hurricane Beryl, Category 4 at the time, passed close to Kingston. It reached wind speeds up to 145 mph, causing extensive damage to infrastructure...'
      }
    ]
  },
  {
    id: 2,
    title: 'The Essence of Carnival: A Celebration of Festivity and Tradition',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: CaribbeanCarnivalArticleImage,
    paragraphs: [
      {
        id: 1,
        text: 'Carnival in the Caribbean is a vibrant display of colors, music, and dance, rooted in history and cultural significance. This celebration can be traced back to the late 18th century in Trinidad and Tobago, where enslaved Africans and free people of color created their own festivities in response to exclusion from European masquerade balls. These traditions, infused with perseverance and defiance, have spread throughout the Caribbean over the years, with each island making its unique take on the celebration. Today, carnival celebrations typically span a month long...'
      }
    ]
  }
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div className="article-frame">Article not found</div>;
  }

  return (
    <div className="article-frame">
      <h1>{article.title}</h1>
      <p><strong>By:</strong> {article.author}</p>
      <p><strong>Date:</strong> {article.date}</p>
      <img src={article.image} alt={article.title} className="article-image-large" />
      {article.paragraphs.map(paragraph => (
        <p key={paragraph.id}>{paragraph.text}</p>
      ))}
    </div>
  );
};

export default Article;
