import React, { useEffect, useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { useFavorites } from "../../context/favoritesContext";
import {
  Background,
  Card,
  CardContainer,
  CenterImage,
  ConteinerNoFavorites,
  ContentHouses,
  HeartIcon,
  IconLocalization,
  IconsContainer,
  ImageCard,
  Localization,
  PriceContainer,
  TitleAndLocalization,
  TitleCard,
  Type,
  VideoFavorites,
} from "./style";
import { CardData } from "../../data/housingData";
import { Loading } from "../../components/loading/Loading";

export const Favorites: React.FC = () => {
  const { favorites, loading, dispatch } = useFavorites();
  const noFavorites = require("../../assets/noFavorites.gif");
  const [dontFavorites, setDontFavorites] = useState<boolean>(true);
  const [numberCards, setNumberCards] = useState<boolean>(true);

  useEffect(() => {
    setDontFavorites(true);
    setNumberCards(Object.values(favorites).length > 3);
  }, [favorites]);

  const removeFavorite = (favorite: CardData) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: favorite });
  };
  console.log(favorites);
  return (
    <Background dontFavorites={dontFavorites}>
      <h1>Favoritos</h1>
      {loading ? (
        <Loading />
      ) : Object.values(favorites).length === 0 ? (
        <ConteinerNoFavorites>
          <h2>Nenhum favorito encontrado!</h2>
          {/* <VideoFavorites controls autoPlay playsInline loop muted>
            <source src={noFavorites} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </VideoFavorites> */}
          <VideoFavorites src={noFavorites} alt="Não existe favoritos" />
        </ConteinerNoFavorites>
      ) : (
        <>
          {" "}
          <CardContainer numberCards={numberCards}>
            {Object.values(favorites).map((favorite) => (
              <Card key={favorite.id}>
                <NavLink to={`/housingDetails/${favorite.typeId}`}>
                  <ImageCard src={favorite.imageUrl} alt={favorite.title} />
                </NavLink>
                <HeartIcon
                  fontSize="large"
                  style={{
                    color: favorites.some((fav) => fav.id === favorite.id)
                      ? "#F31111"
                      : "#FEFEFE",
                  }}
                  onClick={() => removeFavorite(favorite)}
                />
                <ContentHouses to={`/housingDetails/${favorite.typeId}`}>
                  <TitleCard>{favorite.title}</TitleCard>
                  <TitleAndLocalization>
                    <IconLocalization
                      src={favorite.localizationIcon}
                      alt="Icon de localização"
                    />
                    <Localization>{favorite.localization}</Localization>
                  </TitleAndLocalization>
                  <Type>{favorite.type}</Type>
                  <PriceContainer>
                    <p>{favorite.price}</p>
                    <p>{favorite.refNumber}</p>
                  </PriceContainer>
                  <IconsContainer condition={favorite.condition}>
                    {favorite.numberDivisions.map((division) => (
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
          <CenterImage dontFavorites={dontFavorites}></CenterImage>
        </>
      )}
    </Background>
  );
};
