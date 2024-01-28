import { NavLink, Outlet } from "react-router-dom";
import { CardData, cards } from "../../data/housingData";
import {
  Background,
  Card,
  CardContainer,
  CenterImage,
  ContentHouses,
  HeartIcon,
  IconLocalization,
  IconsContainer,
  ImageCard,
  Localization,
  PriceContainer,
  Title,
  TitleAndLocalization,
  TitleCard,
  Type,
} from "./style";
import React, { useEffect, useState } from "react";
import { useFavorites } from "../../context/favoritesContext";

export const Housing = () => {
  const { favorites, dispatch } = useFavorites();
  const [numberCards, setNumberCards] = useState<boolean>(true);

  useEffect(() => {
    setNumberCards(Object.values(cards).length > 3);
  }, [cards]);

  const addFavorite = (card: CardData) => {
    dispatch({ type: "ADD_FAVORITE", payload: [card] });
  };

  const removeFavorite = (card: CardData) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: card });
  };

  return (
    <>
      <Background>
        <Title>Encontre a sua casa de SONHO!</Title>
        <CardContainer numberCards={numberCards}>
          {" "}
          {cards.map((card) => (
            <Card key={card.id}>
              <NavLink to={`/housingDetails/${card.typeId}`}>
                <ImageCard src={card.imageUrl} alt={card.title} />
              </NavLink>
              <HeartIcon
                fontSize="large"
                style={{
                  color:
                    favorites &&
                    Array.isArray(favorites) &&
                    favorites.some((fav) => fav.id === card.id)
                      ? "#F31111"
                      : "#FEFEFE",
                }}
                onClick={() => {
                  if (
                    favorites &&
                    Array.isArray(favorites) &&
                    favorites.some((fav) => fav.id === card.id)
                  ) {
                    removeFavorite(card);
                  } else {
                    addFavorite(card);
                  }
                }}
              />

              <ContentHouses to={`/housingDetails/${card.typeId}`}>
                <TitleCard>{card.title}</TitleCard>
                <TitleAndLocalization>
                  <IconLocalization
                    src={card.localizationIcon}
                    alt="Icon de localização"
                  />
                  <Localization>{card.localization}</Localization>
                </TitleAndLocalization>
                <Type>{card.type}</Type>
                <PriceContainer>
                  <p>{card.price}</p>
                  <p>{card.refNumber}</p>
                </PriceContainer>
                <IconsContainer condition={card.condition}>
                  {card.numberDivisions.map((division) => (
                    <div key={division.id}>
                      <img src={division.icon} alt="Icon das divisões" />
                      <p>{division.count}</p>
                    </div>
                  ))}
                </IconsContainer>
              </ContentHouses>
            </Card>
          ))}
          <Outlet />
        </CardContainer>
        <CenterImage></CenterImage>
      </Background>
    </>
  );
};
