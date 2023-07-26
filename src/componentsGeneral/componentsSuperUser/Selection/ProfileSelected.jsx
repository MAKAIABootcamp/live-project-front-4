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

const ProfileSelected = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = location.state;
  console.log("\n::Curso seleccionado", selectedCourse);

  const [filteredStudentSelection, setFilteredStudentSelection] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [profileSelected, setProfileSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminAndStudentsData, setAdminAndStudentsData] = useState([]);
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [studentFilterInfo, setStudentFilterInfo] = useState([]);

  const dispatch = useDispatch();
  const collectionStudents = "Estudiantes";

  useEffect(() => {
    dispatch(getStudents(collectionStudents)).then((data) => {
      setStudentsInfo(data);
    });
  }, [dispatch]);

  useEffect(() => {
    const filteredStudents = studentsInfo.filter((s) =>
      adminAndStudentsData.some((u) => u.info.email === s.info.correo)
    );

    setFilteredStudentSelection(filteredStudents);
  }, [studentsInfo, adminAndStudentsData]);

  console.log("studentsInfo", studentsInfo)

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
                <p>Nombre: {selectedPerson.info.nombre}</p>
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
                  <ArrowBack src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689531239/LIVE/Im%C3%A1genes/Icons/devolver_vmdk04.png" width={20} onClick={toSelection} />
                  <div>
                    <p>{selectedCourse?.course}</p>
                  </div>
                </CourseSelected>
              </div>
              <ListGeneral>
                {studentsInfo.map((student) => (
                  <InfoList
                    key={student.id}
                    onClick={() => handleProfileClick(student)}
                  >
                    <CircleProfile>
                      <img src={student.info.perfil} width={50} alt="" />
                    </CircleProfile>
                    <div>
                      <p> {student.info.nombre}</p>
                    </div>
                    <StyleSelected>
                      <form action="">
                        <select name="" id="">
                          <option value="Selecciona un estado">Selecciona un estado</option>
                          <option value="Selección">Selección</option>
                          <option value="Admitid@">Admitid@</option>
                          <option value="Formación">Formación</option>
                          <option value="Certificación">Certificación</option>
                        </select>
                      </form>
                    </StyleSelected>
                    <StyleStatus>

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
          comments={selectedPerson.info.comments}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProfileSelected;

