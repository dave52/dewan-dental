import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logoMobile from '../../assets/images/dewan-logo-lines-mobile.svg';
import chevronIcon from '../../assets/images/chevron-cream.svg';
import sortNullishByProperty from '../../utils/sortNullishByProperty';
import stringToSlug from '../../utils/slugify';

const NavMobileStyles = styled.nav`
  grid-template-columns: 1fr;
  background: var(--blue);

  .logo {
    display: flex;
    align-items: center;
    margin: 1rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
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
      letter-spacing: 0.1em;
    }
  }

  .mobile-menu-button {
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 1.2rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: none;
    --webkit-appearance: none;
    border: none;
    color: var(--gray);

    .action-text-menu {
      display: inline;
    }

    .action-text-close {
      display: none;
    }

    svg {
      /* width: 2.7rem; */
      width: 3rem;
      margin-top: 0.2rem;

      & > g {
        pointer-events: none;
        transition: transform 0.4s ease-out;
      }
    }

    // styles when menu is open, hamburger icon becomes X icon
    &.is-x-icon {
      .action-text-menu {
        display: none;
      }

      .action-text-close {
        display: inline;
        font-size: 0.8rem;
      }

      svg {
        .bar-1 {
          transform: rotate(45deg) translate(11%, -29%);
        }
        .bar-2 {
          transform: translateX(100%);
        }
        .bar-3 {
          transform-origin: bottom left;
          transform: rotate(-45deg) translate(10%, 30%);
        }
      }
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
    border: 1.2rem solid #ffffff22;
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

  // nav items
  .parent-nav {
    padding: 0;
    color: #ffffff;
    width: 100%;

    a,
    button {
      display: inline-flex;
      align-items: center;
      padding: 0;
      border: 0;
      background: 0;
      font-size: 1.8rem;
      text-align: left;
      letter-spacing: 0.05em;
      font-weight: bold;
      line-height: 1.4;
      transition: transform 0.3s ease-out, opacity 0.3s ease;
    }

    a {
      margin-left: 0;

      &.active {
        line-height: 1.3;
        border-bottom: 2px solid hsl(82deg 40% 88% / 40%);
      }
    }

    & > li {
      margin: 1rem 2.1rem;
      padding: 0.5rem 0 1rem;
      border-bottom: 4px solid #878ea8;

      &:last-of-type {
        border: 0;
      }
    }

    li {
      margin-left: 2.1rem;
      padding: 0 1.1rem 0.8rem 0.4rem;

      &.list-item-no-dot {
        list-style: none;
      }

      .child-nav {
        display: none;
        position: relative;
        margin-left: -2.5rem;
        margin: 1rem 0 0 -2.5rem;
        padding-left: 3rem;

        &.is-visible {
          display: flex;
          flex-direction: column;
        }

        a,
        button {
          font-size: 1.4rem;
        }
      }

      button {
        img.chevron {
          width: 2.4rem;
          transform: rotate(0);
          margin-left: -2.9rem;
          padding: 0.6rem 0.8rem;
          transition: transform 0.3s ease-out, opacity 0.3s ease;
        }
      }

      button.expanded img.chevron {
        opacity: 0.9;
        transform: rotate(180deg);
      }
    }
  }
`;

const handleMenuClick = (event) => {
  const menuLinks = document.querySelector('.mobile-nav').querySelectorAll('a');
  let buttonEl = event.target;
  if (event.target.tagName === 'SVG' || event.target.tagName === 'svg') {
    buttonEl = event.target.parentElement;
  }
  menuLinks.forEach((link) =>
    link.addEventListener('click', function () {
      document.body.classList.remove('overflow-hidden');
    })
  );
  document.querySelector('.mobile-nav').classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
  buttonEl.classList.toggle('is-x-icon');
};

const toggleChildNav = (event) => {
  let buttonEl = event.target;
  if (event.target.tagName === 'IMG' || event.target.tagName === 'img') {
    buttonEl = event.target.parentElement;
  }
  buttonEl.classList.toggle('expanded');
  buttonEl.nextSibling?.classList.toggle('is-visible');
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
          <span className="action-text-menu">Menu</span>
          <span className="action-text-close">Close</span>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 69 46.6"
            fill="#e2ddde"
          >
            <g className="bar-1">
              <rect x="5" y="2.1" width="59" height="6.2" />
            </g>
            <g className="bar-2">
              <rect x="5" y="20.2" className="st2" width="59" height="6.2" />
            </g>
            <g className="bar-3">
              <rect x="5" y="38.3" className="st2" width="59" height="6.2" />
            </g>
          </svg>
        </button>
      </div>
      <div className="mobile-nav hidden">
        <ul className="parent-nav">
          {nav.nodes
            .sort(sortNullishByProperty('order'))
            .map((parentNavItem, index1) => (
              <li
                className={
                  parentNavItem.page === null ? 'list-item-no-dot' : ''
                }
                key={`${parentNavItem.title}-${index1}`}
              >
                {parentNavItem.page === null ? (
                  <button type="button" onClick={toggleChildNav}>
                    <img
                      className="chevron"
                      src={chevronIcon}
                      alt="Chevron icon"
                    />
                    {parentNavItem.title}
                  </button>
                ) : (
                  <Link
                    key={parentNavItem}
                    to={`/${parentNavItem.page.slug.current}/`}
                    activeClassName="active"
                  >
                    {parentNavItem.title}
                  </Link>
                )}
                {parentNavItem.page === null && (
                  <ul className="child-nav">
                    {parentNavItem.childNav.map((childNavItem, index2) => (
                      <li
                        className={
                          childNavItem.page === null ? 'list-item-no-dot' : ''
                        }
                        key={`${childNavItem.title}-${index2}`}
                      >
                        {childNavItem.page === null ? (
                          <button type="button" onClick={toggleChildNav}>
                            <img
                              className="chevron"
                              src={chevronIcon}
                              alt="Chevron icon"
                            />
                            {childNavItem.title}
                          </button>
                        ) : (
                          <Link
                            key={childNavItem}
                            to={`/${stringToSlug(parentNavItem.title)}/${
                              childNavItem.page.slug.current
                            }/`}
                            activeClassName="active"
                          >
                            {childNavItem.title}
                          </Link>
                        )}

                        {childNavItem.page === null && (
                          <ul className="child-nav">
                            {childNavItem.grandchildNav.map(
                              (grandchildNavItem, index3) => (
                                <li
                                  key={`${grandchildNavItem.title}-${index3}`}
                                >
                                  <Link
                                    key={grandchildNavItem}
                                    to={`/${stringToSlug(
                                      parentNavItem.title
                                    )}/${stringToSlug(childNavItem.title)}/${
                                      grandchildNavItem.page.slug.current
                                    }/`}
                                    activeClassName="active"
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
      </div>
    </NavMobileStyles>
  );
}
