import styled from "styled-components";

export const DivGeneral = styled.div`
  margin-top: 30px;
  display: flex;
  padding-left: 30px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-top: 70px;
  }
  h2 {
    color: #25abbc;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    @media screen and (max-width: 376px) {
      text-align: center;
    }
  }
`;

export const Figure = styled.div`
  margin-left: 50px;
  img {
    width: 500px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    img {
      width: 100%;
      max-width: 500px;
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    img {
      width: 100%;
      max-width: 300px;
    }
  }
`;

export const DivButton = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 20%;
  button {
    height: 50px;
    border: none;
    /* cursor: pointer;
    transition: background-color 0.3s;
    :hover {
      background-color: yellow;
    } */
    div {
      display: flex;
      align-items: center;
    }
    p {
      margin-left: 10px;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TableBenefits = styled.table`
  background-color: white;
  margin-top: 80px;
  margin-left: 70px;

  th {
    background-color: #dddddd;
    color: #000000;
    padding: 15px 65px;
    font-size: 15px;
  }

  td {
    padding: 7px 0px 7px 15px;
    text-align: center;
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 40px;
    th {
      padding: 15px 100px;
      font-size: 15px;
    }

    td {
      padding: 6px 0px 6px 0px;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 376px) {
    th {
      padding: 23px;
      font-size: 12px;
    }

    td {
      padding: 6px 0px 6px 0px;
      font-size: 12px;
    }
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
  @media screen and (max-width: 376px) {
    margin-top: 70px;
  }
`;

export const ModalContent = styled.div`
  width: 280px;
  height: 380px;
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
    height: 25px;
    border-radius: 5px;
    font-size: 1rem;
  }

  label {
    color: white;
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
