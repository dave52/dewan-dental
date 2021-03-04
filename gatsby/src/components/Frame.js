import React from 'react';
import styled from 'styled-components';

const FrameStyles = styled.div`
  background: var(--gray);
  padding: 1.8rem 0 1.8rem 1.8rem;
  min-height: 200vh;
`;

export default function Frame({ children }) {
  return <FrameStyles>{children}</FrameStyles>;
}
