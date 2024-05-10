import { useState } from 'react';

const useMoviceModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  //창 열기
  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  //창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  return {
    modalOpen,
    selectedMovie,
    openModal,
    closeModal,
  };
};

export default useMoviceModal;
