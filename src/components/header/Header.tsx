import { useState } from "react";
import {
  HeaderContainer,
  LogoVideo,
  MenuHamburger,
  MenuIcon,
  Navigation,
  Options,
} from "./style";

export const Header = () => {
  const logo = require("../../assets/logo.mp4");
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
        <LogoVideo autoPlay loop muted>
          <source src={logo} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </LogoVideo>
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
