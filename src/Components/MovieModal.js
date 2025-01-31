import React from "react";
import "../Styles/modal.css";  // Assuming you want to style the modal

const MovieModal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{movie.Title}</h2>
        <img src={movie.Images[0]} alt={movie.Title} className="imageStyle1" />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Released:</strong> {movie.Released}</p>
        <p><strong>Country:</strong> {movie.Country}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Description:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieModal;
