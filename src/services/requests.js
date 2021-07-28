const API_KEY = "f2258f1747954de853c6c85f19dcae05";

const requests = {
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `/trending/all/day?api_key=${API_KEY}`,
  comedy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  action: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  drama: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fantasy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
  romantic: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default requests;
