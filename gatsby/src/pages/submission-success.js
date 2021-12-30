import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ContentComponent from '../components/ContentComponent';
import Layout from '../components/Layout';

const PageContactUsStyles = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  a {
    display: inline-flex;
    word-break: break-word;
  }
`;

export default function PageContactUs({ data }) {
  const info = data.info.nodes[0];
  const pageTitle = 'Successfully Submitted';
  return (
    <Layout title={pageTitle}>
      <ContentComponent fullContentStyles>
        <PageContactUsStyles>
          <h1>{pageTitle}</h1>
          <p>Thank you for your submission we will respond to you soon!</p>
          <p>
            For immediate needs please contact us by phone at{' '}
            <a href={`tel:1-${info.phoneNumber}`}>{info.phoneNumber}</a>.
          </p>
        </PageContactUsStyles>
      </ContentComponent>
    </Layout>
  );
}

export const query = graphql`
  query {
    info: allSanityContactInfo {
      nodes {
        phoneNumber
      }
    }
  }
`;
