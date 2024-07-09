import { useState } from "react";
import {
  ContainerMenu,
  HeaderContainer,
  Logo,
  MenuHamburger,
  MenuIcon,
  Navigation,
  Options,
  OptionsImage,
} from "./style";

export const Header = () => {
  // const logo = require("../../assets/Logo.png");
  const logo2 = require("../../assets/logo2.svg").default;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <ContainerMenu>
        {" "}
        <OptionsImage isOpen={menuOpen} to="/">
          <Logo src={logo2} alt="logo" />
        </OptionsImage>{" "}
        <MenuIcon onClick={toggleMenu}>
          {" "}
          <MenuHamburger isOpen={menuOpen} />
          <MenuHamburger isOpen={menuOpen} />
          <MenuHamburger isOpen={menuOpen} />
        </MenuIcon>
      </ContainerMenu>

      <Navigation isOpen={menuOpen}>
        <Options to="/services" onClick={closeMenu}>
          Serviços
        </Options>
        <Options to="/housing" onClick={closeMenu}>
          Imóveis
        </Options>
        <OptionsImage isOpen={menuOpen} to="/">
          <Logo src={logo2} alt="logo" />
        </OptionsImage>
        <Options to="/contactMe" onClick={closeMenu}>
          Contacta-me
        </Options>
        <Options to="/favorites" onClick={closeMenu}>
          Favoritos
        </Options>
      </Navigation>
    </HeaderContainer>
  );
};
