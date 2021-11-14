import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/background-paper-texture.jpg';
import Layout from './Layout';

const PageFullWidthStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  color: var(--gray);
  min-height: calc(100vh - 9rem);
  background: #ffffff;
  padding: 3rem 5rem;
  font-size: 1.6rem;
  color: var(--black);
  background: url(${bg});

  > * {
    max-width: 120rem;
    margin: 0 auto;
  }

  h1 {
    color: var(--blue);
    font-family: Vollkorn, Georgia, 'Times New Roman', Times, serif;
    font-size: 3.2rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  hr {
    margin: 4rem 0;
    border-top: 3px solid var(--gray);
  }

  p,
  ul {
    max-width: 100ch;
  }

  a:not(.button) {
    z-index: 1;
    position: relative;
    overflow: hidden;
    color: #4859be;
    font-weight: 600;
    transition: color 0.3s ease-out;

    &::after {
      content: '';
      background: #d1d9f3;
      position: absolute;
      left: 4px;
      bottom: -5px;
      width: 100%;
      height: calc(100% - 12px);
      z-index: -1;
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
    }

    &:hover {
      color: #581414;

      :after {
        left: -3px;
        bottom: -3px;
        width: calc(100% + 6px);
        height: 106%;
      }
    }
  }
`;

export default function PageFullWidth({ children }) {
  return (
    <Layout>
      <PageFullWidthStyles>{children}</PageFullWidthStyles>
    </Layout>
  );
}
