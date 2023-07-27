import { styled } from "styled-components";

export const ContainerHomeStudents = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(https://res.cloudinary.com/dvk0btnav/image/upload/v1688442314/backgroundLive_htg9zu.jpg);
`;

export const ContainerHomeStudentsCont = styled.div`
  @media screen and (max-width: 1440px) {
    display: flex;
    justify-content: space-around;
    margin-top: -15px;

    div {
      display: flex;
      justify-content: center;
    }

    h2 {
      width: 450px;
      font-size: 38px;
      color: #03203aff;
      padding: 0px;
      font-family: "Montserrat", sans-serif;
      font-weight: 200;
      text-align: center;
    }
    section {
      width: 340px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      width: 400px;
      font-size: 28px;
    }
    img {
      width: 350px;
      margin-top: -20px;
    }
  }
  @media screen and (max-width: 414px) {
    h2 {
      width: 300px;
      font-size: 20px;
    }
    img {
      width: 250px;
      margin-top: -20px;
    }
  }
`;
export const ButtonHomeStudents = styled.div`
  @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button{
    border-radius: 50px;
    border: none;
    background-color: #eee420;
    color: #03203a;
    font-size: 25px;
    font-weight: 200;
    margin-top: -15px;
    width:30% ;
    height:40px ;
    margin-bottom:60px ;
   
  }}
  @media screen and (max-width: 769px) {
    margin-top: 10px;
    margin-bottom:40px ;
  }
  @media screen and (max-width: 414px) {
    margin-bottom:60px ;
    
   button{
    font-size: 18px;
    width:50% ;
    margin-top: -15px;
   }

  }
`;