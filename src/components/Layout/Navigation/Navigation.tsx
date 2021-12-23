import { FC } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from './Navigation.interface';
import '../Navigation/Navigation.css';

function Navigation(Navigation: navigation) {
  return (
    <header className="navWrapper">
      <div className="nav-wrap">
        <Link className="logo-text" to="/">
          Bitdegree
        </Link>
        <Link className="nav-link" to={Navigation.link}>
          {Navigation.buttonText}
        </Link>
      </div>
    </header>
  );
}

export default Navigation;
