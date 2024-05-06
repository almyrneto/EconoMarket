import { useState } from "react"
import { colors } from "../../theme"
import { EndInputStyle, InputStyle, LabelStyles } from "./styled"


type InputProps = {
    type: string
    placeholder: string
    width: string
    background?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    isFocused?: boolean
    label: string
    onBlur?: () => Promise<void>;
}

type TextInputProps = {
    placeholder: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
    isFocused?: boolean 
    label: string
}

export const Input = ({
    type,
    placeholder,
    value,
    width,
    onChange,
    label,
}: InputProps) => {

    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    return (
        <>
            <LabelStyles>{label}</LabelStyles>
            <InputStyle
                type={type}
                placeholder={placeholder}
                value={value}
                width={width}
                onChange={onChange}
                style={{
                    borderColor: isFocused ? colors.laranja : colors.preto,
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        
        </>
    )
}

export const EndInput = ({
    placeholder,
    value,
    onChange,
    label
}: TextInputProps) => {

    return (
        <>
            <LabelStyles>{label}</LabelStyles>
            <EndInputStyle 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export const CepInput = ({
    type,
    placeholder,
    width,
    background,
    value,
    onChange,
    label,
    onBlur,
}: InputProps) => {

    return (
        <>
            <Input
                type={type}
                placeholder={placeholder}
                width={width}
                onChange={onChange}
                background={background}
                value={value}
                onBlur={onBlur}
                label={label}
            />
        </>
    )
}

export const ImageInput = () => {

    return (
        <>
        
        </>
    )
}