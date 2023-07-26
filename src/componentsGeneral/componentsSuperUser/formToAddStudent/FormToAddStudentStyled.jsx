import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #25abbc;
  margin-top: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

export const FormGroupSelect = styled.div`
  margin-bottom: 20px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #eee420;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ErrorText = styled.div`
  color: #03203a;
  font-size: 1rem;
  margin-top: 0.2rem;
`;
