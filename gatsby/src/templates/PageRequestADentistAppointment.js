import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import ContentSideNav from '../components/ContentSideNav';
import ContentComponent from '../components/ContentComponent';

const RequestAnAppointmentPageStyles = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  a {
    display: inline-flex;
  }
`;

export default function PageRequestADentistAppointment({ data, pageContext }) {
  return (
    <Layout>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent fullContentStyles>
        <RequestAnAppointmentPageStyles>
          <h1>Request an appointment</h1>
          <p>
            Depending on your needs, we can usually schedule a routine exam and
            cleaning within two weeks. If you have a dental emergency, or want
            to speak with a member of our front office team, call us today at{' '}
            <a href="tel:1-414-962-5915">414-962-5915</a>.
          </p>
          <p>
            After you make a dentist appointment for your first visit, we will
            send you registration materials that you can complete prior to your
            visit. You can also download our pre-registration form.
          </p>
          <p>
            We do our best to accommodate your schedule when making
            appointments. If your needs change, we appreciate as much advance
            notice as possible. We kindly request at least 48 hours notice
            within the business week
          </p>
          <hr />
          <h2>Call us</h2>
          <a href="tel:1-414-962-5915" className="button no-underscore">
            Call 414-962-5915
          </a>
          <hr />
          <h2>Fill out our online form</h2>
          <ContactForm />
        </RequestAnAppointmentPageStyles>
      </ContentComponent>
    </Layout>
  );
}

export const query = graphql`
  query ($parentTitle: String!) {
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
