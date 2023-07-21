import { styled } from "styled-components";
import fondoGeneral from "../../../assets/FONDOGENERAL.png";

export const ContainerHomeStudents = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;
`;

export const ContainerHomeStudentsCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 150vh;
  background-image: url(${fondoGeneral});
  
div{
    display: flex;
    justify-content: center;
}

  h2 {
    width: 580px;
    font-size: 48px;
    color: #03203aff;
    padding: 100px 0px 0px 0px;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    text-align: center;
  }

  img {
    width: 550px;
  }

  @media screen and (max-width: 768px) {

   div{
    flex-direction: column;
    align-items: center;
   }

  h2{
    font-size: 38px;
    padding: 20px 0px 0px 0px;
  }

  img{
    width: 450px;
  }
  }
  @media screen and (max-width: 376px) {
    width: 540px;
  }
`;
export const ButtonHomeStudents = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 50px;
    border-radius: 50px;
    border: none;
    background-color: #eee420;
    color: #03203a;
    font-size: 25px;
    font-weight: 200;
    margin-top: -100px;
  }
`;
