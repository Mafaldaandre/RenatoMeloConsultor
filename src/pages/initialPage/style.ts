import styled from "styled-components";

export const BackgroundInitialPage = styled.div`
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

export const MakeDream = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 0.5s;
  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  max-width: 100%;
  padding: 50px 163px;

  @media screen and (max-width: 1200px) {
    padding: 50px;
  }

  @media screen and (max-width: 991px) {
    padding: 50px;
  }

  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`;

export const LeftContent = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 1.5s;
  padding: 0 50px 50px 50px;
  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (max-width: 767px) {
    padding: 0 30px 30px 30px;
  }
`;

export const ImageConsultant = styled.img`
  width: 341.203px;
  height: 460px;
  flex-shrink: 0;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition-delay: 1s;

  @media screen and (max-width: 991px) {
    width: 300px;
    height: 404px;
    object-fit: cover;
  }

  @media screen and (max-width: 576px) {
    width: 250px;
    height: 337px;
  }
`;

export const TextContentImage = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
`;

export const TextContentAbout = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  padding: 20px 50px 0 50px;

  @media screen and (max-width: 767px) {
    padding: 20px 30px 0 30px;
  }
`;

export const TextContent = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 1.5s;
  padding: 0 50px 50px 50px;

  @media screen and (max-width: 767px) {
    padding: 0 30px 50px 30px;
  }
`;

export const ContentInitialPage = styled.div`
  border-radius: 60px;
  display: flex;
  width: 111%;
  left: -5.5%;
  position: relative;
  background-color: #eedda4;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 2.5s;
  align-items: center;
  height: 100%;
  padding: 50px;
  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    border-radius: 30px;
  }
`;

export const TitleSmall = styled.h4`
  color: #000;
  &.showMe {
    padding: 10px 0;
  }
`;

export const AboutConsultant = styled.p`
  padding: 10px 0;
  &.aboutConsultant {
  }
`;

export const Span = styled.span`
  padding: 10px 0;
`;
