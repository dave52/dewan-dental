import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
import Layout from '../components/Layout';
import BadgeAppointment from '../components/BadgeAppointment';

const PageLocationAndHoursStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'location'
    'hours'
    'map'
    'directions';
  gap: 4rem;
  margin-bottom: 3rem;

  @media (min-width: 68.75rem) {
    // 1100px
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'header header'
      'location hours'
      'directions map';
  }

  .tile {
    padding: 4rem;
    border: 1px solid var(--blue);
    background: #fff4ee;
    border-radius: 4px;

    h2 {
      margin-top: 0;
    }
  }

  .header {
    grid-area: header;
  }

  .location {
    grid-area: location;
    display: inline-flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem 3rem;
  }

  .hours {
    grid-area: hours;
    display: inline-grid;
    grid-template-columns: auto 1fr;
    gap: 0rem 3rem;

    h2 {
      grid-column: span 2;
    }
  }
  .directions {
    grid-area: directions;
  }
  .map {
    grid-area: map;
    align-self: start;
    justify-self: center;

    @media (min-width: 68.75rem) {
      // 1100px
      justify-self: start;
    }

    a {
      display: flex;
      box-shadow: 0px 1px 4px #16457fbb;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0px 3px 8px #16457fbb;
      }
    }
  }
`;

export default function PageLocationAndHours({ data, pageContext, location }) {
  const info = data.info.nodes[0];
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
        <PageLocationAndHoursStyles>
          <h1 className="header">{pageContext.pageTitle}</h1>
          <div className="location tile">
            <h2>Location</h2>
            <div>{info.name}</div>
            <div>{info.streetAddress}</div>
            <div>{info.cityStateZip}</div>
            <div>
              <a
                href="https://goo.gl/maps/bbWeEBpLvbZeGSej9"
                target="_blank"
                rel="noreferrer"
                className="underscore"
              >
                Location on Google Maps
              </a>
            </div>
          </div>
          <div className="hours tile">
            <h2>Hours</h2>
            {info.hours.map((item) => (
              <>
                <div>
                  {item.days.map((day, index) => {
                    const abbrDay = `${day.substring(0, 3)}.`;
                    const { length } = item.days;
                    if (length === 1 || index === length - 1) {
                      return abbrDay;
                    }
                    if (index === length - 2) {
                      return `${abbrDay} & `;
                    }
                    return `${abbrDay}, `;
                  })}
                </div>
                <div>
                  {item.timeOpen === item.timeClosed
                    ? item.timeOpen
                    : `${item.timeOpen} to ${item.timeClosed}`}
                </div>
              </>
            ))}
            <div>&nbsp;</div>
          </div>
          <div className="map">
            <a
              href="https://goo.gl/maps/bbWeEBpLvbZeGSej9"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                placeholder="blurred"
                src="../assets/images/location-google-maps.jpg"
                alt="Map view of Dewan Dental's location"
              />
            </a>
          </div>
          <div className="directions tile">
            <h2>Directions and Parking</h2>
            <p>
              Our dentist office is located in Milwaukee two blocks north of
              North Avenue, one block north of Whole Foods and across the street
              from Maryland Avenue School and the BP gas station.
            </p>
            <p>
              There is free, angled parking on Greenwich and metered parking on
              the east and west sides of Farwell Avenue. If you need change for
              the parking meter, please ask!
            </p>
          </div>
        </PageLocationAndHoursStyles>
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
    info: allSanityContactInfo {
      nodes {
        hours {
          days
          timeClosed
          timeOpen
        }
        cityStateZip
        emailAddress
        phoneNumber
        name
        streetAddress
      }
    }
  }
`;
