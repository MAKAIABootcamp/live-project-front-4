import styled from "styled-components";

export const DivDiv = styled.div``;

export const DivProfile = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  height: auto;
  border-radius: 100rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100rem;
    transition: opacity 0.3s ease-in-out;
    @media (max-width: 768px) {
      width: 150%;
      height: 150%;
    }
    @media (max-width: 414px) {
      width: 120%;
      height: 120%;
    }
  }
`;

export const DivInput = styled.div`
  text-align: center;
  align-items: center;
  vertical-align: middle;
  label {
    color: #03203a;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }
  p {
    margin-bottom: 50px;
    margin-top: -20px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 30%;
  margin-bottom: 20px;
  padding-left: 1rem;
  margin-left: 15px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  display: inline-block;
  vertical-align: middle;
`;

export const Form = styled.form``;

export const Action = styled.div`
  button {
    color: #03203a;
    font-size: 1rem;
    background: #ede41f;
    border: none;
    border-radius: 1em;
    height: 35px;
    width: 180px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      background-color: #25abbc;
      color: white;
    }
  }
`;
