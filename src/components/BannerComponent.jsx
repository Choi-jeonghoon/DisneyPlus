import React, { useState } from 'react';
import '../components/Banner.css';
import styled from 'styled-components';

const BannerComponent = ({ movies, truncate }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked ? (
        <>
          <Container>
            <CloseButton onClick={() => setIsClicked(false)}>X</CloseButton>
            <HomeContainer>
              <Iframe
                src={`https://www.youtube.com/embed/${movies.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=0&playlist=${movies.videos.results[0].key}`}
                width='440'
                height='270'
                allow='autoplay; fullscreen'
              ></Iframe>
            </HomeContainer>
          </Container>
        </>
      ) : (
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
                  Trailer Play
                </button>
              )}
            </div>
            <p className='banner__description'>{truncate(movies.overview, 100)}</p>
          </div>
          <div className='banner__fadeBottom' />
        </header>
      )}
    </>
  );
};

export default BannerComponent;

const Container = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 80%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  top: 2px;
  right: 2px;
  margin-left: 10px;
  background-color: #040714;
  color: white;
  border: none;
  width: auto;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
`;
