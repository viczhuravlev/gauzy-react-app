import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0 var(--padding);
  width: 100%;
`;

export function Main(props: {children: React.ReactNode}): JSX.Element {
  return <StyledMain>{props.children}</StyledMain>;
}
