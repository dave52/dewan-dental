import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const SplashModalStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  transition: opacity 0.5s ease, transform 1s ease;

  &.hidden {
    opacity: 0;
    transform: translateY(-5%);
  }

  .modal-content-container {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    max-width: calc(100% - 6rem);
    max-height: calc(100% - 6rem);
    pointer-events: auto;
    overflow-y: auto;
    padding: 3rem;
    background: white;
    border-radius: 0.7rem;
    scrollbar-color: #9494a4 #f4f4f6;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background-color: #f4f4f6;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #9494a4;
      border-radius: 10px;
    }

    // 600px
    @media (min-width: 37.5rem) {
      padding: 3rem 5rem;
    }

    h1 {
      // 600px
      @media (max-width: 37.5rem) {
        line-height: 1.3;
        font-size: 2.4rem;
      }
    }

    .grid-care {
      display: grid;
      grid-template-columns: 1fr;
      gap: 5rem;

      // 600px
      @media (min-width: 37.5rem) {
        grid-template-columns: 1fr 18rem;
      }

      .text {
        max-width: 75ch;

        p::first-of-type {
          margin-top: 0;
        }
      }

      .signature {
        width: 100%;
        max-width: 16rem;
      }

      .care-container {
        width: 100%;

        // 600px
        @media (max-width: 37.5rem) {
          grid-area: 1/1;
          width: 45%;
          margin: 4rem auto 0;
        }

        img {
          max-width: 100%;
        }
      }
    }

    button {
      margin-top: 2rem;
      justify-self: end;
      align-self: end;
    }
  }
`;

export default function SplashModal({ closeModal }) {
  return (
    <SplashModalStyles className="modal hidden">
      <div className="modal-content-container">
        <h1 className="font-size-32 font-weight-medium font-serif font-color-blue">
          Our commitment to your safety
        </h1>
        <div className="grid-care">
          <div className="text">
            <p>
              Infection control has always been a top priority for our practice
              and you may have seen this during your visits to our office. Our
              infection control processes are made so that when you receive
              care, it’s both safe and comfortable. We want to tell you about
              the infection control procedures we follow in our practice to keep
              patients and staff safe. You may see some changes when it is time
              for your next appointment. We made these changes to help protect
              our patients and staff.
            </p>
            For example:
            <ul>
              <li>
                Our office will communicate with you beforehand to ask some
                screening questions. You’ll be asked those same questions again
                when you are in the office. We ask that if you are feeling
                feverish or have flu-like symptoms that you reschedule your
                appointment out of the safety of our patients and staff. We will
                also be taking your temperature at the start of your
                appointment.
              </li>
              <li>
                We have hand sanitizer that we will ask you to use when you
                enter the office. You will also find some in the reception area
                and other places in the office for you to use as needed. We also
                ask that you wear a mask upon entering and exiting the office.
              </li>
              <li>
                You may see that our waiting room will no longer offer
                magazines, children’s toys and so forth, since those items are
                difficult to clean and disinfect.
              </li>
              <li>
                Appointments will be managed to allow for social distancing
                between patients. That might mean that you’re offered fewer
                options for scheduling your appointment.
              </li>
              <li>
                We will do our best to allow greater time between patients to
                reduce waiting times for you. To reduce the number of patients
                in the reception area at any one time, you will be asked to
                arrive promptly at your appointment time and no earlier.
              </li>
            </ul>
            <br />
            <p>
              Thank you for being our patient. We value your trust and loyalty
              and look forward to welcoming back our patients, neighbors and
              friends!
            </p>
            <p className="font-weight-semibold">The DeWan Dental Team</p>
            <StaticImage
              quality={100}
              className="signature"
              placeholder="blurred"
              src="../assets/images/signature-handwriting-cleaner-transparent.png"
              alt="The DeWan Dental Team, written in cursive handwriting"
            />
          </div>
          <div className="care-container">
            <StaticImage
              quality={100}
              className="care"
              placeholder="blurred"
              src="../assets/images/care.jpg"
              alt="A heart drawn in red and blue pastel textures"
            />
          </div>
        </div>
        <button className="button" type="button" onClick={closeModal}>
          Continue
        </button>
      </div>
    </SplashModalStyles>
  );
}
