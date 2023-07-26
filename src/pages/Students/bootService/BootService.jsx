import React, { useState } from 'react';
import FooterStudents from '../footerStudents/FooterStudents'
import { DivBootservices, DivBootserviceGeneral, SectionRobot, SectionServicios } from './StyledBootservice'
import robot from '../../../assets/robotColor.png'
import psicosocial from '../../../assets/psicosocial.png'
import tecnico from '../../../assets/tecnico.png'
import inasistencia from '../../../assets/inasistencia.png'
import ModalPsicosocial from './ModalPsicosocial';
import ModalTecnico from './ModalTecnico';
import ModalInasistencia from './ModalInasistencia';
import HeaderStudents from '../headerStudents/HeaderStudents';




const BootService = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenTecnico, setModalOpenTecnico] = useState(false);
  const [isModalOpenInasistencia, setModalOpenInasistencia] = useState(false);


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleOpenModalTecnico = () => {
    setModalOpenTecnico(true);
  };

  const handleCloseModalTecnico = () => {
    setModalOpenTecnico(false);
  };


  const handleOpenModalInasistencia = () => {
    setModalOpenInasistencia(true);
  };

  const handleCloseModalInasistencia = () => {
    setModalOpenInasistencia(false);
  };

  return (
  
        <DivBootserviceGeneral>
          <HeaderStudents/>
          <SectionRobot>
            <figure>
              <img src={robot} alt="" />
            </figure>
            <h1>Bootservice</h1>
          </SectionRobot>
          <DivBootservices>
            <SectionServicios>
              <img src={psicosocial} alt="" />
              <h2>Apoyo Psicosocial</h2>
              <p>Situaciones que estás viviendo y que pudiesen afectar tu rendimiento o participación.</p>
              <button onClick={handleOpenModal}>Solicitar</button>
              <ModalPsicosocial
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
              />
            </SectionServicios>
            { }

            <SectionServicios>

              <img src={tecnico} alt="" />

              <h2>Apoyo Técnico</h2>
              <p>Realiza preguntas que necesitas resolver en el marco del proceso formativo y aclara tus dudas.</p>
              <button onClick={handleOpenModalTecnico}>Solicitar</button>
              <ModalTecnico
                isModalOpen={isModalOpenTecnico}
                handleModalClose={handleCloseModalTecnico}
              />
            </SectionServicios>

            <SectionServicios>

              <img src={inasistencia} alt="" />

              <h2>Reporte Inasistencia</h2>
              <p>Si conoces con anterioridad que no podrás estar en alguna sesion informa por este medio.</p>
              <button onClick={handleOpenModalInasistencia}>Solicitar</button>
              <ModalInasistencia
                isModalOpen={isModalOpenInasistencia}
                handleModalClose={handleCloseModalInasistencia}
              />
            </SectionServicios>
            
          </DivBootservices>
    
          <FooterStudents />
        </DivBootserviceGeneral>
  )
}

export default BootService