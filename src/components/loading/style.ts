import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 60px;
  background: #f8ecc6;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 577px) {
    width: 90%;
  }
`;

// export const Video = styled.video`
//   width: 50%;
//   padding: 50px;
//   pointer-events: none;
//   &::-webkit-media-controls {
//     display: none !important;
//   }
//   @media screen and (max-width: 767px) {
//     width: 80%;
//   }

//   @media screen and (max-width: 577px) {
//     width: 90%;
//   }
// `;

export const Image = styled.img`
  width: 50%;
  padding: 50px;
  pointer-events: none;
  &::-webkit-media-controls {
    display: none !important;
  }
  @media screen and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 577px) {
    width: 90%;
  }
`;
