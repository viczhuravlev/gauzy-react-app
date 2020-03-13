import React from 'react';

import {StyledH1} from './PageTitle.styles';

export function PageTitle(props: {children: string}): JSX.Element {
  return <StyledH1>{props.children}</StyledH1>;
}
