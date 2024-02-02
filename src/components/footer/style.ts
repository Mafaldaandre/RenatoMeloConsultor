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
  padding: 0 75px;

  @media screen and (min-width: 1900px) {
    padding: 0 150px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 50px;
  }

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
  gap: 25px 0px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    gap: 12px 0px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    gap: 10px 0px;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const OptionsFooter = styled(NavLink)`
  text-decoration: none;
  color: black;
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
    width: 155px;
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

export const ContainerRightFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const IconsFooter = styled.div`
  display: flex;

  gap: 22px;

  @media screen and (max-width: 767px) {
    position: inherit;

    margin-right: 0;
  }

  @media screen and (max-width: 350px) {
    padding: 20px;
  }
`;

export const Imorriscas = styled.img`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 991px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 767px) {
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
