import BlockContent from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import sortNullishByProperty from '../utils/sortNullishByProperty';
import Layout from './Layout';
import bg from '../assets/images/background-paper-texture.jpg';
import TeamPage from './Team';
import stringToSlug from '../utils/slugify';
import chevronIcon from '../assets/images/chevron-cream.svg';

const PageLayoutStyles = styled.div`
  padding: 3rem 5rem;
  font-size: 1.6rem;
  color: var(--black);
  background: url(${bg});

  h1 {
    color: var(--blue);
    font-family: Vollkorn, Georgia, 'Times New Roman', Times, serif;
    font-size: 3.2rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  p,
  ul {
    max-width: 100ch;
  }

  a {
    z-index: 1;
    position: relative;
    overflow: hidden;
    color: #4859be;
    font-weight: 600;
    transition: color 0.3s ease-out;

    &::after {
      content: '';
      background: #d1d9f3;
      position: absolute;
      left: 4px;
      bottom: -5px;
      width: 100%;
      height: calc(100% - 12px);
      z-index: -1;
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
    }

    &:hover {
      color: #581414;

      :after {
        left: -3px;
        bottom: -3px;
        width: calc(100% + 6px);
        height: 106%;
      }
    }
  }
`;

const SideNavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  padding: 3rem 4rem;
  background: var(--blue);

  .parent-header {
    margin: 0 0 3rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--cream);
  }

  .parent-ul,
  .child-ul {
    display: grid;
    grid-template-columns: auto;
    gap: 1.5rem;
    margin: 0;
    padding: 0;

    a {
      display: inline-flex;
      color: var(--cream);
      text-decoration: none;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        color: var(--cream-75);
        transform: translateX(-2px);
      }
    }
  }

  .parent-ul {
    margin-left: 1.6rem;
  }

  .child-ul {
    margin: 1.5rem 0 0 2rem;
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

const LayoutSideNavStyles = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  color: var(--gray);
  min-height: calc(100vh - 9rem);

  @media (min-width: 68.75rem) {
    grid-template-columns: 40rem 1fr;
  }
  @media (min-width: 100rem) {
    min-height: calc(100vh - 11rem - 1.8rem - 1.8rem);
    grid-template-columns: 50rem 1fr;
  }
`;

const handleNavCategoryClick = (event) => {
  console.dir(event);
  console.log(event.target);
  document
    .querySelector('button.category-button')
    .classList.toggle('collapsed');
};

const urlFor = (source) =>
  urlBuilder({ projectId: 'gtwpuxv0', dataset: 'production' }).image(source);

const serializer = {
  types: {
    // eslint-disable-next-line react/display-name
    blockContentImage: ({ node }) =>
      node.imageUrl ? (
        <a href={node.imageUrl}>
          <img src={urlFor(node.asset)} alt={node.imageCaption} />
        </a>
      ) : (
        <img src={urlFor(node.asset)} alt={node.imageCaption} />
      ),
  },
};

export default function Page({ data, pageContext }) {
  return (
    <Layout>
      <LayoutSideNavStyles>
        <SideNavStyles className="font-color-cream font-spacing-200 font-uppercase">
          <h3 className="parent-header font-size-20">
            {data.navigation.title}
          </h3>
          <ul className="parent-ul">
            {data.navigation.childNav
              .sort(sortNullishByProperty('order'))
              .map((childNavItem, index) => (
                <li
                  key={`${childNavItem.title}-${index}`}
                  className={childNavItem.page ? '' : 'list-item-no-dot'}
                >
                  {childNavItem.page ? (
                    <Link
                      to={`/${stringToSlug(pageContext.parentTitle)}/${
                        childNavItem.page.slug.current
                      }`}
                    >
                      {childNavItem.title}
                    </Link>
                  ) : (
                    <button
                      onClick={handleNavCategoryClick}
                      className="category-button"
                      type="button"
                    >
                      <img
                        className="chevron"
                        src={chevronIcon}
                        alt="Chevron icon"
                      />
                      {childNavItem.title}
                    </button>
                  )}
                  {childNavItem.grandchildNav.length > 0 && (
                    <ul className="child-ul">
                      {childNavItem.grandchildNav
                        .sort(sortNullishByProperty('order'))
                        .map((grandchildNavItem, gcindex) => (
                          <li key={`${childNavItem.title}-${gcindex}`}>
                            <Link
                              to={`/${stringToSlug(
                                pageContext.parentTitle
                              )}/${stringToSlug(childNavItem.title)}/${
                                grandchildNavItem.page.slug.current
                              }`}
                            >
                              {grandchildNavItem.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </SideNavStyles>
        <PageLayoutStyles>
          {/* <h1 className="font-serif font-color-blue font-uppercase">
            {pageContext.pageTitle}
          </h1> */}
          <BlockContent
            blocks={data.page._rawContent}
            serializers={serializer}
          />
          {pageContext.isTeamPage === true && <TeamPage />}
        </PageLayoutStyles>
      </LayoutSideNavStyles>
      {/* {pageContext.isContactUsPage === true && <ContactUsPage />} */}
    </Layout>
  );
}

export const query = graphql`
  query ($parentTitle: String!, $slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      _rawContent
    }
    navigation: sanityNavigation(title: { eq: $parentTitle }) {
      title
      childNav {
        title
        order
        page {
          title
          slug {
            current
          }
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
      }
    }
  }
`;
