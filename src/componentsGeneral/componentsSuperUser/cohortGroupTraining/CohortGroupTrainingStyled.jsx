import styled from "styled-components";

export const DivCohortGroupTraining = styled.div`
  margin-top: 0px;
  padding-top: 30px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 414px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3px;
  }
`;

export const GridItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #03203a;
  cursor: pointer;
  &:hover {
    background-color: #25abbc;
  }

  h2 {
    color: white;
    text-align: center;
    font-family: "Monserrat", sans-serif;
    @media (max-width: 414px) {
      font-size: 18px;
    }
  }
  p {
    color: white;
    text-align: center;
    font-family: "Monserrat", sans-serif;
    @media (max-width: 414px) {
      font-size: 13px;
    }
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

  @media (max-width: 414px) {
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
  padding-left: 40px;
  margin-bottom: 30px;
  @media (max-width: 376px) {
    padding-left: 10px;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  font-family: "Monserrat", sans-serif;
  color: #25abbc;
  padding-left: 15px;
  @media (max-width: 375px) {
    text-align: left;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 45px;
  text-align: center;
  align-items: center;
  @media (max-width: 414px) {
    padding: 35px;
  }
  button {
    width: 100px;
    height: 100px;
    border-radius: 90%;
    background-color: #03203a;
    align-items: center;
    @media (max-width: 414px) {
      font-size: 12px;
      width: 80px;
      height: 80px;
    }
  }
`;
