import React from "react";
import { Div, DivGeneral, Action, DivImgEquipo } from "./HomeStyled";
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
          <div>
            <img src={logo} alt="Bootcamp" />
          </div>
          <p>
            ¡Bienvenid@ de nuevo!
            <br />
            Estamos encantados de tenerte a bordo y cumplir nuestro propósito{" "}
            <br /> de potenciar personas con experiencia de valor <br /> .
            <br />
            Esperamos trabajar juntos y lograr grandes cosas.
            <br />
            ¡Adelante y gracias por ser parte de nuestro equipo!
          </p>
          <Action>
            <button onClick={handleNavigate}>Cerrar sesión</button>
          </Action>
        </DivGeneral>
      </Div>
    </>
  );
};

export default Home;
