import Market from "../../../assets/icons/market"
import { Text, Title } from "../../../assets/style/global"
import { Container, Container2, ContainerIcon } from "./styled"


export const HomeHeader = () => {

    return (
        <Container>
            <ContainerIcon>
                <Market />
            </ContainerIcon>

            <Container2>
                <Title>Seja bem vindo ao economarket</Title>
                <Text>Para tornar sua experiencia a melhor possivel, conta pra gente</Text>
            </Container2>
        </Container>

    )
}