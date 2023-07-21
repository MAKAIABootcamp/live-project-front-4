import React from "react";
import { Div, DivGeneral, Action, DivImgEquipo } from "./HomeStyled";
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
          <img src={logo} alt="Bootcamp" />
          <p>
            ¡Bienvenid@ de nuevo!
            <br />
            <br />
            Estamos encantados de tenerte a bordo <br /> y cumplir nuestro
            propósito de potenciar personas <br /> con experiencia de valor.
            <br />
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
