import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import { getStudentsProfileBenefits } from "../../../../redux/actions/getStudentsProfileBenefits";
import { useParams } from "react-router-dom";

const StudentProfileBenefits = ({
  estudiantes,
  getStudentsProfileBenefits,
}) => {
  const { document } = useParams(); // Obtenemos el ID del estudiante de la URL
  console.log(useParams(), "este es el numero de documento del estudiantes");

  const estudiante = estudiantes.find(
    (estudiante) => estudiante.numeroDocumento === document
  );
  console.log(estudiante, "documento");

  useEffect(() => {
    // Al cargar el componente, obtiene los datos de Firestore
    getStudentsProfileBenefits();
  }, [getStudentsProfileBenefits]);

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

      <DivGeneral key={estudiante.id}>
        <DivTitle>
          <ArrowLeftOutlined onClick={handleNavigateHome} size={30} />
          <h2>Front-End/ Cohorte 7</h2>
        </DivTitle>
        <DivGeneralInformation>
          <Div>
            <img src={perfil} alt="" />
            <div>
              <p>{estudiante.nombreCompleto}</p>
              <p>{estudiante.numeroDocumento}</p>
              <p>Financiado por Confama</p>
              <P>Apoyo socioeconómico</P>
            </div>
          </Div>

          <DivInfo>
            <p>Celular: {estudiante.celular}</p>
            <p>{estudiante.correo}</p>
          </DivInfo>
        </DivGeneralInformation>

        <DivInformation>
          <DivText>
            <h2>Información personal</h2>
            <p>
              Tipo de documento: {estudiante.tipoDocumento} <br />
              Edad: {estudiante.edad} <br />
              Estrato: {estudiante.estrato}
              <br />
              Contacto: {estudiante.contacto} <br />
              Cuidad: {estudiante.ciudad} <br />
              Direccion: {estudiante.direccion} <br />
              Conocimiento: {estudiante.conocimiento} <br />
              Correo contacto: {estudiante.correoContacto} <br />
              Departamento {estudiante.departamento}
            </p>

            <h2>Información academica</h2>
            <p>
              hobbies: {estudiante.hobbie} <br />
              motivacion: {estudiante.motivacion} <br />
              nacionalidad: {estudiante.nacionalidad} <br />
              nivel educativo: {estudiante.nivelEducativo} <br />
              ocupacion: {estudiante.ocupacion} <br />
              poblacion: {estudiante.poblacion} <br />
              raza: {estudiante.raza} <br />
              sexo: {estudiante.sexo} <br />
              telefono de contacto: {estudiante.telefonoContacto} <br />
              tiempo libre:{estudiante.tiempoLibre}
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

const mapStateToProps = (state) => ({
  estudiantes: state.studentReducer.estudiantes,
  error: state.studentReducer.error,
});

const mapDispatchToProps = {
  getStudentsProfileBenefits,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentProfileBenefits);
