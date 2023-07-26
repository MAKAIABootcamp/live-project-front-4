import React from "react";
import {
  DivGeneral,
  DivGeneralInformation,
  Div,
  DivInfo,
  DivText,
  DivButton,
  DivInformation,
  P,
  DivTitle,
} from "./StudentProfileBenefitsStyled";
import perfil from "../../../../assets/avatar.jpg";
import HeaderSuperUser from "../../headerSuperUser/HeaderSuperUser";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const StudentProfileBenefits = () => {
  const navigate = useNavigate();

  const handleNavigateEscortRoute = () => {
    navigate("/escortRoute");
  };
  const handleNavigatePerfilStudentsBenefits = () => {
    navigate("/RequestBenefis");
  };
  const handleNavigateBenefitsReceived = () => {
    navigate("/benefitsReceived");
  };
  const handleNavigateHome = () => {
    navigate("/homeSuperUser");
  };

  return (
    <div>
      <div>
        <HeaderSuperUser />
      </div>
      <DivGeneral>
        <DivTitle>
          <ArrowLeftOutlined onClick={handleNavigateHome} size={30} />
          <h2>Front-End/ Cohorte 7</h2>
        </DivTitle>
        <DivGeneralInformation>
          <Div>
            <img src={perfil} alt="" />
            <div>
              <p>Pepito Jaramillo</p>
              <p>Tipo de Ingreso</p>
              <p>Financiado por Confama</p>
              <select name="" id="">
                <option value="">Estado</option>
                <option value="">Fundamentos</option>
                <option value="">Profundización</option>
                <option value="">Certificado</option>
                <option value="">Reasignado</option>
                <option value="">Retiro Voluntario</option>
                <option value="">Decersión</option>
              </select>
            </div>
          </Div>

          <DivInfo>
            <P>Apoyo socioeconómico</P>
            <p>Correo: pepito@gmail.com </p>
            <p>Cedula: 25.638.632</p>
          </DivInfo>
        </DivGeneralInformation>

        <DivInformation>
          <DivText>
            <h2>Información personal</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2>Información academica y Personal</h2>
            <p>
              ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat..
            </p>
          </DivText>

          <DivButton>
            <button onClick={handleNavigateEscortRoute}>
              Ruta de Acompañamiento
            </button>
            <button onClick={handleNavigatePerfilStudentsBenefits}>
              Solicitud de beneficio
            </button>
            <button onClick={handleNavigateBenefitsReceived}>
              Beneficios recibidos
            </button>
          </DivButton>
        </DivInformation>
      </DivGeneral>
    </div>
  );
};

export default StudentProfileBenefits;
