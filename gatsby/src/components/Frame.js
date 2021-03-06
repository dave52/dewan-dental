import React from 'react';
import styled from 'styled-components';

const FrameStyles = styled.div`
  background: var(--gray);

  .frame-content {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 100rem) {
    // 1600px

    // frame-left size
    padding: 0 var(--frame-size);

    .frame-top,
    .frame-bottom {
      display: block;
      width: 100%;
      position: fixed;
      z-index: 10;
      height: var(--frame-size);
      background: var(--gray);
    }

    .frame-top {
      top: 0;
    }

    .frame-bottom {
      bottom: 0;
    }

    .frame-content {
      padding: var(--frame-size) 0;
    }
  }
`;

export default function Frame({ children }) {
  return (
    <FrameStyles>
      <div className="frame-top" />
      <div className="frame-content">{children}</div>
      <div className="frame-bottom" />
    </FrameStyles>
  );
}
