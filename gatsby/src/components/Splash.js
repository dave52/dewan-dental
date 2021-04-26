import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/images/blurred-background.jpg';
import SplashLogo from './SplashLogo';
import Modal from './Modal';

const ContainerStyles = styled.div`
  &.hidden {
    transform: translateY(-100%);
    transition: transform 1s ease;
  }

  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: no-repeat url(${bgImg}) #65738d;

  // <SplashLogo> renders as <svg>
  svg {
    width: 100%;
    max-width: 40rem;
  }
`;

const closeSplash = () => {
  document.querySelector('.splash').classList.add('hidden');
};

const openModal = () => {
  setTimeout(() => {
    document.querySelector('.modal').classList.remove('hidden');
  }, 500);
};

const hasAgreed = () => localStorage.getItem('covidAgreement');

const setCovidAgreement = (val = true) => {
  localStorage.setItem('covidAgreement', val);
};

const setSession = (val = true) => {
  sessionStorage.setItem('sustainedSession', val);
};

const isSustainedSession = () => sessionStorage.getItem('sustainedSession');

const handleOnAnimationEnd = () => {
  if (hasAgreed()) {
    closeSplash();
  } else {
    openModal();
  }
  setSession();
};

const handleCloseModal = () => {
  closeSplash();
  setCovidAgreement();
};

export default function Splash() {
  if (!isSustainedSession()) {
    document.body.classList.toggle('overflow-hidden');
    return (
      <ContainerStyles className="splash">
        <SplashLogo onAnimationEnd={handleOnAnimationEnd} />
        {!hasAgreed() && <Modal closeModal={() => handleCloseModal} />};
      </ContainerStyles>
    );
  }
  return null;
}
