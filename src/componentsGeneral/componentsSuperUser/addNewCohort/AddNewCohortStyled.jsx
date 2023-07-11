import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  label {
    color: white;
    width: 150px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;

  button {
    border-radius: 4px;
    width: 100px;
    height: 30px;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  margin: 0;
  margin-top: 100px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  margin-top: 100px;
`;
