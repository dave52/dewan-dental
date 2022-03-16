import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const ImageCarouselStyles = styled.div`
  display: flex;

  .carousel.carousel-slider {
    overflow: unset;
  }

  .carousel .slide img {
    border-radius: 8px;
  }

  .carousel.carousel-slider .control-arrow {
    opacity: 1;

    @media (min-width: 43.75rem) {
      // 1000px
      opacity: 0.8;
    }
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

  .carousel .control-dots {
    bottom: -4rem;

    .dot {
      background: gray;
    }
  }
`;

export default function ImageCarousel({
  showStatus,
  showIndicators,
  infiniteLoop,
  autoPlay,
  interval,
  dynamicHeight,
  showThumbs,
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
        dynamicHeight={dynamicHeight ?? false}
        showArrows
        showThumbs={showThumbs ?? false}
      >
        {children}
      </Carousel>
    </ImageCarouselStyles>
  );
}
