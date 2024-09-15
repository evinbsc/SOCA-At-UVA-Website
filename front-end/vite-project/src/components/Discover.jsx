import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Discover.css';

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
    summary:
      'Hurricane Beryl, the first major hurricane of the 2024 Atlantic hurricane season, brought severe devastation to many Caribbean islands...',
    paragraphs: [
      {
        id: 1,
        text: 'Hurricane Beryl, the first major hurricane of the 2024 Atlantic hurricane season, brought severe devastation to many Caribbean islands. It formed unusually early in the rainy season on June 28, 2024, and rapidly grew to a Category 5 storm. Beryl set a record for the earliest Category 5 hurricane in the Atlantic, previously held by Hurricane Emily from 2005.',
      },
      {
        id: 2,
        text: 'Jamaica was one of the hardest-hit islands as Hurricane Beryl, Category 4 at the time, passed close to Kingston. It reached wind speeds up to 145 mph, causing extensive damage to infrastructure. Many buildings lost roofs, power outages became widespread, and the continuous rain led to severe flooding. Emergency services were stretched thin as they worked to evacuate residents from low-lying areas and provide immediate relief to those affected by the floods.',
      },
      {
        id: 3,
        text: 'The Lesser Antilles, including Barbados, Saint Lucia, and Martinique, faced hurricane-force winds that uprooted trees and downed power lines, leaving thousands without electricity. The agricultural sector, a significant part of these islands\' economies, suffered significant damage. Crops such as bananas and sugarcane were hit hard, resulting in substantial economic losses for local farmers.',
      },
      {
        id: 4,
        text: 'Puerto Rico, still recovering from the impacts of previous hurricanes, saw Beryl continue to devastate existing infrastructure. The storm caused power outages and severe flooding, leading to landslides in mountainous regions. Efforts to restore power and provide clean water were hindered by the storm, prolonging the devastation for many residents. The northern coast of the Dominican Republic experienced similar challenges, with heavy rains causing rivers to overflow and displacing communities in flood-prone areas.',
      },
      {
        id: 5,
        text: 'The aftermath of Hurricane Beryl saw a massive mobilization of relief efforts across the Caribbean. Local governments, international organizations, and humanitarian aid agencies united to establish emergency shelters and distribute essential supplies such as food, water, and medical aid.',
      },
      {
        id: 6,
        text: 'The economic and social impacts of Hurricane Beryl will be felt for years to come. The destruction of millions of dollars in infrastructure and agricultural land has set back economic development in many parts of these Caribbean islands.',
      },
    ],
  },
  {
    id: 2,
    title: 'The Essence of Carnival: A Celebration of Festivity and Tradition',
    date: 'July 28, 2024',
    author: 'Evin St Clair',
    image: caribbeanCarnivalArticleImage,
    summary:
      'Carnival in the Caribbean is a vibrant display of colors, music, and dance, rooted in history and cultural significance...',
    paragraphs: [
      {
        id: 1,
        text: 'Carnival in the Caribbean is a vibrant display of colors, music, and dance, rooted in history and cultural significance. This celebration can be traced back to the late 18th century in Trinidad and Tobago, where enslaved Africans and free people of color created their own festivities in response to exclusion from European masquerade balls. These traditions, infused with perseverance and defiance, have spread throughout the Caribbean over the years, with each island offering its unique take on the celebration.',
      },
      {
        id: 2,
        text: 'Today, carnival celebrations typically span a month long. Each island has its schedule: pre-Ash Wednesday for Trinidad, Martinique, and Guadeloupe; late July for Barbados and St. Lucia; and August for Grenada. The climax comes with Carnival Monday and Tuesday, featuring vibrant parades and parties.',
      },
      {
        id: 3,
        text: 'Each island offers a unique experience. Trinidad\'s carnival is the largest and most energetic, while Barbados\' Crop Over combines festivities with beach relaxation. Anguilla provides a more laid-back experience, and Dominica’s Mas Domnik offers a mix of excitement and the ability to relax.',
      },
      {
        id: 4,
        text: 'Essential Terms: \n\n- **Band**: Your group for "playing Mas."\n- **J’ouvert**: A pre-dawn celebration starting Carnival Monday.\n- **Playing Mas**: Participating in costumed events, especially on Carnival Tuesday.\n- **Soca**: The rhythmic heart of carnival music.\n- **Whine**: A signature dance style with circular hip movements.',
      },
    ],
  },
];

const Discover = () => {
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

  return (
    <div className="discover-frame">
      <h2 className="discover-title hidden" data-animation="animate-slide-in-left">
        Discover Caribbean
      </h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-card hidden"
            data-animation="animate-fade-in"
            onClick={() => navigate(`/article/${article.id}`)} 
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
};

export default Discover;
