// src/hooks/useAuth.js
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const useAuth = () => {
  const { pathname } = useLocation(); //현재 경로
  //console.log(pathname);
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //로컬스토리지로 로그인정보를 가지게했다.
  //페이지를 닫아도 로그인을 유지하게 만들기위해서 로컬을 선택했다.
  // 페이지를 닫아도 유지안하게 위해서는 세션스토리지를 사용하면된다.
  //-> 로컬스토리지 : 사용자 로그인 상태 사용자설정 장바구니 등등에 활용하면된다.
  //-> 세션스토리지 : 한페이지에서의 세션데이터 또는 특정 브라우저에서만 필요한 임시 데이터 일때 활용하는게 좋다.
  const initialUserData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : {};
  const [userData, setUserData] = useState(initialUserData);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        localStorage.setItem('userData', JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        localStorage.removeItem('userData');
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // 추가적으로 로그인 페이지에서만 동작하게 하기 위해서 추가 조건을 달아준다.
        if (pathname === '/') {
          navigate('/main');
        }
      } else {
        navigate('/');
      }
    });
  }, [auth, navigate, pathname]);

  return { userData, handleAuth, handleSignOut };
};

export default useAuth;
