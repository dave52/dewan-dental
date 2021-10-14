import BlockContent from '@sanity/block-content-to-react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const TeamStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  list-style-type: none;

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
`;

export default function TeamPage({ data, pageContext }) {
  const { team } = useStaticQuery(graphql`
    query {
      team: allSanityTeam {
        nodes {
          name
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
  `);

  return (
    <TeamStyles>
      {team.nodes.map((person) => (
        <li className="font-color-blue" key={person.name}>
          <h2 className="font-size-20 font-serif">{person.name}</h2>
          <h3 className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
            {person.role}
          </h3>
          <div className="row align-flex-start">
            <Img className="photo" fluid={person.photo.asset.fluid} />
            <div className="bio">
              <BlockContent blocks={person._rawBio} />
            </div>
          </div>
        </li>
      ))}
    </TeamStyles>
  );
}
