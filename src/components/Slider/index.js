import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const SliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 800,
    settings: {
      className: "center"
    }
  }]
}

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 100%;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
    background: linear-gradient(to left, transparent 0%, rgba(0,0,0,0.75) 100%);
    padding-right: 10%;
    padding-left: 5%;
  }
  .slick-next {
    right: 0;
    background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.75) 100%);
    padding-right: 7.5%;
    padding-left: 6%;
  }

  @media (max-width: 800px) {
    .slick-next {
      padding-right: 12%;
      padding-left: 4%;
    }

    .slick-slide a {
      transform: scale(1);
    }

    .slick-center a {
      transform: scale(1.05);
      filter: grayscale(0);
    }

    .slick-slide:not(.slick-center) a:hover {
      filter: grayscale(50%);
    }

    .slick-slide:not(.slick-center) a:hover div {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    .slick-center a div {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const SliderItem = styled.li`
  margin: 14px;
  width: 0%;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...SliderSettings}>
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
