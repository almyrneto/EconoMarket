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

  const takePhoto = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
    }
  };

  const chooseFromGallery = async () => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
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

  const capturePhoto = () => {
    if (stream) {
      const video = document.createElement("video");
      video.srcObject = stream;

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }

      const photo = canvas.toDataURL("image/jpeg");
      setPhotos([...photos, photo]);
      setSelectedPhotos(photos.length + 1);

      stream.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
      video.remove();
      setStream(null);
    }
    closeModal();
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
              <Button onClick={takePhoto}>
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
      {stream && (
        <div style={{ display: "none" }}>
          <video
            ref={(video) => {
              if (video) video.srcObject = stream;
            }}
            autoPlay
            playsInline
          ></video>
        </div>
      )}
      <button
        onClick={capturePhoto}
        style={{ display: "none" }}
        id="captureBtn"
      >
        Capture
      </button>
    </>
  );
};
