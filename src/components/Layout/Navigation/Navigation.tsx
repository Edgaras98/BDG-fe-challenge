import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavigationInterface } from './Navigation.interface';
import '../Navigation/Navigation.css';

const Navigation: FC<NavigationInterface> = (
  Navigation: NavigationInterface,
) => (
  <header className="navWrapper">
    <div className="nav-wrap">
      <Link className="logo-text" to="/">
        Bitdegree
      </Link>
      <Link className="nav-link" to={Navigation.link}>
        {Navigation.btnText}
      </Link>
    </div>
  </header>
);

export default Navigation;
