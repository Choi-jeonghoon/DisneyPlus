// useMovieDetail.js

import { useEffect, useState } from 'react';
import customAxios from '../api/index';

const useMovieDetail = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setError(null);
      try {
        const response = await customAxios.get(`/movie/${movieId}`);
        if (response.status === 404) {
          console.log('Movie details not found');
          setError('Movie details not found');
          setLoading(false);
          return;
        }
        console.log('response', response);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        if (!error) {
          console.error('Error fetching movie details:', error);
          setError('Error fetching movie details');
        }
      }
    }
    fetchData();
  }, [movieId, error]);

  return { movie, error, loading };
};

export default useMovieDetail;
