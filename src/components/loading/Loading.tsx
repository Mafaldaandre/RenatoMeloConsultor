import React from "react";
import { Image, LoadingContainer } from "./style";

export const Loading = () => {
  const loadingGif = require("../../assets/loading.gif");
  return (
    <LoadingContainer>
      <Image src={loadingGif} alt="loading" />
    </LoadingContainer>
  );
};
