import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import customAxios from '../api/index';

const useSearchMovies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('q');

  useEffect(() => {
    const fetchSearchMovie = async (searchTerm) => {
      try {
        const response = await customAxios.get(
          `/search/multi?include_adult=false&query=${searchTerm}`,
        );
        setSearchResults(response.data.results);
        console.log('response', response);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  return { searchResults, searchTerm };
};

export default useSearchMovies;
