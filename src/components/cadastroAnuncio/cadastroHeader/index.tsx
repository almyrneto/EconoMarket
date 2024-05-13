import { useState } from "react";
import CellIcon from "../../../assets/icons/cell"
import { Button, ButtonContainer, ContainerIcon, ContainerText, ContainerTitle, ModalBackground, ModalContent, Square, Text, Title } from "./styled"
import CameraIcon from "../../../assets/icons/camera";
import GalleryIcon from "../../../assets/icons/editphoto";


export const CadastroAnuncioHeader = () => {
    const [showModal, setShowModal] = useState(false)
    // const [selectedImage, setSelectedImage] = useState<File | null>(null);
    // const [uploadedImages, setUploadedImages] = useState<File[]>([]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    }


    // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files && event.target.files[0];
    //     if (file) {
    //         setSelectedImage(file);
    //     }
    // }

    // const handleUpload = () => {
    //     if (selectedImage) {
    //         setUploadedImages([...uploadedImages, selectedImage]);
    //         setSelectedImage(null);
    //     }
    //     closeModal();
    // };

    return (
        <>
            <Square onClick={openModal}>
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
            {showModal && (
                <ModalBackground onClick={closeModal}>
                    <ModalContent >
                        <Title>Escolher uma opção</Title>
                        <ButtonContainer>
                            <Button onClick={closeModal}>
                                <CameraIcon />
                                Tirar foto
                            </Button>
                            <Button onClick={closeModal}>
                                <GalleryIcon />
                                Escolher da galeria
                            </Button>
                            <Button onClick={closeModal}>
                                X Cancelar
                            </Button>
                        </ButtonContainer>
                    </ModalContent>
                </ModalBackground>
            )}
        </>
    )
}