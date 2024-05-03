import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import useScroll from '../hooks/common/useNavbar';

const NavComponent = () => {
  const Show = useScroll(50);

  return (
    <NavWrapper Show={Show}>
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
  right: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  background-color: ${({ Show }) => (Show ? '#090b13' : 'transparent')};

  z-index: 3;
`;
//Props 경고 발생으로 인해 DOM에 전달하지 않도록 설정
NavWrapper.shouldForwardProp = (prop) => prop !== 'Show';

const Loge = styled.a`
  padding: 0;
  width: 80px;
  height: 50px;
  margin-top: 4px;
  margin-bottom: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
    cursor: pointer;
  }
`;
