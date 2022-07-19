import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/dewan-logo-lines.svg';
import sortNullishByProperty from '../../utils/sortNullishByProperty';
import stringToSlug from '../../utils/slugify';

// 68.75rem mobile -> desktop nav
const NavDesktopStyles = styled.nav`
  grid-template-columns: 1fr auto 1fr;
  background: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;

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

    a,
    button,
    div {
      display: block;
      padding: 0;
      font-size: 1.1rem;
      text-decoration: none;
      text-transform: uppercase;
      line-height: 0.9;
      letter-spacing: 0.1em;
      cursor: pointer;
      color: var(--black);
      background: 0;
      border: 0;

      @media (min-width: 87.5rem) {
        // 1400px
        font-size: 1.3rem;

        &:hover {
          color: var(--brown);
        }
      }

      &.parent-nav-item {
        &:before,
        &:after {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-top: 2px solid rgba(255, 255, 255, 0);
          bottom: 0;
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

      &:hover > .child-nav,
      .child-nav.is-visible {
        display: flex;
        flex-direction: column;
        }
      }
    }

    .child-nav {
      display: none;
      position: absolute;
      margin: 0.9rem 0;
      padding: 0;
      background: #fff;
      box-shadow: 0px 1px 4px #000000bb;

      li {
        padding: 0.8rem 1.1rem;
        position: relative;
        list-style: none;

        .grandchild-nav {
          display: none;
          position: absolute;
          top: 0;
          width: 100%;
          padding: 0;
          background: #fff;
          box-shadow: 0px 1px 4px #000000bb;
        }

        &:hover > .grandchild-nav,
        .grandchild-nav.is-visible {
          display: flex;
          flex-direction: column;
        }

        a,
        button {
          display: inline;
          text-align: left;
          line-height: 1.3;
          letter-spacing: 0.05em;
          text-transform: initial;
          transition: transform 0.3s ease-out, opacity 0.3s ease;

          &:hover {
            transform: translateX(-2px);
            opacity: 0.9;
          }
        }

        a.active {
          border-bottom: 2px solid hsl(214deg 32% 40% / 40%);
        }
      }
    }
  }

  .left {
    & > * {
      margin-right: 2rem;

      @media (min-width: 75rem) {
        margin-right: 4rem;
      }
    }

    .grandchild-nav {
      left: 100%;
    }
  }

  .right {
    justify-content: flex-end;
    padding-left: 0;

    & > * {
      margin-left: 2rem;

      @media (min-width: 75rem) {
        margin-left: 4rem;
      }
    }

    .grandchild-nav {
      right: 100%;
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

    .logo-text {
      margin-left: 1.5rem;
      color: var(--black);
      line-height: 1.7;

      @media (min-width: 87.5rem) {
        margin-left: 2.4rem;
      }
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
`;

const toggleChildNav = (event) => {
  let buttonEl = event.target;
  if (event.target.tagName === 'IMG' || event.target.tagName === 'img') {
    buttonEl = event.target.parentElement;
  }
  buttonEl.classList.toggle('expanded');
  buttonEl.nextSibling?.classList.toggle('is-visible');
};

const toggleGrandchildNav = (event) => {
  let buttonEl = event.target;
  if (event.target.tagName === 'IMG') {
    buttonEl = event.target.parentElement;
  }
  buttonEl.classList.toggle('expanded');
  buttonEl.nextSibling?.classList.toggle('is-visible');
};

function NavDesktopItems({ nav }) {
  return (
    <>
      {nav.map((parentNavItem, index1) => (
        <div
          className="parent-nav-item"
          key={`${parentNavItem.title}-${index1}`}
        >
          {parentNavItem.page === null ? (
            <button type="button" onClick={toggleChildNav}>
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
                <li key={`${childNavItem.title}-${index2}`}>
                  {childNavItem.page === null ? (
                    <button type="button" onClick={toggleGrandchildNav}>
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
                    <ul className="grandchild-nav">
                      {childNavItem.grandchildNav.map(
                        (grandchildNavItem, index3) => (
                          <li key={`${grandchildNavItem.title}-${index3}`}>
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
        </div>
      ))}
    </>
  );
}

export default function NavDesktop() {
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

  const sortedNav = nav.nodes.sort(sortNullishByProperty('order'));
  const firstHalfList = [...sortedNav.slice(0, sortedNav.length / 2)];
  const lastHalfList = [...sortedNav.slice(sortedNav.length / 2)];

  return (
    <NavDesktopStyles className="nav-desktop">
      <div className="left">
        <NavDesktopItems nav={firstHalfList} />
      </div>
      <div className="row space-between">
        <Link to="/" className="logo">
          <img
            src={logo}
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
      </div>
      <div className="right">
        <NavDesktopItems nav={lastHalfList} />
      </div>
    </NavDesktopStyles>
  );
}
