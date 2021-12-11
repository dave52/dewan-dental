import React from 'react';
import styled from 'styled-components';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
import Layout from '../components/Layout';

const PageTestimonialsStyles = styled.ul`
  margin: 0;
  list-style-type: none;

  li {
    position: relative;
    border: 2px solid var(--blue);
    background: var(--cream);
    padding: 2rem;
    border-radius: 4px;
  }

  li::before,
  li::after {
    content: '"';
    /* background: url(); */
    position: absolute;
  }
`;

export default function PageTestimonials({ data, pageContext }) {
  return (
    <Layout>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent>
        <h1>{pageContext.title}</h1>
        <PageTestimonialsStyles>
          <li>
            <h2>I am a quote</h2>
            <p>
              Full block quote of info
              <span>&em; I R person who said dat</span>
            </p>
          </li>
          <li>
            <h2>I am a quote</h2>
            <p>
              Full block quote of info
              <span>&em; I R person who said dat</span>
            </p>
          </li>
          <li>
            <h2>I am a quote</h2>
            <p>
              Full block quote of info
              <span>&em; I R person who said dat</span>
            </p>
          </li>
          <li>
            <h2>I am a quote</h2>
            <p>
              Full block quote of info
              <span>&em; I R person who said dat</span>
            </p>
          </li>
        </PageTestimonialsStyles>
      </ContentComponent>
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
        page {
          title
          slug {
            current
          }
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
`;
