import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchComponent = ({ searchResults, searchTerm }) => {
  const navigate = useNavigate();

  //console.log(searchResults);
  return searchResults.length > 0 ? (
    <SearchContainer>
      {searchResults.map(
        (movie) =>
          movie.backdrop_path !== null &&
          movie.media_type !== 'person' && (
            <Movie key={movie.id}>
              <MovieColumnPoster onClick={() => navigate(`/${movie.id}`)}>
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt='movie'
                />
              </MovieColumnPoster>
            </Movie>
          ),
      )}
    </SearchContainer>
  ) : (
    <NoResults>
      <div>
        <p>찾고자하는 검색어 "{searchTerm}" 에 맞는 영화가 없습니다.</p>
      </div>
    </NoResults>
  );
};

const SearchContainer = styled.section`
  background-color: black;
  width: 100%;
  text-align: center;
  padding: 5rem 0;
`;

const NoResults = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  color: #c5c5c5;
  height: 100%;
  padding: 8rem;
`;

const Movie = styled.div`
  flex: 1 1 auto;
  display: inline-block;
  padding-right: 0.5rem;
  padding-bottom: 7rem;
`;

const MovieColumnPoster = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  -webkit-transition: transform 0.3s;

  &:hover {
    transform: scale(1.25);
  }
`;

const MoviePoster = styled.img`
  width: 90%;
  border-radius: 5px;
`;

export default SearchComponent;
