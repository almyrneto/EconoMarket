import { useNavigate } from "react-router-dom"
import BuyerIcon from "../../../assets/icons/buyer"
import SellerIcon from "../../../assets/icons/seller"
import { ButtonIconBuyer, ButtonIconSeller, Container, ContainerButton, Container3, Container4 } from "./styled"
import { Text } from "../../../assets/style/global"



export const HomeBody = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/loginBuyer')
    }
    const navigateSeller = () => {
        navigate('/login')
    }

    return (
        <Container>
            <ContainerButton>
                <Container3>
                    <ButtonIconBuyer onClick={navigateLogin}>
                        <BuyerIcon />
                        <Text>Comprador</Text>
                    </ButtonIconBuyer>
                </Container3>
                <Container4>
                    <ButtonIconSeller onClick={navigateSeller}>
                        <SellerIcon />
                        <Text>Vendedor</Text>
                    </ButtonIconSeller>
                </Container4>
            </ContainerButton>
        </Container>
    )
}