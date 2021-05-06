import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/dewan-logo-lines.svg';
import logoMobile from '../assets/images/dewan-logo-lines-mobile.svg';
import xIcon from '../assets/images/icon-x.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import bg from '../assets/images/blurred-background.jpg';

const NavStyles = styled.nav`
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr;
  position: sticky;
  top: 0;
  width: 100%;
  font-family: 'Karla';
  font-weight: 500;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: 0.1em;
  background: var(--blue);

  @media (min-width: 68.75rem) {
    // 1100px
    grid-template-columns: 1fr auto 1fr;
    background: #fff;
  }

  @media (min-width: 100rem) {
    // 1600px
    top: var(--frame-size);
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    padding: 2.5rem 4rem;
    @media (min-width: 87.5rem) {
      // 1400px
      padding: 2.5rem 6rem;
    }

    a {
      font-size: 1.1rem;
      color: var(--black);
      text-decoration: none;

      @media (min-width: 87.5rem) {
        // 1400px
        font-size: 1.3rem;

        &:hover {
          color: var(--brown);
        }
      }

      &:before,
      &:after {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border: 1px solid rgba(255, 255, 255, 0);
        bottom: 0px;
        content: ' ';
        display: block;
        margin: 0.5rem auto;
        position: relative;
        transition: all 280ms ease-in-out;
        width: 0;
      }

      &:hover:after,
      &:hover:before {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-color: var(--brown);
        transition: width 350ms ease-in-out;
        width: 100%;
      }
    }
  }

  .left {
    a {
      margin-right: 2rem;

      @media (min-width: 75rem) {
        margin-right: 4rem;
      }
    }
  }

  .right {
    justify-content: flex-end;
    padding-left: 0;

    a {
      margin-left: 2rem;

      @media (min-width: 75rem) {
        margin-left: 4rem;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 1rem 2rem;
    text-decoration: none;
    font-size: 1.1rem;
    transition: opacity 0.3s ease, transform 0.3s ease;

    &:hover {
      opacity: 0.8;
      transform: scale(0.95);
    }

    @media (min-width: 87.5rem) {
      // 1400px
      margin: 2rem;
      font-size: 1.3rem;
    }

    img {
      @media (max-width: 68.6875rem) {
        height: 4rem;
      }
    }

    .logo-text {
      margin-left: 1.5rem;
      color: var(--gray);
      line-height: 1.7;

      @media (min-width: 68.75rem) {
        color: var(--black);
      }

      @media (min-width: 87.5rem) {
        margin-left: 2.4rem;
      }
    }
  }

  .mobile-menu-button,
  .mobile-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 1.2rem;
    font-size: 1rem;
    text-transform: uppercase;
    background: none;
    --webkit-appearance: none;
    border: none;
    color: var(--gray);

    img {
      width: 3rem;
      margin-top: 0.2rem;
    }
  }

  .mobile-close-button {
    margin: 0 0 0 auto;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding: 0.3rem 0 1.5rem 1.5rem;
    border: 1.5rem solid var(--blue);
    background: var(--blue) url(${bg}) repeat;
    animation: slideIn 0.5s ease-out forwards;

    @keyframes slideIn {
      from {
        transform: translateY(-20%);
        opacity: 0;
      }
    }

    a {
      text-decoration: none;
      color: var(--gray);
      margin: 0.5rem;
      padding: 1rem;
    }
  }

  .hidden-on-mobile {
    @media (max-width: 68.6875rem) {
      // 1099px
      display: none;
    }
  }
  .hidden-on-desktop {
    @media (min-width: 68.75rem) {
      // 1100px
      display: none;
    }
  }

  .hidden {
    display: none;
  }
`;

const navItemList = [
  {
    text: 'Covid-19 Policy',
    href: '/covid-19-policy',
  },
  {
    text: 'Appointment',
    href: '/appointment',
  },
  {
    text: 'Services',
    href: '/services',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Community',
    href: '/community',
  },
  {
    text: 'Hours',
    href: '/hours',
  },
  {
    text: 'Location',
    href: '/location',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
];

const firstHalfList = navItemList.slice(0, navItemList.length / 2);
const lastHalfList = navItemList.slice(navItemList.length / 2);

const handleMenuClick = () => {
  document.querySelector('.mobile-nav').classList.toggle('hidden');
};

const closeMobileNav = () => {
  document.querySelector('.mobile-nav').classList.add('hidden');
};

export default function Nav() {
  return (
    <NavStyles>
      <div className="left hidden-on-mobile">
        {firstHalfList.map((item) => (
          <Link to={item.href}>{item.text}</Link>
        ))}
      </div>
      <div className="row space-between">
        <Link to="/" className="logo">
          <img
            className="hidden-on-mobile"
            src={logo}
            alt="DeWan Dental Logo, outline drawing of abstract faces"
          />
          <img
            className="hidden-on-desktop"
            src={logoMobile}
            alt="DeWan Dental Logo, outline drawing of abstract faces"
          />
          <div className="logo-text">
            Dewan
            <br />
            Dental
            <br />
            Wellness
          </div>
        </Link>
        <button
          className="mobile-menu-button hidden-on-desktop"
          type="button"
          onClick={handleMenuClick}
        >
          <span>Menu</span>
          <img
            src={menuIcon}
            alt="Three horizontal lines in a circle, to symbolize a menu button"
          />
        </button>
      </div>
      <div className="right hidden-on-mobile">
        {lastHalfList.map((item) => (
          <Link to={item.href}>{item.text}</Link>
        ))}
      </div>
      <div className="mobile-nav hidden hidden-on-desktop">
        <button
          type="button"
          className="mobile-close-button"
          onClick={closeMobileNav}
        >
          <span>Close</span>
          <img
            src={xIcon}
            alt="An X within a circle, symbolize a close button"
          />
        </button>
        {navItemList.map((item) => (
          <Link to={item.href}>{item.text}</Link>
        ))}
      </div>
    </NavStyles>
  );
}
