import customAxios from './index'; // axios 인스턴스 import
import requests from './request'; // 요청 엔드포인트 import

// 현재 상영중인 영화 데이터를 가져오는 함수
async function fetchComedyMovies() {
  try {
    // axios 인스턴스를 사용하여 현재 상영중인 영화 데이터를 요청합니다.
    const response = await customAxios.get(requests.fetchComedyMovies, {
      //만약 API_Key 부분의 파라미터가 다른거면 아래처럼 각 요청마다 해줘야되겠지만 그게 아니기에
      // 해당방법은 유호하지 않다 처음 axios를 설정할때 params에서 설정한다.
      // params: {
      //   api_key: import.meta.env.VITE_API_KEY,
      // },
    });
    // 응답 데이터를 반환합니다.
    return response.data;
  } catch (error) {
    // 오류가 발생했을 경우, 오류를 콘솔에 출력합니다.
    console.error('Error fetchComedyMovies:', error);
    // 빈 배열 또는 다른 기본값을 반환합니다.
    return [];
  }
}

export default fetchComedyMovies;
