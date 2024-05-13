import { useState } from "react";
import { postCadastroUser } from "../service/postCadastroUser/postCadastroUser";

export const UseRegisterBuyer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const registerBuyer = async () => {
    const result = await postCadastroUser(
      name,
      email,
      cpf,
      password,
      street,
      neighborhood,
      city,
      cep,
      phone
    );
    if (result?.message) {
      alert(result.message);
    } else {
      alert("Cadastro realizado com sucesso!");
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    street,
    setStreet,
    city,
    setCity,
    neighborhood,
    setNeighborhood,
    cep,
    setCep,
    registerBuyer,
    cpf,
    setCpf,
    phone,
    setPhone,
  };
};