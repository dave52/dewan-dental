import React from 'react';
import styled from 'styled-components';

const LayoutStyles = styled.main`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 20rem 1fr;
  padding: 5rem;
  color: var(--gray);
`;

export default function LayoutSideNav({ children }) {
  return <LayoutStyles>{children}</LayoutStyles>;
}
