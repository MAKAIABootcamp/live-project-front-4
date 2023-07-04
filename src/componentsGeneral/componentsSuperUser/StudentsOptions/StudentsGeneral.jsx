import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { BackgroundPageStudents, OptionsStudents, SectionStudents } from './StudentsGeneralStyle'
import iconGroup from '../../../assets/grupo (1).png'
import iconFoot from '../../../assets/huellas.png'
import iconRocket from '../../../assets/cohete.png'

import selection from '../Selection/Selection'

const StudentsGeneral = () => {

  // const navigate = useNavigate();

  // const toSelection = () => {
  //   navigate('/selection')
  // }

  // const toFormation = () => {
  //   navigate('/formation')
  // }

  // const toCertification = () => {
  //   navigate('/certification')
  // }

  //Pasar al redux
  const buttonStudents = [
    {
      icon: iconGroup,
      title: "Selección",
      link: ""
    },
    {
      icon: iconFoot,
      title: "Formación",
      link: ""
    },
    {
      icon: iconRocket,
      title: "Certificación",
      link: ""
    }
  ];

  return (
    <>
    <BackgroundPageStudents>
        <SectionStudents>
          {buttonStudents.map((student) => (
            <OptionsStudents>
              <img src={student.icon} alt="" width={60}/>
              <p>{student.title}</p>
            </OptionsStudents>
          ))}
        </SectionStudents>
    </BackgroundPageStudents>
    </>
  )
}

export default StudentsGeneral