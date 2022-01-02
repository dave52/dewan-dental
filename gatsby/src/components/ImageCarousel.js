import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";

const ImageCarouselStyles = styled.div`
  display: flex;
  overflow: hidden;
  background: var(--blue);
`;

export default function ImageCarousel({ images, showDots }) {
  return (
    <ImageCarouselStyles className="image-carousel-container">
      {images.map((image) => (
        <img src={image.src} alt={image.alt} />
      ))}
      {showDots ? <div>I have dots</div> : null}
    </ImageCarouselStyles>
  );
}
