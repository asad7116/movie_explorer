import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { fetchMovies } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search movies..." 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
