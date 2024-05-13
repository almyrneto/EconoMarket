import styled from "styled-components";
import { colors } from "../../../theme";


export const Square = styled.div `
    width: 313px;
    height: 242px;
    border-radius: 15px;
    border: 2px dotted ${colors.laranja};
    margin-left: 3rem;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContainerIcon = styled.div `
    padding-top: 2rem;
`

export const ContainerTitle = styled.div `
    padding-top: 1rem;
`

export const Title = styled.div `
    font-family: Montserrat;
    font-weight: 700;
    font-size: 13px;
    line-height: 15.85px;
    color: ${colors.laranja};
`

export const ContainerText = styled.div `
    padding-top: 1rem;
`

export const Text = styled.div `
    font-family: Montserrat;
    font-weight: 300;
    font-size: 14px;
    line-height: 17.07px;
    color: ${colors.cinza}
`

export const ModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

export const ModalContent = styled.div `
    background-color: ${colors.branco};
    padding: 20px;
    
    border-radius: 10px;
    max-width: 380px;
    width: 100%;
    transform: translateY(165%);
    transition: transform 0.3s ease-in-out;

    ${ModalBackground}: hover & {
        transform: translateY(0);
    }
`

export const ModalFooter = styled.div `
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
` 

export const ButtonContainer = styled.div `
    display: flex;
    flex-direction: column;
`

export const Button = styled.button `
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`