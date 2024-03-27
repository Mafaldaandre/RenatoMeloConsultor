import styled from "styled-components";
interface PropsSmallContainer {
  smallContainer?: boolean;
}

export const BackgroundInitialPage = styled.div`
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
  color: black;
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

export const LeftContent = styled.div<PropsSmallContainer>`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 1.5s;
  padding: ${(props) =>
    props.smallContainer ? "30px 50px 50px 50px" : "0 50px 50px 50px;"};

  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.smallContainer ? "space-around" : "")};
  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (max-width: 767px) {
    padding: 0 30px 30px 30px;
  }
`;

export const ChosseMeSpan = styled.span`
  background: #f8d15c;
  width: 284px;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  padding: 0 20px;
  span {
    font-size: 26px;
    font-weight: normal;
  }
`;

export const ChosseMe = styled.button`
  border: none;
  width: 284px;
  min-height: 50px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
`;

export const ImageConsultant = styled.img`
  width: 341.203px;
  height: 460px;
  flex-shrink: 0;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
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
  align-items: center;

  padding: 50px;

  @media screen and (max-width: 767px) {
    padding: 30px;
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

export const TitleSmall = styled.h4<PropsSmallContainer>`
  color: black;
  text-align: ${(props) => (props.smallContainer ? "center" : "")};
  padding-left: ${(props) => (props.smallContainer ? "" : "20px")};
  &.showMe {
    padding: 10px 0;
  }
`;

export const ContainerContact = styled.div<PropsSmallContainer>`
  background: #f8d15c;
  width: 284px;
  padding: 20px;
  box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
  margin: ${(props) => (props.smallContainer ? " 50px" : "20px")};
  @media screen and (max-width: 767px) {
    margin: 30px;
  }

  @media screen and (max-width: 576px) {
    width: 254px;
  }
`;

export const Phone = styled.p`
  padding: 5px 0;
  text-decoration: none;
`;

export const AboutConsultant = styled.p<PropsSmallContainer>`
  background-color: ${(props) => (props.smallContainer ? " #f9e093a3;" : "")};
  padding: 20px;
`;

export const Span = styled.span`
  padding: 10px 0;
`;
