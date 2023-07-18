import React from "react";

import { Div, DivGeneral, Action, DivImgEquipo, Img } from "./HomeStyled";
import Equipo from "../../../assets/loginActualizado.png";
import logo from "../../../assets/LOGO BOOTCAMP OSCURO.png";
import { useNavigate } from "react-router-dom";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
<HeaderSuperUser />
      <Div>
        <DivImgEquipo>
          <img src={Equipo} alt="equipo" />
        </DivImgEquipo>

        <DivGeneral>
          <div>
            <img src={logo} alt="Bootcamp" />
          </div>
          <p>
            ¡Bienvenid@ de nuevo!
            <br />
            Estamos encantados de tenerte a bordo y confiamos en que <br /> tu
            experiencia y habilidades serán de gran valor.
            <br />
            Esperamos trabajar juntos y lograr grandes cosas.
            <br />
            ¡Adelante y gracias por ser parte de nuestro equipo!
          </p>
          <Action>
            <button onClick={handleNavigate}>Cerrar Sesión</button>
          </Action>
        </DivGeneral>
      </Div>
    </>
  );
};

export default Home;
