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