import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BurguerButtonSU from "../../../pages/Students/headerStudents/BurguerButton";
import house from "../../../assets/homeIcons.svg";
import logo from "../../../assets/LOGO BOOTCAMP.png";
import process from "../../../assets/setting.svg";
import perfil from "../../../assets/user.svg";
import benefits from "../../../assets/rocket-outline gris.svg";
import avatar from "../../../assets/avatar.jpg";
import {
  BgDiv,
  ContainerHeader,
  ContainerHeaderLinks,
  ContainerHeaderLinksUnt,
  ContainerHeaderLogo,
  ContainerHeaderSignOff,
  SubItems,
  Item,
} from "../../componentsSuperUser/headerSuperUser/HeaderSuperUserStyled";
import { logoutActionAsync } from "../../../redux/actions/userActions";
import useScreenSize from "../../../hooks/Hooks";
import { useDispatch } from "react-redux";

const HeaderSuperUser = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const { width } = useScreenSize();
  
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLogout = () => {
    // Realiza la lógica de cierre de sesión aquí, por ejemplo, llamando a la acción de cierre de sesión en tu estado de Redux
    dispatch(logoutActionAsync());
  };
  const [deployEstudiantes, setDeployEstudiantes] = useState(false);
  const [deployPerfil, setDeployPerfil] = useState(false);

  const toggleDeploy = (menu) => {
    setClicked(false);
    if (menu === "estudiantes") {
      setDeployEstudiantes((prevDeploy) => !prevDeploy);
    }
  };

  return (
    <ContainerHeader>
      <ContainerHeaderLogo>7
        <figure>
          <img
            src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690287433/LIVE/Im%C3%A1genes/Icons/LOGO_MAKAIA_BLANCO_nvvqer.svg"
            alt="logo"
          />
        </figure>
      </ContainerHeaderLogo>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      <ContainerHeaderLinks active={clicked}>
        <ContainerHeaderLinksUnt>
          <Item>
            <figure>
              <img src={house} alt="IconsHouse" />
            </figure>
            <NavLink
              to={"/homeSuperUser"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Home
            </NavLink>
          </Item>
        </ContainerHeaderLinksUnt>

        <ContainerHeaderLinksUnt>
          <Item onClick={() => toggleDeploy("estudiantes")}>
            <figure>
              <img src={process} alt="Proceso" />
            </figure>
            <NavLink
              to={"/studentSuperUser"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Estudiantes
            </NavLink>
          </Item>
          <SubItems
            className={`SubItems ${deployEstudiantes ? "deploySubItems" : ""}`}
          >
            <NavLink to={"/selectionSuperUser"}>
              <div>
                <img
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069393/LIVE/Im%C3%A1genes/Icons/sociedad-unscreen_ga7d14.gif"
                  width={20}
                  alt="name"
                />
                <p>Selección</p>
              </div>
            </NavLink>

            <NavLink to={"/cohortGroupTraining"}>
              <div>
                <img
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069904/LIVE/Im%C3%A1genes/Icons/video-conferencia-unscreen_ffjhza.gif"
                  width={20}
                  alt="name"
                />
                <p>Formación</p>
              </div>
            </NavLink>

            <NavLink to={"/certificationSuperUser"}>
              <div>
                <img
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069112/LIVE/Im%C3%A1genes/Icons/graduacion-unscreen_zcnqgo.gif"
                  width={20}
                  alt="name"
                />
                <p>Certificación</p>
              </div>
            </NavLink>

            <NavLink to={"/formToAddStudent"}>
              <div>
                <img
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069973/LIVE/Im%C3%A1genes/Icons/mas-unscreen_k3zq7t.gif"
                  width={20}
                  alt="name"
                />
                <p>Añadir estudiante</p>
              </div>
            </NavLink>
          </SubItems>
        </ContainerHeaderLinksUnt>

        <ContainerHeaderLinksUnt>
          <Item>
            <figure>
              <img src={benefits} alt="IconsHouse" />
            </figure>
            <NavLink
              to={"/teamSuperUser"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Equipo
            </NavLink>
          </Item>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderSignOff>
          <figure>
            <NavLink to={"/profileSuperUser"}>
              <img src={avatar} alt="" />
            </NavLink>

            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
              onClick={handleLogout}
            >
              Cerrar sesión
            </NavLink>
          </figure>
        </ContainerHeaderSignOff>
      </ContainerHeaderLinks>
      {
        width <= 769 &&
        <div className="burguer">
          <BurguerButtonSU clicked={clicked} handleClick={handleClick} />
        </div>
      }
      
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
    </ContainerHeader>
  );
};

export default HeaderSuperUser;

