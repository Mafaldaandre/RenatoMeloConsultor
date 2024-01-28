import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
interface FallingImageProps {
  falling: boolean;
}

export const Background = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 60px;
  background: #f9edc7;
  margin-top: 5%;
  margin-bottom: 5%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px;
  @media screen and (max-width: 767px) {
    border-radius: 30px;
  }
`;

const fallFromTop = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ContainerErrorPage = styled.div<FallingImageProps>`
  animation: ${(props) => (props.falling ? fallFromTop : "none")} 1.5s ease-out;
  visibility: ${(props) => (props.falling ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: 215px;
  height: 60px;
  border-radius: 14px;

  background: #eee9e9;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 50px;
  cursor: pointer;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
