import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ImageCarouselStyles = styled.div`
  display: flex;
  overflow: hidden;
  background: var(--blue);
`;

export default function ImageCarousel({ images, showDots }) {
  return (
    <ImageCarouselStyles className="image-carousel-container">
      {images.map((image) => (
        <img src={image.src} />
      ))}
      {showDots ? <div>I have dots</div> : null}
    </ImageCarouselStyles>
  );
}
