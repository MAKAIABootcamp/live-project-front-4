import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BurguerButton from "../../../pages/Students/headerStudents/BurguerButton";
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
Item } from "../../componentsSuperUser/headerSuperUser/HeaderSuperUserStyled";

const HeaderSuperUser = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const [deployEstudiantes, setDeployEstudiantes] = useState(false);
  const [deployPerfil, setDeployPerfil] = useState(false);

  const toggleDeploy = (menu) => {
    setClicked(false);
    if (menu === "estudiantes") {
      setDeployEstudiantes((prevDeploy) => !prevDeploy);
      setDeployPerfil(false);
    } else if (menu === "perfil") {
      setDeployPerfil((prevDeploy) => !prevDeploy);
      setDeployEstudiantes(false);
    }
  };
  return (
    <ContainerHeader>
      <ContainerHeaderLogo>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </ContainerHeaderLogo>
      <ContainerHeaderLinks active={clicked}>
        <ContainerHeaderLinksUnt>
          <Item>
            <figure>
              <img src={house} alt="IconsHouse" />
              <NavLink
                to={"/homeSuperUser"}
                className={({ isActive, isPending }) =>
                  isPending ? "navlink" : isActive ? "navlink active" : "navlink"
                }
              >
                Home
              </NavLink>
            </figure>
          </Item>
        </ContainerHeaderLinksUnt>

        <ContainerHeaderLinksUnt>
          <Item onClick={() => toggleDeploy("estudiantes")}>
            <figure>
              <img src={process} alt="Proceso" />
              <NavLink
                to={"/studentSuperUser"}
                className={({ isActive, isPending }) =>
                  isPending ? "navlink" : isActive ? "navlink active" : "navlink"
                }
              >
                Estudiantes
              </NavLink>
            </figure>
          </Item>

          <SubItems className={`SubItems ${deployEstudiantes ? "deploySubItems" : ""}`}>
            <NavLink to={"/selectionSuperUser"}>
              <div>
                <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531243/LIVE/Im%C3%A1genes/Icons/grupo_1_bki7qd.png" width={20} />
                <p>Selección</p>
              </div>
            </NavLink>

            <NavLink to={"/cohortGroupTraining"}>
              <div>
                <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531248/LIVE/Im%C3%A1genes/Icons/huellas_qlv9uy.png" width={20} />
                <p>Formación</p>
              </div>
            </NavLink>

            <NavLink to={"/certificationSuperUser"}>
              <div>
                <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531233/LIVE/Im%C3%A1genes/Icons/cohete_p5wt0x.png" width={20} />
                <p>Certificación</p>
              </div>
            </NavLink>
          </SubItems>
        </ContainerHeaderLinksUnt>

        <ContainerHeaderLinksUnt>
          <Item>
            <figure>
              <img src={benefits} alt="IconsHouse" />
              <NavLink
                to={"/teamSuperUser"}
                className={({ isActive, isPending }) =>
                  isPending ? "navlink" : isActive ? "navlink active" : "navlink"
                }
              >
                Equipo
              </NavLink>
            </figure>
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
            >
              Cerrar sesión
            </NavLink>
          </figure>
        </ContainerHeaderSignOff>
      </ContainerHeaderLinks>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
    </ContainerHeader>
  );
};

export default HeaderSuperUser;

