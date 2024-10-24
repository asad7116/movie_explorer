import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MovieDetails = () => {
  const { id } = useParams();
  const { fetchMovieDetails, movieDetails } = useContext(AppContext);

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id, fetchMovieDetails]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>Release Date: {movieDetails.releaseDate}</p>
      <p>Rating: {movieDetails.rating}</p>
      <p>{movieDetails.description}</p>
    </div>
  );
};

export default MovieDetails;
