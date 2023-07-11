import styled from "styled-components";

export const DivCohortGroupTraining = styled.div`
  margin-top: 100px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #03203a;
  h2 {
    color: white;
    text-align: center;
    font-family: "Monserrat", sans-serif;
  }
  p {
    color: white;
    text-align: center;
    font-family: "Monserrat", sans-serif;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50rem;
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
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    flex-wrap: wrap;
  }
`;

export const GridItemAgregate = styled.div`
  background-color: #eee420;
  border: 1px solid #ccc;
  padding: 32px;
  text-align: center;

  button {
    width: 100px;
    height: 100px;
    border-radius: 90%;
    background-color: #03203a;
    align-items: center;
  }
`;
