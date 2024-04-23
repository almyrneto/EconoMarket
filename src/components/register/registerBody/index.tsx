import { Button } from "../../button"
import { Input } from "../../input"
import { ContainerButton, ContainerCheckBox, ContainerInput, ContainerText, Text } from "./styled"
import {  UseRegister } from "../../../page/useRegister"
import { Checkbox } from "../../checkbox"
import { MaskedInput } from "../../maskedInput"

export const RegisterForm = () => {
    const {
        isPessoaFisicaChecked,
        isPessoaJuridicaChecked,
        handlePessoaFisicaChecked,
        handlePessoaJuridicaChecked,
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
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <MaskedInput 
                                label="CNPJ (digite apenas numeros)"
                                placeholder="EX: 00.000.000/0000-00"
                                mask=" 99.999.999/9999-99"
                                type="text"
                                width="300px"
                                maxLength={14}
                            />
                        <ContainerInput>
                    </ContainerInput>
                        <Input 
                            label="E-mail"
                            type="email"
                            placeholder="Ex: fulanodetal@gmail.com"
                            width="320px"
                        />
                    </ContainerInput>
                </>
            )}
            <ContainerInput>
                <Input 
                    label="Senha"
                    type="password"
                    width='320px'
                    placeholder=""
                />
                <ContainerText>
                    <Text>
                        Use letras, numeros e simbolos
                    </Text>
                </ContainerText>
                <ContainerButton>
                    <Button 
                        name="CADASTRE-SE"
                    />
                </ContainerButton>
            </ContainerInput>
        </>
    )
}