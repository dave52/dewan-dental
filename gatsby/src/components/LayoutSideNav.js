import React from 'react';
import styled from 'styled-components';

const LayoutStyles = styled.main`
  display: grid;
  min-height: calc(100vh - 11rem - 1.8rem - 1.8rem);
  grid-template-columns: 20rem 1fr;
  color: var(--gray);
`;

export default function LayoutSideNav({ children }) {
  return <LayoutStyles>{children}</LayoutStyles>;
}
