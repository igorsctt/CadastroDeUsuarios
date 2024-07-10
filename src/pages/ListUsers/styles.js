import styled from "styled-components";

export const Container = styled.div`
    background-color: #181F36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    color: #FFFFFF;
    text-align: center;
    font-size: 35px;
    font-style: oblique;
    font-weight: 500;
    margin-top: 30px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 40px 0;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252D48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    h4 {
        color: #FFFFFF;
        font-size: 24px;
        margin-bottom: 4px;
        text-transform: capitalize;
    }

    p {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 200;
    }

`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const AvatarUsers = styled.img`
    height: 80px;
`

