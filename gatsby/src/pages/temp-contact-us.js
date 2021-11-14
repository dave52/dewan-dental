import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Layout from '../templates/Layout';
import PageFullWidth from '../templates/PageFullWidth';

const ContactUsPageStyles = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  a {
    display: inline-flex;

    &:not(.button) {
      z-index: 1;
      position: relative;
      overflow: hidden;
      color: #4859be;
      font-weight: 600;
      transition: color 0.3s ease-out;

      &::after {
        content: '';
        background: #d1d9f3;
        position: absolute;
        left: 4px;
        bottom: -5px;
        width: 100%;
        height: calc(100% - 12px);
        z-index: -1;
        transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
      }

      &:hover {
        color: #581414;

        :after {
          left: -3px;
          bottom: -3px;
          width: calc(100% + 6px);
          height: 106%;
        }
      }
    }
  }
  /* form.is-hidden {
    display: none;
  } */
`;

// const toggleForm = function () {
//   document.querySelector('form')?.classList.toggle('is-hidden');
// };

export default function ContactUsPage() {
  return (
    <Layout>
      <PageFullWidth>
        <ContactUsPageStyles>
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
          <Link to="tel:1-414-962-5915" className="button">
            Call 414-962-5915
          </Link>
          <hr />
          <h2>Fill out our online form</h2>
          {/* <button className="button" type="button" onClick={toggleForm}>
            Fill out form
          </button> */}
          <ContactForm className="is-hidden" />
          <hr />
          <h2>Email us</h2>
          <Link to="mailto:office@dewandental.com" className="button">
            office@dewandental.com
          </Link>
        </ContactUsPageStyles>
      </PageFullWidth>
    </Layout>
  );
}
