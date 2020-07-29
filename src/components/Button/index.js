import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: text-shadow, transform .3s;

    &:hover, &:focus {
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.75);
        transform: scale(1.05);
    }
`;

export default Button;