// useScroll 커스텀 훅을 import합니다.
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 스크롤 이벤트를 관리하는 커스텀 훅을 정의합니다.
const useScroll = (limit) => {
  // 스크롤 상태를 관리하는 상태 변수를 선언합니다.
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 한 번만 스크롤 이벤트를 등록합니다.
  useEffect(() => {
    // 스크롤 이벤트 핸들러를 정의합니다.
    const handleScroll = () => {
      // 현재 스크롤 위치를 가져옵니다.
      const scrollY = window.scrollY;
      //console.log(scrollY);
      // 만약 스크롤 위치가 임계값 이상이면 스크롤 상태를 true로 업데이트합니다.
      if (scrollY > limit) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 스크롤 이벤트를 등록합니다.
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트를 정리합니다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [limit]); // 임계값이 변경될 때마다 useEffect를 다시 실행합니다.

  // 스크롤 상태를 반환합니다.
  return isScrolled;
};

// 커스텀 훅을 export합니다.
export default useScroll;
