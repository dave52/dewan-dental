import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
import Layout from '../components/Layout';
import ConditionalWrapper from '../components/ConditionalWrapper';
import BadgeAppointment from '../components/BadgeAppointment';

const PageOurCommunityStyles = styled.div`
  max-width: 120rem;
  display: grid;
  gap: 4rem;

  .intro {
    display: grid;
    grid-template-columns: auto;
    gap: 4rem;

    @media (min-width: 62.5rem) {
      // 1000px
      grid-template-columns: 1fr auto;
      gap: max(10vw, 20rem);
    }

    p {
      max-width: 70ch;
      margin: 0;
    }

    .tagline {
      display: inline-flex;
      align-self: flex-start;
      justify-self: center;
      padding: 2rem 3rem;
      background: var(--blue);
      color: var(--cream);
      font-size: 2rem;

      @media (min-width: 62.5rem) {
        // 1000px
        padding: 3rem 4rem;
        font-size: 2.4rem;
        margin: 10rem 0;
      }
    }
  }

  .comm {
    display: grid;
    grid-template-columns: auto;
    gap: 4rem;

    @media (min-width: 62.5rem) {
      // 1000px
      grid-template-columns: 1fr 1fr;
      gap: max(10vw, 40rem);

      &:nth-of-type(odd) {
        .gallery {
          order: -1;
        }
      }
    }

    .gallery {
      width: 100%;
      max-width: 30rem;
      margin: 2rem auto 0;
    }
  }
`;

export default function PageOurCommunity({ data, pageContext, location }) {
  return (
    <Layout title={pageContext.pageTitle}>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          location={location}
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent>
        <PageOurCommunityStyles>
          <div className="intro">
            <div>
              <h1>{pageContext.pageTitle}</h1>
              <p>
                We love Milwaukee's vibrant East Side community and our diverse
                mix of residential and business neighbors. DeWan Dental Wellness
                is a proud sponsor of many great local events, and you'll often
                see members of our wellness team at local fairs, festivals and
                markets. Beyond our neighborhood connections, our staff members
                are also very active in our professional communities. We strive
                to keep our skills and knowledge fresh to give you the best care
                possible.
              </p>
            </div>
            <div className="tagline font-serif">
              Your health means the world to us.
            </div>
          </div>
          {data.comm.nodes.map((comm) => (
            <div className="comm" key={comm.group}>
              <div className="text">
                <h2>{comm.group}</h2>
                <p>{comm.description}</p>
                <ul>
                  {comm.partners.map((partner) => (
                    <li key={partner.title}>
                      <ConditionalWrapper
                        condition={!!partner.link}
                        wrapper={(children) => (
                          <a href={partner.link}>{children}</a>
                        )}
                      >
                        <>{partner.title}</>
                      </ConditionalWrapper>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gallery">
                <GatsbyImage
                  image={comm.images[0].asset.gatsbyImageData}
                  className="image"
                  alt={comm.images[0].imageCaption}
                />
              </div>
            </div>
          ))}
        </PageOurCommunityStyles>
      </ContentComponent>
      <BadgeAppointment />
    </Layout>
  );
}

export const query = graphql`
  query {
    comm: allSanityCommunity {
      nodes {
        group
        description
        partners {
          title
          link
        }
        images {
          imageCaption
          asset {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`;
