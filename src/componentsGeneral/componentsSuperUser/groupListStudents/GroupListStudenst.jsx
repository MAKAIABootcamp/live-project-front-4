import React, { useEffect, useState, useMemo } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { getStudentsProfileBenefits } from "../../../redux/actions/getStudentsProfileBenefits";
import { useDispatch } from "react-redux";
const GroupListStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { users, programa } = location.state || {}; // Obtén la lista de estudiantes y el programa de la ubicación actual
  const dispatch = useDispatch();
  // Filter the students based on the selected cohort's program

  useEffect(() => {
    dispatch(getStudentsProfileBenefits()).then((data) => {
      setStudents(data);
    });
  }, [dispatch]);

  const applyFilteredStudents = () => {
    const listAux = [];
    students.filter((s) =>
      users.forEach((u) => {
        const user = u;
        const student = s;
        console.log("User: ", user);
        console.log("Student", student);
        if (user.email === student.correo) {
          console.log("Entre TEST");
          console.log("userEmail TEST", user.email);
          console.log("estudianteEmail TEST", student.correo);
          listAux.push({
            celular: student.celular,
            correo: student.correo,
            conocimiento: student.conocimiento,
            programa: user.programa,
            nombreCompleto: user.nombre,
            edad: student.edad,
            contacto: student.contacto,
            departamento: student.departamento,
            direccion: student.direccion,
            ciudad: student.ciudad,
            correoContacto: student.correoContacto,
            equipos: student.equipos,
            numeroDocumento: student.numeroDocumento,
          });
        }
      })
    );
    console.log("filtrados", listAux);
    return listAux;
  };


  const handleSearch = (value) => {
    setSearchTerm(value);
    setShowNotFoundMessage(false); // Resetear el estado del mensaje al realizar una búsqueda
  };

  useEffect(() => {
    // Cuando se realiza una búsqueda y no hay resultados, mostrar el mensaje
    if (searchTerm && applyFilteredStudents().length === 0) {
      setShowNotFoundMessage(true);
    } else {
      setShowNotFoundMessage(false);
    }
  }, [searchTerm]);

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
              <strong>{programa}</strong>{" "}
              {/* Display the selected cohort's program */}
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
            {applyFilteredStudents().length > 0 ? (
              // Map through the filtered students to display the list
              applyFilteredStudents().map((student) => (
                <button
                  key={student.id}
                  onClick={() => navigateToStudentProfile(student)}
                >
                  <img src={imgprofile} alt="" /> {student.numeroDocumento}{" "}
                  <br />
                  {student.nombreCompleto}
                </button>
              ))
            ) : (
              <p>No hay estudiantes disponibles.</p>
            )}
          </div>
        </SectionListFinal>
      </BackgroundCertification>
    </>
  );
};

export default GroupListStudents;
