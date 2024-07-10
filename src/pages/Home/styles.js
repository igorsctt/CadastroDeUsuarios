import styled from "styled-components"

export const Container = styled.div`
    background-color: #181F36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Title = styled.h2`
    color: #FFFFFF;
    text-align: center;
    font-size: 35px;
    font-style: oblique;
    font-weight: 500;
    margin-top: 20px;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
    
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #D2DAE2;
    background-color: #FFFFFF;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 400;
    font-style: oblique;

    span {
        color: #EF4F45;
        font-weight: bold;
    }
`





