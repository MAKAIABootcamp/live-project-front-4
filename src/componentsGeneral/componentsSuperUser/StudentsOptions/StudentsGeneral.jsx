import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BackgroundPageStudents, OptionsStudents, SectionStudents, IconOption } from './StudentsGeneralStyle'
import iconGroup from '../../../assets/grupo (1).png'
import iconFoot from '../../../assets/huellas.png'
import iconRocket from '../../../assets/cohete.png'
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'

const StudentsGeneral = () => {

  const navigate = useNavigate();

  const toSelection = () => {
    navigate('/selectionSuperUser')
  }

  const toFormation = () => {
    navigate('/formationSuperUser')
  }

  const toCertification = () => {
    navigate('/certificationSuperUser')
  }

  //Pasar al redux
  const buttonStudents = [
    {
      icon: iconGroup,
      title: "Selección",
      link: toSelection
    },
    {
      icon: iconFoot,
      title: "Formación",
      link: toFormation
    },
    {
      icon: iconRocket,
      title: "Certificación",
      link: toCertification
    }
  ];

  return (
    <>
    <HeaderSuperUser />
        <SectionStudents>
          {buttonStudents.map((student, keyStudent) => (
            <OptionsStudents key={keyStudent} onClick={student.link}>
              <IconOption src={student.icon} alt="" width={60}/>
              <p>{student.title}</p>
            </OptionsStudents>
          ))}
        </SectionStudents>
    </>
  )
}

export default StudentsGeneral