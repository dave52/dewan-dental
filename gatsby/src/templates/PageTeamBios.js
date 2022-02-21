import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ModalTeam from '../components/ModalTeam';
import Layout from '../components/Layout';
import ContentComponent from '../components/ContentComponent';
import BadgeAppointment from '../components/BadgeAppointment';
import ContentSideNav from '../components/ContentSideNav';

const TeamStyles = styled.div`
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;

    .mission-statement {
      line-height: 1.4;
    }

    .img-wrapper {
      width: 100%;
      max-width: 50rem;
      margin: 0 auto;

      img {
        border-radius: 8px;
      }
    }
  }

  ul.rows {
    display: grid;
    grid-template-rows: auto;
    padding: 0;
    list-style-type: none;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      gap: 1.5rem;
      margin: 4rem auto 0;
      padding: 0;
      list-style-type: none;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 18rem;
        flex-grow: 0;
        padding: 1.5rem;
        background: #fff;
        border: 3px solid var(--gray);
        border-radius: 6px;

        @media (min-width: 37.5rem) {
          // 600px
          width: 20rem;
          padding: 2rem;
        }
      }
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
  const people = data.team.nodes;
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
          <div className="intro">
            <h1>{pageContext.pageTitle}</h1>
            <div className="img-wrapper">
              <StaticImage
                quality={100}
                placeholder="blurred"
                src="../assets/images/dewan-group-in-office.jpg"
                alt="Photo of the DeWan Team in the office, all wearing green scrubs other than Mike DeWan"
              />
            </div>
            <p className="mission-statement font-size-26 font-color-blue font-serif">
              Your health means the world to us. <br />
              We value your commitment to lifelong dental health and pledge
              ourselves to caring for you.
            </p>
            <p>
              Our wellness team created this mission statement to guide our
              service to you. We take pride in bringing you first-class, modern
              and cost-effective dental care by constantly updating our skills
              and techniques, and by putting you and your individual needs
              first.
            </p>
          </div>
          <hr />
          <ul className="rows">
            {people.map((person, index) => {
              if (person.rowOrder !== people[index - 1]?.rowOrder) {
                return (
                  <li className={`row row-${person.rowOrder}`}>
                    <ul className="row">
                      {people.map((person2) =>
                        person.rowOrder === person2.rowOrder ? (
                          <li className="font-color-blue" key={person2.name}>
                            <div className="text">
                              <h2 className="font-size-20 font-serif">
                                {person2.name}
                              </h2>
                              <h3 className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
                                {person2.role}
                              </h3>
                            </div>
                            <div className="photo-button-container">
                              <GatsbyImage
                                image={person2.photo?.asset?.gatsbyImageData}
                                className="photo"
                                quality={100}
                                alt={`Photo of ${person2.name}`}
                              />
                              <button
                                className="button"
                                type="button"
                                onClick={openModal}
                              >
                                View bio
                              </button>
                              <ModalTeam person={person2} data={data} />
                            </div>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                );
              }
            })}
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
    allPages: allSanityPage {
      nodes {
        _id
        title
        slug {
          current
        }
        navigation {
          title
          childNav {
            title
            grandchildNav {
              title
            }
          }
        }
      }
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
    team: allSanityTeam(
      sort: { order: [ASC, ASC], fields: [rowOrder, order] }
    ) {
      nodes {
        name
        rowOrder
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
