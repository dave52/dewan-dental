import React from 'react';
import styled from 'styled-components';

const LayoutSideNavStyles = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  color: var(--gray);
  min-height: calc(100vh - 9rem);

  @media (min-width: 68.75rem) {
    grid-template-columns: 40rem 1fr;
  }
  @media (min-width: 100rem) {
    min-height: calc(100vh - 11rem - 1.8rem - 1.8rem);
    grid-template-columns: 50rem 1fr;
  }
`;

export default function LayoutSideNav({ children }) {
  return <LayoutSideNavStyles>{children}</LayoutSideNavStyles>;
}
