import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavigationInterface } from './Navigation.interface';
import { NavigationWrapper } from './Navigation.styles';

const Navigation: FC<NavigationInterface> = (props: NavigationInterface) => (
  <NavigationWrapper>
    <div className="nav-wrap">
      <Link className="logo-text" to="/">
        Bitdegree
      </Link>
      <Link className="nav-link" to={props.link}>
        {props.btnText}
      </Link>
    </div>
  </NavigationWrapper>
);

export default Navigation;
