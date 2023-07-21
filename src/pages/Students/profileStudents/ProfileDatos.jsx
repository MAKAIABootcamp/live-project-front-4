import React from 'react'
import avatar from '../../../assets/avatar.jpg'
import editar from '../../../assets/note-edit-line.svg'
import { DivAvatar, DivForm, FigureAvatar, FigureIcon, SectionDatos, SectionImagen, SectionInformacion, SectionTelefono } from './StyledProfileDatos'

const ProfileDatos = () => {
  return (
    <div>
        <DivAvatar>
            <SectionImagen>
                <FigureAvatar>
                    <img src={avatar} alt="" />
                </FigureAvatar >
                <FigureIcon>
                    <img src={editar} alt="icono editar" />
                </FigureIcon >
            </SectionImagen>
            <SectionInformacion>
                <h4>Lina Gutierrez</h4>
                <h4> 29 Años</h4>
            </SectionInformacion>
            <DivForm>
            <SectionDatos>
                <h4>Teléfono</h4>
                <input type="text" />
                <img src={editar} alt="" />
                </SectionDatos> 
            <SectionDatos>
                <h4>Correo</h4>
                <input type="text" />
                <img src={editar} alt="" />
            </SectionDatos> 
             <SectionDatos>
                <h4>Cambiar contraseña</h4>
                <input type="text" />
                <img src={editar} alt="" />
            </SectionDatos>
            <SectionDatos>
                <h4>Ciudad</h4>
                <input type="text" />
            </SectionDatos> 
            <SectionDatos>
                <h4>Dirección</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Estrato socioeconómico</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Ocupación actual</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Me identifico como</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Nacionalidad</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Me reconosco como</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Persona de contacto</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Teléfono de la persona de contacto</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Correo electrónico de la persona de contacto</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Población con la que me identifico</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Nivel educativo más alto</h4>
                <input type="text" />
            </SectionDatos>
            </DivForm>
            
        </DivAvatar>
    </div>
  )
}

export default ProfileDatos