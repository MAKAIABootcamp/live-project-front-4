import { styled } from "styled-components";

export const ContainerBenefitStudents = styled.div`
  @media screen and (max-width: 1440px) {
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

    @media screen and (max-width: 769px) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 40px;
      height: 90vh;
    }

    @media screen and (max-width: 414px) {
      height: 120vh;
    }
  }
`;
export const ApplicationForBenefits = styled.div`
  @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dee1e6;
    border-radius: 10px;
    height: 110vh;

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

      label {
        font-size: 18px;
        margin-top: 10px;
      }

      select {
        padding: 10px 15px;
        border: none;
      }
    }
  }
  @media screen and (max-width: 769px) {
    height: 60vh;
    margin-bottom: 50px;
    div {
      h2 {
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 414px) {
    width: 80%;
    height: 60vh;
  }
  div {
    padding: 0px 120px;
  }
`;

export const InputTextArea = styled.section`
  @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    textarea {
      border: none;
    }
  }
  @media screen and (max-width: 414px) {
    justify-content: center;
    align-items: center;
  }
  textarea {
    width: 250px;
    height: 110px;
  }
`;

export const ButtonBenefits = styled.section`
  @media screen and (max-width: 1440px) {
    display: flex;
    margin-top: -5px;
    button {
      padding: 10px 70px;
      border-radius: 50px;
      background-color: #eee420;
      border: none;
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 10px;
    }
  }
`;

export const BenefitsReceived = styled.div`
  @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dee1e6;
    border-radius: 10px;
    height: 80vh;
    margin-top: -60px;
    margin-bottom: 50px;

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
  }
  @media screen and (max-width: 769px) {
    height: 40vh;
    width: 93%;
  }
  @media screen and (max-width: 414px) {
    width: 95%;

    h2 {
      font-size: 18px;
      text-align: center;
    }

    div {
      padding: 0px 140px;
    }
  }
`;

export const TableBenefits = styled.table`
  @media screen and (max-width: 1440px) {
    background-color: white;
    margin-top: 15px;

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
  }
  @media screen and (max-width: 769px) {
    th {
      padding: 15px 25px;
    }

    td {
      padding: 6px 0px 6px 0px;
    }
  }
  @media screen and (max-width: 414px) {
    th {
      padding: 5px;
    }

    td {
      padding: 6px 0px 6px 0px;
    }
  }
`;
