import React from 'react';
import SearchComponent from '../components/SearchComponent';
import useSearchMovies from '../hooks/useSearchMovies';

const SearchContainer = () => {
  const { searchResults, searchTerm } = useSearchMovies();

  return (
    <div>
      <SearchComponent searchResults={searchResults} searchTerm={searchTerm} />
    </div>
  );
};

export default SearchContainer;
