import { useState } from "react"
import { Bar, MenuItem, MenuToggle } from "./styled"
import styled from "styled-components";

const SideMenu = styled.div<{ open: boolean }>`
  height: 100%;
  width: ${(props) => (props.open ? '250px' : '0px')};
  position: fixed;
  top: 0;
  right: 0;
  background-color: #f0f0f0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

export const Menu = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <MenuToggle onClick={toggleMenu}>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </MenuToggle>
            <SideMenu open={isOpen}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </SideMenu>
        </>
    )
}