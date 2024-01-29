import Facebook from "@mui/icons-material/Facebook";
import InsertLinkSharp from "@mui/icons-material/InsertLinkSharp";
import Instagram from "@mui/icons-material/Instagram";
import {
  ContainerIcons,
  ContainerOptions,
  ContainerRightFooter,
  FooterContainer,
  IconWithTransition,
  IconsFooter,
  ImageFooter,
  Imorriscas,
  NavigationFooter,
  OptionsFooter,
} from "./style";

export const Footer = () => {
  const imo = require("../../assets/imobiliario.jpg");
  const imorriscas = require("../../assets/logoImorriscas.png");

  return (
    <FooterContainer>
      <ContainerOptions>
        <ImageFooter src={imo} alt="Parte do logo, predios em preto" />
        <NavigationFooter>
          <OptionsFooter to="/">Quem Sou</OptionsFooter>
          <OptionsFooter to="/contactMe">Contacta-me</OptionsFooter>
          <OptionsFooter to="/services">Serviços</OptionsFooter>
          <OptionsFooter to="/favorites">Favoritos</OptionsFooter>
          <OptionsFooter to="/housing">Imóveis</OptionsFooter>
        </NavigationFooter>
      </ContainerOptions>
      <ContainerIcons>
        {" "}
        <ContainerRightFooter>
          <Imorriscas src={imorriscas} alt="Logo imorriscas" />

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
        </ContainerRightFooter>
      </ContainerIcons>
    </FooterContainer>
  );
};
