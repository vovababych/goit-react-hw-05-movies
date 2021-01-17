import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
import MoviesList from '../MoviesList';
import SearchForm from '../SearchForm';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (query === '') return;
    setStatus('pending');
    Api.FetchSearchMovies(query).then(data => {
      if (data.results.length > 0) {
        setMovies(data.results);
        setStatus('resolved');
        return;
      }
      setStatus('rejected');
    });
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
  };

  if (status === 'pending') {
    return (
      <>
        <SearchForm onSubmit={handleFormSubmit} />
        <h1>Загрузка ...</h1>
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <SearchForm onSubmit={handleFormSubmit} />
        <h1> ничего нет </h1>
      </>
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <SearchForm onSubmit={handleFormSubmit} />
        <MoviesList movies={movies} />
      </>
    );
  }

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
    </>
  );
}
