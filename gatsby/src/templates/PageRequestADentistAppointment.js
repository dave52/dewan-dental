import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import ContentSideNav from '../components/ContentSideNav';
import ContentComponent from '../components/ContentComponent';

const RequestAnAppointmentPageStyles = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;

  a {
    display: inline-flex;
  }

  .intro {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    // 1300px
    @media (min-width: 81.25rem) {
      flex-direction: row;
    }

    .intro-text {
      flex-grow: 0;
      flex-shrink: 1;

      p:first-child {
        margin-top: 0;
      }

      p:last-child {
        margin-bottom: 0;
      }
    }

    .intro-photo {
      order: -1;
      flex: 0 1 100%;
      max-width: 40rem;
      margin: 0 auto;

      // 700px
      @media (min-width: 43.75rem) {
        flex-basis: 50%;
      }

      // 1300px
      @media (min-width: 81.25rem) {
        flex-basis: 70%;
        order: 0;
      }
    }
  }
`;

export default function PageRequestADentistAppointment({
  data,
  pageContext,
  location,
}) {
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
        <RequestAnAppointmentPageStyles>
          <h1>{pageContext.pageTitle}</h1>
          <div className="intro">
            <div className="intro-text">
              <p>
                We will schedule your appointment as soon as possible. If you
                have a dental emergency, or want to speak with a member of our
                front office team, call us today at{' '}
                <a href={`tel:1-${info.phoneNumber}`}>{info.phoneNumber}</a>.
              </p>
              <p>
                After you make a dentist appointment for your first visit, we
                will send you registration materials that you can complete prior
                to your visit. You can also download our pre-registration form.
              </p>
              <p>
                We do our best to accommodate your schedule when making
                appointments. If your needs change, we appreciate as much
                advance notice as possible. We kindly request at least 48 hours
                notice within the business week
              </p>
            </div>
            <StaticImage
              className="intro-photo"
              quality={80}
              objectPosition="center center"
              placeholder="blurred"
              src="../assets/images/request-appointment.jpg"
              alt="The DeWan Dental Team, written in cursive handwriting"
            />
          </div>
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
          <ContactForm
            formName="Appointment"
            textAreaLabel="Days and times that work best for you"
            textAreaName="preferred-times"
          />
        </RequestAnAppointmentPageStyles>
      </ContentComponent>
    </Layout>
  );
}

export const query = graphql`
  query ($parentTitle: String!) {
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
