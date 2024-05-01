import axios from 'axios';

// 사용자 정의 axios 인스턴스 생성
const customAxios = axios.create({
  //환경 변수로 부터 API의 기본 URL 정보 가져오기. vite로 프로젝트를 생성했기에 VITE 명시할것
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    //헤더 설정
    'Content-Type': 'application/json; charset=utf-8',
  },
  params: {
    // 모든 요청에 포함되는 기본 매개변수 설정
    api_key: import.meta.env.VITE_API_KEY,
  },
  timeout: 3000,
});

//요청 인터셉터 설정 : 요청을 보내기 전에 실행될 함수이다.
customAxios.interceptors.request.use(
  //성공적으로 요청을 보내기 전에 실행될 함수. 현재 요청 설정을 반환함.
  (config) => {
    return config;
  },
  //요청에 대한 오류가 발생 했을 경우. 오류를 Promise로 반환
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정 : 응답을 받은 후 실행될 함수
customAxios.interceptors.response.use(
  (response) => {
    //응답이 성공적으로 도착했을 떄 실행되는 함수. 성공적이면 response를 반환
    return response;
  },
  //응답에 대한 오류가 발생할 경우 실행될 함수. 오류 발생시 promise로 반환
  (error) => {
    //오류 메세지 설정
    const errorMessage = 'This is response error message';
    //오류 객체에 추가적인 속성을 붙여서 반환
    const { config, response } = error;
    return Promise.reject({
      config: config, //현재 요청 설정
      message: errorMessage, //오류 메시지
      response: response, // 오류 응답
      ...error, //그외 에러 객체의 모든 속성들
    });
  },
);

export default customAxios;
