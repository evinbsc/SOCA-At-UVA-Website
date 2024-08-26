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
      },
      {
        id: 2,
        text: 'Jamaica was one of the hardest-hit islands as Hurricane Beryl, Category 4 at the time, passed close to Kingston. It reached wind speeds up to 145 mph which caused extensive damage to infrastructure. Many buildings lost roofs, power outages became widespread, and the continuous rain led to severe flooding. At the time, emergency services were stretched thin as they worked to evacuate residents from low-lying areas and provide immediate relief to those affected by the floods.'
      },
      {
        id: 3,
        text: 'The Lesser Antilles, Barbados, Saint Lucia, and Martinique faced hurricane-force winds that uprooted trees and downed power lines, leaving thousands without electricity. The agricultural sector, a significant part of these islands\' economies, suffered significant damage. Crops such as bananas and sugarcane were hit hard which will result in huge economic losses for local farmers​.'
      },
      {
        id: 4,
        text: 'Puerto Rico, still recovering from the impacts of previous hurricanes, saw Beryl continue to devastate existing infrastructure. The storm caused power outages and severe flooding, leading to landslides in mountainous parts of the region. Efforts to restore power and provide clean water were hindered by the storm, prolonging the storm’s devastation for many residents. The northern coast of the Dominican Republic experienced similar challenges, with heavy rains causing rivers to overflow and displacing communities in flood-prone areas.'
      },
      {
        id: 5,
        text: 'The aftermath of Hurricane Beryl saw a massive mobilization of relief efforts across the Caribbean. Local governments, international organizations, and humanitarian aid agencies untied together to establish emergency shelters and distribute essential supplies such as food, water, and medical aid.'
      },
      {
        id: 6,
        text: 'The economic and social impacts of Hurricane Beryl will be felt for years to come. The destruction of millions of dollars in infrastructure and agricultural land has set back the economic development in many parts of these Caribbean islands.'
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
      },
      {
        id: 1,
        text: 'Today, carnival celebrations typically span a month long. Each island has its schedule: pre-Ash Wednesday for Trinidad, Martinique, and Guadeloupe, late July for Barbados and St. Lucia, and August for Grenada. The climax comes with Carnival Monday and Tuesday, featuring vibrant parades and parties. Each island offers a unique experience. Trinidad\'s carnival is the largest and most energetic, while Barbados\' Crop Over combines festivities with beach relaxation. Anguilla provides a more laid-back experience, and Dominica\’s Mas Domnik offers a mix of excitement and ability to relax.'
      },
      {
        id: 1,
        text: 'Essential Terms: Band: Your group for “playing Mas.” J\’ouvert: A pre-dawn celebration starting Carnival Monday. Playing Mas: Participating in costumed events, especially on Carnival Tuesday. Soca: The rhythmic heart of carnival music. Whine: A signature dance style with circular hip movements.'
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
