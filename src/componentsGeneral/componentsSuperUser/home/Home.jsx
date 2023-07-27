import React from "react";
import { Div, DivGeneral, Action, DivImgEquipo } from "./HomeStyled";
import Equipo from "../../../assets/loginActualizado.png";
import logo from "../../../assets/LOGO BOOTCAMP OSCURO.png";
import { useDispatch} from "react-redux";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import { logoutActionAsync } from "../../../redux/actions/userActions";

const Home = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    // Realiza la lógica de cierre de sesión aquí, por ejemplo, llamando a la acción de cierre de sesión en tu estado de Redux
    dispatch(logoutActionAsync());
  };

  return (
    <>
      <div>
        <HeaderSuperUser />
      </div>
      <div>
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
              <button onClick={handleLogout}>Cerrar sesión</button>
            </Action>
          </DivGeneral>
        </Div>
      </div>
    </>
  );
};

export default Home;
