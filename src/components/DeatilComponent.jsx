import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DetailComponent = ({ movie }) => {
  if (!movie) {
    return null; // movie가 없는 경우에는 아무것도 렌더링하지 않습니다.
  }

  const { backdrop_path, poster_path, original_title, overview, release_date, vote_average } =
    movie;

  return (
    <DetailSection>
      {backdrop_path || poster_path ? (
        <PosterImage
          className='modal__poster-img'
          src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path}`}
          alt='Movie Poster'
        />
      ) : (
        <PlaceholderImage
          className='modal__placeholder-img'
          src='' // 기본 이미지 경로
          alt='Default Poster'
        />
      )}
      <MovieInfo>
        <Title>{original_title}</Title>
        <Overview>{overview}</Overview>
        <ReleaseDate>Release Date: {release_date}</ReleaseDate>
        <Rating>Rating: {vote_average}</Rating>
      </MovieInfo>
    </DetailSection>
  );
};
export default DetailComponent;

const DetailSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px;
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const PlaceholderImage = styled.img`
  /* Placeholder Image 스타일 */
`;

const MovieInfo = styled.div``;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ReleaseDate = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Rating = styled.p`
  font-size: 14px;
`;
