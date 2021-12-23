import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import stringToSlug from '../utils/slugify';
import chevronIcon from '../assets/images/chevron-cream.svg';

const ContentSideNavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  position: sticky;
  overflow-y: auto;
  top: 9rem;
  left: 0;
  height: calc(100vh - 9rem);
  padding: 3rem 4rem;
  background: var(--blue);
  color: var(--cream);
  letter-spacing: 0.075em;

  @media (min-width: 68.75rem) {
    // 1100px
    width: 30rem;
  }

  @media (min-width: 87.5rem) {
    // 1400px
    top: 11rem;
    height: calc(100vh - 11rem);
  }

  @media (min-width: 100rem) {
    // 160ppx
    top: 13rem;
    left: 1.8rem;
    height: calc(100vh - 13rem - 1.8rem);
    width: 40rem;
  }

  // scroll bar styles
  // Works on Firefox
  scrollbar-width: thin;
  scrollbar-color: #57708d #76889f;

  // Works on Chrome, Edge, and Safari
  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: #76889f;
  }

  &::-webkit-scrollbar-thumb {
    background: #57708d;
  }

  .parent-header {
    margin: 0 0 3rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--cream);
  }

  .parent-ul,
  .child-ul {
    display: grid;
    grid-template-columns: auto;
    gap: 1.1rem;
    margin: 0;
    padding: 0;

    a {
      display: inline;
      color: var(--cream);
      text-decoration: none;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        color: var(--cream-75);
        transform: translateX(-2px);
      }

      &.active {
        line-height: 1.3;
        border-bottom: 2px solid hsl(82deg 40% 88% / 40%);
      }
    }
  }

  .parent-ul {
    margin-left: 1.6rem;
  }

  .child-ul {
    margin: 1.1rem 0 0 2rem;
  }

  .list-item-no-dot {
    list-style: none;
  }

  .category-button {
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    background: 0;
    border: 0;
    text-align: inherit;
    color: inherit;
    font-size: inherit;
    text-transform: inherit;
    letter-spacing: inherit;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: var(--cream-75);
      transform: translateX(-2px);

      img.chevron {
        opacity: 0.9;
      }
    }

    img.chevron {
      width: 3rem;
      transform: rotate(180deg);
      margin-left: -3.5rem;
      padding: 1rem;
      transition: transform 0.3s ease-out, opacity 0.3s ease;
    }

    &.collapsed {
      & + .child-ul {
        display: none;
      }
      img.chevron {
        transform: rotate(0deg);
      }
    }
  }

  @media (max-width: 68.6875rem) {
    // 1099px
    display: none;
  }
`;

const handleNavCategoryClick = (event) => {
  event.target.classList.toggle('collapsed');
};

export default function ContentSideNav({ nav, parentTitle, location }) {
  return (
    <ContentSideNavStyles className="content-side-nav">
      <h3 className="parent-header font-size-20 font-uppercase font-spacing-200">
        {nav.title}
      </h3>
      <ul className="parent-ul">
        {nav.childNav.map((childNavItem, index) => (
          <li
            key={`${childNavItem.title}-${index}`}
            className={childNavItem.page ? '' : 'list-item-no-dot'}
          >
            {childNavItem.page ? (
              <Link
                to={`/${stringToSlug(parentTitle)}/${
                  childNavItem.page.slug.current
                }/`}
                activeClassName="active"
              >
                {childNavItem.title}
              </Link>
            ) : (
              <button
                onClick={handleNavCategoryClick}
                className={
                  String(location.href).includes(
                    stringToSlug(childNavItem.title)
                  )
                    ? `category-button`
                    : `category-button collapsed`
                }
                type="button"
              >
                <img className="chevron" src={chevronIcon} alt="Chevron icon" />
                {childNavItem.title}
              </button>
            )}
            {childNavItem.grandchildNav.length > 0 && (
              <ul className="child-ul">
                {childNavItem.grandchildNav.map(
                  (grandchildNavItem, gcindex) => (
                    <li key={`${childNavItem.title}-${gcindex}`}>
                      <Link
                        to={`/${stringToSlug(parentTitle)}/${stringToSlug(
                          childNavItem.title
                        )}/${grandchildNavItem.page.slug.current}/`}
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
    </ContentSideNavStyles>
  );
}
