import React from "react";
import {
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
import avatar from '../../../assets/avatar.jpg'

const HeaderStudents = () => {
  return (
    <ContainerHeader>
      <ContainerHeaderLogo>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </ContainerHeaderLogo>
      <ContainerHeaderLinks>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={house} alt="IconsHouse" />
            <h3>Home</h3>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={process} alt="Proceso" />
            <h3>Proceso</h3>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={perfil} alt="Perfil" />
            <h3>Perfil</h3>
          </figure>
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={benefits} alt="IconsHouse" />
            <h3>Beneficios</h3>
          </figure>  
        </ContainerHeaderLinksUnt>
        <ContainerHeaderLinksUnt>
          <figure>
            <img src={bootService} alt="IconsHouse" />
            <h3>Boot Service</h3>
          </figure>
        </ContainerHeaderLinksUnt>
      </ContainerHeaderLinks>
      <ContainerHeaderSignOff>
        <figure>
          <img src={avatar} alt="" />
          <h3>Cerrar sesión</h3>
        </figure>
      </ContainerHeaderSignOff>
    </ContainerHeader>
  );
};

export default HeaderStudents;
