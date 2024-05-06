import { Button } from "../../button"
import { Input } from "../../input"
import { QuantidadeInput } from "../../inputIncremento"
import { ContainerButton, ContainerInputs } from "./styled"


export const CadastroAnuncioBody = () => {

    return (
        <>
            <ContainerInputs>
                <Input 
                    label= "Título do anúncio*"
                    type= "text"
                    placeholder= "Ex: Produto tal - 000g"
                    width = "313px"
                />
            </ContainerInputs>
            <ContainerInputs>
                <Input 
                    label= "Descrição*"
                    type= "text"
                    placeholder= "Ex: Produto tal - 000g"
                    width = "313px"
                />
            </ContainerInputs>
            <ContainerInputs>
                <Input 
                    label= "Isso sera um Select posteriormente"
                    type= "text"
                    placeholder= "Ex: Produto tal - 000g"
                    width = "313px"
                />
            </ContainerInputs>
            <ContainerInputs>
                <Input 
                    label= "Consumir até*"
                    type= "date"
                    placeholder= "Ex: Produto tal - 000g"
                    width = "313px"
                />
            </ContainerInputs>
            <ContainerInputs>
                <QuantidadeInput label="Qntd. Disponivel*"/>
            </ContainerInputs>
            <ContainerButton>
                <Button 
                    name="+ Salvar"
                />
            </ContainerButton>
        </>
    )
}