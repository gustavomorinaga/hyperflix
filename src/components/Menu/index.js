import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logotipo HyperFlix"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;