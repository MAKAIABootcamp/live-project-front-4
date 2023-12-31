import styled from "styled-components";

export const Div = styled.div`
  display: flex;

  @media (min-width: 768px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 414px) {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
  }
`;

export const DivImgEquipo = styled.div`
  margin-top: 50px;
  text-align: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 50px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (max-width: 414px) {
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
    padding: 5px;
  }

  img {
    width: 345px;
    padding-top: 3px;

    @media screen and (max-width: 768px) {
      width: 310px;
      padding-top: 20px;
    }
    @media screen and (max-width: 414px) {
      width: 250px;
      padding-top: 0px;
    }
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    padding-top: 20px;
  }

  p {
    text-align: center;
    font-size: 1.3rem;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media screen and (max-width: 414px) {
      font-size: 15px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  img {
    width: 50%;
    height: auto;

    @media screen and (max-width: 768px) {
      width: 70%;
      padding-top: 80px;
    }
    @media screen and (max-width: 414px) {
      width: 70%;
      padding-top: 0;
    }
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
