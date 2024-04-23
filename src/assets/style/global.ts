import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        font-family: Montserrat
    }

    
`

export const Title = styled.h1 `
    width: 282px;
    height: 54px;
    font-weight: 600;
    font-size: 26px;
    line-height: 31.69px;
`

export const Text = styled.p `
    width: 282px
    height: 76px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.94px;
    
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`