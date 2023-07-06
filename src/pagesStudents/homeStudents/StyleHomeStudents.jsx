import { styled } from "styled-components";

export const ContainerHomeStudents = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-image: url(https://res.cloudinary.com/dvk0btnav/image/upload/v1688442314/backgroundLive_htg9zu.jpg);
`;

export const ContainerHomeStudentsCont = styled.div`
  display: flex;
  flex-direction: column;
  
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
