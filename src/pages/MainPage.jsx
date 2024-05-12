import React from 'react';
import styled from 'styled-components';
import backgroundImage from '/images/home-background.png';
import NavComponent from '../commons/NavCompoent';
import BannerContainer from '../containers/BannerContainer';
import CategoryContainer from '../containers/CategoryContainer';
import RowContainer from '../containers/RowContainer';

const MainPage = () => {
  return (
    <Container>
      <NavComponent />
      <BannerContainer />
      <CategoryContainer />
      <RowContainer />
    </Container>
  );
};

export default MainPage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw +5px);

  &:after {
    background: url(${backgroundImage}) center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
