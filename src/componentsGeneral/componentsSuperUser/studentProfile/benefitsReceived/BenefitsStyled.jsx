import styled from "styled-components";

export const DivCohortGroupTraining = styled.div`

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
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  margin-top: 40px;
  font-family: "Monserrat", sans-serif;
  color: #25abbc;
  padding-left: 15px;
  @media (max-width: 414px) {
    text-align: left;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
  padding-left: 59px;

  @media (max-width: 414px) {
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media screen and (max-width: 414px) {
    margin-top: 70px;
  }
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

export const TableBenefits = styled.table`
  background-color: white;
  margin-top: 30px;
  border-color: #e6e6e6;

  th {
    background-color: #dddddd;
    color: #000000;
    padding: 15px 85px;
    font-size: 19px;
  }

  td {
    padding: 7px 0px 7px 15px;
    text-align: center;
    font-size: 17px;
  }
  select {
    border: none;
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    th {
      padding: 15px 45px;
      font-size: 12px;
    }

    td {
      padding: 6px 0px 6px 0px;
      font-size: 12px;
    }
    select {
      border: none;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 414px) {
    th {
      padding: 10px;
      font-size: 10px;
    }

    td {
      padding: 6px 0px 6px 0px;
      font-size: 10px;
    }
    select {
      border: none;
      font-size: 10px;
    }
  }
`;
