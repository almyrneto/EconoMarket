import { useNavigate } from "react-router-dom";
import { loginSeller } from "../service/getLoginSeller/getLoginSeller";
import { useState } from "react";

export const Uselogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const result = await loginSeller({ email, password });
            if (result?.token) {
                navigate('/seller');
            } else {
                alert('Email ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
    };
};

export default Uselogin; 