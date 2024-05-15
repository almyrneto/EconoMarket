import styled from "styled-components"
import { colors } from "../../theme"

export const ContainerProducts = styled.div`
    padding-top: 2rem;
    padding-left: 1rem;
    display: grid;
    grid-template-columns: minmax(11rem, 1.3fr) 2fr;
    grid-gap: 1rem;
`

export const DivProduct = styled.div`
    width: 160px;
    height: 301px;
    border-radius: 15px;
    border: 1px solid ${colors.preto};
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContImgProd = styled.div`
    padding-top: 1rem;
`

export const ContPreço = styled.div`
    padding-top: 0.5rem;
`

export const PreçoAnt = styled.p`
    text-decoration: line-through;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${colors.cinza};
`

export const PreçoNew = styled.p`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.preto};
`

export const TitleProd = styled.p`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 10px;
    line-height: 12.19px;
    color: ${colors.preto};
    
`

export const ContTitle = styled.div`
    padding-top: 1rem;
`

export const Expiration = styled.div`
    width: 76px;
    height: 22px;
    border-radius: 5px;
    background: ${colors.verde};
    display: flex;
    align-items: center;
    margin-top: 1rem;
`

export const TitleExpiration = styled.p`
    width: 79px;
    height: 17px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 7px;
    line-height: 8.53px;
    margin-left: 0.8rem;
`

export const ContLastUnits = styled.div`
    padding-top: 0.5rem;
`

export const TitleLastUnits = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 11px;
    line-height: 13.41px;
    color: ${colors.vermelho};
`

export const ContButton = styled.div`
    padding-top: 0.5rem;
`