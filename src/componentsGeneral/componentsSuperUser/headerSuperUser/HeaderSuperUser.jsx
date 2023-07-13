import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BgDiv, 
  ContainerHeader,
  ContainerHeaderLinks,
  ContainerHeaderLinksUnt,
  ContainerHeaderLogo,
  ContainerHeaderSignOff, } from "../../../pages/Students/headerStudents/StyledHeaderStudents";
import BurguerButton from '../../../pages/Students/headerStudents/BurguerButton'
import house from "../../../assets/homeIcons.svg";
import logo from "../../../assets/LOGO BOOTCAMP.png";
import process from "../../../assets/setting.svg";
import perfil from "../../../assets/user.svg";
import benefits from "../../../assets/rocket-outline gris.svg";
import bootService from "../../../assets/robot gris.svg";
import avatar from "../../../assets/avatar.jpg";

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #eee420;
  }
`;
const StyledLinkLi = styled(Link)`
  color: #000000;
  text-decoration: none;
  &:hover {
    background-color: #eee420;
    color: #000000;
  }
`;

const HeaderSuperUser = () => {

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
              to={"/homeSuperUser"}
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
              to={"/studentSuperUser"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Estudiantes
            </NavLink>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={perfil} alt="Perfil" />
            <NavLink
              to={"/profileSuperUser"}
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
              to={"/teamSuperUser"}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              Equipo
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

export default HeaderSuperUser;
