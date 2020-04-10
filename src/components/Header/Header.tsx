import React from 'react';
import styled from 'styled-components';
import {NavLink as RouterLink} from 'react-router-dom';

const ActiveNavLink = {
  boxShadow: '0px 3px 0 0 var(--color-accent)',
};

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0 var(--padding);
`;

const Logo = styled.div`
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: -1px;
`;

const NavLink = styled(RouterLink)`
  margin-left: 20px;
`;

const StyledHeader = styled.header`
  backdrop-filter: blur(5px);
  background-color: var(--color-dark-translucent);
  height: 60px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

export function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Container>
        <Logo>{'Gauzy ⚗️ Frontend'}</Logo>
        <nav>
          <NavLink exact to="/" activeStyle={ActiveNavLink}>
            {'Home'}
          </NavLink>
          <NavLink to="/about" activeStyle={ActiveNavLink}>
            {'About'}
          </NavLink>
        </nav>
      </Container>
    </StyledHeader>
  );
}
