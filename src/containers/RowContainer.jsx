import React from 'react';
import RowComponent from '../components/RowComponent';
import useMovies from '../hooks/UseMoviceDatas';
import useMoviceModal from '../hooks/common/useMoviceModal';

const RowContainer = () => {
  const { trendingData, topRatedData, actionMoviesData, comedyMoviesData } = useMovies();
  const { modalOpen, selectedMovie, handleClick, setModalOpen } = useMoviceModal();
  const rowComponents = [
    { title: 'Trending Now', id: 'TN', data: trendingData },
    { title: 'Top Rated', id: 'TR', data: topRatedData },
    { title: 'Action Movies', id: 'AM', data: actionMoviesData },
    { title: 'Comedy Movies', id: 'CM', data: comedyMoviesData },
  ];

  return (
    <div>
      {rowComponents.map(({ title, id, data }) => (
        <RowComponent
          key={id}
          title={title}
          id={id}
          data={data}
          modalOpen={modalOpen}
          selectedMovie={selectedMovie}
          handleClick={handleClick}
          setModalOpen={setModalOpen}
        />
      ))}
    </div>
  );
};

export default RowContainer;
