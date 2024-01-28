import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface NavigationProps {
  isOpen: boolean;
}

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid #fff;
  background: #f7d15b;

  @media screen and (max-width: 767px) {
    height: 212px;
  }

  @media screen and (max-width: 577px) {
    height: 274px;
    justify-content: space-evenly;
  }
`;

export const LogoImage = styled.img`
  width: 181px;
  height: 181px;
  pointer-events: none;
  &::-webkit-media-controls {
    display: none !important;
  }

  @media screen and (max-width: 991px) {
    width: 160px;
    height: 160px;
  }

  @media screen and (max-width: 767px) {
    width: 130px;
    height: 130px;
  }
`;

// export const LogoVideo = styled.video`
//   width: 181px;
//   height: 181px;
//   pointer-events: none;
//   &::-webkit-media-controls {
//     display: none !important;
//   }

//   @media screen and (max-width: 991px) {
//     width: 160px;
//     height: 160px;
//   }

//   @media screen and (max-width: 767px) {
//     width: 130px;
//     height: 130px;
//   }
// `;

export const Navigation = styled.nav<NavigationProps>`
  display: flex;
  width: 969px;
  height: 49px;
  justify-content: center;
  align-items: flex-start;
  gap: 80px;
  flex-shrink: 0;

  @media screen and (max-width: 991px) {
    width: 646px;
  }

  @media screen and (max-width: 767px) {
    width: 541px;
    gap: 45px;
  }

  @media screen and (max-width: 577px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
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

export const Options = styled(NavLink)`
  text-decoration: none;
  color: black;
  color: #000;
  font-size: 24px;
  font-family: "Istok Web", sans-serif;
  text-align: center;
  font-weight: 600;
  transition: transform 0.7s ease-in-out;
  &:hover {
    color: white;
    transform: scale(1.05);
  }
  &.active {
    color: white;
  }

  @media screen and (max-width: 991px) {
    font-size: 22px;
  }

  @media screen and (max-width: 767px) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 576px) {
    display: block;
    cursor: pointer;
    box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 2px solid #f7d15b;
    border-radius: 10px;
    z-index: 1;
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
