import styled from "styled-components";

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 10px;
  transition: 0.5s;
  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 0px;
  }
  @media screen and (max-width: 414px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  h1 {
    color: #25abbc;
    font-size: 1.7rem;
    align-items: center;
    text-align: center;
  }
  p {
    font-size: 1.1rem;
    align-items: center;
    text-align: center;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex: 0 0 50%;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 414px) {
    padding: 0 0 0 0;
  }
  label {
    margin-bottom: 15px;
    color: #03203a;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    margin-top: 5px;
    @media screen and (max-width: 414px) {
      margin-top: 5px;
    }
  }
  input {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }

  select {
    width: 97%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    @media screen and (max-width: 768px) {
      width: 98%;
    }
  }
`;

export const Action = styled.div`
  margin-top: 2%;
  right: 10px;
  left: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 5%;
    text-align: center;
  }
  @media screen and (max-width: 414px) {
    margin-top: 10%;
  }
  button {
    color: #03203a;
    font-size: 1rem;
    background: #ede41f;
    border: none;
    border-radius: 1em;
    height: 35px;
    width: 180px;
  }
`;

export const ErrorText = styled.div`
  color: #03203a;
  font-size: 1rem;
  margin-top: 0.2rem;
`;
