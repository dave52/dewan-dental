import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import ImgBuilding from '../assets/images/dewan-building.jpg';
import ImgWood from '../assets/images/background-wooden-slats.jpg';
import ImgDeskPlants from '../assets/images/desk-plants.jpg';
import ImgPatientCare from '../assets/images/patient-care.jpg';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 46.875rem) {
    // 750px
    grid-template-columns: 50% 50%;
  }
  gap: 1.8rem 0;

  .building-img-container {
    min-height: calc(100vh - 4.625rem);

    @media (min-width: 68.75rem) {
      min-height: calc(100vh - 11rem - var(--frame-size) - var(--frame-size));
    }

    img.dewan-building {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

const AppointmentStyles = styled.div`
  --padding-size: 3rem;
  @media (min-width: 62.5rem) {
    // 1000px
    --padding-size: 5rem;
  }
  @media (min-width: 81.25rem) {
    // 1300px
    --padding-size: 7rem;
  }
  display: flex;
  width: 100%;
  background: var(--brown) url(${ImgWood}) no-repeat;
  background-size: cover;

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
  display: flex;
  justify-content: space-between;
  background: var(--blue-90);
  color: var(--cream-75);
  overflow: hidden;

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

  img {
    object-fit: cover;
    max-width: 22rem;
  }
`;

const HoursStyles = styled.div`
  display: flex;
  padding: 3rem 5rem;
  background: #fff;
  color: var(--blue);

  p:not(:last-of-type) {
    margin-right: 5rem;
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

export default function HomePage() {
  return (
    <Layout>
      <GridStyles>
        <div className="building-img-container">
          <img
            src={ImgBuilding}
            alt="Front of DeWan Dental's office, a building with a modernist design"
            className="dewan-building"
          />
        </div>
        <AppointmentStyles>
          <div className="card-container-outer">
            <div className="card-container-inner font-color-blue">
              <h2 className="font-serif font-weight-semibold font-uppercase font-spacing-200">
                Appointments
              </h2>
              <h3 className="font-uppercase font-weight-medium font-spacing-150">
                Information
              </h3>
              <p className="info-text font-color-black font-size-17">
                Depending on your needs, we can usually schedule a routine exam
                and cleaning within two weeks. If you have an emergency, we will
                see you as soon as possible.
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
                    <Link to="#" className="button">
                      Call 414-962-5915
                    </Link>
                  </div>
                  <div className="column">
                    <h3 className="font-uppercase font-weight-medium font-spacing-150">
                      Online form
                    </h3>
                    <p className="font-size-14">
                      Fill out and submit an online form with your information.
                    </p>
                    <Link to="#" className="button">
                      Reservation form
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
                414-962-5915
                <br />
                office@dewandental.com
              </p>
            </div>
            <div className="divider" />
            <div className="column">
              <h2 className="font-serif font-uppercase font-size-20 font-spacing-200 font-weight-semibold">
                Location
              </h2>
              <p className="font-size-12 font-spacing-100">
                DeWan Dental Wellness 2445 N. Farwell
                <br />
                Suite 202
                <br />
                Milwaukee, WI 53211
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
              <p className="font-size-12 font-spacing-100 column">
                <strong>Monday &amp; Tuesday:</strong>
                9AM - 5:30PM
              </p>
              <p className="font-size-12 font-spacing-100 column">
                <strong>Wednesday &amp; Thursday:</strong>
                7AM - 5:30PM
              </p>
              <p className="font-size-12 font-spacing-100 column">
                <strong>Friday, Saturday &amp; Sunday:</strong>
                Closed
              </p>
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
            To get started, request an appointment, call us at 414-962-5915, or
            stop in to meet our professional wellness team and get acquainted
            with our facility today.
          </p>
        </AboutStyles>
        <AboutImageStyles>
          <img
            className="img-desk-plants"
            src={ImgDeskPlants}
            alt="An orchid flower on the office front desk"
          />
          <img
            className="img-patient-care"
            src={ImgPatientCare}
            alt="A patient receiving dental care"
          />
        </AboutImageStyles>
      </GridStyles>
    </Layout>
  );
}
