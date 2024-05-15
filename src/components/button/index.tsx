import { ButtonProdStyle, ButtonStyle } from "./styled";

type ButtonProps = {
  name: string;
  onClick?: () => void;
};

type ButtonProdProps = {
  name: string;
  onClick?: () => void;
};

export const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <>
      <ButtonStyle onClick={onClick}>{name}</ButtonStyle>
    </>
  );
};

export const ButtonProd = ({ name, onClick }: ButtonProdProps) => {
  return (
    <>
      <ButtonProdStyle onClick={onClick}>{name}</ButtonProdStyle>
    </>
  );
};
