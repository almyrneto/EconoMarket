import { useNavigate } from "react-router-dom"
import AnnouncementIcon from "../../../assets/icons/announcement"
import SalesIcon from "../../../assets/icons/sales"
import StoreIcon from "../../../assets/icons/store"
import { Announcement, BotaoAdicionar, Circulo, Container, ContainerButton, New, Sales, Store, Title, TitleCard } from "./styled"
import { useEffect, useState } from "react"
import { SellerDetails, getSellerDetails } from "../../../service/getLoginSeller/getLoginSeller"


export const LoggedSellerBody = () => {

    const navigate = useNavigate()

    const [sellerDetails, setSellerDetails] = useState<SellerDetails | null>(null)
    const token = localStorage.getItem("token");

    const navigateNew = () => {
        navigate('/registerAnnouncement')
    }

    useEffect(() => {
        const fetchSellerDetails = async () => {
            try {
                if (token) {
                    const details = await getSellerDetails(token);
                setSellerDetails(details);
                }else {
                    navigate('/login')
                }
                
            } catch (error) {
                console.error("Erro ao obter os detalhes do vendedor:", error)
            }
        };

        fetchSellerDetails();
    }, [navigate, token])

    return (
        <>
            <Title>
                Bem vindo de volta, {sellerDetails?.name ?? ""}
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