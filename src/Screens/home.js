import { useLocation } from "react-router-dom";
import { useUserContext } from "../context/context";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieList from "../Components/movieList";
import "../Styles/home.css";
import MovieModal from "../Components/MovieModal";

const Home = () => {
  const movieApi = "https://mocki.io/v1/4e2642e7-b26c-4c8d-931c-d8393f1a3318";
  //  const route = useLocation();
  const { userData } = useUserContext();
  console.log("userData :", userData);

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);  // State for selected movie
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  console.log(movieData);

  useEffect(() => {
    // Make the GET request when the component mounts
    axios
      .get(movieApi)
      .then((response) => {
        setMovieData(response.data); // Save the response data to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError(err.message); // Handle any error that occurs
        setLoading(false);
      });
  }, []); // Empty array means this effect runs only once when the component mounts

  // Render loading state or error message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const openMovieModal = (movie) => {
    setSelectedMovie(movie); // Set the clicked movie
    setIsModalOpen(true); // Open the modal
  };

  const closeMovieModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedMovie(null); // Reset selected movie
  };

  // const {fullName, mobile, email} = route.state || {}
  // console.log(fullName, mobile, email)
  return (
    <div className="homeMainContainer">
      <h1 className="headerText">Showing Movies Data</h1>

      <div className="movieGrid">
        {movieData.map((movie, index) => {
          return (
            <div key={index} onClick={() => openMovieModal(movie)}>
              <MovieList
                title={movie.Title}
                year={movie.Year}
                releasedDate={movie.Released}
                country={movie.Country}
                poster={movie.Poster}
                imdbRating={movie.imdbRating}
                image={movie.Images[0]}
              />
            </div>
          );
        })}
      </div>
      
      <MovieModal
        isOpen={isModalOpen} 
        onClose={closeMovieModal} 
        movie={selectedMovie} 
      />
    </div>
  );
};

export default Home;
