import { useState } from "react"


export const UseRegister = () => {
    const [isPessoaFisicaChecked, setIsPessoaFisicaChecked] = useState(true)
    const [isPessoaJuridicaChecked, setIsPessoaJuridicaChecked] = useState(false)

    const handlePessoaFisicaChecked = () => {
        setIsPessoaFisicaChecked(true)
        setIsPessoaJuridicaChecked(false)
    }

    const handlePessoaJuridicaChecked = () => {
        setIsPessoaFisicaChecked(false)
        setIsPessoaJuridicaChecked(true)
    }

    return {
        isPessoaFisicaChecked,
        setIsPessoaFisicaChecked,
        isPessoaJuridicaChecked,
        setIsPessoaJuridicaChecked,
        handlePessoaFisicaChecked,
        handlePessoaJuridicaChecked,
    }
}