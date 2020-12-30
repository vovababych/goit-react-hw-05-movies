import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FetchMovies from '../services/fetchMovies';

function Home({ match }) {
  // const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);
  console.log(movies);
  useEffect(() => {
    FetchMovies.FetchAllMovies().then(({ page, results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title ?? movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Home;
