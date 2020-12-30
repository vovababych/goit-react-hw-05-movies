import axios from 'axios';
const API_KEY = 'api_key=81f248d3c9154788229a5419bb33091a';

function FetchAllMovies() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?${API_KEY}`)
    .then(res => res.data);
}

function FetchSearchMovies(searchQuery) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${searchQuery}&page=1`,
    )
    .then(res => res.data);
}

function FetchAboutMovie(movieId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?${API_KEY}`)
    .then(res => res.data);
}

function FetchActors(movieId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?${API_KEY}`)
    .then(res => res.data.cast);
}

function FetchReviews(movieId) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?${API_KEY}`)
    .then(res => res.data.results);
}

export {
  FetchAllMovies,
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
