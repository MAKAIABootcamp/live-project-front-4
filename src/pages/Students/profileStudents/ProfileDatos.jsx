import React from 'react'
import avatar from '../../../assets/avatar.jpg'
import editar from '../../../assets/note-edit-line.svg'
import { DivAvatar, FigureAvatar, FigureIcon, SectionDatos, SectionImagen, SectionInformacion, SectionTelefono } from './StyledProfileDatos'

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
                <h4>Front End cohorte 6</h4>
                <h4> 29 Años</h4>
            </SectionInformacion>
            <SectionTelefono>
                <h4>Teléfono</h4>
                <input type="text" />
                <img src={editar} alt="" />
            </SectionTelefono>
            <SectionDatos>
                <h4>Correo</h4>
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
                <h4>Cambiar Contraseña</h4>
                <input type="text" />
                <img src={editar} alt="" />
            </SectionDatos>
            <SectionDatos>
                <h4>Estrato Socioeconómico</h4>
                <input type="text" />
            </SectionDatos>
            <SectionDatos>
                <h4>Ocupación Actual</h4>
                <input type="text" />
            </SectionDatos>
            
        </DivAvatar>
    </div>
  )
}

export default ProfileDatos