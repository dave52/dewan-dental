import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { StaticImage } from 'gatsby-plugin-image';
import serializer from '../utils/serializer';

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
  const data = useStaticQuery(graphql`
    query {
      page: sanityPage(id: { eq: "-f6c35072-d4f0-5912-a338-1207a12c5856" }) {
        _rawContent
      }
    }
  `);

  return (
    <SplashModalStyles className="modal hidden">
      <div className="modal-content-container">
        <h1 className="font-size-32 font-weight-medium font-serif font-color-blue">
          Our commitment to your safety
        </h1>
        <div className="grid-care">
          <div className="text">
            <BlockContent
              blocks={data.page._rawContent}
              serializers={serializer(data)}
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
