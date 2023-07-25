// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import house from "../../../assets/homeIcons.svg";
// import process from "../../../assets/setting.svg";
// import benefits from "../../../assets/rocket-outline gris.svg";
// import avatar from "../../../assets/avatar.jpg";
// import {
//   BgDiv,
//   ContainerHeader,
//   ContainerHeaderLinks,
//   ContainerHeaderLinksUnt,
//   ContainerHeaderLogo,
//   ContainerHeaderSignOff,
//   SubItems,
//   Item
// } from "../../componentsSuperUser/headerSuperUser/HeaderSuperUserStyled";
// import BurguerButtonSU from "./BurguerButtonSU";

// const HeaderSuperUser = () => {
//   const [clicked, setClicked] = useState(false);
//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   const [deployEstudiantes, setDeployEstudiantes] = useState(false);

//   const toggleDeploy = (menu) => {
//     if (menu === "estudiantes") {
//       setDeployEstudiantes((prevDeploy) => !prevDeploy);
//     }
//   };

//   return (
//     <ContainerHeader>
//       <ContainerHeaderLogo>
//         <figure>
//           <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690287433/LIVE/Im%C3%A1genes/Icons/LOGO_MAKAIA_BLANCO_nvvqer.svg" alt="logo" />
//         </figure>
//       </ContainerHeaderLogo>
//       <div className="burguer">
//         <BurguerButtonSU clicked={clicked} handleClick={handleClick} />
//       </div>
//       <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
//       <ContainerHeaderLinks active={clicked}>
//         <ContainerHeaderLinksUnt>
//           <Item>
//             <figure>
//               <img src={house} alt="IconsHouse" />
//               <NavLink
//                 to={"/homeSuperUser"}
//                 className={({ isActive, isPending }) =>
//                   isPending ? "navlink" : isActive ? "navlink active" : "navlink"
//                 }
//               >
//                 Home
//               </NavLink>
//             </figure>
//           </Item>
//         </ContainerHeaderLinksUnt>

//         <ContainerHeaderLinksUnt>
//           <Item onClick={() => toggleDeploy("estudiantes")}>
//             <figure>
//               <img src={process} alt="Proceso" />
//               <NavLink
//                 to={"/studentSuperUser"}
//                 className={({ isActive, isPending }) =>
//                   isPending ? "navlink" : isActive ? "navlink active" : "navlink"
//                 }
//               >
//                 Estudiantes
//               </NavLink>
//             </figure>
//           </Item>

//           <SubItems className={`SubItems ${deployEstudiantes ? "deploySubItems" : ""}`}>
//             <NavLink to={"/selectionSuperUser"}>
//               <div>
//                 <img
//                   src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069393/LIVE/Im%C3%A1genes/Icons/sociedad-unscreen_ga7d14.gif"
//                   width={20}
//                 />
//                 <p>Selección</p>
//               </div>
//             </NavLink>

//             <NavLink to={"/cohortGroupTraining"}>
//               <div>
//                 <img
//                   src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069904/LIVE/Im%C3%A1genes/Icons/video-conferencia-unscreen_ffjhza.gif"
//                   width={20}
//                 />
//                 <p>Formación</p>
//               </div>
//             </NavLink>

//             <NavLink to={"/certificationSuperUser"}>
//               <div>
//                 <img
//                   src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069112/LIVE/Im%C3%A1genes/Icons/graduacion-unscreen_zcnqgo.gif"
//                   width={20}
//                 />
//                 <p>Certificación</p>
//               </div>
//             </NavLink>

//             <NavLink to={"/certificationSuperUser"}>
//               <div>
//                 <img
//                   src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069973/LIVE/Im%C3%A1genes/Icons/mas-unscreen_k3zq7t.gif"
//                   width={20}
//                 />
//                 <p>Añadir estudiante</p>
//               </div>
//             </NavLink>
//           </SubItems>
//         </ContainerHeaderLinksUnt>

//         <ContainerHeaderLinksUnt>
//           <Item>
//             <figure>
//               <img src={benefits} alt="IconsHouse" />
//               <NavLink
//                 to={"/teamSuperUser"}
//                 className={({ isActive, isPending }) =>
//                   isPending ? "navlink" : isActive ? "navlink active" : "navlink"
//                 }
//               >
//                 Equipo
//               </NavLink>
//             </figure>
//           </Item>
//         </ContainerHeaderLinksUnt>
//         <ContainerHeaderSignOff>
//           <figure>
//             <NavLink to={"/profileSuperUser"}>
//               <img src={avatar} alt="" />
//             </NavLink>
          
//             <NavLink
//               className={({ isActive, isPending }) =>
//                 isPending ? "navlink" : isActive ? "navlink active" : "navlink"
//               }
//             >
//               Cerrar sesión
//             </NavLink>
//           </figure>
//         </ContainerHeaderSignOff>
//       </ContainerHeaderLinks>
//     </ContainerHeader>
//   );
// };

// export default HeaderSuperUser;


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
  Item
} from "../../componentsSuperUser/headerSuperUser/HeaderSuperUserStyled";
import BurguerButtonSU from "./BurguerButtonSU";

const HeaderSuperUser = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const [deployEstudiantes, setDeployEstudiantes] = useState(false);

  const toggleDeploy = (menu) => {
    if (menu === "estudiantes") {
      setDeployEstudiantes((prevDeploy) => !prevDeploy);
    }
  };

  return (
    <ContainerHeader>
      <ContainerHeaderLogo>
        <figure>
          <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690287433/LIVE/Im%C3%A1genes/Icons/LOGO_MAKAIA_BLANCO_nvvqer.svg" alt="logo" />
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
                <img
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069393/LIVE/Im%C3%A1genes/Icons/sociedad-unscreen_ga7d14.gif"
                  width={20}
                />
                <p>Selección</p>
              </div>
            </NavLink>

            <NavLink to={"/cohortGroupTraining"}>
              <div>
                <img
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069904/LIVE/Im%C3%A1genes/Icons/video-conferencia-unscreen_ffjhza.gif"
                  width={20}
                />
                <p>Formación</p>
              </div>
            </NavLink>

            <NavLink to={"/certificationSuperUser"}>
              <div>
                <img
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069112/LIVE/Im%C3%A1genes/Icons/graduacion-unscreen_zcnqgo.gif"
                  width={20}
                />
                <p>Certificación</p>
              </div>
            </NavLink>

            <NavLink to={"/certificationSuperUser"}>
              <div>
                <img
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690069973/LIVE/Im%C3%A1genes/Icons/mas-unscreen_k3zq7t.gif"
                  width={20}
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
    </ContainerHeader>
  );
};

export default HeaderSuperUser;
