import CellIcon from "../../../assets/icons/cell"
import { ContainerIcon, ContainerText, ContainerTitle, Square, Text, Title } from "./styled"


export const CadastroAnuncioHeader = () => {

    return (
        <>
            <Square>
                <ContainerIcon>
                    <CellIcon />
                </ContainerIcon>
                <ContainerTitle>
                    <Title>
                        Inserir fotos do produto
                    </Title>
                </ContainerTitle>
                <ContainerText>
                    <Text>
                        0 de 6 adicionadas
                    </Text>
                </ContainerText>
            </Square>
        </>
    )
}