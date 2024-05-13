// import styled from 'styled-components';
// import { useState } from 'react';
// import image1 from '../../assets/img/carousel/image 4.png';
// import { FaArrowAltCircleLeft } from 'react-icons/fa';

// const images = [
//     {src: image1, width: 239, height: 148}
// ];

// const CarouselContainer = styled.div`
//   position: relative;
// `;

// const CarouselImage = styled.img`
//   width: 100%;
//   height: auto;
//   transition: opacity 0.5s ease;
//   opacity: ${(props) => (props.active ? 1 : 0)};
// `;

// const ArrowButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 1;
//   ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
// `;

// const Icon = styled.span`
//   color: white;
//   font-size: 24px;
// `;

// export const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <CarouselContainer>
//       <ArrowButton onClick={prevSlide} left={true}>
//         <Icon>
//           <FaArrowAltCircleLeft />
//         </Icon>
//       </ArrowButton>
//       {images.map((image, index) => (
//         <CarouselImage
//           key={index}
//           src={image.src}
//           alt={`Slide ${index}`}
//           active={index === currentImageIndex}
//         />
//       ))}
//     </CarouselContainer>
//   );
// };
