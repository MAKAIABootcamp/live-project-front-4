import styled from "styled-components";

export const DivCohortGroupTraining = styled.div`
  margin-top: 100px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40rem;
  margin-bottom: 50px;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
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

export const Title = styled.h2`
  margin-bottom: 50px;
  font-family: "Monserrat", sans-serif;
  color: #25abbc;
  @media (max-width: 375px) {
    text-align: left;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 80px;

  @media (max-width: 375px) {
    flex-wrap: wrap;
  }

  
`;

export const ListContainer = styled.div`
  display: grid;
  border: 1px solid #ccc;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 375px) {
    flex-wrap: wrap;
    font-size:1rem;
  }
`;

export const ListItemcolumn = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  background-color: #e9e9e9;
  height: 60px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  background-color: #ffffff;
`;

export const Box = styled.div`
  height: 40px;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
  select {
    border: none;
  }
`;

export const Modal = styled.div`
  /* Estilos para el modal */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 280px;
  height: 300px;
  background-color: #03203a;
  padding: 20px;
  border-radius: 4px;
  align-items: center;

  h3 {
    color: white;
    text-align: center;
  }
  input {
    width: 270px;
    height: 180px;
    border-radius: 5px;
    font-size: 1rem;
  }

  div {
    margin-top: 20px;
    text-align: center;
    button {
      border-radius: 5px;
      width: 80px;
      height: 25px;
      background-color: #eee420;
      border: none;
      margin-right: 10px;
    }
  }
`;
