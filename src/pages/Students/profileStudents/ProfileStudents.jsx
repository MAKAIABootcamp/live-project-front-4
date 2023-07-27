import React from 'react'
import { DivProfileGeneral } from './StyledProfileStudents'
import HeaderStudents from '../headerStudents/HeaderStudents'
import ProfileDatos from './ProfileDatos'
import FooterStudents from '../footerStudents/FooterStudents'

const ProfileStudents = () => {
  return (
    <>
    <DivProfileGeneral>
   <HeaderStudents/>
     <ProfileDatos/> 
   <FooterStudents/>
    </DivProfileGeneral>
    </>
  )
}

export default ProfileStudents