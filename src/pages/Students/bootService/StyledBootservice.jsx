import { styled } from "styled-components";
import fondoGeneral from "../../../assets/FONDOGENERAL.png";

export const DivBootserviceGeneral = styled.div`
  background-image: url(${fondoGeneral});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 95vh;
  margin: 0;
  @media screen and (max-width: 414px) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 769px) {
    height: 80vh;
  }
`;
export const SectionRobot = styled.section`
  @media screen and (max-width: 1440px) {
    display: flex;
    margin-top: -10px;
    figure {
      width: 6%;
      height: 5%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    h1 {
      font-size: 40px;
      font-weight: bold;
      color: #03203a;
      margin-top: 35px;
    }
  }

  @media screen and (max-width: 414px) {
    figure {
      width: 15%;
      height: 15%;
    }
    h1 {
      margin-top: 30px;
      font-size: 38px;

      margin-top: 20px;
    }
  }
`;
export const DivBootservices = styled.div`
  @media screen and (max-width: 1440px) {
    display: flex;
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 414px) {
    flex-direction: column;
    margin-top: -35px;
  }
`;
export const SectionServicios = styled.section`
  @media screen and (max-width: 1440px) {
    padding: 0 20px 0px 20px;
    height: 200px;
    flex: 1;
    margin-top: -20px;

    img {
      width: 80%;
      object-fit: contain;
      border-radius: 10px;
    }
    h2 {
      color: #03203a;
      font-size: 25px;
      font-weight: bold;
      display: inline;
    }
    p {
      color: #03203a;
      font-size: 18px;
      line-height: 1;
      margin-top: 5px;
    }
    button {
      background: #eee420;
      border: none;
      width: 40%;
      height: 25px;
      border-radius: 25px;
      color: #03203a;
      font-weight: bold;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 414px) {
    height: 100px;
    margin-top: 15px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 35px;
    }

    h2 {
      margin-top: 10px;
    }
    p {
      margin-top: 10px;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 35px;
    }
  }
`;
