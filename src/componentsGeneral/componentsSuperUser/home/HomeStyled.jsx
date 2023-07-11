import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 375px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DivImgEquipo = styled.div`
margin-top:50px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  font-family:'Monserrat',sans-serif;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 2rem;
    text-align: left;
  }
`;

export const DivImg = styled.div`
  img {
    width: 100%;
    height: auto;
  }
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
  }
`;
