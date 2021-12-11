import React from 'react';
import styled from 'styled-components';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
import Layout from '../components/Layout';

const PageOurCommunityStyles = styled.div`
  color: red;
`;

export default function PageOurCommunity({ data, pageContext }) {
  return (
    <Layout>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent>
        <PageOurCommunityStyles>PageOurCommunity</PageOurCommunityStyles>
      </ContentComponent>
    </Layout>
  );
}
