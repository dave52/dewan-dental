import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const ImageCarouselStyles = styled.div`
  display: flex;

  .carousel .slide img {
    border-radius: 8px;
  }
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    border-top: 1.2rem solid transparent;
    border-bottom: 1.2rem solid transparent;
    filter: drop-shadow(0 5px 2px rgb(0 0 0 / 0.4));
  }

  .carousel .control-next.control-arrow:before {
    border-left: 1.8rem solid rgb(255 255 255 / 0.75);
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 1.8rem solid rgb(255 255 255 / 0.75);
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: 0;
  }

  .carousel .slide .legend {
    width: 100%;
    margin: 0 -50%;
    bottom: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    opacity: 0.75;
  }
`;
export default function ImageCarousel({
  showStatus,
  showIndicators,
  infiniteLoop,
  autoPlay,
  interval,
  children,
}) {
  return (
    <ImageCarouselStyles>
      <Carousel
        showStatus={showStatus ?? false}
        showIndicators={showIndicators ?? false}
        infiniteLoop={infiniteLoop ?? true}
        autoPlay={autoPlay ?? true}
        interval={interval ?? 6660}
      >
        {children}
      </Carousel>
    </ImageCarouselStyles>
  );
}
