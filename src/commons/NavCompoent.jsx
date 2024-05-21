import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '/images/logo.svg';
import useScroll from '../hooks/common/useNavbar';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const NavComponent = () => {
  const Show = useScroll(10);
  const { pathname } = useLocation(); //현재 여기서 path 경로를 확인
  //console.log(pathname);

  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    //console.log(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const { userData, handleAuth, handleSignOut } = useAuth();

  return (
    <NavWrapper Show={Show}>
      <Loge>
        <img alt='Disney Plus' src={logo} onClick={() => (window.location.href = '/')} />
      </Loge>
      {pathname === '/' ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <Input
            className='nav__input'
            type='text'
            placeholder='검색어를 입력해주세요'
            value={searchValue}
            onChange={handleChange}
          />

          <SignOut>
            <UserImg src={userData.photoURL} alt={userData.displayName} />
            <DropDown>
              <span onClick={handleSignOut}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </NavWrapper>
  );
};

export default NavComponent;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // width: 100%;
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

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
  }
`;

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19)
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius:  4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  opacity: 0;
  visibility: hidden;
  
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      visibility: visible;
      transition-duration: 1s;
      min-width: 80px;
      max-width: 200px;
      background-color: black;
    }
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
