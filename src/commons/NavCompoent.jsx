import React from 'react';
import styled from 'styled-components';
import logo from '../../public/images/logo.svg';

const NavComponent = () => {
  return (
    <NavWrapper>
      <Loge>
        <img alt='Disney Plus' src={logo} onClick={() => (window.location.href = '/')} />
      </Loge>
    </NavWrapper>
  );
};

export default NavComponent;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  rigth: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  background-color: #090b13;
  z-index: 3;
`;
const Loge = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
    cursor: pointer;
  }
`;
