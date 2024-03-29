import styled, { css } from "styled-components";

interface ContentProps {
  visible?: boolean; // Torna a propriedade opcional
}

export const BackgroundServices = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 60px;
  background: #f8ecc6;
  margin-top: 5%;
  margin-bottom: 5%;

  @media screen and (max-width: 767px) {
    border-radius: 30px;
  }

  @media screen and (max-width: 375px) {
    background: transparent;
  }
`;

export const ContainerServices = styled.div`
  padding: 50px 0;

  @media screen and (max-width: 767px) {
    padding: 30px 0;
  }
`;

export const Image = styled.img`
  width: 451px;
  height: 349px;
  pointer-events: none;
  margin: 50px;

  @media screen and (max-width: 1200px) {
    margin: 50px 0;
  }
  @media screen and (max-width: 576px) {
    width: 296px;
    height: 229px;
  }
`;

export const ContentServicesBackground = styled.div<ContentProps>`
  border-radius: 60px;
  display: flex;
  align-items: center;
  width: 106%;
  left: -3%;
  position: relative;
  background-color: #eedda4;
  height: 100%;
  padding: 50px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
    `}

  @media screen and (max-width: 991px) {
    flex-direction: column;
    padding: 50px;
    width: 110%;
    left: -5%;
  }
  @media screen and (max-width: 767px) {
    border-radius: 30px;
    padding: 30px 50px;
  }
`;

export const ContentServices = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  padding: 50px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
    `}

  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`;

export const ContainerTitle = styled.div`
  background: #f8d15c;
  width: 386px;
  padding: 15px;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
