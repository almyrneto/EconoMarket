import styled from "styled-components";
import { colors } from "../../../theme";


export const Title = styled.p `
    width: 290px;
    height: 21px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 18px;
    line-height: 21.94px;

    padding-top: 5rem;
    padding-left: 2rem
`

export const Container = styled.div `
    padding-top: 2rem;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: minmax(11rem, 1.3fr) 2fr;
    grid-gap: 1rem;
`

export const New = styled.div `
    width: 149px;
    height: 177px;
    border-radius: 15px;
    border: 1px solid ${colors.laranja};
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Announcement = styled.div `
    width: 149px;
    height: 177px;
    border-radius: 15px;
    border: 1px solid ${colors.laranja};
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Store = styled.div `
    width: 149px;
    height: 177px;
    border-radius: 15px;
    border: 1px solid ${colors.laranja};
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Sales = styled.div `
    width: 149px;
    height: 177px;
    border-radius: 15px;
    border: 1px solid ${colors.laranja};
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const BotaoAdicionar = styled.div `
    width: 59px;
    height: 57px;
    border-radius: 50%;
    border: 3px solid ${colors.laranja};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor pointer;
`

export const Circulo = styled.div `
    color: ${colors.laranja};
    font-size: 32px    
`

export const ContainerButton = styled.div `
    margin-top: 2.5rem;
`

export const TitleCard = styled.p `
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: ${colors.laranja};
    padding-top: 2rem;
`