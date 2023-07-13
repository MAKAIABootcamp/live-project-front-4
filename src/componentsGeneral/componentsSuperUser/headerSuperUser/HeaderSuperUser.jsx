import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderContainer, Navigation } from "./HeaderSuperUserStyled"
// import ImgBootcamp from "../../../assets/Image 2577.png";
// import azul from "../../../assets/azul.jpg";
import logo from '../../../assets/LOGO BOOTCAMP.png'

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
  return (
    <HeaderContainer>
      <Navigation>
        <ul>
          <img src={logo} alt="Bootcamp" />
          <li>
            <StyledLink to="/homeSuperUser">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/studentSuperUser">Estudiantes</StyledLink>

            <ul>
              <li>
                <StyledLinkLi to="/selectionSuperUser">Selección</StyledLinkLi>
              </li>
              <li>
                <StyledLinkLi to="/formationSuperUser">Formación</StyledLinkLi>
              </li>
              <li>
                <StyledLinkLi to="/certificationSuperUser">Certificación</StyledLinkLi>
              </li>
            </ul>
          </li>
          <li>
            <StyledLink to="/teamSuperUser">Equipo</StyledLink>
          </li>
          <li>
            <StyledLink to="#">Mi Perfil</StyledLink>
            <ul>
              <li>
                <StyledLinkLi to="/profileSuperUser">Ver perfil</StyledLinkLi>
              </li>
            </ul>
          </li>

          <li>
            {/* <img src={azul} alt="Avatar" /> */}
            <StyledLink to="#">Cerrar Sesión</StyledLink>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default HeaderSuperUser;
