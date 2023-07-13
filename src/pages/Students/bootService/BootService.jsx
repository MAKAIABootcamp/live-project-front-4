import React, { useState } from 'react';
import HeaderStudents from '../headerStudents/HeaderStudents'
import FooterStudents from '../footerStudents/FooterStudents'
import { DivBootservices, DivBootserviceGeneral, SectionInasistencia, SectionInformacion, SectionPsicosocial, SectionTecnico, SectionRobot, ModalBackground, ModalContent, CloseButton } from './StyledBootservice'
import robot from '../../../assets/robotColor.png'
import psicosocial from '../../../assets/psicosocial.png'
import tecnico from '../../../assets/tecnico.png'
import inasistencia from '../../../assets/inasistencia.png'


const BootService = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    
    <DivBootserviceGeneral>
    <HeaderStudents/>
    <DivBootservices>
      <SectionInformacion>
        <SectionRobot>
          <figure>
            <img src={robot}alt="" />
          </figure>
          <h1>Bootservice</h1>
        </SectionRobot>
        <section>
          <h3>Lina Gutierrez</h3>
          <h3>cohorte 6 FrontEnd</h3>
        </section>
        <section>
        <h3>lina.vaquero2017@gmail.com</h3>
        <h3>3105499704</h3>
        </section>
      </SectionInformacion>
      <SectionPsicosocial>
        <section>
        <figure>
            <img src={psicosocial}alt="" />
          </figure>
        </section>
        <section>
          <h2>Apoyo Psicosocial</h2>
          <p>Situaciones que estas viviendo y que pudiesen afectar tu rendimiento o participacion</p>
          <button onClick={handleOpenModal}>Solicitar</button>
        </section>
        {isModalOpen && (
        <ModalBackground>
          <ModalContent>
          <HeaderStudents/>
            <h3>Contenido del modal</h3>
            <p>Aquí puedes agregar el contenido del modal que deseas mostrar.</p>
            <CloseButton onClick={handleCloseModal}>Cerrar</CloseButton>
          </ModalContent>
        </ModalBackground>
      )}
      </SectionPsicosocial>
      <SectionTecnico>
      <section>
          <h2>Apoyo Tecnico</h2>
          <p>Preguntas que necesitas resolver en el marco del proceso formativo</p>
          <button onClick={handleOpenModal}>Solicitar</button>
        </section>
        <section>
        <figure>
            <img src={tecnico}alt="" />
          </figure>
        </section>
        {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <h3>Contenido del modal</h3>
            <p>Aquí puedes agregar el contenido del modal que deseas mostrar.</p>
            <CloseButton onClick={handleCloseModal}>Cerrar</CloseButton>
          </ModalContent>
        </ModalBackground>
      )}
      </SectionTecnico>
      <SectionInasistencia>
      <section>
        <figure>
            <img src={inasistencia}alt="" />
          </figure>
        </section>
        <section>
          <h2>Reporte de Inasistencia</h2>
          <p>Si conoces con anterioridad que no podras estar en alguna sesion informa aca</p>
          <button onClick={handleOpenModal}>Solicitar</button>
        </section>
        {isModalOpen && (
          
        <ModalBackground>
     
          <ModalContent>
        
            <h3>Contenido del modal</h3>
            <p>Aquí puedes agregar el contenido del modal que deseas mostrar.</p>
            <CloseButton onClick={handleCloseModal}>Cerrar</CloseButton>
          </ModalContent>
        </ModalBackground>
      )}
      </SectionInasistencia>
    </DivBootservices>
       <FooterStudents/>
    </DivBootserviceGeneral>
    
  )
}

export default BootService