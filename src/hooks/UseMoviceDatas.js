import { useState, useEffect } from 'react';
import fetchActionMovies from '../api/fetchActionMovies';
import fetchComedyMovies from '../api/fetchComedyMovies';
import fetchTopRated from '../api/fetchTopRated';
import fetchTrending from '../api/fetchTrending';

const useMovieData = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [actionMoviesData, setActionMoviesData] = useState([]);
  const [comedyMoviesData, setComedyMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResponse = await fetchTrending();
        setTrendingData(trendingResponse.results);
      } catch (error) {
        console.error('Error fetching trending data:', error);
      }

      try {
        const topRatedResponse = await fetchTopRated();
        setTopRatedData(topRatedResponse.results);
      } catch (error) {
        console.error('Error fetching top rated data:', error);
      }

      try {
        const actionMoviesResponse = await fetchActionMovies();
        setActionMoviesData(actionMoviesResponse.results);
      } catch (error) {
        console.error('Error fetching action movies data:', error);
      }

      try {
        const comedyMoviesResponse = await fetchComedyMovies();
        setComedyMoviesData(comedyMoviesResponse.results);
      } catch (error) {
        console.error('Error fetching comedy movies data:', error);
      }
    };

    fetchData();
  }, []);

  return { trendingData, topRatedData, actionMoviesData, comedyMoviesData };
};

export default useMovieData;
