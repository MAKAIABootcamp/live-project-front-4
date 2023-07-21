import styled from "styled-components";

export const DivGeneral = styled.div`
  margin-top: 70px;
`;

export const DivGeneralInformation = styled.div`
  display: flex;
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  h2 {
    color: #25abbc;
    margin-left: 50px;
  }
`;

export const DivInformation = styled.div`
  display: flex;
  margin-top: 50px;

  h2 {
    color: #25abbc;
  }
`;

export const Div = styled.div`
  display: flex;
  margin-left: 50px;
  img {
    border-radius: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 50px;
  }
  select {
    border: none;
    font-size: 1rem;
    border-radius: 8px;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

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
  }
`;
