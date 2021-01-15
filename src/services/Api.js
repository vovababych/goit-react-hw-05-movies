import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '81f248d3c9154788229a5419bb33091a',
    language: 'en-US',
  },
});

function FetchInTrendMovies() {
  return AXIOS.get(`trending/all/day`).then(res => res.data);
}

function FetchSearchMovies(query) {
  return AXIOS.get(`search/movie?&query=${query}&page=1`).then(res => res.data);
}

function FetchAboutMovie(movieId) {
  return AXIOS.get(`movie/${movieId}?`).then(res => res.data);
}

function FetchActors(movieId) {
  return AXIOS.get(`movie/${movieId}/credits?`).then(res => res.data.cast);
}

function FetchReviews(movieId) {
  return AXIOS.get(`movie/${movieId}/reviews?`).then(res => res.data.results);
}

export {
  FetchInTrendMovies,
  FetchSearchMovies,
  FetchAboutMovie,
  FetchActors,
  FetchReviews,
};

//------поиск кинофильма по ключевому слову на странице фильмов-------
// https://api.themoviedb.org/3/search/movie?api_key=81f248d3c9154788229a5419bb33091a&query=good&page=1

//-------запрос полной информации о фильме для страницы кинофильма---------
// https://api.themoviedb.org/3/movie/648371?api_key=81f248d3c9154788229a5419bb33091a

// -------запрос информации о актёрском составе для страницы кинофильма--------
// https://api.themoviedb.org/3/movie/648371/credits?api_key=81f248d3c9154788229a5419bb33091a

//--------запрос обзоров для страницы кинофильма----------
// https://api.themoviedb.org/3/movie/648371/reviews?api_key=81f248d3c9154788229a5419bb33091a&page=1
