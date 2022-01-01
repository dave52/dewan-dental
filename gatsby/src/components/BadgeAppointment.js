import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import stringToSlug from '../utils/slugify';
import iconArrow from '../assets/images/arrow-circled-icon.svg';

const BadgeAppointmentStyles = styled.div`
  position: fixed;
  bottom: 3.5rem;
  right: 3.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.5rem;
    background: var(--blue);
    color: var(--cream);
    font-weight: bold;
    text-decoration: none;
    border: 2px solid var(--blue);
    border-radius: 2.8rem;
    box-shadow: 0 5px 6px rgb(0 0 0 / 16%);
    transition: background ease-out 0.3s, color ease-out 0.3s;

    &:hover {
      background: var(--cream);
      color: var(--blue);

      .icon-container {
        opacity: 0.75;
        background: #eee;
        border-color: var(--blue);
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      line-height: 1.3;
      padding: 0 2rem;

      .text-top {
        font-weight: 400;
        font-size: 1.1rem;
        letter-spacing: 0.11em;
      }

      .text-bottom {
        font-size: 1.45rem;
        letter-spacing: 0.1em;
      }
    }

    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.5rem;
      height: 4.5rem;
      margin-right: -2px;
      padding: 0.5rem;
      border: 2px solid #d7e1ef;
      border-radius: 50%;
      background: #d7e1ef;
      transition: background 0.3s ease-out, opacity 0.3s ease-out;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 68.6875rem) {
    // 1099px
    display: none;
  }
`;

export default function BadgeAppointment({ location }) {
  const data = useStaticQuery(graphql`
    query {
      page: sanityPage(_id: { eq: "2b3048e1-41af-4bfa-859e-98b4ccab7907" }) {
        slug {
          current
        }
        navigation {
          title
        }
      }
    }
  `);
  const appointmentUrl = `/${stringToSlug(data.page.navigation.title)}/${
    data.page.slug.current
  }`;
  if (location === '/') {
    return null;
  }
  if (location === appointmentUrl) {
    return null;
  }
  return (
    <BadgeAppointmentStyles>
      <Link to={appointmentUrl}>
        <div className="text-container">
          <div className="text-top font-uppercase">Request a Dentist</div>
          <div className="text-bottom font-serif font-uppercase">
            Appointment
          </div>
        </div>
        <div className="icon-container">
          <img src={iconArrow} alt="Arrow indicating a link to another page" />
        </div>
      </Link>
    </BadgeAppointmentStyles>
  );
}
