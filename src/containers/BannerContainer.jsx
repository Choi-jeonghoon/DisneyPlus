import React from 'react';
import useNowPlayingMovies from '../hooks/useNowPlaying';
import useTruncate from '../hooks/common/useTruncate';
import BannerComponent from '../components/BannerComponent';

const BannerContainer = () => {
  // useNowPlayingMovies 훅을 사용하여 현재 상영 중인 영화 데이터 가져오기
  const { movies, loading, error } = useNowPlayingMovies();
  const truncate = useTruncate;

  // 로딩 중일 때 보여줄 화면
  if (loading) {
    return <div>Loading...</div>;
  }

  // 에러 발생 시 보여줄 화면
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 데이터가 정상적으로 로드된 경우, BannerComponent에 데이터를 전달하여 렌더링
  return (
    <div>
      <BannerComponent movies={movies} truncate={truncate} />
    </div>
  );
};

export default BannerContainer;
