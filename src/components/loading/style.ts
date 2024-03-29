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
`;

export const Image = styled.img`
  width: 50%;
  padding: 50px;
  @media screen and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 577px) {
    width: 90%;
  }
`;
