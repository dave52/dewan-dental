import React from 'react';
import styled, { css } from 'styled-components';

const MinimalContentStyles = css`
  max-width: 100%;
  padding: 3rem 5rem;
  font-size: 1.6rem;
  color: var(--black);
  line-height: 1.2;

  // 1100px
  @media (min-width: 68.75rem) {
    padding: 3rem 7rem;
    // account for sidenav width 30rem
    max-width: calc(100% - 30rem);
  }

  // 1600px
  @media (min-width: 100rem) {
    padding: 3rem max(7rem, 7vw);
  }

  *:not(h1, h2, h3, h4, h5, h6) {
    line-height: 1.6;
  }

  h1 {
    color: var(--blue);
    font-family: Vollkorn, Georgia, 'Times New Roman', Times, serif;
    font-size: 2.4rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    // 800px
    @media (min-width: 50rem) {
      font-size: 3.2rem;
    }
  }

  hr {
    margin: 4rem 0;
    border-left: 0;
    border-top: 3px solid var(--gray);
  }
`;

const FullContentStyles = css`
  h1:empty,
  h2:empty,
  h3:empty,
  h4:empty,
  h5:empty,
  h6:empty,
  p:empty {
    display: inline-block;
  }

  p,
  ul {
    max-width: 100ch;
  }

  img {
    max-width: 100%;
  }

  a:not(.no-underscore) {
    z-index: 1;
    display: inline;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
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

const ContentComponentStyles = styled.div`
  ${MinimalContentStyles}
  ${({ fullContentStyles }) => fullContentStyles && FullContentStyles}
`;

export default function ContentComponent({ fullContentStyles, children }) {
  return (
    <ContentComponentStyles
      className="content"
      fullContentStyles={fullContentStyles}
    >
      {children}
    </ContentComponentStyles>
  );
}
