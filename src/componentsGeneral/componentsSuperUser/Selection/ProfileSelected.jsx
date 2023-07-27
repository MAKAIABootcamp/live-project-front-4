import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../../redux/actions/coursesActions";
import {
  BackgroundSelection,
  CoverSelectionDetails,
  DataHV,
} from "./SelectionStyle";
import {
  TitleSelection,
  ProfileContent,
  SectionAvatar,
  AvatarData,
  DataInfo,
  MoreInfoAvatar,
  TitlesAvatar,
  ScrollInfo,
  AvatarPhoto,
  ContentListInfo,
  ListSelected,
  CourseSelected,
  ArrowBack,
  ListGeneral,
  InfoList,
  StyleStatus,
  CircleProfile,
  StyleSelected,
} from "./SelectionStyle";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import BarSearch from "../../barSearch/BarSearch";
import CopyCommentsPopup from "./CopyCommentsPopup";
import {
  getStudentByCourseActionAsync,
  updateStudentStateActionAsync,
} from "../../../redux/actions/studentAction";

const ProfileSelected = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedCourse = location.state;

  const { students } = useSelector((store) => store.student);
  console.log(students);

  const [filteredStudentSelection, setFilteredStudentSelection] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [profileSelected, setProfileSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminAndStudentsData, setAdminAndStudentsData] = useState([]);
  const [studentsInfo, setStudentsInfo] = useState([]);


  useEffect(() => {
    dispatch(getStudentByCourseActionAsync(selectedCourse?.course));
  }, [dispatch, selectedCourse?.course]);

  // useEffect(() => {

  //   dispatch(getStudents(collectionStudents)).then((data) => {
  //     setStudentsInfo(data);
  //     console.log(data)
  //   });
  // }, [dispatch]);

  useEffect(() => {
    const filteredStudents = studentsInfo.filter((s) =>
      adminAndStudentsData.some((u) => u.info.email === s.info.correo)
    );

    console.log(filteredStudents);
    setFilteredStudentSelection(filteredStudents);
  }, [studentsInfo, adminAndStudentsData]);

  console.log("studentsInfo", studentsInfo);

  const toSelection = () => {
    navigate("/selectionSuperUser");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleProfileClick = (student) => {
    setSelectedPerson(student);
    setProfileSelected(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  const changeStudentState = (e, id, estado) => {
    console.log(e.target.value);
    if (e.target.value) {
      const nuevoEstado = [...estado, e.target.value];
      dispatch(updateStudentStateActionAsync(id, nuevoEstado));
    }
  };

  return (
    <>
      <HeaderSuperUser />
      <BackgroundSelection>
        <TitleSelection>Selección</TitleSelection>
        <BarSearch onSearch={handleSearch} />
        <ContentListInfo>
          <div>
            {selectedPerson ? (
              <ProfileContent>
                {/* Mostrar detalles del perfil seleccionado */}
                <h2>Detalles del perfil seleccionado:</h2>
                <p>Tipo de documento: {selectedPerson?.tipoDocumento}</p>
                <p>Número de documento: {selectedPerson?.numeroDocumento}</p>
                <p>Nombre: {selectedPerson?.nombreCompleto}</p>
                <p>Edad: {selectedPerson?.edad}</p>
                <p>Email: {selectedPerson?.correo}</p>
                <p>Departamento: {selectedPerson?.departamento}</p>
                <p>ciudad: {selectedPerson?.ciudad}</p>
                <p>Dirección: {selectedPerson?.direccion}</p>
                <p>Estrato: {selectedPerson?.estrato}</p>
                <p>Número de Celular: {selectedPerson?.celular}</p>
                <p>Nacionalidad: {selectedPerson?.nacionalidad}</p>
                <p>Conocimiento: {selectedPerson?.conocimiento}</p>
                
                {/* Agrega aquí otros detalles que deseas mostrar */}
              </ProfileContent>
            ) : (
              <div>
                <CoverSelectionDetails
                  src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689684710/LIVE/Im%C3%A1genes/Covers/PORTADA_SELECTION_ncugeo.png"
                  alt=""
                />
              </div>
            )}
          </div>
          <div>
            <ListSelected>
              <div>
                <CourseSelected>
                  <ArrowBack
                    src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531239/LIVE/Im%C3%A1genes/Icons/devolver_vmdk04.png"
                    width={20}
                    onClick={toSelection}
                  />
                  <div>
                    <p>{selectedCourse?.course}</p>
                  </div>
                </CourseSelected>
              </div>
              <ListGeneral>
                {students.length &&
                  students.map((student) => (
                    <InfoList
                      key={student.id}
                      onClick={() => handleProfileClick(student)}
                    >
                      <CircleProfile>
                        <img
                          src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690287433/LIVE/Im%C3%A1genes/Icons/LOGO_MAKAIA_OSCURO_njv30m.svg"
                          width={50}
                          alt=""
                        />
                      </CircleProfile>
                      <div>
                        <p> {student?.nombreCompleto}</p>
                      </div>
                      <StyleSelected>
                        <form action="">
                          <select
                            name=""
                            id=""
                            value={student.estado[student?.estado.length-1]||""}
                            onChange={(e) =>
                              changeStudentState(e, student.id, student.estado)
                            }
                          >
                            <option value="">Selecciona un estado</option>
                            <option value="selección">Selección</option>
                            <option value="Admitid@">Admitid@</option>
                            <option value="Formación">Formación</option>
                            <option value="Certificación">Certificación</option>
                          </select>
                        </form>
                      </StyleSelected>
                      <StyleStatus>
                      {/* <img src={listSelected.status} width={30} /> Icono de check, pendiente o rechazado*/}
                                        {/* <p>Aquí va la fecha del status</p> */}
                      </StyleStatus>
                    </InfoList>
                  ))}
              </ListGeneral>
            </ListSelected>
          </div>
        </ContentListInfo>
      </BackgroundSelection>

      {/* Ventana emergente */}
      {selectedPerson && isModalOpen && (
        <CopyCommentsPopup
          comments={selectedPerson?.info?.comments}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProfileSelected;
