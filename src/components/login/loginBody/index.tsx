import { useNavigate } from "react-router-dom"
import { Button } from "../../button"
import { Input } from "../../input"
import { Container, ContainerButton, ContainerLogin, ContainerSenha, StyledLink, TextRegister } from "./styled"


export const LoginForm = () => {
    const navigate = useNavigate()

    const navigateRegister = () => {
        navigate("/register")
    }

    return (
        <Container>
            <ContainerLogin>
                <Input 
                    label="E-mail"
                    placeholder="E-mail"
                    type="email"
                    width="288px"
                />
            </ContainerLogin>
            <ContainerSenha>
                <Input 
                    label="Senha"
                    placeholder="Senha"
                    type="password"
                    width="288px"
                />
            </ContainerSenha>
            <ContainerButton>
                <Button 
                    name="ENTRAR"
                />
            </ContainerButton>
            <TextRegister>
                Não tem uma conta?
                <StyledLink onClick={navigateRegister}>Cadastre-se</StyledLink>
            </TextRegister>
        </Container>
    )
}