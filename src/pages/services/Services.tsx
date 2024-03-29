import React, { useEffect, useRef, useState } from "react";
import {
  BackgroundServices,
  Container,
  ContainerServices,
  ContainerTitle,
  ContentServices,
  ContentServicesBackground,
  Image,
} from "./style";

export const Services: React.FC = () => {
  const marketAnalysis = require("../../assets/analiseMercado.gif");
  const photography = require("../../assets/fotografia.gif");
  const energyCertificate = require("../../assets/certificadoEnergetico.gif");
  const bankcredit = require("../../assets/credito.gif");

  const divRefs = useRef<Array<HTMLDivElement | null>>([
    null,
    null,
    null,
    null,
  ]);
  const [visibleDivs, setVisibleDivs] = useState([false, false, false, false]);

  useEffect(() => {
    const checkVisibility = () => {
      divRefs.current.forEach((divRef, index) => {
        if (divRef) {
          const rect = divRef.getBoundingClientRect();
          const isVisible =
            rect.top <= window.innerHeight - 500 && rect.bottom >= 0;

          if (isVisible && index !== 0) {
            // Ignora a primeira div (index 0)
            setVisibleDivs((prev) =>
              prev.map((_, i) => (i === index ? true : _))
            );
          }
        }
      });
    };

    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener("scroll", handleScroll);
    checkVisibility(); // Verifica visibilidade no carregamento da página
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [divRefs]);

  return (
    <BackgroundServices>
      <ContainerServices>
        {" "}
        <ContentServicesBackground
          ref={(el) => (divRefs.current[0] = el)}
          visible={true}
        >
          <Image src={marketAnalysis} alt="Análise de Mercado" />
          <Container>
            <ContainerTitle>
              <h2>ANÁLISE DE MERCADO</h2>
              <h2>GRÁTIS</h2>
            </ContainerTitle>

            <p>
              Estabelecer o preço correto ao listar uma propriedade no mercado é
              uma etapa fundamental. Irei realizar uma análise comparativa dos
              imóveis na região, levando em consideração tanto aqueles que foram
              vendidos quanto os que estão atualmente disponíveis para venda.
              Posteriormente, colaboraremos juntos para definir o valor ideal
              para iniciar a promoção, sem nenhum custo associado.
            </p>
          </Container>
        </ContentServicesBackground>
        <ContentServices
          ref={(el) => (divRefs.current[1] = el)}
          visible={visibleDivs[1]}
        >
          <Container>
            <ContainerTitle>
              {" "}
              <h2>FOTOGRAFIA / VÍDEO</h2>
              <h2>GRÁTIS</h2>
            </ContainerTitle>

            <p>
              Realizar uma reportagem fotográfica profissional ou vídeo, na
              promoção de um imóvel, é fundamental. Pretende-se que este se
              destaque dos demais e que seja valorizado.
            </p>
          </Container>

          <Image src={photography} alt="Fotografia/Video" />
        </ContentServices>
        <ContentServicesBackground
          ref={(el) => (divRefs.current[2] = el)}
          visible={visibleDivs[2]}
        >
          <Image src={energyCertificate} alt="Certificado Energético" />
          <Container>
            <ContainerTitle>
              {" "}
              <h2>CERTIFICAÇÃO ENERGÉTICA</h2>
              <h2>CUSTO VARIÁVEL</h2>
            </ContainerTitle>

            <p>
              A obtenção do Certificado Energético é obrigatória e o seu custo
              varia de acordo com a tipologia e natureza do imóvel.
            </p>
          </Container>
        </ContentServicesBackground>
        <ContentServices
          ref={(el) => (divRefs.current[3] = el)}
          visible={visibleDivs[3]}
        >
          <Container>
            <ContainerTitle>
              {" "}
              <h2>FINANCIAMENTO BANCÁRIO</h2>
              <h2>GRÁTIS</h2>
            </ContainerTitle>

            <p>
              Descobrir a instituição bancária que oferece a melhor opção de
              financiamento pode ser desafiador. É por isso que colaboro com um
              gestor de intermediação de crédito. Após uma análise minuciosa das
              várias opções disponíveis, você poderá decidir qual banco se
              ajusta melhor ao seu perfil, sem incorrer em custos adicionais.
            </p>
          </Container>

          <Image src={bankcredit} alt="Crédito Bancário" />
        </ContentServices>
      </ContainerServices>
    </BackgroundServices>
  );
};
