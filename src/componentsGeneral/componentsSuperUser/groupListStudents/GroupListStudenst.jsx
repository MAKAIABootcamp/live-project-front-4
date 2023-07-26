import React, { useEffect, useState } from "react";
import Back from "../../../assets/devolver.png";
import BarSearch from "../../barSearch/BarSearch";
import {
  BackgroundCertification,
  SectionBarCertification,
  TitleCourseFinal,
  Certified,
  SectionListFinal,
  ArrowBackCertification,
  DivNotFoundCertified,
} from "./GroupListStudentsStyled";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import imgprofile from "../../../assets/pending.png";
import { connect } from "react-redux";
import { getStudentsProfileBenefits } from "../../../redux/actions/getStudentsProfileBenefits";
import { useNavigate } from "react-router-dom";

const GroupListStudenst = ({
  estudiantes = [],
  error,
  getStudentsProfileBenefits,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getStudentsProfileBenefits();
  }, [getStudentsProfileBenefits]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setShowNotFoundMessage(false); // Resetear el estado del mensaje al realizar una búsqueda
  };

  const filteredStudents = estudiantes.filter((estudiante) => {
    if (!searchTerm) {
      return true;
    }

    return (
      estudiante.nombreCompleto
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      estudiante.numeroDocumento.includes(searchTerm)
    );
  });

  useEffect(() => {
    // Cuando se realiza una búsqueda y no hay resultados, mostrar el mensaje
    if (searchTerm && filteredStudents.length === 0) {
      setShowNotFoundMessage(true);
    } else {
      setShowNotFoundMessage(false);
    }
  }, [searchTerm, filteredStudents]);

  const cohortGroupTraining = () => {
    navigate("/cohortGroupTraining");
  };

  const navigateToStudentProfile = (estudiante) => {
    navigate(`/studentProfileBenefits/${estudiante.numeroDocumento}`);
  };

  return (
    <>
      <HeaderSuperUser />
      <BackgroundCertification>
        <ArrowBackCertification
          src={Back}
          width={20}
          onClick={cohortGroupTraining}
        />
        <div>
          <TitleCourseFinal>
            <Certified>
              <strong>Front - End / Cohorte 7</strong>
            </Certified>
          </TitleCourseFinal>
        </div>
        <SectionBarCertification>
          <BarSearch onSearch={handleSearch} />
        </SectionBarCertification>
        <SectionListFinal>
          <div>
            <>
              {showNotFoundMessage && (
                <DivNotFoundCertified>
                  <img
                    src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689736902/LIVE/Im%C3%A1genes/Icons/cerebro-unscreen_rdmhx5.gif"
                    width={200}
                    alt="No se han encontrado resultados"
                  />
                  <p>No se han encontrado los perfiles que buscas.</p>
                </DivNotFoundCertified>
              )}
            </>
            {filteredStudents.length > 0 ? (
              // Renderiza solo el estudiante seleccionado en lugar de todos los estudiantes
              <button
                key={filteredStudents[0].id}
                onClick={() => navigateToStudentProfile(filteredStudents[0])}
              >
                <img src={imgprofile} alt="" />{" "}
                {filteredStudents[0].nombreCompleto} <br />
                {filteredStudents[0].numeroDocumento}
              </button>
            ) : (
              <p>No hay estudiantes disponibles.</p>
            )}
          </div>
        </SectionListFinal>
      </BackgroundCertification>
    </>
  );
};

const mapStateToProps = (state) => ({
  estudiantes: state.studentReducer.estudiantes,
  error: state.studentReducer.error,
});

const mapDispatchToProps = {
  getStudentsProfileBenefits,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupListStudenst);
