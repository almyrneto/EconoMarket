import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginCredentials, loginBuyer } from "../service/getLoginBuyer/getLoginBuyer"


export const UseLoginBuyer = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [name, setName] = useState(localStorage.getItem("name") || "");

    const handleLogin = async () => {
        try {
            const credentials: LoginCredentials = { email, password}
            const result = await loginBuyer(credentials);
            console.log("result do loginBuyer: ", result)
            if (result?.token) {
                localStorage.setItem("token", result.token)
                if (result.name) {
                    localStorage.setItem("name", result.name)
                    setName(result.name)
                }
                setToken(result.token)
                navigate("/buyer")
            } else {
                setError('email ou senha incorretos.')
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Email ou senha incorretos.')
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        error,
        token,
        name,
    }

}