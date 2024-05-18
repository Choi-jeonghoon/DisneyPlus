import React from 'react';
import { useParams } from 'react-router-dom';
import DeatilComponent from '../components/DeatilComponent';
import useMovieDetail from '../hooks/UseMoviceDetail';

const DetailContainer = () => {
  const { movieId } = useParams();
  const { movie, error, loading } = useMovieDetail(movieId);

  return (
    <div>
      <DeatilComponent movie={movie} error={error} loading={loading} />
    </div>
  );
};

export default DetailContainer;
