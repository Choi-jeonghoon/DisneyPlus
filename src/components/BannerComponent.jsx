import React from 'react';
import '../components/Banner.css';
// 문자열을 지정된 길이로 자르는 truncate 함수
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};

const BannerComponent = ({ movies }) => {
  console.log(movies);
  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <div style={{ fontSize: 10 }} className='banner__contents'>
        <h1 className='banner__title'>{movies.title || movies.name || movies.original_name}</h1>

        <div className='banner__buttons'>
          {movies?.videos?.results[0]?.key && (
            <button className='banner__button play' onClick={() => setIsClicked(true)}>
              Play
            </button>
          )}
        </div>
        <p className='banner__description'>{truncate(movies.overview, 100)}</p>
      </div>
      <div className='banner__fadeBottom' />
    </header>
  );
};

export default BannerComponent;
