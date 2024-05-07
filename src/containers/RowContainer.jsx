import React from 'react';
import RowComponent from '../components/RowComponent';
import useMovies from '../hooks/UseMoviceDatas';

const RowContainer = () => {
  const { trendingData, topRatedData, actionMoviesData, comedyMoviesData } = useMovies();
  return (
    <div>
      <RowComponent title='Tredning Now' id='TN' data={trendingData} />
      <RowComponent title='Top Rated' id='TR' data={topRatedData} />
      <RowComponent title='Action Movies' id='AM' data={actionMoviesData} />
      <RowComponent title='Comdy Movies' id='TN' data={comedyMoviesData} />
    </div>
  );
};

export default RowContainer;
