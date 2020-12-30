import { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import * as FetchMovies from '../services/fetchMovies';
import s from '../component/Navigation/Navigation.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetail({ match }) {
  const [detailMovie, setDetailMovie] = useState('');
  const { movieId } = match.params;

  useEffect(() => {
    FetchMovies.FetchAboutMovie(movieId).then(setDetailMovie);
  }, [movieId]);

  const { overview, poster_path, release_date, title, genres } = detailMovie;
  const genrs = genres && genres.map(genr => genr.name).join(', ');
  const releaseData = release_date && release_date.slice(0, 4);

  return (
    detailMovie && (
      <>
        <div>
          <div>
            <img src={`${BASE_URL}${poster_path}`} alt={title} />
          </div>
          <div>
            <h2>{`${title} (${releaseData})`}</h2>
            <p>Overview: </p>
            <p>{overview}</p>
            <p>Genres: </p>
            <p>{genrs && genrs}</p>
          </div>
        </div>
        <div>
          <NavLink
            to={`${match.url}/cast`}
            className={s.base}
            activeClassName={s.active}
          >
            Cast
          </NavLink>
          <br />
          <NavLink
            to={`${match.url}/review`}
            className={s.base}
            activeClassName={s.active}
          >
            Rewiev
          </NavLink>
        </div>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/review`} component={Reviews} />
      </>
    )
  );
}
