import { ButtonStyle } from "./styled"

type ButtonProps = {
    name: string,
    onClick?: () => void, 
}

export const Button = ({
    name,
    onClick,
}: ButtonProps) => {

    return (
        <>
            <ButtonStyle onClick={onClick}>
                {name}
            </ButtonStyle>
        </>
    )
}