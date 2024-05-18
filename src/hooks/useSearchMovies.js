import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import customAxios from '../api/index';
import { debounce } from 'lodash';

const useSearchMovies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('q');

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

  // 입력값이 변경될 때마다 호출되는 함수
  const delayedFetchSearchMovie = debounce(fetchSearchMovie, 500);

  useEffect(() => {
    if (searchTerm) {
      delayedFetchSearchMovie(searchTerm); // debounce된 함수 호출
    }
    // cleanup 함수
    return () => {
      delayedFetchSearchMovie.cancel(); // 컴포넌트가 언마운트될 때 debounce된 함수를 취소
    };
  }, [searchTerm, delayedFetchSearchMovie]);

  return { searchResults, searchTerm };
};

export default useSearchMovies;
