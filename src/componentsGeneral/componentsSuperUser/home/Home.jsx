import React from "react";
import { Div, DivGeneral, DivImg, Action, DivImgEquipo } from "./HomeStyled";
import Equipo from "../../../assets/loginActualizado.png";
import logo from "../../../assets/LOGO BOOTCAMP OSCURO.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <Div>
        <DivImgEquipo>
          <img src={Equipo} alt="equipo" />
        </DivImgEquipo>

        <DivGeneral>
          <DivImg>
            <img src={logo} alt="Bootcamp" />
          </DivImg>
          <p>¡Bienvenid@ de nuevo!</p>
          <p>
            Estamos encantados de tenerte a bordo y confiamos en que tu
            experiencia y habilidades serán de gran valor.
          </p>
          <p>Esperamos trabajar juntos y lograr grandes cosas.</p>
          <p>¡Adelante y gracias por ser parte de nuestro equipo!</p>
          <Action>
            <button onClick={handleNavigate}>Cerrar Sesión</button>
          </Action>
        </DivGeneral>
      </Div>
    </>
  );
};

export default Home;
