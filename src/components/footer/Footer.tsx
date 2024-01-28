import Facebook from "@mui/icons-material/Facebook";
import InsertLinkSharp from "@mui/icons-material/InsertLinkSharp";
import Instagram from "@mui/icons-material/Instagram";
import {
  FooterContainer,
  IconWithTransition,
  IconsFooter,
  ImageFooter,
  NavigationFooter,
  OptionsFooter,
} from "./style";

export const Footer = () => {
  const imo = require("../../assets/imobiliario.jpg");

  return (
    <FooterContainer>
      <ImageFooter src={imo} alt="Parte do logo, predios em preto" />
      <NavigationFooter>
        <OptionsFooter to="/">Quem Sou</OptionsFooter>
        <OptionsFooter to="/contactMe">Contacta-me</OptionsFooter>
        <OptionsFooter to="/services">Serviços</OptionsFooter>
        <OptionsFooter to="/favorites">Favoritos</OptionsFooter>
        <OptionsFooter to="/housing">Imóveis</OptionsFooter>
      </NavigationFooter>
      <IconsFooter>
        <IconWithTransition
          href="https://www.facebook.com/profile.php?id=61552064212594"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </IconWithTransition>
        <IconWithTransition
          href="https://linktr.ee/Renatomeloimorriscas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InsertLinkSharp fontSize="large" />
        </IconWithTransition>
        <IconWithTransition
          href="https://www.instagram.com/renatomelo_imorriscas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </IconWithTransition>
      </IconsFooter>
    </FooterContainer>
  );
};
