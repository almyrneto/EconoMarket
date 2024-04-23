import { useState } from "react"
import { colors } from "../../theme"
import { InputStyle, LabelStyles } from "./styled"


type InputProps = {
    type: string
    placeholder: string
    desabilitar?: boolean
    width: string
    background?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    isFocused?: boolean
    label: string
}

export const Input = ({
    type,
    placeholder,
    desabilitar,
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
                disabled={desabilitar}
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