import styled from 'styled-components';
import { useState, useEffect } from 'react';
import image1 from '../../assets/img/carousel/image 4.png';
import image2 from '../../assets/img/carousel/imagem2.avif';
import image3 from '../../assets/img/carousel/image3.png';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { colors } from '../../theme';

const images = [
    { src: image1, width: 239, height: 148 },
    { src: image2, width: 239, height: 148 },
    { src: image3, width: 239, height: 148 },
];

const CarouselContainer = styled.div`
  position: relative;
  width: 260px;
  height: 180px;
`;

const CarouselImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.5s ease;

  &.active {
    opacity: 1;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const Icon = styled.span`
  color: ${colors.laranja};
  font-size: 24px;
`;

export const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselImage
          key={index}
          src={image.src}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
      <ArrowButton className="left" onClick={prevSlide}>
        <Icon>
          <FaArrowAltCircleLeft />
        </Icon>
      </ArrowButton>
      <ArrowButton className="right" onClick={nextSlide}>
        <Icon>
          <FaArrowAltCircleRight />
        </Icon>
      </ArrowButton>
    </CarouselContainer>
  );
};
