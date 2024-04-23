import styled from "styled-components";
import { colors } from "../../theme";


export const MenuToggle = styled.div `
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 10px;
    z-index: 2;
    position: fixed;
    top: 30px;
    right: 20px;
`

export const Bar = styled.div `
    width: 25px;
    height: 3px;
    background-color: ${colors.laranja};
    margin: 2px 0;
    transition= 0.4s;
`


export const MenuItem = styled.a `
    padding: 10px;
    text-decoration: none;
    color: black;
    display: block;
`