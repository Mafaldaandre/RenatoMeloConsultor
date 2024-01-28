import React, { useEffect, useState } from "react";
import { Background, ContainerErrorPage, Link } from "./style";

export const ErrorPage = () => {
  const error = require("../../assets/404.png");
  const [falling, setFalling] = useState(false);

  useEffect(() => {
    // Ativar a animação após um pequeno atraso para dar tempo para o componente ser renderizado
    const timeoutId = setTimeout(() => {
      setFalling(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Background>
      <ContainerErrorPage falling={falling}>
        <img src={error} alt="Página não encontrada" />
        <Link to="/">Vamos voltar?</Link>
      </ContainerErrorPage>
    </Background>
  );
};
