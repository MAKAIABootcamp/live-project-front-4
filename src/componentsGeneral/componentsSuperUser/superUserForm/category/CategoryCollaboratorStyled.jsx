import styled from "styled-components";

export const DivGeneral = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 414px) {
    display: flex;
    padding-left: 0;
  }
`;

export const H2 = styled.h2`
  color: #25abbc;
  text-align: center;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 414px) {
    text-align: center;
    margin-top: 30px;
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
  @media screen and (max-width: 414px) {
    display: flex;
    img {
      width: 200px;
      max-width: 300px;
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 768px;
  }
  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button {
    flex: 1; /* Hace que los botones ocupen el mismo ancho */
    width: 200px;
    height: 50px;
    border: none;
    margin-left: 20px;
    margin-right: 10px;
    background-color: #03203a;
    color: white;
    @media screen and (max-width: 768px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    @media screen and (max-width: 414px) {
      max-width: 300px;
      height: 50px;
      border: none;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
  div {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 10px;
    font-size: 15px;
    @media screen and (max-width: 414px) {
      font-size: 12px;
    }
  }
`;

export const TableBenefits = styled.table`
  background-color: white;
  /* margin-top: 80px; */
  margin-left: 70px;

  th {
    color: #000000;
    padding: 10px 30px;
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
      font-size: 15px;
    }

    td {
      padding: 6px 0px 6px 0px;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 414px) {
    margin-left: 0px;

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

export const Th = styled.th`
  color: #000000;
  padding: 10px 30px;
  font-size: 15px;
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
  /* margin-top: 30px; */
  @media screen and (max-width: 414px) {
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

  select {
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
