import React from 'react';
import styled from 'styled-components';

const SideNavStyles = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  background: var(--blue);
`;

export default function SideNav({ children }) {
  return <SideNavStyles>{children}</SideNavStyles>;
}
