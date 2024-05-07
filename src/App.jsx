import React from 'react';
import styled from 'styled-components';
import './App.css';
import NavComponent from './commons/NavCompoent';
import backgroundImage from '/images/home-background.png';
import BannerContainer from './containers/BannerContainer';
import CategoryContainer from './containers/CategoryContainer';

function App() {
  return (
    <MainPage>
      <NavComponent />
      <BannerContainer />
      <CategoryContainer />
    </MainPage>
  );
}

export default App;

const MainPage = styled.main`
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
