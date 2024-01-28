import React, { useEffect, useRef, useState } from "react";
import {
  BackgroundServices,
  ContainerServices,
  ContentServices,
  ContentServicesBackground,
  Video,
} from "./style";

export const Services: React.FC = () => {
  const marketAnalysis = require("../../assets/analiseMercado.mp4");
  const photography = require("../../assets/fotografia.mp4");
  const energyCertificate = require("../../assets/certificadoEnergetico.mp4");
  const bankcredit = require("../../assets/credito.mp4");

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

          if (isVisible) {
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
          visible={visibleDivs[0]}
        >
          <Video controls autoPlay playsInline loop muted>
            <source src={marketAnalysis} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </Video>
          <div>
            <h2>ANÁLISE DE MERCADO</h2>
            <h2>GRÁTIS</h2>
            <p>
              Estabelecer o preço correto ao listar uma propriedade no mercado é
              uma etapa fundamental. Irei realizar uma análise comparativa dos
              imóveis na região, levando em consideração tanto aqueles que foram
              vendidos quanto os que estão atualmente disponíveis para venda.
              Posteriormente, colaboraremos juntos para definir o valor ideal
              para iniciar a promoção, sem nenhum custo associado.
            </p>
          </div>
        </ContentServicesBackground>
        <ContentServices
          ref={(el) => (divRefs.current[1] = el)}
          visible={visibleDivs[1]}
        >
          <div>
            <h2>FOTOGRAFIA / VÍDEO</h2>
            <h2>GRÁTIS</h2>
            <p>
              Realizar uma reportagem fotográfica profissional ou vídeo, na
              promoção de um imóvel, é fundamental. Pretende-se que este se
              destaque dos demais e que seja valorizado.
            </p>
          </div>
          <Video controls autoPlay playsInline loop muted>
            <source src={photography} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </Video>
        </ContentServices>
        <ContentServicesBackground
          ref={(el) => (divRefs.current[2] = el)}
          visible={visibleDivs[2]}
        >
          <Video controls autoPlay playsInline loop muted>
            <source src={energyCertificate} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </Video>
          <div>
            <h2>CERTIFICAÇÃO ENERGÉTICA</h2>
            <h2>CUSTO VARIÁVEL</h2>
            <p>
              A obtenção do Certificado Energético é obrigatória e o seu custo
              varia de acordo com a tipologia e natureza do imóvel.
            </p>
          </div>
        </ContentServicesBackground>
        <ContentServices
          ref={(el) => (divRefs.current[3] = el)}
          visible={visibleDivs[3]}
        >
          <div>
            <h2>FINANCIAMENTO BANCÁRIO</h2>
            <h2>GRÁTIS</h2>
            <p>
              Descobrir a instituição bancária que oferece a melhor opção de
              financiamento pode ser desafiador. É por isso que colaboro com um
              gestor de intermediação de crédito. Após uma análise minuciosa das
              várias opções disponíveis, você poderá decidir qual banco se
              ajusta melhor ao seu perfil, sem incorrer em custos adicionais.
            </p>
          </div>
          <Video controls autoPlay playsInline loop muted>
            <source src={bankcredit} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </Video>
        </ContentServices>
      </ContainerServices>
    </BackgroundServices>
  );
};
