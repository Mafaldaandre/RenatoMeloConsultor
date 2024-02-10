import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface NavigationProps {
  isOpen?: boolean;
}

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  border-bottom: 2px solid #fff;
  background: #f7d15b;

  @media screen and (max-width: 800px) {
    height: 274px;
    justify-content: space-evenly;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  border: 4px solid black;

  @media screen and (max-width: 800px) {
    padding-bottom: 20px;
    border: none;
  }
`;

export const Navigation = styled.nav<NavigationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 767px) {
    gap: 35px;
  }

  @media screen and (max-width: 750px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
    border: 2px solid #f7d15b;
    position: absolute;
    height: 233px;
    top: 3%;
    background-color: #f7d15b;
    width: 85%;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10px;
  }
`;

export const Options = styled(NavLink)<NavigationProps>`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  text-decoration: none;
  color: black;

  font-size: 22px;
  font-family: "Istok Web", sans-serif;
  text-align: center;
  font-weight: 600;
  transition: transform 0.7s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    background-color: black;
    color: #f7d15b;
    padding: 10px;
    border-radius: 5px;
  }
  @media screen and (max-width: 767px) {
    transition: none;
    &:hover {
      color: black;
      transform: none;
    }
  }
`;

export const OptionsImage = styled(NavLink)<NavigationProps>`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  text-decoration: none;
`;

export const ContainerMenu = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
    cursor: pointer;
    box-shadow: 4px 5px 6px 0px rgba(145, 125, 65, 1);
    border: 2px solid #f7d15b;
    border-radius: 10px;
    z-index: 1;
    margin-bottom: 35px;
  }
`;

export const MenuHamburger = styled.div<NavigationProps>`
  width: 30px;
  height: 2px;
  background-color: black;
  margin: 10px 10px;
  transition: 0.4s;

  ${({ isOpen }) =>
    isOpen &&
    `transform: rotate(-45deg) translate(-11px, 12px);
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `}
`;
