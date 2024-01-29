import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 206px;
  width: 100%;
  border-top: 2px solid #fff;
  background: #f8d15c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  @media screen and (max-width: 767px) {
    height: 510px;
    width: 100%;
    border-top: 2px solid #fff;
    background: #f8d15c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 30px 0;
  }
  @media screen and (max-width: 350px) {
    height: 500px;
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  width: 90%;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ImageFooter = styled.img`
  width: 140px;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 40px;
  @media screen and (max-width: 991px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 767px) {
    width: 90px;
    height: 90px;
    margin: 30px;
  }
`;

export const NavigationFooter = styled.div`
  display: flex;
  width: 478px;
  gap: 12px 0px;
  flex-wrap: wrap;
  align-content: space-around;
  @media screen and (max-width: 767px) {
    width: 100%;
    gap: 7px 0px;
    align-items: center;
    padding-bottom: 10px;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const OptionsFooter = styled(NavLink)`
  text-decoration: none;
  color: #000;
  width: 194px;
  text-align: left;
  transition: transform 0.7s ease-in-out;
  font-size: 24px;
  font-family: "Istok Web", sans-serif;
  font-weight: 600;
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
    width: 100%;
    padding: 0;
    transition: none;
    text-align: center;
    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 577px) {
    font-size: 17px;
  }

  @media screen and (max-width: 350px) {
    font-size: 17px;
    width: 100%;
    text-align: center;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
  @media screen and (max-width: 1200px) {
    width: 15%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const IconsFooter = styled.div`
  display: flex;

  gap: 11px;

  @media screen and (max-width: 767px) {
    position: inherit;

    margin-right: 0;
  }

  @media screen and (max-width: 350px) {
    padding: 20px;
  }
`;

export const Imorriscas = styled.img`
  width: 120px;
  height: 120px;

  @media screen and (max-width: 991px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 767px) {
    width: 70px;
    height: 70px;
    margin: 30px;
  }
`;

export const IconWithTransition = styled.a`
  transition: transform 0.7s ease-in-out;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
    color: white;
  }

  @media screen and (max-width: 767px) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;
