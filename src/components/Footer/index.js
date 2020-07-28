import React from 'react';
import { FooterBase, Autor } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Autor>
        &copy; 2020 | Gustavo Matheus Morinaga Cardoso
      </Autor>
      <hr style={{margin: "0 5%"}}/>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
    </FooterBase>
  );
}

export default Footer;
