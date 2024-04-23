import { ButtonStyle } from "./styled"

type ButtonProps = {
    name: string,
    // onClick?: () => void, 
}

export const Button = ({
    name,
}: ButtonProps) => {

    return (
        <>
            <ButtonStyle>
                {name}
            </ButtonStyle>
        </>
    )
}