import { Text, Title } from "../../../assets/style/global"
import { Container, ContainerText, ContainerTitle } from "./styled"


export const LoginHeader = () => {

    return (
        <Container>
            <ContainerTitle>
                <Title>Que bom ter você por aqui!</Title>
            </ContainerTitle>

            <ContainerText>
                <Text>você está a um passo de economizar dinheiro em suas compras</Text>
            </ContainerText>
        </Container>
    )
}