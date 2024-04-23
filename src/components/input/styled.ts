import styled from "styled-components";
import { colors } from "../../theme";


export const InputStyle = styled.input `
    width:${({ width }) => width};
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${colors.preto};
    color: ${colors.branco};
    

    &::placeholder {
        font-size: 13px;
        font-weight: 400;
        font-family: Montserrat;
        color: #736868;
        padding-left: 1.5rem;
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

