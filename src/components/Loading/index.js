import React from 'react';
import styled from 'styled-components';

const Load = styled.div`
    position: absolute;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    & div {
        animation: loadingSpinner 1s linear infinite;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        box-shadow: 0 4px 0 0 #ff1a1e;
        transform-origin: 80px 82px;
    }
`

const LoadingSpinner = styled.div`
    z-index: 150;
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: transparent;

    @keyframes loadingSpinner {
        0% { transform: rotate(0deg) }
        50% { transform: rotate(180deg) }
        100% { transform: rotate(360deg) }
    }
`;

function Loading() {
    return (
        <LoadingSpinner>
            <Load>
                <div></div>
                <p>
                    Carregando...
                </p>
            </Load>
        </LoadingSpinner>
    )
}

export default Loading;
