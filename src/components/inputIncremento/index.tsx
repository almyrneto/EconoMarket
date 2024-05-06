import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../theme";

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const InputID = styled.input`
  width: 100px;
  height: 30px;
  text-align: center;
  border: 1px solid ${colors.preto};
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  padding: 0 30px 0 10px; /* Ajustando o padding para acomodar os botões */
`;

const ButtonID = styled.button<{ tipo: string }>`
  position: absolute;
  top: 0;
  ${(props) => (props.tipo === 'menos' ? 'left: 0;' : 'right: 0;')};
  width: 30px;
  height: 100%;
  background-color: transparent;
  color: ${colors.laranja};
  border: none;
  border-radius: 0;
  cursor: pointer;
`;

const LabelStyles = styled.label `
    display: flex;
    padding-left: 0.5rem;

    font-size: 13px;
    font-weight: 700;
    font-family: Montserrat;
    width: 282px;
    height: 21px;
`
export const ContainerLabel = styled.div `


`

type InputProps = {
    label: string,
}

export const QuantidadeInput = ({
    label,
}: InputProps) => {
  const [quantidade, setQuantidade] = useState(1);

  const incrementar = () => {
    setQuantidade(quantidade + 1);
  };

  const decrementar = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <>
        <ContainerLabel>
            <LabelStyles>
                {label}
            </LabelStyles>
        </ContainerLabel>
        <Container>
            <ButtonID tipo="menos" onClick={decrementar}>-</ButtonID>
            <InputID type="number" value={quantidade} readOnly/>
            <ButtonID tipo="menos" onClick={decrementar}>-</ButtonID>
            <ButtonID tipo="mais" onClick={incrementar}>+</ButtonID>
        </Container>
    </>
  );
};
