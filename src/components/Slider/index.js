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
    height: 75%;
    transform: initial;
    transition: all .3s;
    &:before {
      font-size: 30px;
      box-shadow: 0px 0px 15px black;
    }
    &::before {
      color: ${({ bgColor }) => `${bgColor}`};
    }
    &::before, &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: "";
      background-color: rgb(255, 255, 255);
      display: block;
      height: 2rem;
      width: 0.75rem;
      opacity: 1;
      border-radius: 0.25rem;
      transition: all 0.3s;
    }

    &:hover::after, &:hover::before {
      height: 2.15rem;
      width: 0.8rem;
    }
  }

  .slick-next::before {
    transform: translate(-50%, -75%) rotate(-45deg);
  }

  .slick-next::after {
    transform: translate(-50%, -25%) rotate(45deg);
  }

  .slick-prev::before {
    transform: translate(-50%, -75%) rotate(45deg);
  }

  .slick-prev::after {
    transform: translate(-50%, -25%) rotate(-45deg);
  }
  
  .slick-prev {
    left: 0;
    background: linear-gradient(to left, transparent 0%, rgb(0,0,0,0.8) 100%);
    opacity: .8;
    padding-right: 10%;
    padding-left: 5%;
  }
  .slick-next {
    right: 0;
    background: linear-gradient(to right, transparent 0%, rgb(0,0,0,0.85) 100%);
    opacity: .8;
    padding-right: 7.5%;
    padding-left: 6%;
  }

  .slick-prev:hover {
    background: linear-gradient(to left, transparent 0%, rgba(0,0,0,0.9) 100%);
    opacity: 1;
  }

  .slick-next:hover {
    background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 100%);
    opacity: 1;
  }

  @media (max-width: 800px) {
    .slick-prev {
      padding-right: 10%;
      padding-left: 1%;
    }

    .slick-next {
      padding-right: 7.5%;
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
  margin: 0 8px;
  padding: 2rem 0;
  width: 0%;
  transition: all .3s;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container data-aos="zoom-out">
    <SlickSlider {...SliderSettings}>
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
