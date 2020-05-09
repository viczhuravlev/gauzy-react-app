import React from 'react';
import {css} from 'linaria';

const heading = css`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;

export function PageTitle({children}: {children: string}): JSX.Element {
  return <h1 className={heading}>{children}</h1>;
}
