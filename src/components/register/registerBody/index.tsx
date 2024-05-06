import { Button } from "../../button"
import { CepInput, EndInput, Input } from "../../input"
import { ContainerButton, ContainerCheckBox, ContainerInput, ContainerText, InputCepNumber, Text } from "./styled"
import {  UseRegister } from "../../../page/useRegister"
import { Checkbox } from "../../checkbox"
import { MaskedInput } from "../../maskedInput"

export const RegisterForm = () => {
    const {
        isPessoaFisicaChecked,
        isPessoaJuridicaChecked,
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
        // state,
        // setState,
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
    } = UseRegister()


    return (
        <>
            <ContainerCheckBox>
                <Checkbox 
                    titulo='Pessoa Fisica'
                    onChange={handlePessoaFisicaChecked}
                    checked={isPessoaFisicaChecked}
                />
                <Checkbox 
                    titulo='Pessoa Juridica'
                    onChange={handlePessoaJuridicaChecked}
                    checked={isPessoaJuridicaChecked}
                />
            </ContainerCheckBox>
            {isPessoaFisicaChecked && (
                <>
                    <ContainerInput>
                        <Input 
                            label="como você gostaria de ser chamado?"
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value);}}
                            placeholder="Ex: Fulano de tal"
                            width="320px"
                        />
                    </ContainerInput>
                    
                    <ContainerInput>
                        <MaskedInput 
                            placeholder="EX: 000.000.000-00"
                            mask="999.999.999-99"
                            type="text"
                            width="300px"
                            maxLength={11}
                            label="CPF (digite apenas numeros)"
                            
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <Input 
                            label="E-mail"
                            type="email"
                            placeholder="Ex: fulanodetal@gmail.com"
                            width="320px"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                        />
                    </ContainerInput>
                </>
            )}
            {isPessoaJuridicaChecked && (
                <>
                    <ContainerInput>
                        <Input 
                            label="Qual o nome da sua empresa??"
                            type="text"
                            placeholder="Ex: Loja do Fulano de tal"
                            width="320px"
                            value={name}
                            onChange={(e) => { setName(e.target.value);}}
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
                                onChange={(e) => { setEmail(e.target.value); }}
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
                                onChange={(e) => { setPhone(e.target.value); }}
                            />
                        </ContainerInput>
                        <InputCepNumber>
                            <ContainerInput>
                                <CepInput 
                                    label="Cep"
                                    placeholder="99999999"
                                    type="text"
                                    width="200px"
                                    value={cep}
                                    onChange={(e) => { setCep(e.target.value);}}
                                />
                            </ContainerInput>
                        </InputCepNumber>
                        <ContainerInput>
                            <EndInput
                                label="Endereço"
                                placeholder="Rua fulano de tal"
                                value={street}
                                onChange={(e) => { setStreet(e.target.value); }}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <Input 
                                label="Cidade"
                                type="text"
                                value={city}
                                onChange={(e) => { setCity(e.target.value);}}
                                placeholder="Ex: Fulano de tal"
                                width="320px"
                            />
                         </ContainerInput>
                        <ContainerInput>
                            <Input 
                                label="Bairro"
                                type="text"
                                value={neighborhood}
                                onChange={(e) => { setNeighborhood(e.target.value);}}
                                placeholder="Ex: Fulano de tal"
                                width="320px"
                            />
                        </ContainerInput>
                        {/* <ContainerInput>
                            <Input 
                                label="Imagem"
                                type="file"
                                value={image}
                                onChange={(e) => { setImage(e.target.value);}}
                                placeholder="Ex: Fulano de tal"
                                width="320px"
                            />
                        </ContainerInput> */}
                </>
            )}
            <ContainerInput>
                <Input 
                    label="Senha"
                    type="password"
                    width='320px'
                    placeholder=""
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); }}
                />
                {/* <Input 
                    label="Senha"
                    type="password"
                    width='320px'
                    placeholder=""
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value); }}
                /> */}
                <ContainerText>
                    <Text>
                        Use letras, numeros e simbolos
                    </Text>
                </ContainerText>
                <ContainerButton>
                    <Button 
                        name="CADASTRE-SE"
                        onClick={register}
                    />
                </ContainerButton>
            </ContainerInput>
        </>
    )
}