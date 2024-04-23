import styled from "styled-components";
import { colors } from "../../theme";

export const ContainerCheckboxStyle = styled.div `
    display: flex;
    align-items: center;
`

export const CheckboxStyle = styled.input.attrs({ type: 'checkbox' }) `
    margin-left: 0.5rem;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${colors.laranja};
    border-radius: 4px;
    outline: none;
    cursor: pointer;

    &:checked {
        background-color: ${colors.laranja};
        border-color: ${colors.laranja};
    }

    &:checked::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 1.5px;
        background-color: ${colors.branco};
        transform: rotate(-180deg);
        margin-bottom: 5px;
        margin-left: 2px;
    }
`

export const LabelStyle = styled.label `
    font-weight: 600;
    font-size: 16px;
    color: ${colors.preto};
    margin-left: 0.5rem;
`