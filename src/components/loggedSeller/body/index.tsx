import { useNavigate } from "react-router-dom"
import AnnouncementIcon from "../../../assets/icons/announcement"
import SalesIcon from "../../../assets/icons/sales"
import StoreIcon from "../../../assets/icons/store"
import { Announcement, BotaoAdicionar, Circulo, Container, ContainerButton, New, Sales, Store, Title, TitleCard } from "./styled"


export const LoggedSellerBody = () => {

    const navigate = useNavigate()

    const navigateNew = () => {
        navigate('/login')
    }

    return (
        <>
            <Title>
                Bem vindo de volta Fulano
            </Title>
            <Container>
                <New>
                    <ContainerButton onClick={navigateNew}>
                        <BotaoAdicionar>
                            <Circulo>+</Circulo>
                        </BotaoAdicionar>
                    </ContainerButton>
                    <TitleCard>Novo</TitleCard>
                </New>
                <Announcement>
                    <ContainerButton>
                        <AnnouncementIcon />
                    </ContainerButton>
                    <TitleCard>Meus anúncios</TitleCard>
                </Announcement>
                <Store>
                    <ContainerButton>
                        <StoreIcon />
                    </ContainerButton>
                    <TitleCard>Minha loja</TitleCard>
                </Store>
                <Sales>
                    <ContainerButton>
                        <SalesIcon />
                    </ContainerButton>
                    <TitleCard>Minhas vendas</TitleCard>
                </Sales>

            </Container>
        </>
    )
}