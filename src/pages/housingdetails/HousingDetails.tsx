import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Details, DetailsProps } from "../../data/detailsData";
import {
  Back,
  Background,
  CarouselContainer,
  CarouselContainerExpande,
  CenterImage,
  CloseIcon,
  ContainerBack,
  ContainerDivisions,
  ContainerPrice,
  ConteinerThumbnail,
  Counter,
  CounterExpande,
  Description,
  Divisions,
  DivisionsImage,
  DivisionsTitle,
  ExpandedImageOverlay,
  Localization,
  NavigationButtonBack,
  NavigationButtonBackThumbnail,
  NavigationButtonExpandeBack,
  NavigationButtonExpandeForward,
  NavigationButtonForward,
  NavigationButtonForwardThumbnail,
  NavigationSlider,
  RefNumber,
  Slide,
  SlideContainer,
  SlideExpande,
  Thumbnail,
  ThumbnailDiiv,
  Title,
  TypePrice,
} from "./style";

export const HousingDetails: React.FC<DetailsProps> = () => {
  const { typeId } = useParams();
  const detailsHouses = Details.find(
    (detail) => detail.id === parseInt(typeId || "0", 10)
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(
    null
  );
  const [expandedCarouselIndex, setExpandedCarouselIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [scrollDirection, setScrollDirection] = useState<number>(0);

  const [numVisibleImages, setNumVisibleImages] = useState<number>(2);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const [activeThumbnail, setActiveThumbnail] = useState<number>(0);

  const isMobileScreen = window.innerWidth <= 767;

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);

    setActiveThumbnail(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    console.log(touchStartX);
  };
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

  const updateActiveThumbnail = (direction: number) => {
    setActiveThumbnail((prevIndex) => {
      const totalThumbnails = detailsHouses?.images.length || 1;
      const newIndex =
        (prevIndex + direction + totalThumbnails) % totalThumbnails;

      // Calcular a largura total das miniaturas
      const thumbnailContainer = thumbnailContainerRef.current;
      const thumbnailWidth = thumbnailRefs[newIndex]?.offsetWidth || 0;

      // Rolar suavemente para a próxima miniatura
      if (thumbnailContainer) {
        thumbnailContainer.scrollBy({
          left: direction * thumbnailWidth,
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const touchMoveX = e.touches[0].clientX;
      const deltaX = touchStartX - touchMoveX;

      if (deltaX > 50) {
        // Swipe para a esquerda, avance para o próximo slide
        nextSlide();
        // Avançar para a próxima miniatura
      } else if (deltaX < -50) {
        // Swipe para a direita, volte para o slide anterior
        prevSlide();
        // Voltar para a miniatura anterior
      }
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  useEffect(() => {
    const handleResize = () => {
      // Atualize o número de imagens visíveis com base no tamanho da tela
      if (window.innerWidth <= 1600) {
        setNumVisibleImages(1);
      } else {
        setNumVisibleImages(2);
      }
    };

    // Adicione um ouvinte de redimensionamento para atualizar o número de imagens visíveis
    window.addEventListener("resize", handleResize);

    // Execute a lógica de redimensionamento ao montar o componente
    handleResize();

    // Remova o ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (window.innerWidth <= 1600) {
        return (prevIndex + 1) % (detailsHouses?.images.length || 1);
      } else {
        const newIndex = (prevIndex + 2) % (detailsHouses?.images.length || 1);
        return newIndex === 1 && detailsHouses.images.length % 2 === 1
          ? 0
          : newIndex;
      }
    });
    console.log(currentIndex);

    updateActiveThumbnail(1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (window.innerWidth <= 767) {
        return (
          (prevIndex - 1 + (detailsHouses?.images.length || 1)) %
          (detailsHouses?.images.length || 1)
        );
      } else {
        const newIndex =
          (prevIndex - 2 + (detailsHouses?.images.length || 1)) %
          (detailsHouses?.images.length || 1);
        return newIndex === detailsHouses.images.length - 1 &&
          detailsHouses.images.length % 2 === 1
          ? 0
          : newIndex;
      }
    });
    console.log(currentIndex);
    updateActiveThumbnail(-1);
  };

  const nextSlideThumbnail = () => {
    if (thumbnailContainerRef.current) {
      const thumbnailWidth = thumbnailRefs.current[0]?.offsetWidth || 0;
      const visibleThumbnails = Math.floor(
        thumbnailContainerRef.current.offsetWidth / thumbnailWidth
      );

      const scrollAmount = thumbnailWidth * visibleThumbnails;

      thumbnailContainerRef.current.scrollLeft += scrollAmount;
      updateActiveThumbnail(1);
    }
  };

  const prevSlideThumbnail = () => {
    if (thumbnailContainerRef.current) {
      const thumbnailWidth = thumbnailRefs.current[0]?.offsetWidth || 0;
      const visibleThumbnails = Math.floor(
        thumbnailContainerRef.current.offsetWidth / thumbnailWidth
      );

      console.log(visibleThumbnails);

      const scrollAmount = thumbnailWidth * visibleThumbnails;

      thumbnailContainerRef.current.scrollLeft -= scrollAmount;
      updateActiveThumbnail(-1);
    }
  };

  const nextExpandedSlide = () => {
    setExpandedCarouselIndex(
      (prevIndex) => (prevIndex + 1) % (detailsHouses?.images.length || 1)
    );
  };

  const prevExpandedSlide = () => {
    setExpandedCarouselIndex(
      (prevIndex) =>
        (prevIndex - 1 + (detailsHouses?.images.length || 1)) %
        (detailsHouses?.images.length || 1)
    );
  };

  const openImage = (index: number) => {
    setExpandedImageIndex(index);
  };

  const closeImage = () => {
    setExpandedImageIndex(null);

    setScrollDirection(0);
  };

  const handleScroll = (event: React.WheelEvent<HTMLImageElement>) => {
    const delta = event.deltaY;
    const newScrollDirection = delta > 0 ? 1 : delta < 0 ? -1 : 0;

    // Se a direção do scroll mudou, resete o zoom
    if (newScrollDirection !== scrollDirection) {
      setZoomLevel(1);
      setScrollDirection(newScrollDirection);
      return;
    }

    setScrollDirection(newScrollDirection);

    const zoomSensitivity = 0.01;

    setZoomLevel((prevZoomLevel) => {
      const newZoomLevel = prevZoomLevel + delta * zoomSensitivity;

      // Limitar o zoom entre 0.5 e um valor máximo desejado
      const maxZoomLevel = 3;
      const minZoomLevel = 0.5;

      return Math.min(Math.max(newZoomLevel, minZoomLevel), maxZoomLevel);
    });
  };

  const renderSlides = () => {
    const totalSlides = detailsHouses?.images.length || 0;
    const slides = [];

    for (
      let index = currentIndex;
      index < currentIndex + numVisibleImages;
      index++
    ) {
      const adjustedIndex = (index + totalSlides) % totalSlides;

      slides.push(
        <Slide
          key={adjustedIndex}
          onClick={() => {
            if (!isMobileScreen) {
              openImage(adjustedIndex);
            }
          }}
        >
          {detailsHouses?.images[adjustedIndex] && (
            <img
              src={detailsHouses?.images[adjustedIndex].image}
              alt={`Slide ${adjustedIndex + 1}`}
            />
          )}
        </Slide>
      );
    }

    // Adicionar slide invisível apenas se necessário
    // if (totalSlides % 2 !== 0 && numVisibleImages === 1) {
    //   slides.push(
    //     <Slide
    //       key="invisible"
    //       style={{ visibility: "hidden" }}
    //       onClick={() => {
    //         openImage(0);
    //       }}
    //     >
    //       {detailsHouses?.images[0] && (
    //         <img src={detailsHouses?.images[0].image} alt={`Invisible Slide`} />
    //       )}
    //     </Slide>
    //   );
    // }

    return slides;
  };

  return (
    <Background>
      <Title>{detailsHouses && detailsHouses.title}</Title>
      <CenterImage>
        <CarouselContainer
          onTouchStart={isMobileScreen ? handleTouchStart : undefined}
          onTouchMove={isMobileScreen ? handleTouchMove : undefined}
          onTouchEnd={isMobileScreen ? handleTouchEnd : undefined}
        >
          {" "}
          <SlideContainer>{renderSlides()}</SlideContainer>
          <NavigationSlider>
            <NavigationButtonBack
              style={{ fontSize: isMobileScreen ? "35px" : "56px" }}
              onClick={prevSlide}
            />
            <NavigationButtonForward
              style={{ fontSize: isMobileScreen ? "35px" : "56px" }}
              onClick={nextSlide}
            />
          </NavigationSlider>
        </CarouselContainer>

        <Counter>
          {currentIndex + 1} de {detailsHouses?.images.length || 0}
        </Counter>
        <ThumbnailDiiv>
          <NavigationButtonBackThumbnail
            style={{ fontSize: isMobileScreen ? "35px" : "56px" }}
            onClick={prevSlideThumbnail}
          />
          <ConteinerThumbnail ref={thumbnailContainerRef}>
            {detailsHouses?.images.map((image, index) => (
              <Thumbnail
                key={index}
                src={image.image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
                active={index === activeThumbnail}
                ref={(ref) => (thumbnailRefs.current[index] = ref)}
              />
            ))}
          </ConteinerThumbnail>

          <NavigationButtonForwardThumbnail
            style={{ fontSize: isMobileScreen ? "35px" : "56px" }}
            onClick={nextSlideThumbnail}
          />
        </ThumbnailDiiv>
      </CenterImage>
      <RefNumber>{detailsHouses && detailsHouses.refNumber}</RefNumber>
      <Localization>{detailsHouses && detailsHouses.localization}</Localization>
      <ContainerPrice>
        <TypePrice>{detailsHouses && detailsHouses.type}</TypePrice>
        <TypePrice>{detailsHouses && detailsHouses.price}</TypePrice>
      </ContainerPrice>
      <ContainerDivisions>
        {" "}
        {detailsHouses &&
          detailsHouses.numberDivisions.map((division) => (
            <Divisions key={division.id}>
              <DivisionsImage src={division.icon} alt="Icon das divisões" />
              <DivisionsTitle>{division.title}</DivisionsTitle>
              <p>{division.count}</p>
            </Divisions>
          ))}
      </ContainerDivisions>
      <Description
        dangerouslySetInnerHTML={{
          __html: detailsHouses ? detailsHouses.description : "",
        }}
      ></Description>
      <ExpandedImageOverlay
        style={{
          display: isMobileScreen
            ? "none"
            : expandedImageIndex !== null
            ? "flex"
            : "none",
        }}
      >
        <CloseIcon
          onClick={closeImage}
          style={{ fontSize: window.innerWidth <= 767 ? "50px" : "60px" }}
        />
        <CarouselContainerExpande>
          <div>
            <NavigationButtonExpandeBack
              style={{ fontSize: window.innerWidth <= 767 ? "45px" : "56px" }}
              onClick={prevExpandedSlide}
            />
          </div>
          {detailsHouses?.images.map((image, index) => (
            <SlideExpande
              key={index}
              style={{
                display: index === expandedCarouselIndex ? "block" : "none",
                transform: `scale(${zoomLevel})`,
              }}
            >
              <img
                src={image.image}
                alt={`Slide ${index + 1}`}
                onWheel={handleScroll}
              />
            </SlideExpande>
          ))}

          <div>
            {" "}
            <NavigationButtonExpandeForward
              style={{ fontSize: window.innerWidth <= 767 ? "45px" : "56px" }}
              onClick={nextExpandedSlide}
            />
          </div>
        </CarouselContainerExpande>{" "}
        <CounterExpande>
          {expandedCarouselIndex + 1} de {detailsHouses?.images.length || 0}
        </CounterExpande>
      </ExpandedImageOverlay>
      <ContainerBack>
        <Back to="/housing">Voltar</Back>
      </ContainerBack>
    </Background>
  );
};
