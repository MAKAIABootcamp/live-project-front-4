import styled from "styled-components";

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 10px;
  transition: 0.5s;
  margin-top:100px;
  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 0px;
  }
  @media screen and (max-width: 376px) {
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
  @media screen and (max-width: 376px) {
    padding: 0 0 0 0;
  }
  label {
    margin-bottom: 15px;
    color: #03203a;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  background-color: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 1rem;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 376px) {
    height: 40px;
    width: 100%;
  }
`;

export const Select = styled.select`
  height: 40px;
  width: 85%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  background-color: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 1rem;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 376px) {
    height: 40px;
    width: 107%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Action = styled.div`
  position: absolute;
  top: 100%;
  right: 10px;
  left: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    top: 103%;
    text-align: center;
  }
  @media screen and (max-width: 376px) {
    top: 105%;
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
