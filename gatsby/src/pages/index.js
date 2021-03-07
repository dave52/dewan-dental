import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import ImgBuilding from '../assets/images/dewan-building.jpg';
import ImgWood from '../assets/images/background-wooden-slats.jpg';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  /* grid-auto-rows: 1fr; */
  gap: 1.8rem 0;

  .building-img-container {
    img.dewan-building {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

const AppointmentStyles = styled.div`
  --padding-size: 7rem;
  display: flex;
  padding: var(--padding-size);
  background: var(--brown);
  background-image: url(${ImgWood});

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding-size);
    background: var(--white-85);

    h2 {
      display: inline-flex;
      margin-bottom: 1.1rem;
      border-bottom: solid 0.5rem var(--blue);
    }

    .banner-container {
      background: var(--blue-90);
      width: calc(100% + (var(--padding-size) * 4));
      margin-left: calc(var(--padding-size) * -2);
      padding: 0 7rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .column {
        display: flex;
        flex-direction: column;
      }
    }
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
          <div className="card-container font-color-blue">
            <h2 className="font-serif font-size-32 font-weight-semibold font-uppercase font-spacing-200">
              Appointments
            </h2>
            <h3 className="font-uppercase font-size-22 font-weight-medium font-spacing-150">
              Information
            </h3>
            <p className="font-color-black font-size-17">
              Depending on your needs, we can usually schedule a routine exam
              and cleaning within two weeks. If you have an emergency, we will
              see you as soon as possible.
            </p>
            <div className="banner-container font-color-cream-75">
              <div className="column">
                <h3 className="font-uppercase font-size-22 font-weight-medium font-spacing-150">
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
                <h3 className="font-uppercase font-size-22 font-weight-medium font-spacing-150">
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
        </AppointmentStyles>
      </GridStyles>
    </Layout>
  );
}
