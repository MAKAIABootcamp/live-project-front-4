import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #03203a;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const Navigation = styled.nav`
  align-items: center;

  img {
    position: fixed;
    top: 10px;
    left: 10px;
    width: 100px;
    height: auto;
    margin-right: 750px;
    z-index: 999;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0;
    margin-right: 85px;
  }

  li {
    margin-right: 4rem;

    &:last-child {
      margin-right: 0;
    }
    ul {
      display:block; /* Ocultar submenús por defecto */
      flex-direction:column;
      position: absolute;
      background-color: #ffffff;
      padding: 10px;
      margin-top: 10px;
      li {
        margin: 5px 0;
      }
    }
    &:hover ul {
      display: block; /* Mostrar submenú al pasar el mouse */
    }
  }
`;

