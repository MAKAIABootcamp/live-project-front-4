import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../../redux/actions/coursesActions";
import {
  BackgroundSelection,
  CoverSelectionDetails,
  DataHV,
  InfoMainAvatarSelected,
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
  console.log(students, "estudiantes::::::");

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
                <SectionAvatar>
                  <AvatarPhoto>
                    <img
                      src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690454147/LIVE/Im%C3%A1genes/PhotoProfiles/png-transparent-avatar-general-human-office-person-smile-user-general-office-icon_izh8aq.png"
                      width={100}
                    />
                  </AvatarPhoto>
                  <MoreInfoAvatar>
                    <TitlesAvatar>
                      {selectedPerson?.nombreCompleto}
                    </TitlesAvatar>
                    <InfoMainAvatarSelected>
                      <DataInfo>
                        <div>
                          <h4>Estado:</h4>
                          <p>{selectedPerson?.estado}</p>
                        </div>
                        <div>
                          <h4>Nacionalidad:</h4>
                          <p>{selectedPerson?.nacionalidad}</p>
                        </div>
                        <div>
                          <h4>Correo:</h4>
                          <p>{selectedPerson?.correo}</p>
                        </div>
                      </DataInfo>

                      <DataInfo>
                        <div>
                          <h4>Tipo de documento:</h4>
                          <p>{selectedPerson?.tipoDocumento}</p>
                        </div>
                        <div>
                          <h4>Número de identificación:</h4>
                          <p>{selectedPerson?.numeroDocumento}</p>
                        </div>
                      </DataInfo>
                    </InfoMainAvatarSelected>
                  </MoreInfoAvatar>
                </SectionAvatar>

                <MoreInfoAvatar>
                  <TitlesAvatar>Información personal</TitlesAvatar>
                  <DataHV>
                    <DataInfo>
                      <div>
                        <h4>Edad:</h4>
                        <p>{selectedPerson?.edad} años</p>
                      </div>
                      <div>
                        <h4>Número de celular:</h4>
                        <p>{selectedPerson?.celular}</p>
                      </div>
                      <div>
                        <h4>Estrato socioeconómico:</h4>
                        <p>{selectedPerson?.estrato}</p>
                      </div>
                      <div>
                        <h4>
                          Departamento y ciudad/municipio <br></br>en el que
                          vive:
                        </h4>
                        <p>{selectedPerson?.departamento}</p>
                        <p>{selectedPerson?.ciudad}</p>
                      </div>
                      <div>
                        <h4>Dirección de residencia:</h4>
                        <p>{selectedPerson?.direccion}</p>
                      </div>
                    </DataInfo>
                    <DataInfo>
                      <div>
                        <h4>Se reconoce como (grupo étnico):</h4>
                        <p>{selectedPerson?.nivelEducativo}</p>
                      </div>
                      <div>
                        <h4>Se identifica con la siguiente población:</h4>
                        <p>{selectedPerson?.poblacion}</p>
                      </div>
                      <div>
                        <h4>
                          Nombre y parentezco <br></br>del contacto de
                          emergencia:
                        </h4>
                        <p>{selectedPerson?.contacto}</p>
                      </div>
                      <div>
                        <h4>
                          Teléfono del contacto de <br></br>emergencia:
                        </h4>
                        <p>{selectedPerson?.telefonoContacto}</p>
                      </div>
                      <div>
                        <h4>
                          Correo electrónico del <br></br> contacto de
                          emergencia:
                        </h4>
                        <p>{selectedPerson?.correoContacto}</p>
                      </div>
                    </DataInfo>
                  </DataHV>
                </MoreInfoAvatar>

                <MoreInfoAvatar>
                  <TitlesAvatar>Información académica y laboral</TitlesAvatar>
                  <DataHV>
                    <DataInfo>
                      <div>
                        <h4>
                          Nivel educativo alcanzado (y si obtuvo, su título):
                        </h4>
                        <p>{selectedPerson?.nivelEducativo}</p>
                      </div>
                      <div>
                        <h4>Ocupación actual:</h4>
                        <p>{selectedPerson?.ocupacion}</p>
                      </div>
                      <div>
                        <h4>Tiene acceso a:</h4>
                        <p>{selectedPerson?.equipos}</p>
                      </div>
                    </DataInfo>
                    <DataInfo>
                      <div>
                        <h4>Conocimientos previos:</h4>
                        <p>{selectedPerson?.conocimiento}</p>
                      </div>
                      <div>
                        <h4>Motivación:</h4>
                        <p>Me gustaría aprender más.</p>
                      </div>
                    </DataInfo>
                  </DataHV>
                </MoreInfoAvatar>

                <MoreInfoAvatar>
                  <TitlesAvatar>Hobbies y pasatiempos</TitlesAvatar>
                  <DataHV>
                    <DataInfo>
                      <div>
                        <h4>Ocupa su tiempo libre en:</h4>
                        <p>{selectedPerson?.tiempoLibre}</p>
                      </div>
                      <div>
                        <h4>La actividad que más disfruta realizar:</h4>
                        <p>{selectedPerson?.hobbie}</p>
                      </div>
                    </DataInfo>
                    <DataInfo>
                      <div>
                        <h4>Grupo o comunidad a la cual pertenece:</h4>
                        <p>Ninguna</p>
                      </div>
                    </DataInfo>
                  </DataHV>
                </MoreInfoAvatar>
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
                {students && students.length &&
                  students.map((student) => (
                    <InfoList
                      key={student.id}
                      onClick={() => handleProfileClick(student)}
                    >
                      <CircleProfile>
                        <img
                          src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690454147/LIVE/Im%C3%A1genes/PhotoProfiles/png-transparent-avatar-general-human-office-person-smile-user-general-office-icon_izh8aq.png"
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
                            value={
                              student.estado[student?.estado.length - 1] || ""
                            }
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
    </>
  );
};

export default ProfileSelected;
