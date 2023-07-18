import React from 'react'
import Lupa from '../../../assets/lupa.png'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../../assets/avatar.jpg'
import { BackgroundCertification, SectionBarCertification, SectionListFinal } from './CertificationStyle'
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'
import { TitleAndSearchCertification, SectionSearchCertification, ArrowBackCertification, TitleCourseFinal, Certified } from './CertificationStyle'
import Back from '../../../assets/devolver.png'
import BarSearch from '../../barSearch/BarSearch'

const ListCertification = () => {

    const navigate = useNavigate();

  const toCertification = () => {
    navigate('/certificationSuperUser')
  }

    //Pasar a Redux
    const ListCertified = [
        {
            id: 1,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 2,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 3,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 4,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 5,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 6,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 7,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 8,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 9,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 10,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 11,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 12,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 13,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 14,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 15,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 16,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 17,
            name: "Pepito Jaramillo",
            image: Avatar
        },
        {
            id: 18,
            name: "Pepito Jaramillo",
            image: Avatar
        }
    ]
  return (
    <>
<HeaderSuperUser />
<BackgroundCertification>
        <ArrowBackCertification src={Back} width={20} onClick={toCertification}/>
        <div>
           <TitleCourseFinal>
            Front - end / Cohorte 4
             <Certified><strong>Certificados</strong></Certified>
            </TitleCourseFinal>  
          
        </div>
        <SectionBarCertification>
           <BarSearch /> 
        </SectionBarCertification>

    <SectionListFinal>
        <div>
        {ListCertified.map((listFinal, keyListFinal) => (
            <button key={keyListFinal}>
             <img src={listFinal.image} width={50}/>
             <p>{listFinal.name}</p>
            </button>
        ))}
        </div>
    </SectionListFinal>
    </BackgroundCertification>
    
    </>
  )
}

export default ListCertification