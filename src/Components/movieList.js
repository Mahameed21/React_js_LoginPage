import React from 'react';
import "../Styles/home.css"; // Make sure to import your CSS here.

const MovieList = ({ title, year, releasedDate, country, poster, imdbRating, image }) => {
  return (
    <div className="movieCard">
      <div className="movieCardInner">
        {/* Front side of the card */}
        <div className="movieCardFront">
        <img src={image} alt='image not loaded' className='imageStyle' />
        <div className='movieDataStyle'>
        <h4>{title}</h4>
          <p><strong>Year:</strong> {year}</p>
          <p><strong>Released:</strong> {releasedDate}</p>
          <p><strong>Country:</strong> {country}</p>
          <p><strong>IMDB Rating:</strong> {imdbRating}</p>
        </div>
        </div>

        {/* Back side of the card */}
        <div className="movieCardBack">

          <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

        </div>
      </div>
    </div>
  );
};

export default MovieList;
