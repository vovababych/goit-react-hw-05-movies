import { useState, useEffect } from 'react';
import * as FetchMovies from '../services/fetchMovies';
import noImage from '../images/noImage.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function Cast({ match }) {
  const [actors, setActors] = useState(null);
  useEffect(() => {
    FetchMovies.FetchActors(match.params.movieId).then(setActors);
  }, [match.params.movieId]);

  return (
    <>
      <h2>Cast</h2>
      <ul>
        {actors &&
          actors.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${BASE_URL}${actor.profile_path}`
                    : noImage
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
