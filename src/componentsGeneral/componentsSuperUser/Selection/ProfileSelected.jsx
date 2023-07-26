import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesSelection } from '../../../redux/actions/coursesActions';
import back from '../../../assets/devolver.png';
import {
  BackgroundSelection,
  CoverSelectionDetails,
  DataHV,
  DivNotFound,
} from './SelectionStyle';
import {
  TitleSelection,
  SearchSelection,
  SearchAndBack,
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
  ArrowBackSelection,
  StyleSelected,
} from './SelectionStyle';
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser';
import BarSearch from '../../barSearch/BarSearch';
import CopyCommentsPopup from './CopyCommentsPopup';

const ProfileSelected = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = location.state;

  const [filteredStudentSelection, setFilteredStudentSelection] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [profileSelected, setProfileSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const coursesData = useSelector((state) => state.courses.coursesData);
  const nameCollection = 'Selección';

  useEffect(() => {
    dispatch(getCoursesSelection(nameCollection));
  }, [dispatch, nameCollection]);

  const toSelection = () => {
    navigate('/selectionSuperUser');
  };

  useEffect(() => {
    const filteredList = selectedCourse?.groupSelection.filter((mapea) =>
      mapea.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Initialize status.option property if it's missing for any profile
    const profilesWithStatus = filteredList?.map((profile) => {
      return {
        ...profile,
        status: {
          option: profile.status?.option || '',
          admitido: profile.status?.admitido || '',
        },
      };
    });

    setFilteredStudentSelection(profilesWithStatus || []);
  }, [selectedCourse, searchTerm]);

  const opcionesDisponibles = [
    'Entrevista',
    'Documentación',
    'Admitido',
    'No admitido',
    'Desistió',
    'En formación', // Agregamos la opción "En formación"
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleProfileClick = (mapea) => {
    setSelectedPerson(mapea);
    setProfileSelected(true);
  };

  const handleOpcionChange = (event, personId) => {
    const { name, value } = event.target;
    setFilteredStudentSelection((prevSelection) =>
      prevSelection.map((person) =>
        person.id === personId
          ? name === 'opcion'
            ? { ...person, status: { ...person.status, option: value, admitido: '' } }
            : { ...person, status: { ...person.status, admitido: value } }
          : person
      )
    );

    // Abrir la ventana emergente automáticamente cuando cambie cualquier estado
    const selectedPerson = filteredStudentSelection.find((person) => person.id === personId);
    setSelectedPerson(selectedPerson);
    setIsModalOpen(true);
  };

  const handleAdmitidoChange = (event, personId) => {
    const { value } = event.target;
    setFilteredStudentSelection((prevSelection) =>
      prevSelection.map((person) =>
        person.id === personId ? { ...person, status: { ...person.status, admitido: value } } : person
      )
    );
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
                <SectionAvatar>
                  <AvatarPhoto>
                    <img src={selectedPerson.profile} alt="" className="profileSelected" />
                  </AvatarPhoto>
                  <div>
                    <TitlesAvatar>{selectedPerson.name}</TitlesAvatar>
                    <AvatarData>
                      <DataInfo>
                        <div>
                          <h4>Tipo de ingreso:</h4>
                          <p>Financiado por {selectedPerson.financialOrganization}</p>
                        </div>
                        <div>
                          <h4>Estado:</h4>
                          <p>{selectedPerson.status.option}</p>
                        </div>
                        <div>
                          <h4>Nacionalidad:</h4>
                          <p>{selectedPerson.nationality}</p>
                        </div>
                      </DataInfo>
                      <DataInfo>
                        <div>
                          <h4>Correo:</h4>
                          <p>{selectedPerson.email}</p>
                        </div>
                        <div>
                          <h4>Tipo de documento:</h4>
                          <p>{selectedPerson.typeIdentification}</p>
                        </div>
                        <div>
                          <h4>Número de identificación:</h4>
                          <p>{selectedPerson.numberIdentification}</p>
                        </div>
                      </DataInfo>
                    </AvatarData>
                  </div>
                </SectionAvatar>
                <ScrollInfo>
                  <MoreInfoAvatar>
                    <TitlesAvatar>Información personal</TitlesAvatar>
                    <DataHV>
                      <DataInfo>
                        <div>
                          <h4>Edad:</h4>
                          <p>{selectedPerson.yearOld} años</p>
                        </div>
                        <div>
                          <h4>Número de celular:</h4>
                          <p>{selectedPerson.celphone}</p>
                        </div>
                        <div>
                          <h4>Estrato socioeconómico:</h4>
                          <p>{selectedPerson.socioeconomicStratum}</p>
                        </div>
                        <div>
                          <h4>Departamento y ciudad/municipio <br></br>en el que vive:</h4>
                          <p>{selectedPerson.department}</p>
                          <p>{selectedPerson.city}</p>
                        </div>
                        <div>
                          <h4>Dirección de residencia:</h4>
                          <p>{selectedPerson.directionHome}</p>
                        </div>
                      </DataInfo>
                      <DataInfo>
                        <div>
                          <h4>Se reconoce como (grupo étnico):</h4>
                          <p>{selectedPerson.culturalRecognition}</p>
                        </div>
                        <div>
                          <h4>Se identifica con la siguiente población:</h4>
                          <p>{selectedPerson.populationIdentification}</p>
                        </div>
                        <div>
                          <h4>Nombre y parentezco del contacto  <br></br>de emergencia:</h4>
                          <p>{selectedPerson.relationshipName}</p>
                        </div>
                        <div>
                          <h4>Teléfono del contacto de <br></br>emergencia:</h4>
                          <p>{selectedPerson.celphoneR}</p>
                        </div>
                        <div>
                          <h4>Correo electrónico del <br></br> contacto de emergencia:</h4>
                          <p>{selectedPerson.emailRelationship}</p>
                        </div>
                      </DataInfo>
                    </DataHV>
                  </MoreInfoAvatar>
                  <MoreInfoAvatar>
                    <TitlesAvatar>Información académica y laboral</TitlesAvatar>

                    <DataHV>
                      <DataInfo>
                        <div>
                          <h4>Nivel educativo alcanzado (y si obtuvo, su título):</h4>
                          <p></p>
                        </div>
                        <div>
                          <h4>Ocupación actual:</h4>
                          <p></p>
                        </div>
                        <div>
                          <h4>Estrato socioeconómico:</h4>
                          <p></p>
                        </div>
                        <div>
                          <h4>Trabaja/estudia en:</h4>
                          <p></p>
                        </div>
                      </DataInfo>
                      <DataInfo>
                        <div>
                          <h4>Tiene acceso a:</h4>
                          <p></p>
                        </div>
                        <div>
                          <h4>Conocimientos en programación <br></br> y desarrollo web:</h4>
                          <p></p>
                        </div>
                        <div>
                          <h4>Motivación para presentarse:</h4>
                          <p></p>
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
                          <p></p>
                        </div>
                        <div>
                          <h4>La actividad que más disfruta realizar:</h4>
                          <p></p>
                        </div>
                      </DataInfo>
                      <DataInfo>
                        <div>
                          <h4>Grupo o comunidad a la cual pertenece:</h4>
                        </div>
                      </DataInfo>
                    </DataHV>
                  </MoreInfoAvatar>
                </ScrollInfo>
              </ProfileContent>
            ) : (
              <div>
                <CoverSelectionDetails src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689684710/LIVE/Im%C3%A1genes/Covers/PORTADA_SELECTION_ncugeo.png" alt="" />
              </div>
            )}
          </div>
          <div>
            <ListSelected>
              <div>
                <CourseSelected>
                  <ArrowBack src={back} width={20} onClick={toSelection} />
                  <div>
                    <p>{selectedCourse?.course}</p>
                  </div>
                </CourseSelected>
              </div>
              <ListGeneral>
                {filteredStudentSelection.map((mapea) => (
                  <InfoList key={mapea.id} onClick={() => handleProfileClick(mapea)}>
                    <CircleProfile>
                      <img src={mapea.profile} width={50} alt="" />
                    </CircleProfile>
                    <div>
                      <p>{mapea.name}</p>
                    <StyleSelected>
                      <select
                        name="opcion"
                        value={mapea.status.option}
                        onChange={(e) => handleOpcionChange(e, mapea.id)}
                      >
                        {opcionesDisponibles.map((opcion) => (
                          <option key={opcion} value={opcion}>
                            {opcion}
                          </option>
                        ))}
                      </select>
                      {mapea.status.option === 'Admitido' && (
                        <select
                          name="admitido"
                          value={mapea.status.admitido}
                          onChange={(e) => handleAdmitidoChange(e, mapea.id)}
                        >
                          <option>Selecciona una opción</option>
                          <option value="En formación">En formación</option>
                          {/* Agrega más opciones según sea necesario */}
                        </select>
                      )}
                    </StyleSelected>
                    </div>
                    <StyleStatus>
                      {/* ... */}
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
          comments={selectedPerson.comments}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProfileSelected;

