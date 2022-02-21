import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import serializer from '../utils/serializer';

const ModalTeamStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  transition: opacity 0.5s ease, transform 1s ease;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--blue-50);
  z-index: 20;

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
    scrollbar-width: auto;
    scrollbar-color: var(--blue) #7e95b3;

    &::-webkit-scrollbar {
      width: var(--frame-size);
    }

    &::-webkit-scrollbar-track {
      background: #7e95b3;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--blue);
    }

    @media (min-width: 37.5rem) {
      // 600px
      padding: 3rem 5rem;
    }

    @media (min-width: 56.25rem) {
      // 900px
      max-width: 80rem;
    }

    h2,
    h3 {
      margin-top: 0;
    }

    h2 {
      margin: 0;
    }

    .photo-and-bio-container {
      display: flex;
      align-items: flex-start;

      @media (max-width: 50rem) {
        // 800px
        flex-direction: column;
        align-items: center;
      }
      .photo {
        display: block;
        margin-bottom: 3rem;

        @media (min-width: 50rem) {
          // 800px
          margin-right: 3rem;
        }
      }
    }

    button {
      position: sticky;
      bottom: 0;
      margin: 2rem 0 0 auto;
      justify-self: end;
      align-self: end;
    }
  }
`;

const closeModal = (event) => {
  event.target.parentElement.parentElement.classList.add('is-hidden');
  document.body.classList.remove('overflow-hidden');
};

export default function ModalTeam({ data, person }) {
  return (
    <ModalTeamStyles className="modal is-hidden">
      <div className="modal-content-container">
        <h2 className="font-size-20 font-serif">{person.name}</h2>
        <h3 className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
          {person.role}
        </h3>
        <div className="photo-and-bio-container">
          <GatsbyImage
            image={person.photo.asset.gatsbyImageData}
            className="photo"
            quality={100}
            alt={`Photo of ${person.name}`}
          />
          <div className="bio">
            <BlockContent
              blocks={person._rawBio}
              serializers={serializer(data)}
            />
          </div>
        </div>
        <button className="button" type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </ModalTeamStyles>
  );
}
