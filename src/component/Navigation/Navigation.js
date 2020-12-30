import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink exact to="/" className={s.base} activeClassName={s.active}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={s.base} activeClassName={s.active}>
          Movies{' '}
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
