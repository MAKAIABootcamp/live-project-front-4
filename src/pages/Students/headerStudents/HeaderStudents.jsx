import React, { useState } from "react";
import {
  BgDiv,
  ContainerHeader,
  ContainerHeaderLinks,
  ContainerHeaderLinksUnt,
  ContainerHeaderLogo,
  ContainerHeaderSignOff,
} from "./StyledHeaderStudents";
import house from "../../../assets/homeIcons.svg";
import logo from "../../../assets/LOGO BOOTCAMP.png";
import process from "../../../assets/setting.svg";
import perfil from "../../../assets/user.svg";
import benefits from "../../../assets/rocket-outline gris.svg";
import bootService from "../../../assets/robot gris.svg";
import avatar from "../../../assets/avatar.jpg";
import BurguerButton from "./BurguerButton";
import { NavLink } from "react-router-dom";

const HeaderStudents = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
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
          <figure>
            <img src={house} alt="IconsHouse" />
            <NavLink
              to={"/homestudents"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Home
            </NavLink>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={process} alt="Proceso" />
            <NavLink
              to={"/statestudents"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Proceso
            </NavLink>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={perfil} alt="Perfil" />
            <NavLink
              to={"/profilestudents"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Perfil
            </NavLink>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={benefits} alt="IconsHouse" />
            <NavLink
              to={"/benefitsStudents"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Beneficios
            </NavLink>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={bootService} alt="IconsHouse" />
            <NavLink
              to={"/bootservice"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Boot Service
            </NavLink>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderSignOff>
          <figure>
            <img src={avatar} alt="" />
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

export default HeaderStudents;
