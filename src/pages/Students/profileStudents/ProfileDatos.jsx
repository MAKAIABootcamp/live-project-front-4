import React, { useState } from 'react'
import avatar from '../../../assets/avatar.jpg'
import editar from '../../../assets/note-edit-line-color.svg'
import { DivAvatar, DivForm, FigureAvatar, FigureIcon, SectionDatos, SectionImagen, SectionInformacion, } from './StyledProfileDatos'
import { useSelector } from 'react-redux'
import ModalProfile from './ModalProfile'
import llave from '../../../assets/password.svg'
import ModalPassword from './ModalPassword'


const ProfileDatos = () => {
    const { student } = useSelector((store) => store.student);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpenPassword, setModalOpenPassword] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleOpenModalPassword = () => {
        setModalOpenPassword(true);
    };

    const handleModalClosePassword = () => {
        setModalOpenPassword(false);
    };

    return (
        <div>
            <DivAvatar>
                <SectionImagen>
                    <FigureAvatar>
                        <img src={student?.imagen? student?.imagen: avatar} alt="" />
                    </FigureAvatar >
                    <FigureIcon onClick={handleOpenModal}>
                        <img src={editar} alt="icono editar" />
                    </FigureIcon >
                    <FigureIcon onClick={handleOpenModalPassword}>
                        <img src={llave} alt="icono editar" />
                    </FigureIcon >
                </SectionImagen>
                <SectionInformacion>
                    <h4>{student?.nombreCompleto}</h4>
                    <h4>{student?.edad} Años</h4>
                </SectionInformacion>
                <DivForm>
                    <SectionDatos>
                        <h4>Teléfono</h4>
                        <input type="text" value={student?.celular} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Correo</h4>
                        <input type="text" value={student?.correo} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Ciudad</h4>
                        <input type="text" value={student?.ciudad} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Dirección</h4>
                        <input type="text" value={student?.direccion} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Estrato socioeconómico</h4>
                        <input type="text" value={student?.estrato} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Ocupación actual</h4>
                        <input type="text" value={student?.ocupacion} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Me identifico como</h4>
                        <input type="text" value={student?.sexo} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Nacionalidad</h4>
                        <input type="text" value={student?.nacionalidad} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Me reconosco como</h4>
                        <input type="text" value={student?.raza} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Persona de contacto</h4>
                        <input type="text" value={student?.contacto} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Teléfono de la persona de contacto</h4>
                        <input type="text" value={student?.telefonoContacto} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Correo electrónico de la persona de contacto</h4>
                        <input type="text" value={student?.correoContacto} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Población con la que me identifico</h4>
                        <input type="text" value={student?.poblacion} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Nivel educativo más alto</h4>
                        <input type="text" value={student?.nivelEducativo} />
                    </SectionDatos>
                    <SectionDatos>
                        <h4>Hobbie</h4>
                        <input type="text" value={student?.hobbie} />
                    </SectionDatos>
                </DivForm>

            </DivAvatar>
            <ModalProfile
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
                telefono={student?.celular}
                correo={student?.correo}
                imagen={student?.imagen}
            />
            <ModalPassword
                isModalOpen={isModalOpenPassword}
                handleModalClose={handleModalClosePassword}

            />
        </div>
    )
}

export default ProfileDatos