interface Division {
  id: number;
  count: number | null | string;
  icon: string;
}

export interface CardData {
  id: number;
  title: string;
  imageUrl: string;
  localizationIcon: string;
  localization: string;
  type: string;
  price: string;
  refNumber: string;
  condition: number;
  typeId: number;
  numberDivisions: Division[];
}

export const cards: CardData[] = [
  {
    id: 1,
    title: "Moradia T3+1",
    localizationIcon: require("../assets/place-marker.png"),
    localization: "Santa Iria da Azóia",
    type: "Venda",
    price: "695 000 €",
    refNumber: "Ref. PTF2022-892",
    imageUrl: require("../assets/moradiaCourelas1.jpg"),
    condition: 2,
    typeId: 1,
    numberDivisions: [
      {
        id: 1,
        count: 4,
        icon: require("../assets/bathRoom.png"),
      },
      {
        id: 2,
        count: 4,
        icon: require("../assets/icon-bed.png"),
      },
      {
        id: 3,
        count: null,
        icon: require("../assets/garage.png"),
      },
    ],
  },
  {
    id: 2,
    title: "Moradia T4",
    localizationIcon: require("../assets/place-marker.png"),
    localization: "Santa Iria da Azóia",
    type: "Venda",
    price: "749 000 €",
    refNumber: "Ref. PTF2023-1495 ",
    imageUrl: require("../assets/moradiaPiscina1.jpg"),
    condition: 2,
    typeId: 2,
    numberDivisions: [
      {
        id: 1,
        count: 4,
        icon: require("../assets/bathRoom.png"),
      },
      {
        id: 2,
        count: 4,
        icon: require("../assets/icon-bed.png"),
      },
      {
        id: 3,
        count: null,
        icon: require("../assets/pool.png"),
      },
      {
        id: 4,
        count: 245 + " m²",
        icon: require("../assets/area.png"),
      },
    ],
  },
  {
    id: 3,
    title: "Terreno",
    localizationIcon: require("../assets/place-marker.png"),
    localization: "São João da Talha",
    type: "Venda",
    price: "95 000 €",
    refNumber: "Ref. PTF2021-723 ",
    imageUrl: require("../assets/terrenoSaoJoao1.jpg"),
    condition: 1,
    typeId: 3,
    numberDivisions: [
      {
        id: 4,
        count: 278 + "," + 65 + " m²",
        icon: require("../assets/area.png"),
      },
    ],
  },
  {
    id: 4,
    title: "Terreno",
    localizationIcon: require("../assets/place-marker.png"),
    localization: "Santo Antão do Tojal",
    type: "Venda",
    price: "550 000 €",
    refNumber: "Ref. PTF2022-866 ",
    imageUrl: require("../assets/terrenoSantoAntao1.jpg"),
    condition: 1,
    typeId: 4,
    numberDivisions: [
      {
        id: 4,
        count: 3690 + " m²",
        icon: require("../assets/area.png"),
      },
    ],
  },
];
