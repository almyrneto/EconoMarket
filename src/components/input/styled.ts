import styled from "styled-components";
import { colors } from "../../theme";


export const InputStyle = styled.input `
    width:${({ width }) => width};
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${colors.preto};
    color: ${colors.preto};
    background: ${colors.branco};
    padding-left: 1.5rem;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 600px;
    color: ${colors.preto};
    

    &::placeholder {
        font-size: 13px;
        font-weight: 400;
        font-family: Montserrat;
        color: #736868;
        maring-left: 1.5rem;
    }
`

export const LabelStyles = styled.label `
    display: flex;
    padding-left: 0.5rem;

    font-size: 13px;
    font-weight: 700;
    font-family: Montserrat;
    width: 282px;
    height: 21px;
`

export const EndInputStyle = styled.textarea `
    width: 320px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${colors.preto};
    color: ${colors.preto};
    padding-left: 1.5rem;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 600px;
    color: ${colors.preto};
    resize: none;

    &::placeholder {
        font-size: 13px;
        font-weight: 400;
        font-family: Montserrat;
        color: #736868;
        maring-left: 1.5rem;
    }
`

export const InputSearchStyle = styled.input `
    width:${({ width }) => width};
    height: 36px;
    border-radius: 20px;
    border: 1px solid ${colors.preto};
    color: ${colors.preto};
    background: ${colors.branco};
    padding-left: 1.5rem;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 600px;
    color: ${colors.preto};


    &::placeholder {
        font-size: 13px;
        font-weight: 400;
        font-family: Montserrat;
        color: #736868;
        maring-left: 1.5rem;
    }
`
