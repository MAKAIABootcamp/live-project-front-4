import styled from "styled-components";

export const DivGeneral = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

export const DivButton = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 15%;
  button {
    height: 50px;
    border: none;
    background-color: #ececec;
    cursor: pointer;
    transition: background-color 0.3s;
    :hover {
      background-color: yellow;
    }
  }
`;