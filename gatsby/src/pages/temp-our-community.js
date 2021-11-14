import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import PageFullWidth from '../templates/PageFullWidth';

const OurCommunityPageStyles = styled.div``;

export default function OurCommunityPage() {
  return (
    <Layout>
      <PageFullWidth>
        <OurCommunityPageStyles>
          <h1>Our Community</h1>
        </OurCommunityPageStyles>
      </PageFullWidth>
    </Layout>
  );
}
