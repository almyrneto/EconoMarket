import MarketLogged from "../../../assets/icons/marketLogged"
import PinIcon from "../../../assets/icons/pin"
import SearchIcon from "../../../assets/icons/search"
import { Carousel } from "../../carousel"
import { InputSearch } from "../../input"
import { ContainerCarousel, ContainerHeader, ContainerIcon, ContainerIconInput, ContainerInput, ContainerInputLocation, ContainerTitle, Title } from "./styled"


export const LoggerBuyerHeader = () => {

    return (
        <>
            <ContainerHeader>
                <ContainerIcon>
                    <MarketLogged />
                    <ContainerTitle>
                        <Title>
                            Economarket
                        </Title>
                    </ContainerTitle>
                </ContainerIcon>
            </ContainerHeader>
            <ContainerInput>
                <InputSearch 
                    placeholder="pesquise aqui seu produto"
                    width="310px"
                />
                <ContainerIconInput>
                    <SearchIcon />
                </ContainerIconInput>
            </ContainerInput>
            <ContainerInputLocation>
                <InputSearch 
                    placeholder="Buscar Localização"
                    width="310px"
                />
                <ContainerIconInput>
                    <PinIcon />
                </ContainerIconInput>
            </ContainerInputLocation>
            <ContainerCarousel>
                <Carousel />
            </ContainerCarousel>
        </>
    )
}