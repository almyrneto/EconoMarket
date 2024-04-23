import { ChangeEvent } from "react";
import { LabelStyles, StyledMaskedInput } from "./styled";


type MaskedInputProps = {
    mask: string;
    label: string;
    placeholder: string;
    type: string;
    width: string;
    maxLength: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string;
}

const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '')

export const MaskedInput = ({
    mask,
    placeholder,
    type,
    width,
    onChange,
    value,
    label,
}: MaskedInputProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange({
                ...event,
                target: {
                    ...event.target,
                    value: onlyNumbers(event.target.value)
                }
            })
        }
    }

    return (
        <>
            <LabelStyles>{label}</LabelStyles>
            <StyledMaskedInput 
                mask={mask}
                placeholder={placeholder}
                width={width}
                type={type}
                onChange={handleChange}
                value={value}
            />
            
        </>
    )
}