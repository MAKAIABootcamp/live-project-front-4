import React from "react";
import imagen404 from "../../assets/404-error.gif";
import { NotFoundContainer, Content, Button } from "./NotFoundStyled";
import { useNavigate } from "react-router-dom";

const NoFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/homeSuperUser");
  };
  return (
    <NotFoundContainer>
      <img src={imagen404} alt="404" />
      <Content>
        <h1>Página no encontrada</h1>
        <p>
          No se ha encontrado la página que buscas. <br />
          Puedes volver a la página anterior, visitar la página de inicio o
          ponerte en contacto con el administrador
        </p>
        <Button onClick={handleNavigate}>Inicio</Button>
      </Content>
    </NotFoundContainer>
  );
};

export default NoFound;
