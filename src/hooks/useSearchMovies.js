import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import customAxios from '../api/index';
import { debounce } from 'lodash';

const useSearchMovies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('q');

  // debounce된 함수를 컴포넌트가 처음 마운트될 때 한 번만 생성합니다.
  const delayedFetchSearchMovie = useMemo(
    () =>
      debounce(async (searchTerm) => {
        try {
          const response = await customAxios.get(
            `/search/multi?include_adult=false&query=${searchTerm}`,
          );
          setSearchResults(response.data.results);
          console.log('response', response);
        } catch (error) {
          console.error(error);
        }
      }, 500),
    [],
  ); // 500ms의 지연 시간을 설정합니다.

  useEffect(() => {
    // 입력이 멈추고 검색어가 완전히 입력된 후에 debounce된 함수를 호출합니다.
    if (searchTerm && searchTerm.trim() !== '') {
      delayedFetchSearchMovie(searchTerm);
    }
    // cleanup 함수
    return () => {
      delayedFetchSearchMovie.cancel();
    };
  }, [searchTerm, delayedFetchSearchMovie]);

  return { searchResults, searchTerm };
};

export default useSearchMovies;
