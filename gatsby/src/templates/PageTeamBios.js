import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ModalTeam from '../components/ModalTeam';
import Layout from '../components/Layout';
import ContentComponent from '../components/ContentComponent';
import BadgeAppointment from '../components/BadgeAppointment';
import ContentSideNav from '../components/ContentSideNav';
import sortNullishByProperty from '../utils/sortNullishByProperty';

// https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6

const TeamStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  list-style-type: none;

  li {
    padding: 2rem;
    background: #fff;
    border: 3px solid var(--cream);
    border-radius: 2rem;
  }

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0 0 2rem;
    line-height: 1;
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

  .is-hidden {
    display: none;
  }
`;

const toggleModal = function (e) {
  e.target?.nextElementSibling.classList.toggle('is-hidden');
};

export default function PageTeamBios({ data, pageContext, location }) {
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
        <TeamStyles>
          {data.team.nodes.map((person) => (
            <li className="font-color-blue" key={person.name}>
              <h2 className="font-size-20 font-serif">{person.name}</h2>
              <h3 className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
                {person.role}
              </h3>
              <Img className="photo" fluid={person.photo.asset.fluid} />
              <button className="button" type="button" onClick={toggleModal}>
                View bio
              </button>
              <ModalTeam person={person} />
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
