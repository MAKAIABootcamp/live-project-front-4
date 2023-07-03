import React from 'react'
import { ContainerHeader } from './StyledHeaderStudents'
import house from '../assets/homeIcons.svg'

const HeaderStudents = () => {
  return (
    <ContainerHeader>
      <figure>
      <img src={house} alt="IconsHouse" />
      </figure>
    </ContainerHeader>
  )
}

export default HeaderStudents