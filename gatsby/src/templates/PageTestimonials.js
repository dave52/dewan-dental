import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
import Layout from '../components/Layout';
import svgQuotemark from '../assets/images/quotemark.svg';
import BadgeAppointment from '../components/BadgeAppointment';

const PageTestimonialsStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 0;
  list-style-type: none;

  @media (min-width: 50rem) {
    grid-template-columns: 1fr 1fr;
  }

  li {
    display: grid;
    grid-template: auto / auto auto;
    gap: 2rem;
    position: relative;
    padding: 4rem 4rem 2rem 3rem;
    border: 1px solid var(--blue);
    background: #fff4ee;
    border-radius: 4px;
  }

  .quote {
    margin-top: 0;
  }

  .opening-quote,
  .closing-quote {
    display: block;
    width: 2rem;
  }

  .opening-quote {
    margin-top: 1rem;
  }

  .closing-quote {
    margin-left: auto;
    transform: rotate(180deg);
  }
`;

export default function PageTestimonials({ data, pageContext, location }) {
  console.log(data.testimonials);
  return (
    <Layout>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          location={location}
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent>
        <h1>{pageContext.title}</h1>
        <PageTestimonialsStyles>
          {data.testimonials.nodes.map((testimonial, index) => (
            <li key={`${testimonial.name}-${index}`}>
              <img
                className="opening-quote"
                src={svgQuotemark}
                alt="quotemark ligature"
              />
              <div>
                <h2 className="quote font-serif font-color-blue">
                  {testimonial.quote}
                </h2>
                <p>{testimonial.review}</p>
                <div className="row align-center">
                  <p className="font-uppercase font-spacing-100 font-weight-semibold font-size-14">
                    &#8212; {testimonial.name}
                  </p>
                  <img
                    className="closing-quote"
                    src={svgQuotemark}
                    alt="quotemark ligature"
                  />
                </div>
              </div>
            </li>
          ))}
        </PageTestimonialsStyles>
      </ContentComponent>
      <BadgeAppointment />
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
    testimonials: allSanityTestimonials {
      nodes {
        quote
        review
        name
      }
    }
  }
`;
