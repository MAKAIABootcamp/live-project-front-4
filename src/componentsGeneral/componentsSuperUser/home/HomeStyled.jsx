import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

export const DivImgEquipo = styled.div`
  margin-top: 40px;
  text-align: center;
  align-items: center;
  img {
    width: 530px;

    @media screen and (max-width: 768px) {
      width: 450px;
    }

    @media screen and (max-width: 376px) {
      width: 350px;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 2rem;
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
  }

  img {
    width: 80%;
    height: auto;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 2rem;
  }
`;

export const Action = styled.div`
  margin-top: 20px;
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
