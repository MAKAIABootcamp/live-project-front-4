import React from "react";
import { ImgFondo, DivGeneral, DivImg, Action } from "./HomeStyled";
// import Fondo from "../../../assets/fondoo.jpeg"
import ImgBootcamp from "../../../assets/Image 2577.png";

const Home = () => {
  return (
    <>
      <ImgFondo>
        <div>
          <DivGeneral>
            <DivImg>
              <img src={ImgBootcamp} alt="Bootcamp" />
            </DivImg>
            <p>¡Bienvenid@ de nuevo!</p>
            <p>
              Estamos encantados de tenerte a bordo y confiamos en que tu
              experiencia y habilidades serán de gran valor.
            </p>
            <p>Esperamos trabajar juntos y lograr grandes cosas.</p>
            <p>¡Adelante y gracias por ser parte de nuestro equipo!</p>
            <Action>
              <button>Cerrar Sesión</button>
            </Action>
          </DivGeneral>
        </div>
      </ImgFondo>
    </>
  );
};

export default Home;
