import React from 'react';
import styled from 'styled-components';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
import Layout from '../components/Layout';

const PageBeforeAndAfterStyles = styled.div`
  color: red;
`;

export default function PageBeforeAndAfter({ data, pageContext }) {
  return (
    <Layout>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent>
        <PageBeforeAndAfterStyles>PageBeforeAndAfter</PageBeforeAndAfterStyles>
      </ContentComponent>
    </Layout>
  );
}

export const query = graphql`
  query ($parentTitle: String!, $slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      _rawContent
    }
    navigation: sanityNavigation(title: { eq: $parentTitle }) {
      title
      childNav {
        title
        page {
          title
          slug {
            current
          }
        }
        grandchildNav {
          title
          page {
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`;
