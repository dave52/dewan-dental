import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import stringToSlug from '../utils/slugify';

const BadgeAppointmentStyles = styled.div`
  position: fixed;
  bottom: 1.8rem;
  right: 1.8rem;

  a {
    display: block;
    background: var(--blue);
    color: var(--cream);
    padding: 1rem;
    text-decoration: none;
    border: 2px solid var(--blue);
    transition: background ease-out 0.3s, color ease-out 0.3s;
    font-weight: bold;

    &:hover {
      background: var(--cream);
      color: var(--blue);
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
      <Link to={appointmentUrl}>Request a Dentist Appointment</Link>
    </BadgeAppointmentStyles>
  );
}
