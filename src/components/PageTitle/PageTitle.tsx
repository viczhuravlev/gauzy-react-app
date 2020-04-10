import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: var(--font-size-xl);
`;

export function PageTitle(props: {children: string}): JSX.Element {
  return <StyledH1>{props.children}</StyledH1>;
}
