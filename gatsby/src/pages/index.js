import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Nav from '../components/Nav';

const ContainerStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalStyles = styled.div`
  background: white;
`;

export default function HomePage() {
  return (
    <Layout>
      <Nav />
    </Layout>
  );
}
