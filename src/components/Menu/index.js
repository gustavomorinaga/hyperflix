import React from 'react'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logotipo HyperFlix"/>
            </Link>
            <div>
                <Button as={Link} className="ButtonLink Video" to="/cadastro/video">
                    Novo Vídeo
                </Button>
                <Button as={Link} className="ButtonLink Category" to="/cadastro/categoria">
                    Nova Categoria
                </Button>
            </div>
        </nav>
    )
}

export default Menu;