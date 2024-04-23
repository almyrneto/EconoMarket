import { CheckboxStyle, ContainerCheckboxStyle, LabelStyle } from "./styled"


type CheckboxProps = {
    titulo: string,
    disabled?: boolean,
    checked?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Checkbox = ({
    titulo,
    disabled,
    checked,
    onChange,
}: CheckboxProps) => {

    return (

        <ContainerCheckboxStyle>
            <CheckboxStyle 
                type="checkbox"
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <LabelStyle>{titulo}</LabelStyle>
        </ContainerCheckboxStyle>
    )
}