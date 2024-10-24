
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchMovies = async (query) => {
    const response = await axios.get(`API_URL_HERE?search=${query}`);
    setMovies(response.data);
  };

  const fetchMovieDetails = async (id) => {
    const response = await axios.get(`API_URL_HERE?id=${id}`);
    setMovieDetails(response.data);
  };

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  return (
    <AppContext.Provider value={{ movies, fetchMovies, movieDetails, fetchMovieDetails, favorites, addToFavorites }}>
      {children}
    </AppContext.Provider>
  );
};


