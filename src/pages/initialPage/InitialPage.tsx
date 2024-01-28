import React, { useEffect, useState } from "react";
import {
  AboutConsultant,
  BackgroundInitialPage,
  ContentInitialPage,
  ImageConsultant,
  LeftContent,
  MakeDream,
  TextContentAbout,
  TextContentImage,
  Title,
  TitleSmall,
} from "./style";

export const InitialPage = () => {
  const renatoConsultor = require("../../assets/renatoConsultor.jpg");

  const [isActive, setIsActive] = useState<boolean>(false);
  const [background, setBackground] = useState<boolean>(true);

  useEffect(() => {
    setIsActive(true);
    const size = () => {
      // Verificar o tamanho da tela e atualizar a condição
      const condicion = window.innerWidth <= 1200;
      setBackground(condicion);
    };

    // Adicionar um ouvinte de redimensionamento para verificar quando o tamanho da tela muda
    window.addEventListener("resize", size);

    size();

    // Remover o ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <BackgroundInitialPage>
      <MakeDream className={`makeDream ${isActive ? "active" : ""}`}>
        <Title>
          Ser consultor imobiliário é mais do que vender, assinar contratos ou
          fazer negócios. É transformar sonhos em realidade. Vamos realizar o
          seu sonho?
        </Title>
      </MakeDream>
      {!background ? (
        <ContentInitialPage
          className={`contentInitalPage ${isActive ? "active" : ""}`}
        >
          <ImageConsultant
            src={renatoConsultor}
            alt="fotografia consultor Renato Melo"
          />

          <TextContentImage>
            <TitleSmall>
              RENATO MELO - SEU PARCEIRO NO MUNDO IMOBILIÁRIO
            </TitleSmall>
            <AboutConsultant className="aboutConsultant">
              Olá, sou um agente imobiliário dedicado e minha paixão é ajudar
              pessoas a encontrar a casa dos seus sonhos. Comprometo-me em
              fornecer serviços excepcionais e orientação personalizada para
              atender às suas necessidades imobiliárias.
            </AboutConsultant>
            <TitleSmall>
              Por que me escolher como seu agente imobiliário?
            </TitleSmall>
            <AboutConsultant>
              <span>Compromisso com o Cliente: </span> Entendo que cada cliente
              é único, e minhas soluções são adaptadas às suas necessidades
              específicas. Estou comprometido em ouvir as suas prioridades e
              desejos, para que possamos trabalhar juntos na busca do que
              procura.
            </AboutConsultant>
            <AboutConsultant>
              <span>Conhecimento do Mercado: </span>Tenho um profundo
              conhecimento do mercado. Posso fornecer informações sobre bairros,
              escolas, comércio local e muito mais para ajudá-lo a tomar
              decisões informadas.
            </AboutConsultant>
            <AboutConsultant>
              <span>Negociação Habilidosa: </span>Sou um negociador experiente e
              sempre me esforço para obter o melhor negócio possível. Sua
              satisfação é o meu objetivo final. Assistência Completa: Desde a
              pesquisa até a assinatura do contrato, estou ao seu lado em todas
              as etapas do processo. Respondo a todas as suas perguntas e
              asseguro que esteja bem informado.
            </AboutConsultant>
          </TextContentImage>
        </ContentInitialPage>
      ) : (
        <div>
          <ContentInitialPage
            className={`contentInitalPage ${isActive ? "active" : ""}`}
          >
            <ImageConsultant
              src={renatoConsultor}
              alt="fotografia consultor Renato Melo"
            />
          </ContentInitialPage>
          <TextContentAbout>
            <TitleSmall>
              RENATO MELO - SEU PARCEIRO NO MUNDO IMOBILIÁRIO
            </TitleSmall>
            <AboutConsultant className="aboutConsultant">
              Olá, sou um agente imobiliário dedicado e minha paixão é ajudar
              pessoas a encontrar a casa dos seus sonhos. Comprometo-me em
              fornecer serviços excepcionais e orientação personalizada para
              atender às suas necessidades imobiliárias.
            </AboutConsultant>
            <TitleSmall>
              Por que me escolher como seu agente imobiliário?
            </TitleSmall>
            <AboutConsultant>
              <span>Compromisso com o Cliente: </span> Entendo que cada cliente
              é único, e minhas soluções são adaptadas às suas necessidades
              específicas. Estou comprometido em ouvir as suas prioridades e
              desejos, para que possamos trabalhar juntos na busca do que
              procura.
            </AboutConsultant>
            <AboutConsultant>
              <span>Conhecimento do Mercado: </span>Tenho um profundo
              conhecimento do mercado. Posso fornecer informações sobre bairros,
              escolas, comércio local e muito mais para ajudá-lo a tomar
              decisões informadas.
            </AboutConsultant>
            <AboutConsultant>
              <span>Negociação Habilidosa: </span>Sou um negociador experiente e
              sempre me esforço para obter o melhor negócio possível. Sua
              satisfação é o meu objetivo final.
            </AboutConsultant>
          </TextContentAbout>
        </div>
      )}

      <LeftContent className={`leftContent ${isActive ? "active" : ""}`}>
        <AboutConsultant>
          <span> Assistência Completa: </span>Desde a pesquisa até a assinatura
          do contrato, estou ao seu lado em todas as etapas do processo.
          Respondo a todas as suas perguntas e asseguro que esteja bem
          informado.
        </AboutConsultant>
        <AboutConsultant>
          <span>Honestidade e Ética: </span> A minha integridade é fundamental.
          A transparência e honestidade estão no centro do meu trabalho.
        </AboutConsultant>
        <AboutConsultant>
          <span>Rede de Parceiros: </span>Trabalho com uma ampla rede de
          parceiros, incluindo consultores, advogados e empreiteiros, para
          garantir um processo leve e eficiente.
        </AboutConsultant>
        <AboutConsultant>
          Se procura uma experiência imobiliária confiável e focada nos seus
          interesses, entre em contato comigo para o número 926 649 600 ou para
          o email renato.melo@imorriscas.pt. Adoraria ser seu guia no
          emocionante mundo do mercado imobiliário.
        </AboutConsultant>
      </LeftContent>
    </BackgroundInitialPage>
  );
};
