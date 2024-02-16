import axios from 'axios';
import { useEffect, useState } from 'react';

const apiKey = 'api_key=f50c0a327ad9f74a43c2e114bf8126ff';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const useMovie = query => {
  const [filmData, setFilmData] = useState({}); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${query}${apiKey}`);
        setFilmData(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getFilms();
  }, [query]);

  return { filmData, isLoading, error };
};

export default useMovie;
