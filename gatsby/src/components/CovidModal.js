import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/images/blurred-background.jpg';

const ContainerStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: no-repeat url(${bgImg}) #466287;
`;

const ModalStyles = styled.div`
  background: white;
`;

export default function CovidModal() {
  return (
    <ContainerStyles>
      <ModalStyles>I'm a modal</ModalStyles>
    </ContainerStyles>
  );
}
