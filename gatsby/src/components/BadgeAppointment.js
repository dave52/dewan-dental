import React from 'react';
import styled from 'styled-components';

const BadgeAppointmentStyles = styled.a`
  position: fixed;
  bottom: 1.8rem;
  right: 1.8rem;
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

  @media (max-width: 68.6875rem) {
    /* 1099px */
    display: none;
  }
`;

export default function BadgeAppointment({ location }) {
  // console.log(window.location.pathname);
  console.log('location badge');
  console.log(location);
  if (location === '/') {
    return null;
  }
  if (location === '/your-visit/temp-request-an-appointment') {
    return null;
  }
  // if (window.location.pathname === '/') {
  //   return null;
  // }
  // if (window.location.pathname === '/your-visit/temp-request-an-appointment') {
  //   return null;
  // }
  return (
    <BadgeAppointmentStyles href="/your-visit/temp-request-an-appointment">
      Request an appointment
    </BadgeAppointmentStyles>
  );
}
