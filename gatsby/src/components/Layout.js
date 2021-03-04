import React from 'react';
import 'normalize.css';
import TopHat from './TopHat';
import Frame from './Frame';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <Frame>
      <TopHat />
      <GlobalStyles />
      {children}
    </Frame>
  );
}
