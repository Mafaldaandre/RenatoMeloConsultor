import { useState } from "react";
import {
  HeaderContainer,
  Logo,
  MenuHamburger,
  MenuIcon,
  Navigation,
  Options,
} from "./style";

export const Header = () => {
  const logo = require("../../assets/logo.gif");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Options to="/" className="active">
        <Logo src={logo} alt="logo" />
      </Options>

      <MenuIcon onClick={toggleMenu}>
        <MenuHamburger isOpen={menuOpen} />
        <MenuHamburger isOpen={menuOpen} />
        <MenuHamburger isOpen={menuOpen} />
      </MenuIcon>

      <Navigation isOpen={menuOpen}>
        <Options to="/services" onClick={closeMenu}>
          Serviços
        </Options>
        <Options to="/housing" onClick={closeMenu}>
          Imóveis
        </Options>
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
