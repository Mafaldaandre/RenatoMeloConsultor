import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

interface StyledComponentProps {
  condition?: number;
  dontFavorites?: boolean;
  numberCards?: boolean;
}

export const Background = styled.div<StyledComponentProps>`
  width: 90%;
  margin: auto;
  border-radius: 60px;
  background: #f8ecc6;
  margin-top: 5%;
  margin-bottom: 5%;
  position: relative;
  padding-bottom: ${(props) => (props.dontFavorites ? "50px" : "")};
  min-height: ${(props) => (props.dontFavorites ? "" : "100vh")};
  @media screen and (min-width: 1900px) {
    width: 80%;
  }

  @media screen and (max-width: 991px) {
    padding-bottom: ${(props) => (props.dontFavorites ? "0" : "")};
  }

  @media screen and (max-width: 767px) {
    border-radius: 30px;
  }

  @media screen and (max-width: 565px) {
    padding-bottom: 30px;
  }

  @media screen and (max-width: 375px) {
    background: transparent;
    padding-bottom: 10px;
  }
`;

export const CenterImage = styled.div<StyledComponentProps>`
  border-radius: 60px;
  position: absolute;
  width: 111%;
  left: -5.5%;
  background-color: #eedda4;
  height: 675px;
  margin: 0;
  transform: translate(0, -50%);
  top: ${(props) => (props.dontFavorites ? "58%" : "50%")};
  min-height: ${(props) => (props.dontFavorites ? "" : "100vh")};

  @media screen and (max-width: 991px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    border-radius: 30px;
    transform: none;
  }
`;

export const Title = styled.h1`
  background: #f8d15c;
  width: 610px;
  padding: 20px;
  margin: 50px;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);

  @media screen and (max-width: 767px) {
    margin: 30px;
  }
`;

export const ConteinerNoFavorites = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 50px;
  margin-top: 50px;
  width: 111%;
  left: -5.5%;
  background: url(${require("../../assets/imageBackground.png")});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 60px 60px 0;

  @media screen and (max-width: 767px) {
    padding: 30px;
    margin-top: 30px;
    border-radius: 0 30px 30px 0;
  }
`;

export const VideoFavorites = styled.img`
  border-radius: 999px;
  width: 50%;
  margin: 50px;
`;

export const CardContainer = styled.div<StyledComponentProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: ${(props) =>
    props.numberCards ? "space-between" : "center"};

  @media screen and (max-width: 1620px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 565px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
  border-radius: 20px 20px 0px 0px;
  margin: 50px 42px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 1200px) {
    width: 360px;
    height: 521px;
  }

  @media screen and (max-width: 991px) {
    width: 400px;
    height: 565px;
  }

  @media screen and (max-width: 767px) {
    width: 400px;
    height: 565px;
    padding: 0;
    margin: 30px;
    transition: none;
    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 576px) {
    width: 300px;
    height: 478px;
  }
`;

export const ContentHouses = styled(NavLink)`
  background: #f2ecd7;
  text-decoration: none;
  color: inherit;
  min-height: 219px;
  padding: 10px 0;
`;

export const TitleCard = styled.h3`
  text-align: center;
  line-height: 1.6;
`;

export const TitleAndLocalization = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

export const IconLocalization = styled.img`
  margin-right: 4.5px;
`;

export const Localization = styled.p`
  margin-left: 4.5px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;

export const Type = styled.p`
  padding-left: 20px;
`;

export const ImageCard = styled.img`
  width: 400px;
  height: 346px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  border-radius: 20px 20px 0px 0px;

  @media screen and (max-width: 1200px) {
    width: 360px;
    height: 304px;
  }

  @media screen and (max-width: 991px) {
    width: 400px;
    height: 346px;
  }

  @media screen and (max-width: 576px) {
    width: 300px;
    height: 259px;
  }

  @media screen and (max-width: 375px) {
    width: 280px;
    height: 239px;
  }
`;

export const HeartIcon = styled(FavoriteOutlinedIcon)`
  position: absolute;
  margin: 15px;
  left: 84%;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    color: #f8ecc6;
  }

  @media screen and (max-width: 767px) {
    transition: none;
    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 576px) {
    margin: 7px;
  }
`;

export const IconsContainer = styled.div<StyledComponentProps>`
  display: flex;
  width: 100%;
  text-align: center;
  padding: 0px 20px;
  align-items: center;

  ${(props) =>
    props.condition === 2
      ? css`
          justify-content: space-between;
        `
      : css`
          justify-content: center;
        `};
`;

export const ContainerTitleFavorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const TitleFavorites = styled.h1`
  background: #f8d15c;
  width: 422px;
  padding: 20px;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
  margin: 50px;
  @media screen and (max-width: 767px) {
    margin: 30px;
  }
`;
