import React from 'react';
import {css} from 'linaria';

const main = css`
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0 var(--padding);
  width: 100%;
`;

export function Main({children}: {children: React.ReactNode}): JSX.Element {
  return <main className={main}>{children}</main>;
}
