import styled from "styled-components";

export const DivCohortGroupTraining = styled.div`
  margin-top: 100px;
  @media (max-width: 375px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30rem;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  height: 20px;

  @media (max-width: 375px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
  background-color: #eee420;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export const DivInputTraining = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Monserrat", sans-serif;
  color: #25abbc;
  padding-left: 15px;
  @media (max-width: 375px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 59px;

  @media (max-width: 375px) {
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 10px;
  }
`;

export const Etiquetas = styled.div`
  padding-right: 50px;
`;

export const Imagen = styled.img`
  width: 70%;
  height: auto;
  /* margin-right: 50px; */
  padding-left: 100px;
  @media (max-width: 375px) {
    width: 100%;
    height: auto;
    margin-right: 50px;
  }
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const DivCreate = styled.div`
  margin-bottom: 80px;
  margin-left: 50px;

  @media (max-width: 375px) {
    text-align: center;
    margin-bottom: 10px;
    margin-left: 0px;
  }

  h2 {
    font-size: 1.3rem;
  }
  p {
    background-color: #eee420;
    text-align: center;
    font-size: 1.3rem;
    border-radius: 5px;
  }

  input {
    height: 30px;
    border-radius: 5px;
  }
  button {
    width: 80px;
    height: 35px;
    margin-left: 10px;
    background-color: #eee420;
    border: none;
    border-radius: 5px;
  }
`;
