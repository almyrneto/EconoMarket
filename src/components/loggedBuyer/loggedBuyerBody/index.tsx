import {
  // ContImgProd,
  // ContPreço,
  ContainerImg,
  // ContainerProducts,
  ContainerPromotion,
  ContainerTitle,
  DivImg,
  // DivProduct,
  // PreçoAnt,
  // PreçoNew,
  Title,
} from "./styled";
import img1 from "../../../assets/img/categ/Ellipse 1.png";
import img2 from "../../../assets/img/categ/Ellipse 2.png";
import img3 from "../../../assets/img/categ/Ellipse 3.png";
import img4 from "../../../assets/img/categ/Ellipse 4.png";
// import img5 from "../../../assets/img/products/image 10.png";
// import img6 from "../../../assets/img/products/image 5.png";
// import img7 from "../../../assets/img/products/image 6.png";
// import img8 from "../../../assets/img/products/image 9.png";
import { Products } from "../../products";

export const LoggedBuyerBody = () => {
  return (
    <>
      <ContainerTitle>
        <Title>Categorias em destaque</Title>
      </ContainerTitle>
      <ContainerImg>
        <DivImg>
          <img src={img1} />
        </DivImg>
        <DivImg>
          <img src={img2} />
        </DivImg>
        <DivImg>
          <img src={img3} />
        </DivImg>
        <DivImg>
          <img src={img4} />
        </DivImg>
      </ContainerImg>
      <ContainerTitle>
        <Title>Promoções da semana</Title>
      </ContainerTitle>
      <ContainerPromotion>
        <Products />
      </ContainerPromotion>
    </>
  );
};
