import React from 'react';
import styled from 'styled-components';
import SplashLogo from './SplashLogo';

const ContainerStyles = styled.div`
  &.hidden {
    transform: translateY(-100%);
    transition: transform 1s ease;
  }

  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(113, 132, 162)
    radial-gradient(
      circle,
      rgba(113, 132, 162, 1) 50%,
      rgba(75, 86, 108, 0.8) 100%
    );

  // <SplashLogo> renders as <svg>
  svg {
    position: absolute;
    width: 50%;
    min-width: 26rem;
    max-width: 40rem;

    // 600px
    @media (min-width: 37.5rem) {
      width: 100%;
    }
  }
`;

const isBrowser = typeof window !== 'undefined';

const closeSplash = () => {
  if (isBrowser) {
    document?.body?.classList?.remove('overflow-hidden');
    document?.querySelector('.splash')?.classList?.add('hidden');
  }
};

const isSustainedSession = () =>
  isBrowser && sessionStorage.getItem('sustainedSession');
const setSession = (val = true) =>
  isBrowser && sessionStorage.setItem('sustainedSession', val);

const handleOnAnimationEnd = () => {
  closeSplash();
  setSession();
};

export default function Splash() {
  if (!isSustainedSession()) {
    if (isBrowser) {
      document?.body?.classList?.toggle('overflow-hidden');
    }
    return (
      <ContainerStyles className="splash">
        <SplashLogo onAnimationEnd={handleOnAnimationEnd} />
      </ContainerStyles>
    );
  }
  return null;
}
