import styled from "styled-components";

export const Row = styled.div`
  align-items: center;
  flex-basis: 50%;
  label {
    color: white;
    margin-top: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const RowDate = styled.div`
  align-items: center;
  display: flex;
  margin-top: 15px;
  @media screen and (max-width: 414px) {
  }

  label {
    color: white;
    margin-top: 15px;
  }
`;

export const Div = styled.div`
  margin-left: 15px;
`;
export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 414px) {
    align-items: center;
    justify-content: center;
  }

  button {
    border-radius: 4px;
    border: none;
    width: 100px;
    height: 30px;
    background-color: #eee420;
    cursor: pointer;
    &:hover {
      background-color: #1b7c8c;
    }
    @media (min-width: 768px) {
      width: 150px;
      height: 30px;
    }
    @media screen and (max-width: 414px) {
      width: 130px;
      height: 30px;
    }
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  margin-top: 30px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
