import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import MovieItem from '../components/MovieItem';

const FavoritesPage = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies added.</p>
      ) : (
        favorites.map((movie) => <MovieItem key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default FavoritesPage;
