import { useState } from "react";
import CellIcon from "../../../assets/icons/cell";
import {
  Button,
  ButtonContainer,
  ContainerIcon,
  ContainerText,
  ContainerTitle,
  ModalBackground,
  ModalContent,
  Square,
  Text,
  Title,
} from "./styled";
import CameraIcon from "../../../assets/icons/camera";
import GalleryIcon from "../../../assets/icons/editphoto";

export const CadastroAnuncioHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState(0);
  const [photos, setPhotos] = useState<string[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const chooseFromGallery = async () => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.capture = "environment";
      fileInput.addEventListener("change", (event) => {
        if (event.target instanceof HTMLInputElement && event.target.files) {
          const file = event.target.files[0];
          const photo = URL.createObjectURL(file);
          setPhotos([...photos, photo]);
          setSelectedPhotos(photos.length + 1);
        }
      });
      fileInput.click();
    } catch (error) {
      console.error("Erro ao acessar a galeria:", error);
    }
  };

  return (
    <>
      <Square onClick={openModal}>
        <ContainerIcon>
          <CellIcon />
        </ContainerIcon>
        <ContainerTitle>
          <Title>Inserir fotos do produto</Title>
        </ContainerTitle>
        <ContainerText>
          <Text>{selectedPhotos} de 6 adicionadas</Text>
        </ContainerText>
      </Square>
      {showModal && (
        <ModalBackground onClick={closeModal}>
          <ModalContent>
            <Title>Escolher uma opção</Title>
            <ButtonContainer>
              <Button onClick={chooseFromGallery}>
                <CameraIcon />
                Tirar foto
              </Button>
              <Button onClick={chooseFromGallery}>
                <GalleryIcon />
                Escolher da galeria
              </Button>
              <Button onClick={closeModal}>X Cancelar</Button>
            </ButtonContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};
