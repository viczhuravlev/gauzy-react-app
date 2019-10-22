import React from 'react';

import {
  ActiveNavLink,
  FixedBar,
  Logo,
  NavLink,
  Wrapper,
} from './Header.styles';

export const Header: React.FunctionComponent = () => {
  return (
    <FixedBar>
      <Wrapper>
        <Logo>Vanilla Client</Logo>
        <nav>
          <NavLink exact to="/" activeStyle={ActiveNavLink}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={ActiveNavLink}>
            About
          </NavLink>
        </nav>
      </Wrapper>
    </FixedBar>
  );
};
