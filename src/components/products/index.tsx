import {
  ContButton,
  ContImgProd,
  ContLastUnits,
  ContPreço,
  ContTitle,
  ContainerProducts,
  DivProduct,
  Expiration,
  PreçoAnt,
  PreçoNew,
  TitleExpiration,
  TitleLastUnits,
  TitleProd,
} from "./styled";
import img5 from "../../assets/img/products/image 10.png";
import img6 from "../../assets/img/products/image 5.png";
import img7 from "../../assets/img/products/image 6.png";
import img8 from "../../assets/img/products/image 9.png";
import { ButtonProd } from "../button";

export const Products = () => {
  return (
    <>
      <ContainerProducts>
        <DivProduct>
          <ContImgProd>
            <img src={img8} />
          </ContImgProd>
          <ContPreço>
            <PreçoAnt>De R$12,00</PreçoAnt>
          </ContPreço>
          <ContPreço>
            <PreçoNew>Por R$5,00</PreçoNew>
          </ContPreço>
          <ContTitle>
            <TitleProd>Pipoca de microondas</TitleProd>
          </ContTitle>
          <Expiration>
            <TitleExpiration>Consumir ate 15/04/2024</TitleExpiration>
          </Expiration>
          <ContLastUnits>
            <TitleLastUnits>Ultimas unidades</TitleLastUnits>
          </ContLastUnits>
          <ContButton>
            <ButtonProd name="Adicionar" />
          </ContButton>
        </DivProduct>
        <DivProduct>
          <ContImgProd>
            <img src={img6} />
          </ContImgProd>
          <ContPreço>
            <PreçoAnt>De R$12,00</PreçoAnt>
          </ContPreço>
          <ContPreço>
            <PreçoNew>Por R$5,00</PreçoNew>
          </ContPreço>
          <ContTitle>
            <TitleProd>Achocolatado Nescau - 200g</TitleProd>
          </ContTitle>
          <Expiration>
            <TitleExpiration>Consumir ate 15/04/2024</TitleExpiration>
          </Expiration>
          <ContLastUnits>
            <TitleLastUnits>Ultimas unidades</TitleLastUnits>
          </ContLastUnits>
          <ContButton>
            <ButtonProd name="Adicionar" />
          </ContButton>
        </DivProduct>
        <DivProduct>
          <ContImgProd>
            <img src={img7} />
          </ContImgProd>
          <ContPreço>
            <PreçoAnt>De R$17,00</PreçoAnt>
          </ContPreço>
          <ContPreço>
            <PreçoNew>Por R$15,00</PreçoNew>
          </ContPreço>
          <ContTitle>
            <TitleProd>Café caboclo - Tradicional - 500g</TitleProd>
          </ContTitle>
          <Expiration>
            <TitleExpiration>Consumir ate 15/04/2024</TitleExpiration>
          </Expiration>
          <ContLastUnits>
            <TitleLastUnits>Ultimas unidades</TitleLastUnits>
          </ContLastUnits>
          <ContButton>
            <ButtonProd name="Adicionar" />
          </ContButton>
        </DivProduct>
        <DivProduct>
          <ContImgProd>
            <img src={img5} />
          </ContImgProd>
          <ContPreço>
            <PreçoAnt>De R$17,00</PreçoAnt>
          </ContPreço>
          <ContPreço>
            <PreçoNew>Por R$15,00</PreçoNew>
          </ContPreço>
          <ContTitle>
            <TitleProd>Linha converva de-li-cia</TitleProd>
          </ContTitle>
          <Expiration>
            <TitleExpiration>Consumir ate 15/04/2024</TitleExpiration>
          </Expiration>
          <ContLastUnits>
            <TitleLastUnits>Ultimas unidades</TitleLastUnits>
          </ContLastUnits>
          <ContButton>
            <ButtonProd name="Adicionar" />
          </ContButton>
        </DivProduct>
      </ContainerProducts>
    </>
  );
};
