import React from "react";
import { LoadingContainer, Video } from "./style";

export const Loading = () => {
  const loading = require("../../assets/loading.mp4");
  return (
    <LoadingContainer>
      <Video controls autoPlay playsInline loop muted>
        <source src={loading} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </Video>
    </LoadingContainer>
  );
};
