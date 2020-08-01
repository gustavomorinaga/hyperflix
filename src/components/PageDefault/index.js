import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background: var(--grayDark);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 5%;
    overflow: hidden;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Footer />
  </>
);

export default PageDefault;
