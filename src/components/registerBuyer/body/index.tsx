import { UseRegisterBuyer } from "../../../page/userRegisterBuyer";
import { Button } from "../../button";
import { CepInput, EndInput, Input } from "../../input";
import { MaskedInput } from "../../maskedInput";
import {
  ContainerButton,
  ContainerInput,
  ContainerText,
  InputCepNumber,
  Text,
} from "./styled";

export const RegisterBuyerForm = () => {
  const {
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
    cpf,
    setCpf,
    phone,
    setPhone,
    registerBuyer,
  } = UseRegisterBuyer();

  return (
    <>
      <ContainerInput>
        <Input
          label="Como você gostaria de ser chamado?"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Ex: Fulano de tal"
          width="320px"
        />
      </ContainerInput>

      <ContainerInput>
        <MaskedInput
          placeholder=""
          mask="999.999.999-99"
          type="text"
          width="300px"
          maxLength={14}
          label="CPF (digite apenas números)"
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
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
          placeholder=""
          mask="(99) 99999-9999"
          type="text"
          width="300px"
          maxLength={15}
          label="Telefone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </ContainerInput>
      <InputCepNumber>
        <ContainerInput>
          <CepInput
            label="CEP"
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
          placeholder="Rua Fulano de Tal"
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
          placeholder="Ex: Fulano de Tal"
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
          placeholder="Ex: Fulano de Tal"
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
          <Text>Use letras, números e símbolos</Text>
        </ContainerText>
        <ContainerButton>
          <Button name="CADASTRE-SE" onClick={registerBuyer} />
        </ContainerButton>
      </ContainerInput>
    </>
  );
};