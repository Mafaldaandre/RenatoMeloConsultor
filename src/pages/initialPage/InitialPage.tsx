import React, { useEffect, useState } from "react";
import {
  AboutConsultant,
  BackgroundInitialPage,
  ContainerContact,
  ContentInitialPage,
  ImageConsultant,
  LeftContent,
  MakeDream,
  Phone,
  ChosseMe,
  TextContentAbout,
  TextContentImage,
  Title,
  TitleSmall,
  ChosseMeSpan,
} from "./style";

export const InitialPage = () => {
  const renatoConsultor = require("../../assets/renatoConsultor.jpg");

  const [isActive, setIsActive] = useState<boolean>(false);
  const [background, setBackground] = useState<boolean>(true);
  const smallContainer = true;
  const [showFullTextObject, setShowFullTextObject] = useState<{
    [itemName: string]: boolean;
  }>({});

  const chooseMe = [
    {
      name: "Compromisso com o Cliente",
      content:
        "  Entendo que cada cliente é único, e minhas soluções são adaptadas às suas necessidades específicas. Estou comprometido em ouvir as suas prioridades e desejos, para que possamos trabalhar juntos na busca do que procura.",
    },
    {
      name: "Conhecimento do Mercado",
      content:
        "Tenho um profundo conhecimento do mercado. Posso fornecer informações sobre bairros, escolas, comércio local e muito mais para ajudá-lo a tomar decisões informadas.",
    },
    {
      name: "Negociação Habilidosa",
      content:
        "Sou um negociador experiente e sempre me esforço para obter o melhor negócio possível. Sua satisfação é o meu objetivo final.",
    },
    {
      name: "Assistência Completa",
      content:
        "Desde a pesquisa até a assinatura do contrato, estou ao seu lado em todas as etapas do processo. Respondo a todas as suas perguntas e asseguro que esteja bem informado.",
    },
    {
      name: "Honestidade e Ética",
      content:
        "A minha integridade é fundamental. A transparência e honestidade estão no centro do meu trabalho.",
    },
    {
      name: "Rede de Parceiros",
      content:
        "Trabalho com uma ampla rede de parceiros, incluindo consultores, advogados e empreiteiros, para garantir um processo leve e eficiente.",
    },
  ];

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

  const handleReadMoreClick = (itemName: string) => {
    // Atualiza apenas o estado correspondente ao item clicado
    setShowFullTextObject((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

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
        <div>
          {" "}
          <ContentInitialPage
            className={`contentInitalPage ${isActive ? "active" : ""}`}
          >
            <ImageConsultant
              src={renatoConsultor}
              alt="fotografia consultor Renato Melo"
            />

            <TextContentImage>
              <TitleSmall smallContainer={!smallContainer}>
                RENATO MELO - SEU PARCEIRO NO MUNDO IMOBILIÁRIO
              </TitleSmall>
              <ContainerContact smallContainer={!smallContainer}>
                {" "}
                <h2>Contacto</h2>
                <Phone>
                  <span>Telemóvel: </span>926 649 600
                </Phone>
                <p>
                  <span>Email: </span>renato.melo@imorriscas.pt
                </p>
              </ContainerContact>
              <AboutConsultant
                smallContainer={!smallContainer}
                className="aboutConsultant"
              >
                Olá, sou um agente imobiliário dedicado e minha paixão é ajudar
                pessoas a encontrar a casa dos seus sonhos. Comprometo-me em
                fornecer serviços excepcionais e orientação personalizada para
                atender às suas necessidades imobiliárias.
              </AboutConsultant>
              <TitleSmall smallContainer={!smallContainer}>
                Por que me escolher como seu agente imobiliário?
              </TitleSmall>
              <AboutConsultant smallContainer={!smallContainer}>
                <span>Compromisso com o Cliente: </span>
                <br></br>
                Entendo que cada cliente é único, e minhas soluções são
                adaptadas às suas necessidades específicas. Estou comprometido
                em ouvir as suas prioridades e desejos, para que possamos
                trabalhar juntos na busca do que procura.
              </AboutConsultant>
            </TextContentImage>
          </ContentInitialPage>
          <LeftContent
            className={`leftContent ${isActive ? "active" : ""}`}
            smallContainer={!smallContainer}
          >
            <AboutConsultant smallContainer={!smallContainer}>
              <span>Conhecimento do Mercado: </span>
              <br></br>Tenho um profundo conhecimento do mercado. Posso fornecer
              informações sobre bairros, escolas, comércio local e muito mais
              para ajudá-lo a tomar decisões informadas.
            </AboutConsultant>
            <AboutConsultant smallContainer={!smallContainer}>
              <span>Negociação Habilidosa: </span>
              <br></br>Sou um negociador experiente e sempre me esforço para
              obter o melhor negócio possível. Sua satisfação é o meu objetivo
              final.
            </AboutConsultant>
            <AboutConsultant smallContainer={!smallContainer}>
              <span> Assistência Completa: </span>
              <br></br>Desde a pesquisa até a assinatura do contrato, estou ao
              seu lado em todas as etapas do processo. Respondo a todas as suas
              perguntas e asseguro que esteja bem informado.
            </AboutConsultant>
            <AboutConsultant smallContainer={!smallContainer}>
              <span>Honestidade e Ética: </span> <br></br>A minha integridade é
              fundamental. A transparência e honestidade estão no centro do meu
              trabalho.
            </AboutConsultant>
            <AboutConsultant smallContainer={!smallContainer}>
              <span>Rede de Parceiros: </span>
              <br></br>Trabalho com uma ampla rede de parceiros, incluindo
              consultores, advogados e empreiteiros, para garantir um processo
              leve e eficiente.
            </AboutConsultant>
          </LeftContent>
        </div>
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
            <TitleSmall smallContainer={smallContainer}>
              RENATO MELO - SEU PARCEIRO NO MUNDO IMOBILIÁRIO
            </TitleSmall>
            <ContainerContact smallContainer={smallContainer}>
              {" "}
              <h2>Contacto</h2>
              <Phone>
                <span>Telemóvel: </span>926 649 600
              </Phone>
              <p>
                <span>Email: </span>renato.melo@imorriscas.pt
              </p>
            </ContainerContact>
            <AboutConsultant
              className="aboutConsultant"
              smallContainer={smallContainer}
            >
              Olá, sou um agente imobiliário dedicado e minha paixão é ajudar
              pessoas a encontrar a casa dos seus sonhos. Comprometo-me em
              fornecer serviços excepcionais e orientação personalizada para
              atender às suas necessidades imobiliárias.
            </AboutConsultant>
          </TextContentAbout>{" "}
          <TitleSmall smallContainer={smallContainer}>
            Por que me escolher como seu agente imobiliário?
          </TitleSmall>
          <LeftContent
            className={`leftContent ${isActive ? "active" : ""}`}
            smallContainer={smallContainer}
          >
            {chooseMe.map((choose) => (
              <div key={choose.name}>
                {" "}
                <ChosseMe onClick={() => handleReadMoreClick(choose.content)}>
                  <ChosseMeSpan>
                    {choose.name}{" "}
                    <span>
                      {showFullTextObject[choose.content] ? "-" : "+"}
                    </span>
                  </ChosseMeSpan>

                  {showFullTextObject[choose.content] && (
                    <AboutConsultant smallContainer={smallContainer}>
                      {choose.content}
                    </AboutConsultant>
                  )}
                </ChosseMe>
              </div>
            ))}{" "}
          </LeftContent>
        </div>
      )}{" "}
    </BackgroundInitialPage>
  );
};
