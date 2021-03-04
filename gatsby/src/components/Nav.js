import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/dewan-logo-lines.svg';

const NavStyles = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Karla';
  font-weight: 500;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: 0.1em;
  background: #fff;

  .left,
  .right {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 7rem;

    .nav-row {
      display: flex;
      align-items: center;
    }
  }

  .left {
    padding-right: 3rem;

    .nav-row a {
      margin-right: 4rem;
    }
  }

  .right {
    padding-left: 0;

    .nav-row a {
      margin-left: 4rem;
    }
  }

  .nav-row a {
    color: var(--black);
    text-decoration: none;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="left">
        <div className="nav-row">
          <Link to="#">Covid-19 Policy</Link>
          <Link to="#">Appointment</Link>
          <Link to="#">Services</Link>
          <Link to="#">About</Link>
        </div>
        <img
          src={logo}
          alt="DeWan Dental Logo, outline drawing of abstract faces"
        />
      </div>
      <div className="right">
        <div className="logo-text">
          Dewan
          <br />
          <br />
          Dental
          <br />
          <br />
          Wellness
        </div>
        <div className="nav-row">
          <Link to="#">Appointment</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Location</Link>
          <Link to="#">Hours</Link>
        </div>
      </div>
    </NavStyles>
  );
}
