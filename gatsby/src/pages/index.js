import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import ImgWood from '../assets/images/background-wooden-slats.jpg';
import stringToSlug from '../utils/slugify';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: var(--gray);

  @media (min-width: 68.75rem) {
    // 1100px
    grid-template-columns: 50% 50%;
  }
  gap: 1.8rem 0;

  .building-img-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 4.625rem);

    @media (min-width: 68.75rem) {
      // 1100rem
      min-height: unset;
    }

    .dewan-building-image {
      object-fit: cover;
      object-position: left;
      width: 100%;
      height: 100%;

      @media (max-width: 160rem) {
        // 1600px
        object-position: center;
      }

      @media (max-width: 68.6875rem) {
        // 1099px
        position: absolute;
        top: 0;
      }
    }

    .building-img-content-mobile {
      position: relative;
      margin: 1rem;
      padding: 5rem;
      background: var(--blue-90);
      border: 3px solid var(--cream);
      color: #fff;
      font-size: 1.6rem;

      @media (max-width: 28.125rem) {
        margin: 2rem;
        padding: 2rem;
        font-size: 1.4rem;
      }

      hr {
        margin: 4rem 0;
        border-left: 0;
        border-top: 3px solid var(--gray);
      }

      a {
        color: var(--cream);
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        > *:nth-child(odd) {
          text-align: right;
        }
      }

      .contact .grid {
        @media (max-width: 28.125rem) {
          grid-template-columns: 1fr;

          > * {
            text-align: left;
          }
        }
      }

      @media (min-width: 68.75rem) {
        // 1100px
        display: none;
      }
    }
  }
`;

const AppointmentStyles = styled.div`
  --padding-size: 3rem;
  display: none;
  width: 100%;
  background: var(--brown) url(${ImgWood}) no-repeat;
  background-size: cover;

  @media (min-width: 46.875rem) {
    // 750px
    display: flex;
  }
  @media (min-width: 62.5rem) {
    // 1000px
    --padding-size: 5rem;
  }
  @media (min-width: 81.25rem) {
    // 1300px
    --padding-size: 7rem;
  }

  .card-container-outer {
    display: flex;
    margin: var(--padding-size);
    background: var(--white-85);
  }
  .card-container-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: var(--padding-size);

    h2 {
      display: inline-flex;
      margin: 0 0 5rem;
      font-size: 2.4rem;
      border-bottom: solid 0.3rem var(--blue);

      @media (min-width: 68.75rem) {
        // 1100px
        font-size: 3.2rem;
        border-bottom: solid 0.5rem var(--blue);
      }
    }

    h3 {
      margin: 0 0 2rem;
      font-size: clamp(1.6rem, 2.2rem, 2.2rem);
    }

    .info-text {
      margin: 0 0 5rem;
    }

    .banner-container-outer {
      display: flex;
      background: var(--blue-90);
      width: calc(100% + (var(--padding-size) * 4));
      margin-left: calc(var(--padding-size) * -2);
      padding: 5rem calc(var(--padding-size) * 2);

      @media (min-width: 46.875rem) {
        // 750px
        padding: 5rem var(--padding-size);
      }
    }

    .banner-container-inner {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;

      h3 {
        margin: 0 0 2rem;
      }

      p {
        margin: 0 0 3rem;
      }
    }
  }
`;

const ContactAndLocationStyles = styled.div`
  display: none;
  justify-content: space-between;
  background: var(--blue-90);
  color: var(--cream-75);
  overflow: hidden;

  @media (min-width: 46.875rem) {
    // 750px
    display: flex;
  }

  .padding-container {
    flex: 1;
    display: flex;
    padding: 3rem 5rem;
  }

  .divider {
    width: 1px;
    align-self: stretch;
    margin: 0 5rem;
    background: var(--cream-75);
  }

  p {
    font-size: 1.6rem;
  }

  a {
    color: var(--cream-75);

    &:hover {
      text-decoration: none;
    }
  }
`;

const HoursStyles = styled.div`
  display: none;
  padding: 3rem 5rem;
  background: #fff;
  color: var(--blue);

  @media (min-width: 46.875rem) {
    // 750px
    display: flex;
  }

  p {
    font-size: 1.6rem;

    &:not(:last-of-type) {
      margin-right: 5rem;
    }
  }
`;

const AboutStyles = styled.div`
  @media (max-width: 62.4375rem) {
    // 999px
    order: 1;
  }
  display: flex;
  flex-direction: column;
  padding: 5rem 8rem;
  background: white;

  h2 {
    max-width: 40rem;
    line-height: 1.3;
    color: var(--blue);
  }

  p {
    font-size: 1.6rem;
  }
`;

const AboutImageStyles = styled.div`
  display: flex;

  .img-desk-plants {
    object-fit: cover;
    width: 60%;
    height: 100%;
  }

  .img-patient-care {
    object-fit: cover;
    height: 100%;
    width: 40%;
  }
`;

export default function HomePage({ data }) {
  const info = data.info.nodes[0];
  const appointmentUrl = `/${stringToSlug(
    data.appointmentPage.navigation.title
  )}/${data.appointmentPage.slug.current}`;
  return (
    <Layout title="Welcome">
      <GridStyles>
        <div className="building-img-container">
          <StaticImage
            src="../assets/images/dewan-building-alt.jpg"
            alt="Front of DeWan Dental's office, a building with a modernist design"
            className="dewan-building-image"
            placeholder="blurred"
          />
          <div className="building-img-content-mobile">
            <Link className="button" to={appointmentUrl}>
              Request an Appointment
            </Link>
            <hr />
            <div className="contact">
              <h2>Contact</h2>
              <div className="grid">
                <a href={`tel:1-${info.phoneNumber}`}>{info.phoneNumber}</a>
                <a href={`mailto:${info.emailAddress}`}>{info.emailAddress}</a>
                <a
                  href="https://goo.gl/maps/bbWeEBpLvbZeGSej9"
                  target="_blank"
                  rel="noreferrer"
                >
                  {info.name}
                  <br />
                  {info.streetAddress}
                  <br />
                  {info.cityStateZip}
                </a>
              </div>
            </div>
            <hr />
            <div className="hours">
              <h2>Hours</h2>
              <div className="grid">
                {info.hours.map((item, i) => (
                  <React.Fragment key={`${item}-${i}`}>
                    <div>
                      {item.days.map((day, index) => {
                        const abbrDay = `${day.substring(0, 3)}.`;
                        const { length } = item.days;
                        if (length === 1 || index === length - 1) {
                          return abbrDay;
                        }
                        if (index === length - 2) {
                          return `${abbrDay} & `;
                        }
                        return `${abbrDay}, `;
                      })}
                    </div>
                    <div>
                      {item.timeOpen === item.timeClosed
                        ? item.timeOpen
                        : `${item.timeOpen} to ${item.timeClosed}`}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <AppointmentStyles>
          <div className="card-container-outer">
            <div className="card-container-inner font-color-blue">
              <h2 className="font-serif font-weight-semibold font-uppercase font-spacing-200">
                Appointments
              </h2>
              <p className="info-text font-color-black font-size-17">
                For an appointment please call or fill out our online form, see
                buttons below. We are welcome to serve both new and existing
                patients!
              </p>
              <div className="banner-container-outer">
                <div className="banner-container-inner font-color-cream-75">
                  <div className="column">
                    <h3 className="font-uppercase font-weight-medium font-spacing-150">
                      Phone call
                    </h3>
                    <p className="font-size-14">
                      If after hours, please leave a detailed voicemail.
                    </p>
                    <a href={`tel:1-${info.phoneNumber}`} className="button">
                      Call {info.phoneNumber}
                    </a>
                  </div>
                  <div className="column">
                    <h3 className="font-uppercase font-weight-medium font-spacing-150">
                      Online form
                    </h3>
                    <p className="font-size-14">
                      Fill out and submit an online form with your information.
                    </p>
                    <Link to={appointmentUrl} className="button">
                      Request a Dentist Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppointmentStyles>
        <ContactAndLocationStyles>
          <div className="padding-container">
            <div className="column">
              <h2 className="font-serif font-uppercase font-size-20 font-spacing-200 font-weight-semibold">
                Contact
              </h2>
              <p className="font-size-12 font-spacing-100">
                <a href={`tel:1-${info.phoneNumber}`}>{info.phoneNumber}</a>
                <br />
                <a href={`mailto:${info.emailAddress}`}>{info.emailAddress}</a>
              </p>
            </div>
            <div className="divider" />
            <div className="column">
              <h2 className="font-serif font-uppercase font-size-20 font-spacing-200 font-weight-semibold">
                Location
              </h2>
              <p className="font-size-12 font-spacing-100">
                <a
                  href="https://goo.gl/maps/bbWeEBpLvbZeGSej9"
                  target="_blank"
                  rel="noreferrer"
                >
                  {info.streetAddress}
                  <br />
                  {info.cityStateZip}
                </a>
              </p>
            </div>
          </div>
        </ContactAndLocationStyles>
        <HoursStyles>
          <div className="column">
            <h2 className="font-serif font-uppercase font-size-20 font-spacing-200 font-weight-semibold">
              Hours
            </h2>
            <div className="row">
              {info.hours.map((item, i) => (
                <p
                  className="font-size-12 font-spacing-100 column"
                  key={`${item}=${i}`}
                >
                  <strong>
                    {item.days.map((day, index) => {
                      const { length } = item.days;
                      if (length === 1 || index === length - 1) {
                        return `${day}:`;
                      }
                      if (index === length - 2) {
                        return `${day} & `;
                      }
                      return `${day}, `;
                    })}
                  </strong>
                  {item.timeOpen === item.timeClosed
                    ? item.timeOpen
                    : `${item.timeOpen} to ${item.timeClosed}`}
                </p>
              ))}
            </div>
          </div>
        </HoursStyles>
        <AboutStyles>
          <h2 className="font-serif font-size-32 font-weight-medium font-spacing-50">
            Whole body wellness begins with your smile.
          </h2>
          <p>
            DeWan Dental Wellness is an East Side Milwaukee dentist office that
            has been serving the Greenwich Village and Murray Hill communities
            and beyond since 1991. We provide state-of-the-art dental services
            in a warm, peaceful setting. Your overall well-being is always our
            goal, and we are committed to ensuring you receive first-class
            dental care to protect your smile for a lifetime.
          </p>

          <p>
            DeWan Dental Wellness is here for you whether you need an emergency
            appointment, or want a customized dental plan to accommodate your
            whole family. Our goal is to give you the naturally beautiful,
            confident smile you deserve.
          </p>

          <p>
            To get started,{' '}
            <Link className="underscore" to={appointmentUrl}>
              request an appointment
            </Link>
            , call us at{' '}
            <a className="underscore" href={`tel:1-${info.phoneNumber}`}>
              {info.phoneNumber}
            </a>
            , or stop in to meet our professional wellness team and get
            acquainted with our facility today.
          </p>
        </AboutStyles>
        <AboutImageStyles>
          <StaticImage
            placeholder="blurred"
            className="img-desk-plants"
            src="../assets/images/desk-plants.jpg"
            alt="An orchid flower on the office front desk"
          />
          <StaticImage
            quality={100}
            placeholder="blurred"
            className="img-patient-care"
            src="../assets/images/patient-care.jpg"
            alt="A patient receiving dental care"
          />
        </AboutImageStyles>
      </GridStyles>
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
    appointmentPage: sanityPage(
      _id: { eq: "2b3048e1-41af-4bfa-859e-98b4ccab7907" }
    ) {
      slug {
        current
      }
      navigation {
        title
      }
    }
  }
`;
