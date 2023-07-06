import React from "react";
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
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="#">Estudiantes</StyledLink>

            <ul>
              <li>
                <StyledLinkLi to="#">Selección</StyledLinkLi>
              </li>
              <li>
                <StyledLinkLi to="#">Formación</StyledLinkLi>
              </li>
              <li>
                <StyledLinkLi to="#">Certificación</StyledLinkLi>
              </li>
            </ul>
          </li>
          <li>
            <StyledLink to="#">Equipo</StyledLink>
          </li>
          <li>
            <StyledLink to="#">Mi Perfil</StyledLink>
            <ul>
              <li>
                <StyledLinkLi to="#">Ver perfil</StyledLinkLi>
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