import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import house from "../../../assets/homeIcons.svg";
import process from "../../../assets/setting.svg";
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
import BurguerButtonSU from "./BurguerButtonSU";
import { logoutActionAsync } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const HeaderSuperUser = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLogout = () => {
    // Realiza la lógica de cierre de sesión aquí, por ejemplo, llamando a la acción de cierre de sesión en tu estado de Redux
    dispatch(logoutActionAsync());
  };
  const [deployEstudiantes, setDeployEstudiantes] = useState(false);

  const toggleDeploy = (menu) => {
    setClicked(false);
    if (menu === "estudiantes") {
      setDeployEstudiantes((prevDeploy) => !prevDeploy);
    }
  };

  return (
    <ContainerHeader>
      <ContainerHeaderLogo>
        <figure>
          <img
            src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690287433/LIVE/Im%C3%A1genes/Icons/LOGO_MAKAIA_BLANCO_nvvqer.svg"
            alt="logo"
          />
        </figure>
      </ContainerHeaderLogo>
      <div className="burguer">
        <BurguerButtonSU clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      <ContainerHeaderLinks active={clicked}>
        <ContainerHeaderLinksUnt>
          <Item>
            <figure>
              <img src={house} alt="IconsHouse" />
              <NavLink
                to={"/homeSuperUser"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navlink"
                    : isActive
                    ? "navlink active"
                    : "navlink"
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
                  isPending
                    ? "navlink"
                    : isActive
                    ? "navlink active"
                    : "navlink"
                }
              >
                Estudiantes
              </NavLink>
            </figure>
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
              <NavLink
                to={"/teamSuperUser"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navlink"
                    : isActive
                    ? "navlink active"
                    : "navlink"
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
              onClick={handleLogout}
            >
              Cerrar sesión
            </NavLink>
          </figure>
        </ContainerHeaderSignOff>
      </ContainerHeaderLinks>
    </ContainerHeader>
  );
};

export default HeaderSuperUser;

// HeaderSuperUser.jsx

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   ContainerHeader,
//   ContainerHeaderLinks,
//   ContainerHeaderLinksUnt,
//   ContainerHeaderLogo,
//   ContainerHeaderSignOff,
//   SubItems,
//   Item,
//   BgDiv,
//   BurgerButtonWrapper,
// } from "./HeaderSuperUserStyled"; // Ajusta la ruta según la ubicación del archivo HeaderSuperUserStyled.jsx
// import house from "../../../assets/homeIcons.svg";
// import logo from "../../../assets/LOGO BOOTCAMP.png";
// import process from "../../../assets/setting.svg";
// import perfil from "../../../assets/user.svg";
// import benefits from "../../../assets/rocket-outline gris.svg";
// import avatar from "../../../assets/avatar.jpg";
// import BurguerButton from "../../../pages/Students/headerStudents/BurguerButton";

// const HeaderSuperUser = () => {
//   const [deployEstudiantes, setDeployEstudiantes] = useState(false);
//   const [deployPerfil, setDeployPerfil] = useState(false);
//   const [burgerOpen, setBurgerOpen] = useState(false); // Estado para controlar si el menú hamburguesa está abierto o cerrado

//   const toggleDeploy = (menu) => {
//     if (menu === "estudiantes") {
//       setDeployEstudiantes((prevDeploy) => !prevDeploy);
//       setDeployPerfil(false);
//     } else if (menu === "perfil") {
//       setDeployPerfil((prevDeploy) => !prevDeploy);
//       setDeployEstudiantes(false);
//     }
//   };

//   const handleBurgerClick = () => {
//     setBurgerOpen(!burgerOpen);
//   };

//   return (
//     <ContainerHeader>
//       <ContainerHeaderLogo>
//         <figure>
//           <img src={logo} alt="logo" />
//         </figure>
//       </ContainerHeaderLogo>

//       {/* Agregamos el botón del menú hamburguesa */}
//       <BurgerButtonWrapper>
//         <BurguerButton
//           handleClick={handleBurgerClick}
//           clicked={burgerOpen}
//         ></BurguerButton>
//       </BurgerButtonWrapper>

//       <ContainerHeaderLinks active={burgerOpen}>
//         <ContainerHeaderLinksUnt>
//           <Item>
//             <figure>
//               <img src={house} alt="IconsHouse" />
//               <NavLink to={"/homeSuperUser"} activeClassName="active">
//                 Home
//               </NavLink>
//             </figure>
//           </Item>
//         </ContainerHeaderLinksUnt>

//         <ContainerHeaderLinksUnt>
//           <Item onClick={() => toggleDeploy("estudiantes")}>
//             <figure>
//               <img src={process} alt="Proceso" />
//               <NavLink to={"/studentSuperUser"} activeClassName="active">
//                 Estudiantes
//               </NavLink>
//             </figure>
//           </Item>

//           {/* Agregamos el SubItems aquí */}
//           <SubItems style={{ display: deployEstudiantes ? "block" : "none" }}>
//             <NavLink to={"/selectionSuperUser"}>
//               <div>
//                 <img
//                   src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531243/LIVE/Im%C3%A1genes/Icons/grupo_1_bki7qd.png"
//                   width={20}
//                 />
//                 <p>Selección</p>
//               </div>
//             </NavLink>

//             <NavLink to={"/cohortGroupTraining"}>
//               <div>
//                 <img
//                   src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531248/LIVE/Im%C3%A1genes/Icons/huellas_qlv9uy.png"
//                   width={20}
//                 />
//                 <p>Formación</p>
//               </div>
//             </NavLink>

//             <NavLink to={"/certificationSuperUser"}>
//               <div>
//                 <img
//                   src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531233/LIVE/Im%C3%A1genes/Icons/cohete_p5wt0x.png"
//                   width={20}
//                 />
//                 <p>Certificación</p>
//               </div>
//             </NavLink>
//           </SubItems>
//         </ContainerHeaderLinksUnt>

//         {/* <ContainerHeaderLinksUnt>
//           <Item onClick={() => toggleDeploy("perfil")}>
//             <figure>
//               <img src={perfil} alt="Perfil" />
//               <NavLink to={"/profileSuperUser"} activeClassName="active">
//                 Perfil
//               </NavLink>
//             </figure>
//           </Item>

//           <SubItems style={{ display: deployPerfil ? "block" : "none" }}>
//             <NavLink to={'/profileSuperUser'}>
//               <div>
//                 <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689603697/LIVE/Im%C3%A1genes/Icons/editar_x3bkx2.png" width={20} />
//                 <p>Ver perfil</p>
//               </div>
//             </NavLink>
//           </SubItems>
//         </ContainerHeaderLinksUnt> */}
//         <ContainerHeaderLinksUnt>
//           <Item>
//             <figure>
//               <img src={benefits} alt="IconsHouse" />
//               <NavLink to={"/teamSuperUser"} activeClassName="active">
//                 Equipo
//               </NavLink>
//             </figure>
//           </Item>
//         </ContainerHeaderLinksUnt>

//         <ContainerHeaderSignOff>
//           <figure>
//             <img src={avatar} alt="" />
//             <NavLink activeClassName="active">
//               <p>Perfil</p>
//             </NavLink>
//           </figure>
//         </ContainerHeaderSignOff>

//         <ContainerHeaderSignOff>
//           <NavLink activeClassName="active">Cerrar sesión</NavLink>
//         </ContainerHeaderSignOff>
//       </ContainerHeaderLinks>

//       <BgDiv
//         active={deployEstudiantes || deployPerfil}
//         onClick={() => {
//           setDeployEstudiantes(false);
//           setDeployPerfil(false);
//         }}
//       ></BgDiv>
//     </ContainerHeader>
//   );
// };

// export default HeaderSuperUser;
