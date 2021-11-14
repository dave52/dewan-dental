import BlockContent from '@sanity/block-content-to-react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ModalTeam from '../components/ModalTeam';

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
  console.log(e.target);
  e.target?.nextElementSibling.classList.toggle('is-hidden');
};

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
      {console.log(team.nodes)}
      {team.nodes.map((person) => (
        <li className="font-color-blue" key={person.name}>
          <h2 className="font-size-20 font-serif">{person.name}</h2>
          <h3 className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
            {person.role}
          </h3>
          <Img className="photo" fluid={person.photo.asset.fluid} />
          {/* <div className="row align-flex-start">
            <Img className="photo" fluid={person.photo.asset.fluid} />
            <div className="bio">
              <BlockContent blocks={person._rawBio} />
            </div>
          </div> */}
          <button className="button" type="button" onClick={toggleModal}>
            View bio
          </button>
          <ModalTeam person={person} />
        </li>
      ))}
    </TeamStyles>
  );
}
