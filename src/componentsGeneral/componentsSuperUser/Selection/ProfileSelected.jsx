import React, { useState, useEffect } from 'react'
import { getCourses } from '../../../redux/actions/coursesActions'
import Flecha from '../../../assets/flecha-hacia-abajo.png'
import { useNavigate } from 'react-router-dom'
import back from '../../../assets/devolver.png'
import Lupa from '../../../assets/lupa.png'
import avatar from '../../../assets/avatar.jpg'
import { TitleSelection, SearchSelection, SearchAndBack, ProfileContent, SectionAvatar, AvatarData, DataInfo, MoreInfoAvatar, TitlesAvatar, ScrollInfo, AvatarPhoto, ContentListInfo, ListSelected, CourseSelected, ArrowBack, ListGeneral, InfoList, StyleStatus, CircleProfile, ArrowBackSelection, StyleSelected } from './SelectionStyle'
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'
import { useDispatch, useSelector } from 'react-redux'
import BarSearch from '../../barSearch/BarSearch'

import iconCheck from '../../../assets/mapas-y-banderas.png'
import iconPending from '../../../assets/pending.png'
import iconDeclined from '../../../assets/rechazado.png'

const ProfileSelected = () => {

    const [opcion, setOpcion] = useState('');
    const [admitido, setAdmitido] = useState('');

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
        dispatch(getCourses(nameCollection));
    }, [dispatch, nameCollection])

    const navigate = useNavigate();

    const toSelection = () => {
        navigate('/selectionSuperUser')
    }

    return (
        <>
            <HeaderSuperUser />
            <TitleSelection>Selección</TitleSelection>
            <BarSearch />

            <ContentListInfo>
                <div>
                    <ProfileContent>
                        <SectionAvatar>
                            <AvatarPhoto>
                                <img src={avatar} alt="" />
                            </AvatarPhoto>
                            <div>
                                <TitlesAvatar>Pepito Jaramillo</TitlesAvatar>
                                <AvatarData>
                                    <DataInfo>
                                        <div>
                                            <h4>Tipo de Ingreso:</h4>
                                            <p>Financiado por Comfama</p>
                                        </div>
                                        <div>
                                            <h4>Estado:</h4>
                                            <p>Admitido</p>
                                        </div>
                                    </DataInfo>
                                    <DataInfo>
                                        <div>
                                            <h4>Correo:</h4>
                                            <p>pepito@gmail.com</p>
                                        </div>
                                        <div>
                                            <h4>Cédula:</h4>
                                            <p>1.234.567.890</p>
                                        </div>
                                    </DataInfo>

                                </AvatarData>
                            </div>
                        </SectionAvatar>
                        <ScrollInfo>
                            <MoreInfoAvatar>
                                <TitlesAvatar>
                                    Información personal:
                                </TitlesAvatar>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit facilis et distinctio voluptatem, culpa corporis soluta est odit accusamus placeat dolorem ipsum, accusantium tempora esse vero dicta optio cum aut.
                                </p>
                            </MoreInfoAvatar>
                            <MoreInfoAvatar>
                                <TitlesAvatar>
                                    Tu información académica y laboral:
                                </TitlesAvatar>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi fuga beatae labore necessitatibus nemo minima laudantium illo, repudiandae recusandae ab fugit quidem architecto vel id ex consequatur quae magnam provident.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto fugit a obcaecati porro accusantium, voluptatibus odit esse. Dolorem suscipit eius, fugiat sed pariatur temporibus quod aperiam veniam sint minima mollitia.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia aliquid facilis aspernatur tempore ratione nulla alias amet aut laudantium mollitia vel, voluptates expedita tempora deserunt itaque, necessitatibus dolorem repellendus.
                                </p>
                            </MoreInfoAvatar>
                        </ScrollInfo>
                    </ProfileContent>
                </div>
                <div>
                    <ListSelected>
                        <div>
                            <CourseSelected>
                                <ArrowBack src={back} width={20} onClick={toSelection} />
                                <div>
                                    <img src={Flecha} alt="" width={20} />
                                    <p>Back-end</p>
                                </div>
                            </CourseSelected>
                        </div>
                        <ListGeneral>
                            {coursesData && coursesData.map((listSelected) => (
                                <InfoList key={listSelected.id}>
                                
                                    <CircleProfile>
                                        <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689529480/LIVE/Im%C3%A1genes/PhotoProfiles/bettyPinzon_rew1j4.png" width={50} />
                                    </CircleProfile>
                                    <div>
                                        <div>
                                         <p>Nombre de la persona</p>
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
                                        <img src="" width={30} />
                                        <p>Aquí va la fecha del status</p>
                                    </StyleStatus>

                                </InfoList>
                            ))}

                        </ListGeneral>
                    </ListSelected>

                </div>

            </ContentListInfo>
        </>
    )
}

export default ProfileSelected
