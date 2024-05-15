import styled from "styled-components";
import { colors } from "../../../theme";


export const ContainerTitle = styled.div`
    padding-top: 2rem;
    padding-left: 1.5rem;
`

export const Title = styled.p`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.5px;
    color: ${colors.preto}
`

export const ContainerImg = styled.div`
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    display: flex;
`

export const DivImg = styled.div`
    padding-right: 1.5rem;
`

export const ContainerProducts = styled.div`
    padding-top: 2rem;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: minmax(11rem, 1.3fr) 2fr;
    grid-gap: 1rem;
`

export const ContainerPromotion = styled.div`
    
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
    
`