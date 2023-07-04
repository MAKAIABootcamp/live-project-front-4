import { styled } from "styled-components";

export const ContainerHomeStudents = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-image: url(https://res.cloudinary.com/dvk0btnav/image/upload/v1688442314/backgroundLive_htg9zu.jpg);
`;

export const ContainerHomeStudentsCont = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    width: 580px;
    font-size: 48px;
    color: #03203aff;
    padding: 100px 0px 169px 0px;
    height: 62px;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    text-align: center;
  }

  img {
    width: 550px;
  }
`;
