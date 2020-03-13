import React from 'react';

import {StyledMain} from './Main.styles';

export function Main(props: {children: React.ReactNode}): JSX.Element {
  return <StyledMain>{props.children}</StyledMain>;
}
