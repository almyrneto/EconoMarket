import { useState } from "react"
import { getCadastro } from "../service/getCadastro/getCadastro"


export const UseRegister = () => {
    const [isPessoaFisicaChecked, setIsPessoaFisicaChecked] = useState(true)
    const [isPessoaJuridicaChecked, setIsPessoaJuridicaChecked] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [city, setCity] = useState("")
    const [cep, setCep] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    // const [image, setImage] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const register = async () => {

        const result = await getCadastro(
            name,
            email,
            street,
            neighborhood,
            city,
            cep,
            phone,
            password,
            // image,
            // confirmPassword,
        )

        if (result?.message) {
            alert(result.message)
        } else {
            alert
        }
    }

    

    
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
        name,
        setName,
        email,
        setEmail,
        street,
        setStreet,
        neighborhood,
        setNeighborhood,
        city,
        setCity,
        cep,
        setCep,
        phone,
        setPhone,
        password,
        setPassword,
        register,
        // image,
        // setImage,
        // confirmPassword,
        // setConfirmPassword,
    }
}