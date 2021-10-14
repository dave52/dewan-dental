import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logoMobile from '../../assets/images/dewan-logo-lines-mobile.svg';
import xIcon from '../../assets/images/icon-x.svg';
import menuIcon from '../../assets/images/icon-menu.svg';
import sortNullishByProperty from '../../utils/sortNullishByProperty';
// import stringToSlug from '../../utils/slugify';

const NavMobileStyles = styled.nav`
  /* z-index: 5;
  display: grid;
  grid-template-columns: 1fr;
  position: sticky;
  top: 0;
  width: 100%;c
  font-family: 'Karla';
  font-weight: 500;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: 0.1em; */
  grid-template-columns: 1fr;
  background: var(--blue);

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

    img {
      height: 4rem;
    }

    .logo-text {
      margin-left: 1.5rem;
      color: var(--gray);
      line-height: 1.7;
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
    background: rgb(113, 132, 162)
      radial-gradient(
        circle,
        rgba(113, 132, 162, 1) 50%,
        rgba(75, 86, 108, 0.8) 100%
      );
    animation: slideIn 0.5s ease-out forwards;

    @keyframes slideIn {
      from {
        transform: translateY(-20%);
        opacity: 0;
      }
    }

    a,
    button {
      text-decoration: none;
      color: var(--gray);
      margin: 0.5rem;
      padding: 1rem;
      border: 0;
      background: 0;
    }
  }

  .hidden {
    display: none;
  }
`;

// const navItemList = [
//   {
//     text: 'Covid-19 Policy',
//     href: '/covid-19-policy',
//   },
//   {
//     text: 'Appointment',
//     href: '/appointment',
//   },
//   {
//     text: 'Services',
//     href: '/services',
//   },
//   {
//     text: 'About',
//     href: '/about',
//   },
//   {
//     text: 'Community',
//     href: '/community',
//   },
//   {
//     text: 'Hours',
//     href: '/hours',
//   },
//   {
//     text: 'Location',
//     href: '/location',
//   },
//   {
//     text: 'Contact',
//     href: '/contact',
//   },
// ];

const handleMenuClick = () => {
  document.querySelector('.mobile-nav').classList.toggle('hidden');
};

const closeMobileNav = () => {
  document.querySelector('.mobile-nav').classList.add('hidden');
};

const handleParentNavClick = () => {
  console.log('parent nav item clicked');
};

const handleChildNavClick = () => {
  console.log('child nav item clicked');
};

export default function NavMobile() {
  const { nav } = useStaticQuery(graphql`
    query {
      nav: allSanityNavigation {
        nodes {
          title
          order
          page {
            title
            slug {
              current
            }
          }
          childNav {
            title
            page {
              slug {
                current
              }
              title
            }
            grandchildNav {
              title
              order
              page {
                title
                slug {
                  current
                }
              }
            }
            order
          }
        }
      }
    }
  `);

  return (
    <NavMobileStyles className="nav-mobile">
      <div className="row space-between">
        <Link to="/" className="logo">
          <img
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
          className="mobile-menu-button"
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
      <div className="mobile-nav hidden">
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

        <ul className="parent-nav-ul">
          {nav.nodes
            .sort(sortNullishByProperty('order'))
            .map((parentNavItem) => (
              <li>
                {parentNavItem.page === null ? (
                  <button type="button" onClick={handleParentNavClick}>
                    {parentNavItem.title}
                  </button>
                ) : (
                  <Link
                    key={parentNavItem}
                    to={parentNavItem.page.slug.current}
                  >
                    {parentNavItem.title}
                  </Link>
                )}
                {parentNavItem.page === null && (
                  <ul className="child-nav-ul">
                    {parentNavItem.childNav.map((childNavItem, index) => (
                      <li key={`${childNavItem.title}-${index}`}>
                        {childNavItem.page === null ? (
                          <button type="button" onClick={handleChildNavClick}>
                            {childNavItem.title}
                          </button>
                        ) : (
                          <Link
                            key={childNavItem}
                            to={childNavItem.page.slug.current}
                          >
                            {childNavItem.title}
                          </Link>
                        )}

                        {childNavItem.page === null && (
                          <ul className="child-nav-ul">
                            {childNavItem.grandchildNav.map(
                              (grandchildNavItem, index2) => (
                                <li
                                  key={`${grandchildNavItem.title}-${index2}`}
                                >
                                  <Link
                                    key={grandchildNavItem}
                                    to={grandchildNavItem.page.slug.current}
                                  >
                                    {grandchildNavItem.title}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>

        <ul className="child-nav-ul">
          <div>child nav ul</div>
          <div>{}</div>
        </ul>

        <ul className="grandchild-nav-ul">
          <div>grandchild nav ul</div>
        </ul>
      </div>
    </NavMobileStyles>
  );
}
