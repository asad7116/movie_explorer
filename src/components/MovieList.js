import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import MovieItem from './MovieItem';

const MovieList = () => {
  const { movies } = useContext(AppContext);

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
