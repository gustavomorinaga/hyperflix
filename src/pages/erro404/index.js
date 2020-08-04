import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Button from '../../components/Button';

const ErrorPage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

const PageNotFound = styled.div`
    background: var(--grayDarken);
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
    color: white;
    padding: 1rem;
    font-size: 20px;
    margin-bottom: 1rem;

    & i {
        font-size: 50px;
        color: var(--primary);
    }
`

const ErrorTitle = styled.div`
    color: #ff1324;
    font-size: 40px;
    font-weight: 500;
`

const Pagina404 = () => (
    <>
        <div style={{ display: 'none' }}>
            {document.body.style.paddingTop = "0px"}
        </div>
        <ErrorPage>
            <PageNotFound>
                <i className="material-icons">warning</i>
                <ErrorTitle>Erro 404</ErrorTitle> 
                Página Não Encontrada!
            </PageNotFound>
            <Button as={Link} to="/">
                Retornar ao Site
            </Button>
        </ErrorPage>
        <Particles width="100%" height="100vh" params={{
            "detectRetina": true,
            "fpsLimit": 60,
            "background": {
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            },
            "particles": {
                "color": {
                    "value": "#dc1a28"
                },
                "links": {
                    "value": "#fff"
                },
                "number": {
                    "value": 70
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "detectsOn": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab",
                        "parallax": {
                            "enable": true,
                            "force": 60,
                            "smooth": 10
                        }
                    }
                }
            }
        }} 
        />
    </>
);

export default Pagina404;