import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/gallery.css';

// Asset imports based on your provided names and locations:
import mainGalleryImage from '../assets/misc/soca_home_page_img.png';
import yearGalleryImage from '../assets/Gallery/Carnival2025.jpg';
import video1 from '../assets/Gallery/Carnival2025Video1.mp4';
import video2 from '../assets/Gallery/Carnival2025Video2.mp4';
import video3 from '../assets/Gallery/Carnival2025Video3.mp4';

const Gallery = () => {
  // Views: "main" => folder view, "year" => inside folder view, "event" => media grid view
  const [view, setView] = useState('main');
  const navigate = useNavigate();

  const goToYearView = () => setView('year');
  const goToEventView = () => setView('event');

  const goBack = () => {
    if (view === 'year') {
      setView('main');
    } else if (view === 'event') {
      setView('year');
    }
  };

  return (
    <div className="gallery-container">
      {view !== 'main' && (
        <button className="back-button" onClick={goBack}>Back</button>
      )}

      {view === 'main' && (
        <div className="gallery-main" onClick={goToYearView}>
          <img
            src={mainGalleryImage}
            alt="2024 - 2025 Gallery"
            className="gallery-folder"
          />
          <p className="folder-label">2024 - 2025</p>
        </div>
      )}

      {view === 'year' && (
        <div className="gallery-year" onClick={goToEventView}>
          <img
            src={yearGalleryImage}
            alt="See What We're Up To"
            className="gallery-year-preview"
          />
          <p className="year-label">See What We're Up To</p>
        </div>
      )}

      {view === 'event' && (
        <div className="gallery-event">
          <div className="media-grid">
            <div className="media-item">
              <video className="media-content" controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="media-item">
              <video className="media-content" controls>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="media-item">
              <video className="media-content" controls>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Additional media items added later will automatically be formatted */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
