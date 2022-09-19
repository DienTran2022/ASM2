// Tạo các info dữ liệu cần thiết

export const imageBasePath = `https://api.themoviedb.org/3`;

export const API_KEY = `66360006c856854e580e34d0ef9d0f1e`;

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

export const url = {
  Banner: `${imageBasePath}${requests.fetchNetflixOriginals}`,

  Trending: `${imageBasePath}${requests.fetchTrending}`,

  TopRate: `${imageBasePath}${requests.fetchTopRated}`,

  Action: `${imageBasePath}${requests.fetchActionMovies}`,

  Comedy: `${imageBasePath}${requests.fetchComedyMovies}`,

  Horror: `${imageBasePath}${requests.fetchHorrorMovies}`,

  Romance: `${imageBasePath}${requests.fetchRomanceMovies}`,

  Document: `${imageBasePath}${requests.fetchDocumentaries}`,

  nameTrending: `Xu hướng`,
  nameTopRate: `Xếp hạng cao `,
  nameAction: `Hành động`,
  nameComedy: `Hài`,
  nameHorror: `Kinh dị`,
  nameRomance: `Lãng mạn`,
  nameDocument: `Tài liệu`,
};

export const imageSizePath = `http://image.tmdb.org/t/p/original`;
