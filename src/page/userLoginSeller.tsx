import { useNavigate } from "react-router-dom";
import { LoginCredentials, loginSeller } from "../service/getLoginSeller/getLoginSeller";
import { useState } from "react";

export const Uselogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [name, setName] = useState(localStorage.getItem("name") || "");

    const handleLogin = async () => {
        try {
            const credentials: LoginCredentials = { email, password}
            const result = await loginSeller(credentials);
            console.log("result do loginseller:", result)
            if (result?.token) {
                localStorage.setItem("token", result.token)
                if (result.name) {
                    localStorage.setItem("name", result.name);
                    setName(result.name);
                }
                setToken(result.token);
                navigate('/seller');
            } else {
                setError('Email ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
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
    };
};

export default Uselogin; 