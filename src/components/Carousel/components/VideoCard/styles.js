import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  align-items: flex-end;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border: 2px solid;
  border-color: ${({ ItemColor }) => `${ItemColor}`};
  border-radius: 10px;
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
    transform: scale(1.05);
    filter: grayscale(0);
    box-shadow: ${({ ItemColor }) => `0px 0px 8px ${ItemColor}`};
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
