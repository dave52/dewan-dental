import React from 'react';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import LayoutSideNav from '../templates/LayoutSideNav';
import SideNav from '../components/SideNav';

export default function ServicesPage() {
  return (
    <Layout>
      <LayoutSideNav>
        <SideNav>services page</SideNav>
      </LayoutSideNav>
    </Layout>
  );
}
