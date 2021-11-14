import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import Img from 'gatsby-image';

const ModalTeamStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  transition: opacity 0.5s ease, transform 1s ease;
  position: absolute;
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

      p {
        margin-top: 0;
        max-width: 75ch;

        > p {
          margin-top: 4rem;
        }
      }

      img.care {
        width: 100%;

        // 600px
        @media (max-width: 37.5rem) {
          grid-area: 1/1;
          width: 45%;
          margin: 4rem auto 0;
        }
      }
    }

    img.signature {
      max-width: 20rem;
    }

    button {
      margin-top: 2rem;
      justify-self: end;
      align-self: end;
    }
  }
`;

const closeModal = (event) => {
  event.target.parentElement.parentElement.classList.add('is-hidden');
};

export default function ModalTeam({ show, person }) {
  return (
    <ModalTeamStyles className="modal is-hidden">
      <div className="modal-content-container">
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
        <button className="button" type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </ModalTeamStyles>
  );
  // if (show) {
  //   return (
  //     <ModalTeamStyles className={show ? '' : 'is-hidden'}>
  //       <div className="modal-content-container">
  //         <h2 className="font-size-20 font-serif">{person.name}</h2>
  //         <h3 className="font-size-14 font-weight-medium font-uppercase font-spacing-100">
  //           {person.role}
  //         </h3>
  //         <div className="row align-flex-start">
  //           <Img className="photo" fluid={person.photo.asset.fluid} />
  //           <div className="bio">
  //             <BlockContent blocks={person._rawBio} />
  //           </div>
  //         </div>
  //         <button className="button" type="button" onClick={closeModal}>
  //           Close
  //         </button>
  //       </div>
  //     </ModalTeamStyles>
  //   );
  // }
  // return null;
}
