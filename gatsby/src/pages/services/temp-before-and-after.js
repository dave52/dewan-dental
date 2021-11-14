import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../templates/Layout';
import PageFullWidth from '../../templates/PageFullWidth';

const BeforeAndAfterPageStyles = styled.div`
  background: red;
`;

export default function BeforeAndAfterPage() {
  return (
    <Layout>
      <PageFullWidth>
        <BeforeAndAfterPageStyles>
          <h1>Before &amp; After</h1>
        </BeforeAndAfterPageStyles>
      </PageFullWidth>
    </Layout>
  );
}
