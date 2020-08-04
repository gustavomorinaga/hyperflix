import styled from 'styled-components';

export const VideoCardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  opacity: 0;
  height: auto;
  background: ${({ ItemColor }) => `${ItemColor}`};
  border: ${({ ItemColor }) => `5px solid ${ItemColor}`};
  text-align: center;
  transition: .5s ease;
  transform: translate3d(0, 100%, 0);
`;

export const VideoCardContainer = styled.a`
  align-items: flex-end;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: flex;
  filter: grayscale(50%);
  flex: 0 0 298px;
  height: 197px;
  overflow: hidden;
  padding: 16px;
  position: relative;
  text-decoration: none;
  width: 298px;

  transition: all .3s;
  
  &:hover,
  &:focus {
    box-shadow: ${({ ItemColor }) => `0px 0px 10px ${ItemColor}`};
    filter: grayscale(0);
    transform: scale(1.2);
    z-index: 150;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  &:hover div, &:focus div {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  @media (max-width: 800px) {
    .slick-center & {
      box-shadow: ${({ ItemColor }) => `0px 0px 8px ${ItemColor}`};
    }

    .slick-slide:not(.slick-center) &:hover {
      box-shadow: 0 0 0 transparent;
    }
  }
`;
