import styled from "styled-components";

export const Panel = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: 0.5s;
  h1 {
    color: #03203a;
  }
  p {
    color: #03203a;
  }
`;

export const DivTitleSearch = styled.div`
  display: flex;
  h1 {
    color: #25abbc;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex: 0 0 50%;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  flex-direction: column;
  position: relative;
  label {
    margin-bottom: 15px;
    color: #03203a;
  }
  p {
    margin-bottom: 50px;
    margin-top: -20px;
    font-size: 14px;
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
`;

export const Select = styled.select`
  height: 40px;
  width: 85%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  background-color: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 1rem;
`;

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

export const Action = styled.div`
  position: absolute;
  top: 95%;
  right: 10px;
  left: 10px;
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
