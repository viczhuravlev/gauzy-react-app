import React from 'react';

import {
  ActiveNavLink,
  Container,
  Logo,
  NavLink,
  StyledHeader,
} from './Header.styles';

export function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Container>
        <Logo>Gauzy ⚗️ Frontend</Logo>
        <nav>
          <NavLink exact to="/" activeStyle={ActiveNavLink}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={ActiveNavLink}>
            About
          </NavLink>
        </nav>
      </Container>
    </StyledHeader>
  );
}
