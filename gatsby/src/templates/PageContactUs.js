import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BadgeAppointment from '../components/BadgeAppointment';
import ContactForm from '../components/ContactForm';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
import Layout from '../components/Layout';

const PageContactUsStyles = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  a {
    display: inline-flex;
    word-break: break-word;
  }
`;

export default function PageContactUs({ data, pageContext }) {
  return (
    <Layout>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent fullContentStyles>
        <PageContactUsStyles>
          <h1>Contact us</h1>
          <p>
            To get started with DeWan Dental Wellness, make an appointment
            today, or stop in to meet our professional wellness team and get
            acquainted with our facility.
          </p>
          <p>
            If you have a dental emergency, or want to speak with a member of
            our front office team, call us today at{' '}
            <a href="tel:1-414-962-5915">414-962-5915</a>.
          </p>
          <p>
            Want to ask us a question or leave us a comment? Fill out the form
            below and we'll respond to you shortly.
          </p>
          <hr />
          <h2>Call us</h2>
          <a href="tel:1-414-962-5915" className="button no-underscore">
            Call 414-962-5915
          </a>
          <hr />
          <h2>Fill out our online form</h2>
          <ContactForm className="is-hidden" />
          <hr />
          <h2>Email us</h2>
          <a
            href="mailto:office@dewandental.com"
            className="button no-underscore"
          >
            office@dewandental.com
          </a>
        </PageContactUsStyles>
      </ContentComponent>
      <BadgeAppointment />
    </Layout>
  );
}
