import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
    background: var(--grayDark);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`

const PageDefault = (props) => (
    <>
        <Menu/>
        <Main>
            {props.children}
        </Main>
        <Footer/>
    </>
)

export default PageDefault