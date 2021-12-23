import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import TopHat from './TopHat';
import Frame from './Frame';
import GlobalStyles from '../styles/GlobalStyles';
import ElementStyles from '../styles/ElementStyles';
import FontStyles from '../styles/FontStyles';
import Nav from './Nav/Nav';
import Splash from './Splash';
import bg from '../assets/images/background-paper-texture.jpg';

const ContainerStyles = styled.main`
  display: flex;
  min-height: calc(100vh - 9rem);
  background: url(${bg});

  @media (min-width: 100rem) {
    min-height: calc(100vh - 11rem - 1.8rem - 1.8rem);
  }

  .content {
    margin: 0 auto;
  }

  .content-side-nav {
    flex-shrink: 0;
  }

  /* .content-side-nav + .content {
    margin: unset;
  } */
`;

export default function Layout({ children }) {
  return (
    <Frame>
      <TopHat />
      <GlobalStyles />
      <ElementStyles />
      <FontStyles />
      <Nav />
      <Splash />
      <ContainerStyles>{children}</ContainerStyles>
    </Frame>
  );
}
