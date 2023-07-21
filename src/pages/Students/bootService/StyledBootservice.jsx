import { styled } from "styled-components";
import fondoGeneral from "../../../assets/FONDOGENERAL.png";

export const DivBootserviceGeneral = styled.div`
  background-image: url(${fondoGeneral});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
export const DivBootservices = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;
export const SectionInformacion = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 0 -20px 5px -65px;
  width: 100%;
  height: 25%;
  h3 {
    font-size: 23px;
    color: #03203a;
    margin-top: 35px;
    margin-bottom: -25px;
  }
`;
export const SectionRobot = styled.section`
  display: flex;
  figure {
    width: 80px;
    height: 80px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #03203a;
    margin-top: 55px;
  }
`;
export const SectionPsicosocial = styled.section`
  display: flex;
  width: 100%;
  height: 25%;
  margin-top: -30px;
  section {
    width: 30%;
  }
  figure {
    width: 220px;
    height: 160px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
  }
  h2 {
    color: #03203a;
    font-size: 35px;
    font-weight: bold;
    margin-top: 10px;
  }
  p {
    color: #03203a;
    font-size: 20px;
    margin-top: -20px;
    margin-bottom: 12px;
  }
  button {
    background: #eee420;
    border: none;
    width: 150px;
    height: 30px;
    border-radius: 25px;
    color: #03203a;

    font-weight: bold;
    font-size: 20px;
  }
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  margin-top: 10px;
`;

export const SectionTecnico = styled.section`
  display: flex;
  width: 100%;
  height: 25%;
  margin-left: 600px;
  margin-top: -20px;

  section {
    width: 30%;
  }
  figure {
    width: 220px;
    height: 160px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
  }
  h2 {
    color: #03203a;
    font-size: 35px;
    font-weight: bold;
    margin-top: 10px;
  }
  p {
    color: #03203a;
    font-size: 20px;
    margin-top: -20px;
    margin-bottom: 12px;
  }
  button {
    background: #eee420;
    border: none;
    width: 150px;
    height: 30px;
    border-radius: 25px;
    color: #03203a;

    font-weight: bold;
    font-size: 20px;
  }
`;
export const SectionInasistencia = styled.section`
  display: flex;
  width: 100%;
  height: 25%;
  margin-top: -25px;
  section {
    width: 35%;
  }
  figure {
    width: 220px;
    height: 160px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
  }
  h2 {
    color: #03203a;
    font-size: 35px;
    font-weight: bold;
    margin-top: 10px;
  }
  p {
    color: #03203a;
    font-size: 20px;
    margin-top: -20px;
    margin-bottom: 18px;
  }
  button {
    background: #eee420;
    border: none;
    width: 150px;
    height: 30px;
    border-radius: 25px;
    color: #03203a;
    font-weight: bold;
    font-size: 20px;
  }
`;
