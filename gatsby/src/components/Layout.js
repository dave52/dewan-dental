import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import TopHat from './TopHat';
import Frame from './Frame';
import GlobalStyles from '../styles/GlobalStyles';
import ElementStyles from '../styles/ElementStyles';
import FontStyles from '../styles/FontStyles';
import Nav from './Nav';

const ContainerStyles = styled.div`
  margin-top: 12rem;
`;

export default function Layout({ children }) {
  return (
    <Frame>
      <TopHat />
      <GlobalStyles />
      <ElementStyles />
      <FontStyles />
      <Nav />
      <ContainerStyles>{children}</ContainerStyles>
    </Frame>
  );
}