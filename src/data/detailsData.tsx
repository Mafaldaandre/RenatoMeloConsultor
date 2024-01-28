interface Division {
  id: number;
  title?: string;
  count?: number | null | string;
  icon: string;
}

interface Image {
  id: number;
  image: string;
  orientation?: "horizontal" | "vertical";
}

export interface Details {
  id: number;
  title: string;
  images: Image[];
  refNumber: string;
  localization: string;
  type: string;
  price: string;
  numberDivisions: Division[];
  description: string;
}

export const Details: Details[] = [
  {
    id: 1,
    title: "Moradia T3+1, Bairro da Courelas, Santa Iria de Azóia",
    images: [
      {
        id: 1,
        image: require("../assets/moradiaCourelas1.jpg"),
        orientation: "horizontal",
      },
      {
        id: 2,
        image: require("../assets/moradiaCourelas2.jpg"),
        orientation: "horizontal",
      },
      {
        id: 3,
        image: require("../assets/moradiaCourelas3.jpg"),
        orientation: "horizontal",
      },
      {
        id: 4,
        image: require("../assets/moradiaCourelas4.jpg"),
        orientation: "horizontal",
      },
      {
        id: 5,
        image: require("../assets/moradiaCourelas5.jpg"),
        orientation: "vertical",
      },
      {
        id: 6,
        image: require("../assets/moradiaCourelas6.jpg"),
        orientation: "vertical",
      },
      {
        id: 7,
        image: require("../assets/moradiaCourelas7.jpg"),
        orientation: "horizontal",
      },
      {
        id: 8,
        image: require("../assets/moradiaCourelas8.jpg"),
        orientation: "horizontal",
      },
      {
        id: 9,
        image: require("../assets/moradiaCourelas9.jpg"),
        orientation: "horizontal",
      },
      {
        id: 10,
        image: require("../assets/moradiaCourelas10.jpg"),
        orientation: "horizontal",
      },
      {
        id: 11,
        image: require("../assets/moradiaCourelas11.jpg"),
        orientation: "vertical",
      },
      {
        id: 12,
        image: require("../assets/moradiaCourelas12.jpg"),
        orientation: "horizontal",
      },
      {
        id: 13,
        image: require("../assets/moradiaCourelas13.jpg"),
        orientation: "horizontal",
      },
      {
        id: 14,
        image: require("../assets/moradiaCourelas14.jpg"),
        orientation: "horizontal",
      },
      {
        id: 15,
        image: require("../assets/moradiaCourelas15.jpg"),
        orientation: "horizontal",
      },
      {
        id: 16,
        image: require("../assets/moradiaCourelas16.jpg"),
        orientation: "horizontal",
      },
      {
        id: 17,
        image: require("../assets/moradiaCourelas17.jpg"),
        orientation: "horizontal",
      },
      {
        id: 19,
        image: require("../assets/moradiaCourelas19.jpg"),
        orientation: "horizontal",
      },
      {
        id: 20,
        image: require("../assets/moradiaCourelas20.jpg"),
        orientation: "horizontal",
      },
      {
        id: 21,
        image: require("../assets/moradiaCourelas21.jpg"),
        orientation: "horizontal",
      },
      {
        id: 22,
        image: require("../assets/moradiaCourelas22.jpg"),
        orientation: "horizontal",
      },
      {
        id: 23,
        image: require("../assets/moradiaCourelas23.jpg"),
        orientation: "horizontal",
      },
      {
        id: 24,
        image: require("../assets/moradiaCourelas24.jpg"),
        orientation: "horizontal",
      },
      {
        id: 25,
        image: require("../assets/moradiaCourelas25.jpg"),
        orientation: "horizontal",
      },
      {
        id: 26,
        image: require("../assets/moradiaCourelas26.jpg"),
        orientation: "horizontal",
      },
      {
        id: 27,
        image: require("../assets/moradiaCourelas27.jpg"),
        orientation: "vertical",
      },
      {
        id: 28,
        image: require("../assets/moradiaCourelas28.jpg"),
        orientation: "horizontal",
      },
      {
        id: 29,
        image: require("../assets/moradiaCourelas29.jpg"),
        orientation: "horizontal",
      },
      {
        id: 30,
        image: require("../assets/moradiaCourelas30.jpg"),
        orientation: "horizontal",
      },
      {
        id: 31,
        image: require("../assets/moradiaCourelas31.jpg"),
        orientation: "horizontal",
      },
      {
        id: 32,
        image: require("../assets/moradiaCourelas32.jpg"),
        orientation: "horizontal",
      },
      {
        id: 33,
        image: require("../assets/moradiaCourelas33.jpg"),
        orientation: "horizontal",
      },
      {
        id: 34,
        image: require("../assets/moradiaCourelas34.jpg"),
        orientation: "horizontal",
      },
      {
        id: 35,
        image: require("../assets/moradiaCourelas35.jpg"),
        orientation: "vertical",
      },
      {
        id: 36,
        image: require("../assets/moradiaCourelas36.jpg"),
        orientation: "horizontal",
      },
      {
        id: 37,
        image: require("../assets/moradiaCourelas37.jpg"),
        orientation: "horizontal",
      },
      {
        id: 38,
        image: require("../assets/moradiaCourelas38.jpg"),
        orientation: "horizontal",
      },
      {
        id: 39,
        image: require("../assets/moradiaCourelas39.jpg"),
        orientation: "horizontal",
      },
      {
        id: 40,
        image: require("../assets/moradiaCourelas40.jpg"),
        orientation: "horizontal",
      },
      {
        id: 41,
        image: require("../assets/moradiaCourelas41.jpg"),
        orientation: "horizontal",
      },
      {
        id: 42,
        image: require("../assets/moradiaCourelas42.jpg"),
        orientation: "horizontal",
      },
      {
        id: 43,
        image: require("../assets/moradiaCourelas43.jpg"),
        orientation: "horizontal",
      },
      {
        id: 44,
        image: require("../assets/moradiaCourelas44.jpg"),
        orientation: "horizontal",
      },
      {
        id: 45,
        image: require("../assets/moradiaCourelas45.jpg"),
        orientation: "horizontal",
      },
      {
        id: 46,
        image: require("../assets/moradiaCourelas46.jpg"),
        orientation: "vertical",
      },
      {
        id: 47,
        image: require("../assets/moradiaCourelas47.jpg"),
        orientation: "vertical",
      },
      {
        id: 48,
        image: require("../assets/moradiaCourelas48.jpg"),
        orientation: "vertical",
      },
      {
        id: 49,
        image: require("../assets/moradiaCourelas49.jpg"),
        orientation: "vertical",
      },
      {
        id: 50,
        image: require("../assets/moradiaCourelas50.jpg"),
        orientation: "horizontal",
      },
      {
        id: 51,
        image: require("../assets/moradiaCourelas51.jpg"),
        orientation: "horizontal",
      },
      {
        id: 52,
        image: require("../assets/moradiaCourelas52.jpg"),
        orientation: "horizontal",
      },
      {
        id: 53,
        image: require("../assets/moradiaCourelas53.jpg"),
        orientation: "horizontal",
      },
      {
        id: 54,
        image: require("../assets/moradiaCourelas54.jpg"),
        orientation: "horizontal",
      },
      {
        id: 55,
        image: require("../assets/moradiaCourelas55.jpg"),
        orientation: "horizontal",
      },
      {
        id: 56,
        image: require("../assets/moradiaCourelas56.jpg"),
        orientation: "horizontal",
      },
    ],
    refNumber: "REF. PTF2022-892",
    localization: "Loures > Santa Iria de Azoia, São João da Talha e Bobadela",
    type: "VENDA",
    price: "695 000 €",
    numberDivisions: [
      {
        id: 1,
        title: "Casas de Banho",
        count: 4,
        icon: require("../assets/bathRoom.png"),
      },
      {
        id: 2,
        count: 4,
        title: "Quartos",
        icon: require("../assets/icon-bed.png"),
      },
      {
        id: 3,
        title: "Garagem",
        count: 1,
        icon: require("../assets/garage.png"),
      },
      {
        id: 4,
        count: 227 + " m²",
        icon: require("../assets/area.png"),
      },
    ],
    description:
      "<h2>Descrição do imóvel</h2><br><p>Moradia T3+1, situada em Santa Iria de Azóia, no Bairro das Courelas, junto ao novo posto médico. Rodeada de comércio, sem necessitar de usufruir do seu veículo, com excelentes acessos à A1 e ic2.</p><p>Com uma arquitetura moderna, onde se privilegia a utilização de materiais, que se refletem numa obra com acabamentos de excelência, que lhe conferem uma qualidade superior.<p>Possui espaços amplos e grandes janelas que permitem ter uma maior luminosidade dentro da casa.</p><p>Esta moradia é composta por 3 pisos, e um magnífico Rooftop com vista rio.</p><br><h3>CAVE:</h3><p>2 Lugares de estacionamento, mais parqueamento;</p><p>Zona de máquinas;</p><p>Espaço com 13,30m2, como sugestão poderá fazer um possível ginásio;</p><p>Espaço com 13.67m2, como sugestão poderá fazer um Home Cinema;</p><p>Garrafeira com 2,40m2.</p><h3><br>R/C:</h3><p>Hall/Circulação com 13,28m2;</p><p>Sala com 38,19m2;</p><p>Cozinha com 19,26m2;</p><p>Wc social com 3,38m2;</p><p>Escritório com 13,63m2, com roupeiro embutido.</p><br><h3>1º ANDAR:</h3><p>Hall de circulação com 15,06m2;</p><p>Master Suite com 17,35m2, com closet de 7,44m2 e casa de banho com 6m2;</p><p>Suite com 16,13m2 com roupeiro embutido e wc com 3,34m2;</p><p>Suite com 16,02m2 com roupeiro embutido e wc com 3,38m2.</p><h3><br>ROOFTOP:</h3><p>Terraço amplo descoberto, onde pode desfrutar de fins de tarde, com o pôr do sol magnífico sobre o Tejo.</p><br/><p>Esta moradia está ainda equipada com:</p><p>Pré-instalação de ar condicionado; Aspiração central;</p><p>Caixilharia de alumínio com vidro duplo e corte térmico, oscilobatente e estores térmicos e elétricos;</p><p>Tetos falsos com iluminação LED embutida;</p><p>Cozinha totalmente equipada;</p><p>Painéis solares; Painéis fotovoltaicos;</p><p>Lareira (opção).</p><p>Este anúncio foi publicado por rotina informática, pelo que todos os dados carecem de confirmação.</p>",
  },
  {
    id: 2,
    title: "Moradia T4, Bairro dos Monjões, em Santa Iria de Azóia",
    images: [
      {
        id: 1,
        image: require("../assets/moradiaPiscina1.jpg"),
        orientation: "horizontal",
      },
      {
        id: 2,
        image: require("../assets/moradiaPiscina2.jpg"),
        orientation: "horizontal",
      },
      {
        id: 3,
        image: require("../assets/moradiaPiscina3.jpg"),
        orientation: "horizontal",
      },
      {
        id: 4,
        image: require("../assets/moradiaPiscina4.jpg"),
        orientation: "horizontal",
      },
      {
        id: 5,
        image: require("../assets/moradiaPiscina5.jpg"),
        orientation: "horizontal",
      },
      {
        id: 6,
        image: require("../assets/moradiaPiscina6.jpg"),
        orientation: "horizontal",
      },
      {
        id: 7,
        image: require("../assets/moradiaPiscina7.jpg"),
        orientation: "horizontal",
      },
      {
        id: 8,
        image: require("../assets/moradiaPiscina8.jpg"),
        orientation: "horizontal",
      },
      {
        id: 9,
        image: require("../assets/moradiaPiscina9.jpg"),
        orientation: "horizontal",
      },
      {
        id: 10,
        image: require("../assets/moradiaPiscina10.jpg"),
        orientation: "horizontal",
      },
      {
        id: 11,
        image: require("../assets/moradiaPiscina11.jpg"),
        orientation: "horizontal",
      },
      {
        id: 12,
        image: require("../assets/moradiaPiscina12.jpg"),
        orientation: "horizontal",
      },
      {
        id: 13,
        image: require("../assets/moradiaPiscina13.jpg"),
        orientation: "horizontal",
      },
      {
        id: 14,
        image: require("../assets/moradiaPiscina14.jpg"),
        orientation: "horizontal",
      },
      {
        id: 15,
        image: require("../assets/moradiaPiscina15.jpg"),
        orientation: "horizontal",
      },
      {
        id: 16,
        image: require("../assets/moradiaPiscina16.jpg"),
        orientation: "horizontal",
      },
      {
        id: 17,
        image: require("../assets/moradiaPiscina17.jpg"),
        orientation: "horizontal",
      },
      {
        id: 18,
        image: require("../assets/moradiaPiscina18.jpg"),
        orientation: "horizontal",
      },
      {
        id: 19,
        image: require("../assets/moradiaPiscina19.jpg"),
        orientation: "horizontal",
      },
      {
        id: 20,
        image: require("../assets/moradiaPiscina20.jpg"),
        orientation: "horizontal",
      },
      {
        id: 21,
        image: require("../assets/moradiaPiscina21.jpg"),
        orientation: "horizontal",
      },
      {
        id: 22,
        image: require("../assets/moradiaPiscina22.jpg"),
        orientation: "horizontal",
      },
      {
        id: 23,
        image: require("../assets/moradiaPiscina23.jpg"),
        orientation: "horizontal",
      },
      {
        id: 24,
        image: require("../assets/moradiaPiscina24.jpg"),
        orientation: "horizontal",
      },
      {
        id: 25,
        image: require("../assets/moradiaPiscina25.jpg"),
        orientation: "horizontal",
      },
      {
        id: 26,
        image: require("../assets/moradiaPiscina26.jpg"),
        orientation: "horizontal",
      },
      {
        id: 27,
        image: require("../assets/moradiaPiscina27.jpg"),
        orientation: "horizontal",
      },
      {
        id: 28,
        image: require("../assets/moradiaPiscina28.jpg"),
        orientation: "horizontal",
      },
      {
        id: 29,
        image: require("../assets/moradiaPiscina29.jpg"),
        orientation: "horizontal",
      },
      {
        id: 30,
        image: require("../assets/moradiaPiscina30.jpg"),
        orientation: "horizontal",
      },
      {
        id: 31,
        image: require("../assets/moradiaPiscina31.jpg"),
        orientation: "horizontal",
      },
      {
        id: 32,
        image: require("../assets/moradiaPiscina32.jpg"),
        orientation: "horizontal",
      },
      {
        id: 33,
        image: require("../assets/moradiaPiscina33.jpg"),
        orientation: "horizontal",
      },
      {
        id: 34,
        image: require("../assets/moradiaPiscina34.jpg"),
        orientation: "horizontal",
      },
      {
        id: 35,
        image: require("../assets/moradiaPiscina35.jpg"),
        orientation: "horizontal",
      },
      {
        id: 36,
        image: require("../assets/moradiaPiscina37.jpg"),
        orientation: "horizontal",
      },
      {
        id: 38,
        image: require("../assets/moradiaPiscina38.jpg"),
        orientation: "horizontal",
      },
      {
        id: 39,
        image: require("../assets/moradiaPiscina39.jpg"),
        orientation: "horizontal",
      },
    ],
    refNumber: "REF. PTF2023-1495 ",
    localization: "Loures > Santa Iria de Azoia, São João da Talha e Bobadela",
    type: "VENDA",
    price: "749 000 €",
    numberDivisions: [
      {
        id: 1,
        title: "Casas de Banho",
        count: 4,
        icon: require("../assets/bathRoom.png"),
      },
      {
        id: 2,
        title: "Quartos",
        count: 4,
        icon: require("../assets/icon-bed.png"),
      },
      {
        id: 3,
        title: "Piscina",
        icon: require("../assets/pool.png"),
      },
      {
        id: 4,
        count: 245 + " m²",
        icon: require("../assets/area.png"),
      },
    ],
    description:
      "<h2>Descrição do imóvel</h2><br><p>Imóvel de tipologia V4 com 2 pisos, localizado num bairro bastante tranquilo e familiar, composto somente por moradias, no Bairro dos Monjões, em Santa Iria de Azóia.<br></p><p>Área bruta de construção: 245 m²</p><p>Área de implantação: 140 m²</p><p>Área do terreno: 405 m²</p><br><p>Esta moradia é composta por:</p><br><h3>R/C (EXTERIOR): </h3><p>Parque com 38m2 para duas viaturas, com portão automático;</p><p>Piscina com 18 m2;</p><p>Churrasqueira coberta e com lavatório de serventia;</p><p>Casa de banho.</p><br><h3> R/C (INTERIOR):</h3><p>Cozinha com 9 m2 e totalmente equipada;</p><p>Sala de refeições com 9 m2;</p><p>Sala com 45 m2 e lareira;</p><p>Quarto com 15,5 m2;</p><p>Casa de banho social e de apoio ao quarto com 2,75 m2;</p><p>Lavandaria;</p><p>Arrecadação.</p><br><h3>1º PISO:</h3><p>Master suite com 31 m2, com closet;</p><p>2 Quartos, com área de 17 m2 cada um, ambos com closet;</p><p>Casa de banho de apoio aos quartos.</p><br><h3>CARACTERÍSTICAS:</h3><p>Tetos falsos e trabalhados;</p><p>Pavimento flutuante KRONO SWISS a imitar madeira;</p><p>Pavimento cerâmico na cozinha e casa de banho;</p><p>Escadas em madeira maciça;</p><p>Portas em lacado branco;</p><p>Móveis de cozinha em termo laminado;</p><p>Ar-condicionado nos quartos;</p><p>Lareira a pellets com recuperador de calor;</p><p>Loiças suspensas marca SANITANA;</p><p>Janelas de grandes dimensões;</p><p>Aspiração central;</p><p>Cozinha equipada (forno, placa, exaustor, máquina de lavar a roupa, máquina de lavar a loiça e frigorífico AEG);</p><p>Painéis fotovoltaicos e solares para aquecimento das águas;</p><p>Vidros duplos e espelhados, com caixilharia em alumínio e sistema oscilobatente;</p><p>Estores elétricos e com corte térmico;</p><p>Bancada da cozinha em pedra natural;</p><p>Alarme;</p><p>Videovigilância;</p><p>Deck compósito ao redor da piscina;</p><p>Carregador para carros elétricos no parque.</p><br><h3>TRANSPORTES E ACESSOS:</h3><p>Dispõe de acessos privilegiados às principais vias automóveis, ficando a apenas escassos minutos de carro das entradas para a A1 (sentido norte e sul), IC2 e 5 minutos da Nacional 10. Para além de autocarros, tem ainda a quatro minutos (de carro) a estação de comboios da Santa Iria.</p><p>Este anúncio foi publicado por rotina informática, pelo que todos os dados carecem de confirmação.</p>",
  },
  {
    id: 3,
    title: "Terreno, São João da talha, Loures",
    images: [
      {
        id: 1,
        image: require("../assets/terrenoSaoJoao1.jpg"),
        orientation: "horizontal",
      },
      {
        id: 2,
        image: require("../assets/terrenoSaoJoao2.jpg"),
        orientation: "horizontal",
      },
      {
        id: 3,
        image: require("../assets/terrenoSaoJoao3.jpg"),
        orientation: "horizontal",
      },
      {
        id: 4,
        image: require("../assets/terrenoSaoJoao4.jpg"),
        orientation: "horizontal",
      },
      {
        id: 5,
        image: require("../assets/terrenoSaoJoao5.jpg"),
        orientation: "horizontal",
      },
      {
        id: 6,
        image: require("../assets/terrenoSaoJoao6.jpg"),
        orientation: "vertical",
      },
    ],
    refNumber: "REF. PTF2021-723 ",
    localization: "Loures > São João da Talha (Bobadela)",
    type: "VENDA",
    price: "95 000 €",

    numberDivisions: [
      {
        id: 4,
        count: 278 + "," + 65 + " m²",
        icon: require("../assets/area.png"),
      },
    ],
    description:
      "<h2>Descrição do imóvel</h2><br><p>** ACEITA-SE PERMUTA **</p><p>Terreno situado em São João da Talha, com alvará, que permite a construção de uma moradia.</p><br><p><label>Área total:</label>278,65 m2;</p><p><label>Área de implantação:</label>125 m2;</p><p><label>Área bruta de construção:</label>213 m2.</p><br><p>Localizado numa zona muito tranquila, está perto de todo o tipo de comércio, e serviços, tais como escolas, creches, hipermercados, farmácias, restaurante, bancos, entre outros.</p><p>Com bons acessos rodoviários para Lisboa, através do IC2, A1 e N10.</p><p>Marque já a sua visita!</p><p>Aproveito para informar que trabalhamos em parceria com gabinetes de arquitetura, que lhe farão um projeto idealizado ao seu gosto.</p><p>Se necessitar de ajuda na construção, também trabalhamos com variadas empresas de Construção Civil com a possibilidade de contratação de chave na mão.</p><p>Estou inteiramente ao dispor para tudo o que necessitar!</p><p>Este anúncio foi publicado por rotina informática, pelo que todos os dados carecem de confirmação.</p>",
  },
  {
    id: 4,
    title: "Terreno, Santo Antão do Tojal, Loures",
    images: [
      {
        id: 1,
        image: require("../assets/terrenoSantoAntao1.jpg"),
        orientation: "horizontal",
      },
      {
        id: 2,
        image: require("../assets/terrenoSantoAntao2.jpg"),
        orientation: "horizontal",
      },
      {
        id: 3,
        image: require("../assets/terrenoSantoAntao3.jpg"),
        orientation: "horizontal",
      },
      {
        id: 4,
        image: require("../assets/terrenoSantoAntao4.jpg"),
        orientation: "horizontal",
      },
      {
        id: 5,
        image: require("../assets/terrenoSantoAntao5.jpg"),
        orientation: "horizontal",
      },
      {
        id: 6,
        image: require("../assets/terrenoSantoAntao6.jpg"),
        orientation: "horizontal",
      },
      {
        id: 7,
        image: require("../assets/terrenoSantoAntao7.jpg"),
        orientation: "horizontal",
      },
      {
        id: 8,
        image: require("../assets/terrenoSantoAntao8.jpg"),
        orientation: "horizontal",
      },
      {
        id: 9,
        image: require("../assets/terrenoSantoAntao9.jpg"),
        orientation: "horizontal",
      },
      {
        id: 10,
        image: require("../assets/terrenoSantoAntao10.jpg"),
        orientation: "horizontal",
      },
      {
        id: 11,
        image: require("../assets/terrenoSantoAntao11.jpg"),
        orientation: "horizontal",
      },
      {
        id: 12,
        image: require("../assets/terrenoSantoAntao12.jpg"),
        orientation: "horizontal",
      },
      {
        id: 13,
        image: require("../assets/terrenoSantoAntao13.jpg"),
        orientation: "horizontal",
      },
      {
        id: 14,
        image: require("../assets/terrenoSantoAntao14.jpg"),
        orientation: "horizontal",
      },
      {
        id: 15,
        image: require("../assets/terrenoSantoAntao15.jpg"),
        orientation: "vertical",
      },
    ],

    refNumber: "REF. PTF2022-866 ",
    localization: "Loures > Santo Antão e São Julião do Tojal",
    type: "VENDA",
    price: "550 000 €",
    numberDivisions: [
      {
        id: 4,
        count: 3690 + " m²",
        icon: require("../assets/area.png"),
      },
    ],
    description:
      "<h2>Descrição do imóvel</h2><br><p>Magnífico terreno localizado em Santo Antão do Tojal.</p><p>Afastado da azáfama da cidade numa pacífica freguesia do Concelho de Loures, mas ao mesmo tempo a 15 minutos de Lisboa, da A1 e a 5 minutos da A8.</p><p>O terreno conta com cerca de 3.700m2 de área rústica e 260m2 de área urbana.</p><p>Conta com uma moradia para restaurar ou demolir e fazer nova construção.</p><p>Já existe um projeto pré aprovado na Câmara Municipal de Loures para construção de uma moradia, com cave, R/C e 1º andar, com uma área construtiva de 360m2.</p><p>Este terreno conta com uma vista espetacular, longe do som do quotidiano e outros ruídos incomodativos, ideal para quem quer estar perto de Lisboa, descansar e com vasta área de terreno.</p><p>Os terrenos contíguos são terrenos rústicos e além de não ser possível construir, estão também inseridos na RAN, logo não irá ter vizinhos.</p><p>De momento o terreno encontra-se arrendado a uma empresa, com contrato por 5 anos.</p><p>Não hesite e venha visitar este terreno. Este anúncio foi publicado por rotina informática, pelo que todos os dados carecem de confirmação.</p>",
  },
];
