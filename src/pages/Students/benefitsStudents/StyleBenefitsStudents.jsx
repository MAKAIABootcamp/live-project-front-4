import { styled } from "styled-components";

export const ContainerBenefitStudents = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  padding: 60px 0px;
  color: #03203a;

  @media screen and (max-width: 1286px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
    height: 140vh;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
    height: 140vh;
  }

  @media screen and (max-width: 376px) {
    width: 540px;
    height: 113vh;
  }
`;
export const ApplicationForBenefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dee1e6;
  border-radius: 10px;
  height: 70vh;

  div {
    background-color: #25abbc;
    padding: 0px 120px;
    border-radius: 10px 10px 0px 0px;

    h2 {
      color: white;
      font-size: 20px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;

    label {
      font-size: 18px;
    }

    select {
      padding: 10px 15px;
      border: none;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      padding: 0px 150px;

      h2 {
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 376px) {
    height: 100vh;
  }
`;

export const InputTextArea = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  textarea {
    border: none;
  }
`;

export const ButtonBenefits = styled.section`
  display: flex;
  padding: 30px 0px 0px 0px;

  button {
    padding: 10px 70px;
    border-radius: 50px;
    background-color: #eee420;
    border: none;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const BenefitsReceived = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dee1e6;
  border-radius: 10px;
  height: 70vh;

  div {
    background-color: #25abbc;
    padding: 0px 300px;
    border-radius: 10px 10px 0px 0px;

    h2 {
      color: white;
      font-size: 20px;
    }
  }

  img {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 768px) {
    div {
      padding: 0px 228px;
    }
  }
  @media screen and (max-width: 376px) {
    height: 100vh;
    padding-bottom: 50px;
    h2 {
      font-size: 18px;
    }

    div {
      padding: 0px 160px;
    }
  }
`;

export const TableBenefits = styled.table`
  background-color: white;
  margin-top: 30px;

  th {
    background-color: #03203a;
    color: white;
    padding: 25px 45px;
    font-size: 12px;
  }

  td {
    padding: 7px 0px 7px 15px;
    text-align: center;
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    th {
      padding: 15px 25px;
    }

    td {
      padding: 6px 0px 6px 0px;
    }
  }
  @media screen and (max-width: 376px) {
    th {
      padding: 15px;
    }

    td {
      padding: 6px 0px 6px 0px;
    }
  }
`;
