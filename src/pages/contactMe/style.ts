import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

interface InputContainerProps {
  isopen?: boolean;
  haserror?: boolean;
  hasfocus?: boolean;
}

export const BackgroundTanks = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 60px;
  background: #f9eac1;
  margin-top: 5%;
  margin-bottom: 5%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 767px) {
    border-radius: 30px;
  }

  @media screen and (max-width: 375px) {
    background: transparent;
  }
`;

export const Title = styled.h2`
  padding-top: 50px;
  text-align: center;
  @media screen and (max-width: 767px) {
    padding-top: 30px;
  }
`;
export const Background = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 60px;
  min-height: 100vh;
  background: #f9eac1;
  margin-top: 5%;
  margin-bottom: 5%;
  @media screen and (max-width: 767px) {
    border-radius: 30px;
  }
`;

export const Form = styled.form`
  padding-bottom: 50px;

  margin: 50px 0px;
  @media screen and (max-width: 767px) {
    padding-bottom: 30px;
    margin: 30px 0px;
  }
`;

export const CenterImage = styled.div`
  border-radius: 60px;
  position: relative;
  width: 111%;
  left: -5.5%;
  background-color: #ecd899;
  margin: 50px 0px;
  display: flex;
  justify-content: space-around;
  padding: 0 50px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0 28px;
  }

  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 767px) {
    margin: 30px 0px;

    border-radius: 30px;
  }
`;

const moveInCircle = keyframes`
 0% {
    transform: translateY(0) translateX(50px);
  }
  25% {
    transform: translateX(50px) translateY(50px);
  }
  50% {
    transform: translateY(50px) translateX(0);
  }  
  75% {
    transform: translateX(0px) translateY(0px);
  } 
   100% {
    transform: translateY(0px) translateX(50px);
  } 

`;

export const CenterImageTanks = styled.div`
  background: url(${require("../../assets/imageBackground.png")});
  border-radius: 60px;
  width: 111%;
  left: -5.5%;
  margin: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 50px;

  img {
    border-radius: 150px;
    animation: ${moveInCircle} 5s linear infinite;
  }
  @media screen and (max-width: 991px) {
    padding-right: 50px;

    img {
      width: 80%;
      border-radius: 60px;
    }
  }
  @media screen and (max-width: 767px) {
    border-radius: 30px;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const VideoContainer = styled.div`
  @media screen and (max-width: 991px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 30px;
  }
`;

export const Video = styled.video`
  pointer-events: none;
  &::-webkit-media-controls {
    display: none !important;
  }
  @media screen and (max-width: 991px) {
    width: 27%;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  position: relative;
  margin: 40px 0px;
  align-items: flex-start;
  flex-direction: column;
`;

export const Input = styled.input<InputContainerProps>`
  font-size: 18px;
  width: 100%;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  border: ${(props) => (props.hasfocus ? "2px solid #f1cb50" : "none")};
  background-color: ${(props) =>
    props.hasfocus ? "#ecd899" : " rgb(240 , 229, 215);"};
  height: 60px;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  border: ${(props) => (props.haserror ? "1px solid #d14d4d" : "")};
  &::placeholder {
    font-size: 18px;
    background-color: ${(props) => (props.hasfocus ? "#ecd899" : "")};
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: black;
    opacity: ${(props) => (props.hasfocus ? "0" : "1")};
  }

  &:hover {
    background-color: ${(props) =>
      props.hasfocus ? "rgb(240 , 229, 215)" : "#f9eac1"};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
  @media screen and (max-width: 991px) {
    font-size: 16px;
  }
`;

export const Label = styled.label<InputContainerProps>`
  position: absolute;
  top: -10%;
  left: 3%;
  font-size: 12px;
  transition: top 0.3s, font-size 0.3s;
  background-color: ${(props) => (props.hasfocus ? "#ecd899" : "")};
  padding: 0 20px;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  color: black;
  border: 1px solid #f1cb50;
  opacity: ${(props) => (props.hasfocus ? "1" : "0")};
  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  color: #d14d4d;

  padding-top: 10px;
  padding-left: 20px;
  margin-bottom: -20px;
`;

export const TextArea = styled.textarea<InputContainerProps>`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  width: 100%;
  border-radius: 14px;
  border: ${(props) => (props.hasfocus ? "2px solid #f1cb50" : "none")};
  background-color: ${(props) =>
    props.hasfocus ? "#ecd899" : " rgb(240, 229, 215);"};
  min-height: 60px;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  font-size: 18px;
  cursor: pointer;
  &::placeholder {
    font-size: 18px;
    background-color: ${(props) => (props.hasfocus ? "#ecd899" : "")};
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: black;
    opacity: ${(props) => (props.hasfocus ? "0" : "1")};
  }
  &:hover {
    background-color: ${(props) =>
      props.hasfocus ? "rgb(240 , 229, 215)" : "#f9eac1"};
  }
  @media screen and (max-width: 991px) {
    font-size: 16px;
  }
`;

export const ButtonOptions = styled.div<InputContainerProps>`
  display: flex;
  padding: 12px 8px 12px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  background: rgb(240, 229, 215);
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #f9eac1;
  }
  ${(props) =>
    props.isopen &&
    css`
      border-radius: 14px 14px 0px 0px;
    `}

  border: ${(props) => (props.haserror ? "1px solid #d14d4d" : "")};
  @media screen and (max-width: 991px) {
    font-size: 16px;
  }
`;

export const OptionsContainer = styled.ul<InputContainerProps>`
  position: absolute;
  left: 0;
  width: 100%;
  top: ${(props) => (props.haserror ? "78%" : "103%")};
  border: ${(props) => (props.haserror ? "1px solid #d14d4d" : "")};
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(240, 229, 215);
  z-index: 1;
`;

export const Options = styled.li`
  padding: 12px;
  height: 60px;
  padding-left: 3%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  list-style: none;
  text-align: left;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f9eac1;
  }
  @media screen and (max-width: 991px) {
    font-size: 16px;
  }
`;

export const ToSend = styled.button`
  width: 215px;
  height: 60px;
  border-radius: 14px;
  border: none;
  background: rgb(240, 229, 215);

  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  display: inline-block;
  margin: 10px 0px 50px 0px;
  cursor: pointer;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;

  &:hover {
    background-color: #f9eac1;
    border: 2px solid #f1cb50;
    transform: scale(1.02);
  }
  @media screen and (max-width: 991px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: 215px;
  height: 60px;
  border-radius: 14px;
  background-color: #ecd899;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 50px;
  cursor: pointer;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f9eac1;
    border: 2px solid #f1cb50;
    transform: scale(1.02);
  }
  @media screen and (max-width: 991px) {
    font-size: 16px;
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
