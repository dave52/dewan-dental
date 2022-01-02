import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ContentComponent from '../components/ContentComponent';
import ContentSideNav from '../components/ContentSideNav';
import Layout from '../components/Layout';
import imgMap from '../assets/images/location-google-maps.jpg';
import BadgeAppointment from '../components/BadgeAppointment';

// urls
// https://maps.googleapis.com/maps/api/staticmap?center=dewandentalwellness&zoom=17&size=400x400&key=AIzaSyBT7TwQd69gZXXKcxIY-U1Rs5uIzmIEUZ0
// https://developers.google.com/maps/documentation/maps-static/start
// https://developers.google.com/maps/documentation/javascript/overview?hl=en_US#maps_map_simple-html

const PageLocationAndHoursStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'map'
    'directions'
    'parking';
  gap: 3rem 5rem;

  @media (min-width: 68.75rem) {
    // 1100px
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'header header'
      'directions map'
      'parking .';
  }

  .header {
    grid-area: header;

    .header-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 5rem;
      font-size: 1.8rem;

      @media (min-width: 45rem) {
        // 720px
        grid-template-columns: 1fr 1fr;
      }

      .location {
        display: inline-grid;
        grid-template-columns: 1fr;
        gap: 1rem 3rem;
      }

      .hours {
        display: inline-grid;
        grid-template-columns: auto 1fr;
        gap: 0rem 3rem;

        h2 {
          grid-column: span 2;
        }
      }
    }
  }
  .directions {
    grid-area: directions;
  }
  .parking {
    grid-area: parking;
  }
  .map {
    grid-area: map;
    align-self: start;
    justify-self: center;
    margin: 3rem 0;

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

    img {
      width: 100%;
      max-width: 50rem;
      height: 100%;
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
          <div className="header">
            <h1>{pageContext.pageTitle}</h1>
            <div className="header-grid">
              <div>
                <h2>Location</h2>
                <div>{info.name}</div>
                <div>{info.streetAddress}</div>
                <div>{info.cityStateZip}</div>
                <a
                  href="https://goo.gl/maps/bbWeEBpLvbZeGSej9"
                  target="_blank"
                  rel="noreferrer"
                  className="underscore"
                >
                  Location on Google Maps
                </a>
              </div>
              <div className="hours">
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
            </div>
          </div>
          <div className="map">
            <a
              href="https://goo.gl/maps/bbWeEBpLvbZeGSej9"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgMap} alt="Map view of Dewan Dental's location" />
            </a>
          </div>
          <div className="directions">
            <h2>Directions</h2>
            Our dentist office is located in Milwaukee two blocks north of North
            Avenue, one block north of Whole Foods and across the street from
            Maryland Avenue School and the Citgo station. Farwell is a one-way
            street heading south.
            <ul>
              <li>
                From the University of Wisconsin–Milwaukee: Take Maryland Avenue
                south until it turns into Farwell Avenue.
              </li>
              <li>
                From Lincoln Memorial Drive: Take Water Tower Road to North
                Avenue. Turn right on Prospect and veer left on Maryland.
              </li>
              <li>
                From I-43: Take the North Avenue exit east. Turn left on
                Prospect and veer left on Maryland.
              </li>
              <li>
                From the north: Take Lake Drive to North Avenue. Turn right on
                North, right on Prospect and veer left on Maryland.
              </li>
            </ul>
          </div>
          <div className="parking">
            <h2>Parking</h2>
            <p>
              There is plenty of meter parking on the east and west sides of
              Farwell Avenue. On Greenwich, parking is free. Just west of our
              dentist office there is a parking slab that you can use—just pull
              up as far as you can to accommodate other cars. You can also park
              in the Whole Foods lot or the US Bank lot and walk a half-block
              north to our dentist office.
            </p>
            <p>If you need change for the parking meter, please ask!</p>
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
