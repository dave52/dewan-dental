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
  min-height: calc(100vh - 7.6rem);
  background: #fafafa url(${bg});

  @media (min-width: 68.75rem) {
    min-height: calc(100vh - 9rem);
  }

  @media (min-width: 100rem) {
    min-height: calc(100vh - 11rem - 1.8rem - 1.8rem);
  }

  .content {
    margin: 0 auto;
  }

  .content-side-nav {
    flex-shrink: 0;
  }
`;

export default function Layout({ title, children }) {
  return (
    <Frame>
      <TopHat title={title} />
      <GlobalStyles />
      <ElementStyles />
      <FontStyles />
      <Nav />
      <Splash />
      <ContainerStyles>{children}</ContainerStyles>
    </Frame>
  );
}
