import styled from "styled-components";

export const DivGeneral = styled.div`
  /* margin-top: 70px; */
`;

export const DivGeneralInformation = styled.div`
  display: flex;
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  h2 {
    color: #25abbc;
    margin-left: 50px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 414px) {
    margin-left: 10px;
  }
`;

export const DivInformation = styled.div`
  display: flex;
  margin-top: 50px;
  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    @media (max-width: 414px) {
      margin-left: 0;
      align-items: center;
      text-align: center;
    }
  }

  select {
    border: none;
    font-size: 1rem;
    border-radius: 8px;
  }
  h2 {
    color: #25abbc;
    @media (max-width: 414px) {
      text-align: center;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    border-radius: 100%;
    margin-right: 40px;
    @media (max-width: 414px) {
      margin-right: 0;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  @media (max-width: 414px) {
    margin-left: 0px;
  }
`;

export const P = styled.p`
  background-color: #eee420;
  border-radius: 5px;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 30px;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 414px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 80%;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  @media (max-width: 414px) {
    margin-left: 0;
  }

  button {
    width: 120%;
    height: 60px;
    padding: 20px;
    margin: 5px;
    background-color: #03203a;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #25abbc;
    }
    @media (max-width: 414px) {
    }
  }
`;
