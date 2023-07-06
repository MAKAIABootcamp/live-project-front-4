import styled from "styled-components";

export const DivProfile = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export const Div = styled.div`
  img {
    /* width: 13%; */
    width: 150px;
    height: auto;
    border-radius: 100rem;
  }
`;

export const DivInput = styled.div`
  text-align: center;
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

export const Form = styled.form`
  padding: 10px;
  /* align-items: center;
  text-align: center; */
`;

export const Action = styled.div`
  button {
    color: #03203a;
    font-size: 1rem;
    background: #ede41f;
    border: none;
    border-radius: 1em;
    height: 35px;
    width: 180px;
    margin-top: 15px;
  }
`;
