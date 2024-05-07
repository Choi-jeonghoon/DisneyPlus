const requests = {
  fetchNowPlaying: '/movie/now_playing',
  fetchTrending: '/trending/movie', //요즘 트랜드
  fetchTopRated: '/movie/top_rated', //랭킹
  fetchActionMovies: '/discover/movie?with_genres=28', //액션 영화
  fetchComedyMovies: '/discover/movie?with_genres=35', //코미디 영화
  fetchHorrorMovies: '/discover/movie?with_genres=27', // 호러 영화
  fetchRomancelMovies: '/discover/movie?with_genres=10749', //로맨스 영화
  fetchDocumentaries: '/discover/movie?with_genres=99',
};

export default requests;
