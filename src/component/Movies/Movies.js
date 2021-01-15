import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';

import MoviesList from '../MoviesList';
import SearchForm from '../SearchForm';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(() => {
    return JSON.parse(localStorage.getItem('movies'));
  });

  useEffect(() => {
    if (query === '') return;
    Api.FetchSearchMovies(query).then(data => {
      setMovies(data.results);
      localStorage.setItem('movies', JSON.stringify(movies));
    });
  }, [movies, query]);

  const handleFormSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      <MoviesList movies={movies} />
    </>
  );
}
