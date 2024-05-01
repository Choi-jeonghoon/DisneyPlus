import { useEffect, useState } from 'react';
import fetchNowPlayingMovies from '../api/fetchNowPlaying';

function useNowPlayingMovies() {
  // 현재 상영 중인 영화 데이터 저장
  const [movies, setMovies] = useState([]);
  // 데이터를 불러오는 동안의 로딩 상태 저장
  const [loading, setLoading] = useState(true);
  // 데이터 요청 중 발생한 에러 상태 저장
  const [error, setError] = useState(null);

  useEffect(() => {
    // useEffect 내에서 즉시 실행 함수를 사용하여 fetchData 함수를 호출
    (async () => {
      try {
        setLoading(true);
        setError(null);
        // fetchNowPlayingMovies 함수를 호출하여 현재 상영중인 영화 데이터를 가져옵니다.
        const data = await fetchNowPlayingMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { movies, loading, error };
}

export default useNowPlayingMovies;
