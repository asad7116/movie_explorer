import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => (
  <div>
    <Link to={`/movie/${movie.id}`}>
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </Link>
  </div>
);

export default MovieItem;
