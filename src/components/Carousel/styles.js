import styled from 'styled-components';

export const Title = styled.h3`
  background: red;
  border-radius: 4px;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  margin-left: 5%;
  padding: 20px;
  line-height: 1;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 5%;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  &:nth-of-type(odd) {
    background: var(--gray);
  }
`;
