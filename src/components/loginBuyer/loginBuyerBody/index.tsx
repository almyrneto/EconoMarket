import { useNavigate } from "react-router-dom"
import { Button } from "../../button"
import { Input } from "../../input"
import { Container, ContainerButton, ContainerLogin, ContainerSenha, StyledLink, TextRegister } from "./styled"
import { UseLoginBuyer } from "../../../page/useLoginBuyer";


export const LoginBuyerForm = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        error,
    } = UseLoginBuyer()

    const navigate = useNavigate()


    const navigateRegister = () => {
        navigate("/registerBuyer")
    }

    return (
        <Container>
            <ContainerLogin>
                <Input 
                    label="E-mail"
                    placeholder="E-mail"
                    type="email"
                    width="288px"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value)}}
                />
            </ContainerLogin>
            <ContainerSenha>
                <Input 
                    label="Senha"
                    placeholder="Senha"
                    type="password"
                    width="288px"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value)}}
                />
            </ContainerSenha>
            <ContainerButton>
                <Button 
                    name="ENTRAR"
                    onClick={handleLogin}
                />
            </ContainerButton>
            {error && (
                <p>{error}</p>
            )}
            <TextRegister>
                Não tem uma conta?
                <StyledLink onClick={navigateRegister}>Cadastre-se</StyledLink>
            </TextRegister>
        </Container>
    )
}