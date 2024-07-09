import styled from "styled-components";


export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #FFFFFF'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #FFFFFF;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        opacity: ${props => props.theme === 'primary' ? '0.8' : '0.5'};
        background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : 'linear-gradient(180deg, #FF0000 0%, #F378 100%)'};
    }

    &:active {
        opacity: ${props => props.theme === 'primary' ? '0.5' : '0.3'};
    }
`