import React from 'react'
import styled from 'styled-components'
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import dadosIniciais from '../../data/dados_iniciais.json'

const AppWrapper = styled.div`
  background: var(--grayDark);
`

function Home() {
  return (
    <AppWrapper>
      <Menu/>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"História + Análise Completa + Informações Nerds Extras."}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Footer/>
    </AppWrapper>
  )
}

export default Home