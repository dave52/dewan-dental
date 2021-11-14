import React from 'react';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import PageFullWidth from '../templates/PageFullWidth';
import imgMap from '../assets/images/location-google-maps.jpg';

// urls
// https://maps.googleapis.com/maps/api/staticmap?center=dewandentalwellness&zoom=17&size=400x400&key=AIzaSyBT7TwQd69gZXXKcxIY-U1Rs5uIzmIEUZ0
// https://developers.google.com/maps/documentation/maps-static/start
// https://developers.google.com/maps/documentation/javascript/overview?hl=en_US#maps_map_simple-html

const LocationAndHoursStyles = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (min-width: 50rem) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .location {
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  .hours-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: var(--blue);
    color: var(--cream);
    font-size: 1.8rem;

    .address {
      width: 100%;
      text-align: center;
      padding: 0 3rem 3rem;
      margin: 0 10rem;
      border-bottom: 3px solid var(--gray);
    }

    .hours {
      display: inline-grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 3rem;

      *:nth-child(odd) {
        text-align: right;
        font-weight: bold;
      }
    }
  }
`;

export default function LocationAndHoursPage() {
  return (
    <Layout>
      <PageFullWidth>
        <LocationAndHoursStyles>
          <h1>Location &amp; Hours</h1>
          <div className="grid">
            <div className="location">
              <img src={imgMap} alt="Map view of Dewan Dental's location" />
            </div>
            <div className="hours-container">
              <div className="address">
                Dewan Dental Wellness
                <br />
                2445 N. Farwell Suite 202
                <br />
                Milwaukee, WI 53211
              </div>
              <div className="hours">
                <div>Mon. and Tue.:</div>
                <div>9AM to 5:30PM</div>
                <div>Wed. and Thu.:</div>
                <div>7AM to 3:30PM</div>
                <div>Fri., Sat. and Sun.</div>
                <div>Closed</div>
              </div>
            </div>
          </div>
        </LocationAndHoursStyles>
      </PageFullWidth>
    </Layout>
  );
}
