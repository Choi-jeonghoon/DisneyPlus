import React, { useRef } from 'react';
import './Row.css';
import MovieModalComponent from '../components/Modal/MovieModalCompoent';

//스와이퍼 모듈
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import styled from 'styled-components';

const RowComponent = ({ title, id, data, modalOpen, selectedMovie, handleClick, setModalOpen }) => {
  const modalRef = useRef(); // modalRef 생성

  const slidesCount = data.length; //슬라이더 사용 조건 을 위한 데이터 수

  return (
    <Container>
      <h2>{title}</h2>
      <CustomSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        //loop={true} //loop 기능을 사용 유무
        loop={slidesCount >= 6} //데이터가 6이상일때만
        navigation // arrow 버튼 사용 유무
        pagination={{ clickable: true }} //페이지 버튼 보이게 할지
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <Content id={id}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Wrap>
                <img
                  key={item.id}
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt={item.name}
                  onClick={() => handleClick(item)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </CustomSwiper>

      {modalOpen && (
        <MovieModalComponent {...selectedMovie} setModalOpen={setModalOpen} modalRef={modalRef} />
      )}
    </Container>
  );
};
//슬라이더를 이용하기전의 모습 코드 기록용
//   return (
//     <div>
//       <h2 className='title'>{title}</h2>
//       <div className='slider'>
//         <div
//           className='slider_arrow_left'
//           onClick={() => {
//             const element = document.getElementById(id);
//             element.scrollLeft -= 1000;
//           }}
//         >
//           <span className='arrow'>{'<'}</span>
//         </div>
//         <div id={id} className='row_posters'>
//           {data.map((item) => (
//             <img
//               key={item.id}
//               className='row_poster'
//               src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
//               alt={item.title}
//               onClick={() => handleClick(item)}
//             />
//           ))}
//         </div>
//         <div
//           className='slider_arrow_right'
//           onClick={() => {
//             const element = document.getElementById(id);
//             element.scrollLeft += 1000;
//           }}
//         >
//           <span className='arrow'>{'>'}</span>
//         </div>
//       </div>
//       {modalOpen && (
//         <MovieModalComponent {...selectedMovie} setModalOpen={setModalOpen} modalRef={modalRef} />
//       )}
//     </div>
//   );
// };

export default RowComponent;

const Container = styled.div`
  padding: 0 0 26px;
  margin: 10px;
`;

const Content = styled.div``;

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const CustomSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
  .swiper-pagination {
    bottom: 5px !important;
    text-align: right !important;
    margin-left: -20px !important;
  }
`;
