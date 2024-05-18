import { useState, useRef } from 'react';

const useMoviceModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const modalRef = useRef(); // modalRef 생성

  const handleClick = (item) => {
    setModalOpen(true);
    setSelectedMovie(item);
  };

  return {
    modalOpen,
    selectedMovie,
    setModalOpen,
    handleClick,
    modalRef,
  };
};

export default useMoviceModal;
