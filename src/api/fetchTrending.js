import customAxios from './index'; // axios 인스턴스 import
import requests from './request'; // 요청 엔드포인트 import

async function fetchTrending() {
  try {
    // axios 인스턴스를 사용하여 현재 상영중인 영화 데이터를 요청합니다.
    const response = await customAxios.get(`${requests.fetchTrending}/week`, {});
    // 응답 데이터를 반환합니다.
    return response.data;
  } catch (error) {
    // 오류가 발생했을 경우, 오류를 콘솔에 출력합니다.
    console.error('Error fetchTrending:', error);
    // 빈 배열 또는 다른 기본값을 반환합니다.
    return [];
  }
}

export default fetchTrending;
