import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesSelection } from '../../../redux/actions/coursesActions';
import Flecha from '../../../assets/flecha-hacia-abajo.png';
import back from '../../../assets/devolver.png';
import { BackgroundSelection, CoverSelectionDetails, DataHV, DivNotFound } from './SelectionStyle';
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
  StyleSelected
} from './SelectionStyle';
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser';
import BarSearch from '../../barSearch/BarSearch';

const ProfileSelected = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = location.state;

  const [opcion, setOpcion] = useState('');
  const [admitido, setAdmitido] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [profileSelected, setProfileSelected] = useState(false);

  const handleOpcionChange = (event) => {
    setOpcion(event.target.value);
    setAdmitido('');
  };

  const handleAdmitidoChange = (event) => {
    setAdmitido(event.target.value);
  };

  const dispatch = useDispatch();
  const coursesData = useSelector((state) => state.courses.coursesData);
  const nameCollection = 'Selección';

  useEffect(() => {
    dispatch(getCoursesSelection(nameCollection));
  }, [dispatch, nameCollection]);

  const toSelection = () => {
    navigate('/selectionSuperUser');
  };

  const filteredGroupSelection = selectedCourse?.groupSelection || [];

  const handleProfileClick = (mapea) => {
    setSelectedPerson(mapea);
    setProfileSelected(true);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudentSelection = selectedCourse?.groupSelection.filter((mapea) =>
  mapea.name.toLowerCase().includes(searchTerm.toLowerCase())
) || [];

const handleSearch = (term) => {
    setSearchTerm(term);
  };
  

  return (
    <>
      <HeaderSuperUser />
      <BackgroundSelection>
      <TitleSelection>Selección</TitleSelection>
      <BarSearch onSearch={handleSearch}/>

      <ContentListInfo>
        <div>
          {selectedPerson ? (
            <ProfileContent>
              <SectionAvatar>
                <AvatarPhoto>
                  <img src={selectedPerson.profile} alt="" className='profileSelected'/>
                </AvatarPhoto>
                <div>
                  <TitlesAvatar>{selectedPerson.name}</TitlesAvatar>
                  <AvatarData>
                    <DataInfo>
                      <div>
                        <h4>Tipo de Ingreso:</h4>
                        <p>Financiado por {selectedPerson?.financialOrganization}</p>
                      </div>
                      <div>
                        <h4>Estado:</h4>
                        <p>{selectedPerson.status}</p>
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
                    <h4>Nombre y parentezco <br></br>del contacto de emergencia:</h4>
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
                        <DataInfo>

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
            {filteredStudentSelection.length === 0 ? (

 <DivNotFound>
                <img src='https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689736902/LIVE/Im%C3%A1genes/Icons/cerebro-unscreen_rdmhx5.gif' width={200} />
                <p>No se han encontrado perfiles para tu búsqueda.</p>
              </DivNotFound>
) : (
  filteredStudentSelection.map((mapea) => (
    <InfoList key={mapea.id} onClick={() => handleProfileClick(mapea)}>
      <CircleProfile>
        <img src={mapea.profile} width={50} />
      </CircleProfile>
      <div>
        <div>
          <p>{mapea.name}</p>
        </div>
        <StyleSelected>
          <select name="opcion" value={opcion} onChange={handleOpcionChange}>
            <option>Entrevista</option>
            <option>Documentación</option>
            <option>Admitido</option>
            <option>No admitido</option>
          </select>
          {opcion === 'Admitido' && (
            <select name="admitido" value={admitido} onChange={handleAdmitidoChange}>
              <option value="En formación">En formación</option>
            </select>
          )}
        </StyleSelected>
      </div>
      <StyleStatus>
        {Array.isArray(mapea.statusIcon) ? (
          mapea.statusIcon.map((mapeaIcon, index) => (
            <img key={index} src={mapeaIcon.check} width={50} />
          ))
        ) : (
          <p>No status icons available</p>
        )}
        <p>Aquí va la fecha del status</p>
      </StyleStatus>
    </InfoList>
  )) // Aquí falta cerrar los paréntesis
)}

            </ListGeneral>
          </ListSelected>
        </div>
      </ContentListInfo>
      </BackgroundSelection>
    </>
  );
};

export default ProfileSelected;
