import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ModalTeam from '../components/ModalTeam';
import Layout from '../components/Layout';
import ContentComponent from '../components/ContentComponent';
import BadgeAppointment from '../components/BadgeAppointment';
import ContentSideNav from '../components/ContentSideNav';
import sortNullishByProperty from '../utils/sortNullishByProperty';

const TeamStyles = styled.ul`
  width: 100%;
  max-width: 120rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 4rem;
  padding: 0;
  list-style-type: none;

  @media (min-width: 37.5rem) {
    // 600px
    gap: 3rem;
  }

  li {
    flex: 0 1 13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    background: #fff;
    border: 3px solid #bdcbc1;
    border-radius: 6px;

    @media (min-width: 31.25rem) {
      // 500px
      flex: 0 1 15rem;
    }

    @media (min-width: 37.5rem) {
      // 600px
      padding: 2rem;
      flex: 0 1 20rem;
    }
  }

  .text {
    h2 {
      margin: 0;

      @media (max-width: 31.25rem) {
        // 500px
        font-size: 1.8rem;
      }
    }

    h3 {
      margin: 0 0 2rem;
      line-height: 1;

      @media (max-width: 31.25rem) {
        // 500px
        font-size: 1.1rem;
      }
    }
  }

  .bio {
    padding: 0 2rem;
  }

  .bio p:first-of-type {
    margin-top: 0;
  }

  .photo {
    width: 100%;
    max-width: 20rem;
    flex-shrink: 0;
  }

  .button {
    display: inline-flex;
    margin-top: 2rem;
    padding: 1.5rem;

    @media (max-width: 31.25rem) {
      // 500px
      font-size: 1.2rem;
    }
  }

  .is-hidden {
    display: none;
  }
`;

const openModal = function (e) {
  e.target?.nextElementSibling.classList.remove('is-hidden');
  document.body.classList.add('overflow-hidden');
};

export default function PageTeamBios({ data, pageContext, location }) {
  const orderedPeople = data.team.nodes.sort(sortNullishByProperty('order'));
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
        <h1>{pageContext.pageTitle}</h1>
        <TeamStyles>
          {orderedPeople.map((person) => (
            <li className="font-color-blue" key={person.name}>
              <div className="text">
                <h2 className="font-size-20 font-serif">{person.name}</h2>
                <h3 className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
                  {person.role}
                </h3>
              </div>
              <div className="photo-button-container">
                <Img className="photo" fluid={person.photo.asset.fluid} />
                <button className="button" type="button" onClick={openModal}>
                  View bio
                </button>
                <ModalTeam person={person} />
              </div>
            </li>
          ))}
        </TeamStyles>
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
    team: allSanityTeam {
      nodes {
        name
        order
        role
        photo {
          asset {
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawBio
      }
    }
  }
`;
