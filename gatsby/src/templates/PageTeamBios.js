import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ModalTeam from '../components/ModalTeam';
import Layout from '../components/Layout';
import ContentComponent from '../components/ContentComponent';
import BadgeAppointment from '../components/BadgeAppointment';
import ContentSideNav from '../components/ContentSideNav';
import sortNullishByProperty from '../utils/sortNullishByProperty';

const TeamStyles = styled.div`
  .intro {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;

    @media (min-width: 1300px) {
      gap: 6rem;
      grid-template-columns: 60ch 1fr;
    }

    /* @media (min-width: 1400px) {
      gap: 6rem;
      grid-template-columns: min(66%, 60ch) 1fr;
    } */

    .img-wrapper {
      width: 100%;
      max-width: 30rem;
      margin: 0 auto;

      img {
        border-radius: 8px;
      }
    }
  }

  ul {
    --bio-card-width: 20rem;
    width: 100%;
    /* max-width: 120rem; */
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--bio-card-width), 1fr));
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    gap: 1.5rem;
    margin: 4rem auto 0;
    padding: 0;
    list-style-type: none;

    @media (min-width: 37.5rem) {
      // 600px
      --bio-card-width: 21rem;
      gap: 3rem;
    }

    @media (min-width: 112.5rem) {
      // 1800px
      --bio-card-width: 25rem;
      gap: 3rem;
    }
  }

  li {
    /* flex: 0 1 13rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    background: #fff;
    border: 3px solid var(--gray);
    border-radius: 6px;

    @media (min-width: 31.25rem) {
      // 500px
      /* flex: 0 1 15rem; */
    }

    @media (min-width: 37.5rem) {
      // 600px
      padding: 2rem;
      /* flex: 0 1 20rem; */
    }
  }

  .text {
    margin-right: auto;

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
    max-width: 15rem;
    flex-shrink: 0;
  }

  .button {
    display: block;
    margin: 2rem auto 0;
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
      <ContentComponent fullContentStyles>
        <TeamStyles>
          <h1>{pageContext.pageTitle}</h1>
          <div className="intro">
            <div>
              <p className="font-size-20 font-color-blue font-serif">
                Your health means the world to us. <br />
                We value your commitment to lifelong dental health and pledge
                ourselves to caring for you.
              </p>
              <p>
                Our wellness team created this mission statement to guide our
                service to you. We take pride in bringing you first-class,
                modern and cost-effective dental care by constantly updating our
                skills and techniques, and by putting you and your individual
                needs first.
              </p>
            </div>
            <div className="img-wrapper">
              <StaticImage
                quality={75}
                placeholder="blurred"
                src="../assets/images/team-abbey-road.jpg"
                alt="Photo of the DeWan Team imitating the cover of the Beatle's Abbey Road, walking through a crosswalk on a street"
              />
            </div>
          </div>
          <hr />
          <ul>
            {orderedPeople.map((person) => (
              <li className="font-color-blue" key={person.name}>
                <div className="text">
                  <h2 className="font-size-20 font-serif">{person.name}</h2>
                  <h3 className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
                    {person.role}
                  </h3>
                </div>
                <div className="photo-button-container">
                  <GatsbyImage
                    image={person.photo.asset.gatsbyImageData}
                    className="photo"
                  />
                  <button className="button" type="button" onClick={openModal}>
                    View bio
                  </button>
                  <ModalTeam person={person} />
                </div>
              </li>
            ))}
          </ul>
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
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        _rawBio
      }
    }
  }
`;
