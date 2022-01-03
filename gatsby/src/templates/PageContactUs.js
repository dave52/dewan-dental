import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BadgeAppointment from '../components/BadgeAppointment';
import ContactForm from '../components/ContactForm';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
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

export default function PageContactUs({ data, pageContext, location }) {
  const info = data.info.nodes[0];
  return (
    <Layout title={pageContext.pageTitle}>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          location={location}
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent fullContentStyles>
        <PageContactUsStyles>
          <h1>{pageContext.pageTitle}</h1>
          <p>
            To get started with DeWan Dental Wellness, make an appointment
            today, or stop in to meet our professional wellness team and get
            acquainted with our facility.
          </p>
          <p>
            If you have a dental emergency, or want to speak with a member of
            our front office team, call us today at{' '}
            <a href={`tel:1-${info.phoneNumber}`}>{info.phoneNumber}</a>.
          </p>
          <p>
            Want to ask us a question or leave us a comment? Fill out the form
            below and we'll respond to you shortly.
          </p>
          <hr />
          <h2>Call us</h2>
          <a
            href={`tel:1-${info.phoneNumber}`}
            className="button no-underscore"
          >
            Call {info.phoneNumber}
          </a>
          <hr />
          <h2>Fill out our online form</h2>
          <ContactForm formName="Contact" />
          <hr />
          <h2>Email us</h2>
          <a
            href={`mailto:${info.emailAddress}`}
            className="button no-underscore"
          >
            {info.emailAddress}
          </a>
        </PageContactUsStyles>
      </ContentComponent>
      <BadgeAppointment />
    </Layout>
  );
}

export const query = graphql`
  query {
    info: allSanityContactInfo {
      nodes {
        hours {
          days
          timeClosed
          timeOpen
        }
        cityStateZip
        emailAddress
        phoneNumber
        name
        streetAddress
      }
    }
  }
`;
