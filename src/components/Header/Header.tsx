import React from 'react';
import {css} from 'linaria';
import {NavLink} from 'react-router-dom';

const activeNavLink = {
  boxShadow: '0px 3px 0 0 var(--color-accent)',
};

const container = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0 var(--padding);
`;

const logo = css`
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: -1px;
`;

const navLink = css`
  margin-left: 20px;
`;

const header = css`
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
    <header className={header}>
      <div className={container}>
        <div className={logo}>{'Gauzy ⚗️ Frontend'}</div>
        <nav>
          <NavLink exact to="/" className={navLink} activeStyle={activeNavLink}>
            {'Home'}
          </NavLink>
          <NavLink to="/about" className={navLink} activeStyle={activeNavLink}>
            {'About'}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
