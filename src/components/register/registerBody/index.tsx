import { Button } from "../../button";
import { CepInput, EndInput, Input } from "../../input";
import {
  ContainerButton,
  ContainerInput,
  ContainerText,
  InputCepNumber,
  Text,
} from "./styled";
import { UseRegister } from "../../../page/useRegister";
import { MaskedInput } from "../../maskedInput";

export const RegisterForm = () => {
  const {
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
  } = UseRegister();

  return (
    <>
      <ContainerInput>
        <Input
          label="Qual o nome da sua empresa??"
          type="text"
          placeholder="Ex: Loja do Fulano de tal"
          width="320px"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </ContainerInput>
      <ContainerInput>
        <MaskedInput
          label="CNPJ (digite apenas numeros)"
          placeholder="EX: 00.000.000/0000-00"
          mask=" 99.999.999/9999-99"
          type="text"
          width="320px"
          maxLength={14}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          label="E-mail"
          type="email"
          placeholder="Ex: fulanodetal@gmail.com"
          width="320px"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </ContainerInput>
      <ContainerInput>
        <MaskedInput
          label="Telefone"
          type="text"
          placeholder="Ex: (99) 999999999"
          mask="(99) 99999-9999"
          maxLength={11}
          width="320px"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </ContainerInput>
      <InputCepNumber>
        <ContainerInput>
          <CepInput
            label="Cep"
            placeholder="99999999"
            type="text"
            width="320px"
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
          />
        </ContainerInput>
      </InputCepNumber>
      <ContainerInput>
        <EndInput
          label="Endereço"
          placeholder="Rua fulano de tal"
          value={street}
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          label="Cidade"
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Ex: Fulano de tal"
          width="320px"
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          label="Bairro"
          type="text"
          value={neighborhood}
          onChange={(e) => {
            setNeighborhood(e.target.value);
          }}
          placeholder="Ex: Fulano de tal"
          width="320px"
        />
      </ContainerInput>

      <ContainerInput>
        <Input
          label="Senha"
          type="password"
          width="320px"
          placeholder=""
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <ContainerText>
          <Text>Use letras, numeros e simbolos</Text>
        </ContainerText>
        <ContainerButton>
          <Button name="CADASTRE-SE" onClick={register} />
        </ContainerButton>
      </ContainerInput>
    </>
  );
};
