import { styled } from "styled-components";
import fondoGeneral from "../../../assets/FONDOGENERAL.png";

export const DivProfileGeneral = styled.div`
  @media screen and (max-width: 1440px) {
    background-image: url(${fondoGeneral});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 110vh;
    margin: 0px 0px 150px 0px;
  }
`;
