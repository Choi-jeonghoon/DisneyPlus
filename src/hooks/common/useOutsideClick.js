import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
     // console.log('ref.current:', ref.current);
      //console.log('event.target:', event.target);

      // wrapper-modal을 클릭했을 때만 모달을 닫음
      if (ref.current && !ref.current.contains(event.target)) {
        if (event.target.classList.contains('wrapper-modal')) {
          //console.log('Outside click detected, closing modal');
          handler();
        } else {
         // console.log('Inside click detected, not closing modal');
        }
      } else {
        //console.log('Inside click detected, not closing modal');
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
