import React from 'react';
import RowComponent from '../components/RowComponent';
import useMovies from '../hooks/UseMoviceDatas';
import useMoviceModal from '../hooks/common/useMoviceModal';

const RowContainer = () => {
  const { trendingData, topRatedData, actionMoviesData, comedyMoviesData } = useMovies();
  const { modalOpen, selectedMovie, openModal, closeModal } = useMoviceModal();

  //코드가 공통적인 모습이 너무 길게 있어서 간단한 데이터 묶음
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
          openModal={openModal}
          closeModal={closeModal}
        />
      ))}
    </div>
  );
};

export default RowContainer;
