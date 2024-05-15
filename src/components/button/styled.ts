import styled from "styled-components";
import { colors } from "../../theme";


export const ButtonStyle = styled.button`
    width: 166px;
    height: 39px;
    border-radius: 20px;
    border: 0.6px solid ${colors.preto};
    background: ${colors.laranja};
    color: ${colors.branco};

    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
`

export const ButtonProdStyle = styled.button`
    width: 70px;
    height: 21px;
    border-radius: 20px;
    border: 0.5px solid ${colors.preto};
    background: ${colors.laranja};

    font-family: Montserrat;
    font-weight: 400;
    font-size: 10px;
    line-height: 12.19px;
    align-items: center;
    color: ${colors.branco};
`