import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ContactForm from '../ContactForm';
import Layout from '../../templates/Layout';
import Page from '../../templates/Page';

const RequestAnAppointmentPageStyles = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  a {
    display: inline-flex;
  }
`;

export default function RequestAnAppointmentPage({ data, pageContext }) {
  return (
    <Layout>
      <Page data pageContext>
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
          <Link to="tel:1-414-962-5915" className="button">
            Call 414-962-5915
          </Link>
          <hr />
          <h2>Fill out our online form</h2>
          <ContactForm />
        </RequestAnAppointmentPageStyles>
      </Page>
    </Layout>
  );
}
