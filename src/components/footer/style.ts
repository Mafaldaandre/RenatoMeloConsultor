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

  @media screen and (max-width: 767px) {
    height: 322px;
    width: 100%;
    border-top: 2px solid #fff;
    background: #f8d15c;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 350px) {
    height: 380px;
  }
`;

export const ImageFooter = styled.img`
  width: 140px;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px 48px 0px 39px;

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

  @media screen and (max-width: 767px) {
    width: 352px;
    gap: 7px 0px;
    align-items: center;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 350px) {
    width: 315px;
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
    width: 174px;
    padding: 0 20px;
    transition: none;
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

export const IconsFooter = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 11px;
  right: 0;
  position: absolute;
  margin-right: 38px;

  @media screen and (max-width: 767px) {
    position: inherit;
    padding-top: 10px;
    margin-right: 0;
  }

  @media screen and (max-width: 350px) {
    padding: 20px;
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
