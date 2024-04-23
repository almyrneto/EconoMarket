import MarketLogged from "../../../assets/icons/marketLogged"
import { Menu } from "../../menuToggle"
import { Container, ContainerHeader, ContainerIcon, ContainerMenu, ContainerTitle, Title } from "./styled"


export const LoggedSellerHeader = () => {

    return (
        <Container>
            <ContainerHeader>
                <ContainerIcon>
                    <MarketLogged />
                    <ContainerTitle>
                        <Title>
                            Economarket
                        </Title>    
                    </ContainerTitle>
                </ContainerIcon>
                <ContainerMenu>
                    <Menu />
                </ContainerMenu>
            </ContainerHeader>
        </Container>
    )
}