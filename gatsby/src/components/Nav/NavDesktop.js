import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/dewan-logo-lines.svg';
import chevronIcon from '../../assets/images/chevron-black.svg';
import sortNullishByProperty from '../../utils/sortNullishByProperty';

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
        margin-left: 2.5rem;
        padding: 0.8rem 1.1rem 0.8rem 0;

        &.list-item-no-dot {
          list-style: none;
        }

        .grandchild-nav {
          display: none;
          position: relative;
          margin-left: -2.5rem;
          margin: 0.4rem 0 0 -2.5rem;
          padding-left: 1rem;

          li:last-of-type {
            padding-bottom: 0;
          }
        }

        &:hover > .grandchild-nav,
        .grandchild-nav.is-visible {
          display: flex;
          flex-direction: column;
        }

        &:hover button img.chevron,
        button.expanded img.chevron {
          opacity: 0.9;
          transform: rotate(180deg);
        }

        a,
        button {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          transition: transform 0.3s ease-out, opacity 0.3s ease;

          &:hover {
            transform: translateX(-2px);
            opacity: 0.9;
          }
        }

        button {
          img.chevron {
            width: 2.4rem;
            transform: rotate(0);
            margin-left: -2.5rem;
            padding: 0.6rem 0.8rem;
            transition: transform 0.3s ease-out, opacity 0.3s ease;
          }
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
  console.log(event.target);
  let buttonEl = event.target;
  if (event.target.tagName === 'IMG') {
    buttonEl = event.target.parentElement;
  }
  buttonEl.classList.toggle('expanded');
  buttonEl.nextSibling?.classList.toggle('is-visible');
};

function NavDesktopItems({ nav }) {
  console.log(nav);
  return (
    <>
      {nav.map((parentNavItem) => (
        <div className="parent-nav-item">
          {parentNavItem.page === null ? (
            <button type="button" onClick={toggleChildNav}>
              {parentNavItem.title}
            </button>
          ) : (
            <Link key={parentNavItem} to={parentNavItem.page.slug.current}>
              {parentNavItem.title}
            </Link>
          )}
          {parentNavItem.page === null && (
            <ul className="child-nav">
              {parentNavItem.childNav.map((childNavItem, index) => (
                <li
                  className={childNavItem.page === null && 'list-item-no-dot'}
                  key={`${childNavItem.title}-${index}`}
                >
                  {childNavItem.page === null ? (
                    <button type="button" onClick={toggleGrandchildNav}>
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
                      to={childNavItem.page.slug.current}
                    >
                      {childNavItem.title}
                    </Link>
                  )}

                  {childNavItem.page === null && (
                    <ul className="grandchild-nav">
                      {childNavItem.grandchildNav.map(
                        (grandchildNavItem, index2) => (
                          <li key={`${grandchildNavItem.title}-${index2}`}>
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
        </div>
      ))}
    </>
  );
}

function NavDesktopItemOld() {
  return (
    <div type="button" className="parent-nav-item" onClick={toggleChildNav}>
      Drop it!
      <ul className="child-nav">
        <li>
          <Link>Item 1</Link>
        </li>
        <li className="list-item-no-dot">
          <button type="button" onClick={toggleGrandchildNav}>
            <img className="chevron" src={chevronIcon} alt="Chevron icon" />
            Item 2
          </button>
          <ul className="grandchild-nav">
            <li>
              <Link>Child item 1</Link>
            </li>
            <li>
              <Link>Child item 2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>Item 3</Link>
        </li>
        <li className="list-item-no-dot">
          <button type="button" onClick={toggleGrandchildNav}>
            <img className="chevron" src={chevronIcon} alt="Chevron icon" />
            Item 4
          </button>
          <ul className="grandchild-nav">
            <li>
              <Link>Child item 1</Link>
            </li>
            <li>
              <Link>Child item 2</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
  const sortedNav = nav.nodes.sort(sortNullishByProperty('order'));
  const firstHalfList = [...sortedNav.slice(0, sortedNav.length / 2)];
  const lastHalfList = [...sortedNav.slice(sortedNav.length / 2)];

  return (
    <NavDesktopStyles className="nav-desktop">
      <div className="left">
        <NavDesktopItems nav={firstHalfList} />
        <NavDesktopItemOld />
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
        <NavDesktopItemOld />
        <NavDesktopItems nav={lastHalfList} />
        <NavDesktopItemOld />
      </div>
    </NavDesktopStyles>
  );
}
