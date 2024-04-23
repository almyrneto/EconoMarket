import styled from "styled-components";
import { colors } from "../../theme";
import InputMask from 'react-input-mask'


export const StyledMaskedInput = styled(InputMask) `
    width:${({ width }) => width};
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${colors.preto};
    color: ${colors.preto};
    padding-left: 1.5rem;


    &::placeholder {
        font-size: 13px;
        font-weight: 400;
        font-family: Montserrat;
        color: ${colors.cinza};
        margin-left: 1.5rem;
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
