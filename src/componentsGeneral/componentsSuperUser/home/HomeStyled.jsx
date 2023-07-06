import styled from "styled-components";

export const ImgFondo = styled.div`
  background-image: url("../../../assets/FONDO.png");
  background-repeat: no-repeat;
  background-position: center;
  width: 290px;
  height: 110px;
`;

export const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 5rem;

  /* float: right; */
`;

export const DivImg = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const Action = styled.div`
  /* position: absolute; */
  /* top: 95%; */
  /* right: 10px; */
  /* left: 10px; */
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
