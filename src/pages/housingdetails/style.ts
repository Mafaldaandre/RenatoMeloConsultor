import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { NavLink } from "react-router-dom";

export const Background = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 60px;
  background: #f8ecc6;
  margin-top: 5%;
  margin-bottom: 5%;
  @media screen and (min-width: 1900px) {
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    border-radius: 30px;
  }

  @media screen and (max-width: 375px) {
    background: transparent;
  }
`;

export const ContainerTitleHousesDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  padding-bottom: 50px;
  background: #f8d15c;
  width: 972px;
  padding: 20px;
  margin: 50px;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);

  @media screen and (max-width: 767px) {
    margin: 30px;
  }
`;

export const CenterImage = styled.div`
  border-radius: 60px;
  position: relative;
  width: 111%;
  left: -5.5%;
  background-color: #eedda4;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    background-color: transparent;
    border-radius: 30px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  border-radius: 50px;
  cursor: pointer;
  padding: 70px 35px 0 35px;
  img {
    width: 100%;
    height: 540px;
    border-radius: 50px;
    margin: 0 45px;
    object-fit: cover;
    background-repeat: no-repeat;
    aspect-ratio: 3 / 2;
  }

  @media screen and (max-width: 1600px) {
    img {
      height: 697px;
    }
  }

  @media screen and (max-width: 1200px) {
    img {
      height: 645px;
    }
  }

  @media screen and (max-width: 991px) {
    img {
      height: 589px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0;

    img {
      margin: 0;
      height: 100%;
      border-radius: 0;
    }
  }
`;

export const NavigationSlider = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 30px 0 50px 0;

  @media screen and (max-width: 767px) {
    padding: 30px 0 0 0;
    width: 30%;
  }
`;

export const NavigationButtonBack = styled(ArrowBackIosRoundedIcon)`
  cursor: pointer;
`;

export const NavigationButtonForward = styled(ArrowForwardIosRoundedIcon)`
  cursor: pointer;
`;

export const NavigationSliderThumbnail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 30px 0 50px 0;
`;

export const NavigationButtonBackThumbnail = styled(ArrowBackIosRoundedIcon)`
  cursor: pointer;
  margin-right: 10px;
`;

export const NavigationButtonForwardThumbnail = styled(
  ArrowForwardIosRoundedIcon
)`
  cursor: pointer;
  margin-left: 10px;
`;

export const RefNumber = styled.p`
  font-weight: 700;
  text-align: center;

  padding: 20px;
  width: 200px;
  margin: 50px 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    background-color: #f9e093a3;
    margin: 30px 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Localization = styled.p`
  text-align: center;
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px;
  width: 200px;
  margin: 50px 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    background-color: #f9e093a3;
    margin: 30px 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TypePrice = styled.p`
  font-weight: 700;
  padding: 0 5px;
`;

export const ContainerDivisions = styled.div`
  background: #f7d15b;
  border-radius: 60px;
  display: flex;
  justify-content: space-around;
  margin: 0 140px;
  padding: 40px 0;
  align-items: center;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
  @media screen and (max-width: 991px) {
    margin: 0 80px;
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    border-radius: 30px;
    padding: 15px 50px;
    width: 111%;
    left: -5.5%;
    position: relative;
  }

  @media screen and (max-width: 576pxpx) {
    padding: 15px;
  }
`;

export const Divisions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivisionsTitle = styled.p`
  padding: 5px;

  @media screen and (max-width: 767px) {
    max-width: 70px;
    text-align: center;
  }
`;

export const DivisionsImage = styled.img`
  @media screen and (max-width: 576px) {
    width: 30px;
  }
`;

export const Description = styled.p`
  padding: 50px 142px;

  @media screen and (max-width: 991px) {
    padding: 50px;
  }

  @media screen and (max-width: 576px) {
    padding: 30px 30px;
  }
`;

export const ExpandedImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  flex-direction: column;
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
  right: 2%;
  position: absolute;
  top: 3%;
  color: #f7d15b;
  box-shadow: 1px 2px 5px 0px rgb(53 51 43);
  z-index: 2;
  cursor: pointer;
`;

export const NavigationButtonExpandeBack = styled(ArrowBackIosRoundedIcon)`
  z-index: 2;
  cursor: pointer;
  color: #f7d15b;
  margin-left: 100px;
  box-shadow: 1px 2px 5px 0px rgb(53 51 43);
  @media screen and (max-width: 1200px) {
    margin: 0 50px;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    position: absolute;
    left: 2%;
    top: 38%;
  }
`;

export const NavigationButtonExpandeForward = styled(
  ArrowForwardIosRoundedIcon
)`
  margin-right: 100px;
  z-index: 2;
  cursor: pointer;
  color: #f7d15b;
  box-shadow: 1px 2px 5px 0px rgb(53 51 43);

  @media screen and (max-width: 1200px) {
    margin: 0 50px;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    position: absolute;
    right: 2%;
    top: 38%;
  }
`;

export const ThumbnailDiiv = styled.div`
  padding: 0 50px 50px 50px;
  display: flex;
  max-width: 100%;
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export const ConteinerThumbnail = styled.div`
  overflow-x: auto;
  display: flex;
  max-width: 100%;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transition: transform 0.5s ease;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const Thumbnail = styled.img<{ active: boolean }>`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin: 0 5px;
  border: 2px solid gray;
  cursor: pointer;
  aspect-ratio: 3/2;
  border: ${(props) => (props.active ? "2px solid #f7d15b" : "none")};
`;

export const CarouselContainerExpande = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const SlideExpande = styled.div`
  text-align: center;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  img {
    width: 68%;
    object-fit: cover;
    background-repeat: no-repeat;
    aspect-ratio: 3/2;
  }

  @media screen and (max-width: 1200px) {
    img {
      width: 100%;
    }
  }
`;

export const Counter = styled.div`
  color: black;
  display: flex;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  background-color: #f7d15b;
  justify-content: center;
  padding: 15px;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
  border-radius: 50px;
  width: 130px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    border-radius: 0;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

export const CounterExpande = styled.div`
  color: #f7d15b;
  display: flex;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  background-color: transparent;
  justify-content: center;
  padding: 15px;
  box-shadow: 1px 2px 5px 0px rgb(53 51 43);
  border-radius: 50px;
  width: 130px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    border-radius: 0;

    margin-top: 50px;
  }
`;

export const ContainerBack = styled.div`
  display: flex;
  justify-content: center;
`;

export const Back = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: 215px;
  height: 60px;
  border-radius: 14px;
  background-color: #f7d15b;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 50px;
  cursor: pointer;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f8ecc6;
    border: 2px solid #f7d15b;
    transform: scale(1.02);
  }

  @media screen and (max-width: 767px) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
  @media screen and (max-width: 576px) {
    width: 145px;
    height: 50px;
  }
`;
