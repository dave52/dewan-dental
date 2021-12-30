import React from 'react';
import styled from 'styled-components';
import BadgeAppointment from '../components/BadgeAppointment';
import ContentComponent from '../components/ContentComponent';
import Layout from '../components/Layout';

const PageContactUsStyles = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
`;

export default function Page404() {
  const pageTitle = 'Page Not Found';
  return (
    <Layout title={pageTitle}>
      <ContentComponent fullContentStyles>
        <PageContactUsStyles>
          <h1>{pageTitle}</h1>
          <p>Sorry, the page you're looking cannot be found.</p>
        </PageContactUsStyles>
      </ContentComponent>
      <BadgeAppointment />
    </Layout>
  );
}
