import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lupa from '../../../assets/lupa.png'
import { TitleAndSearchCertification, SectionSearchCertification, CoursesCertified, SectionYearStyle, ButtonLastCourse, TypeCohorte, MoreInfoCourse } from './CertificationStyle'
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'

const Certification = () => {

  const navigate = useNavigate();

  const toListCertified = () => {
    navigate('/listCertifiedSU')
  }

  //Pasar a Redux
  const CertifiedCourses = [
    {
      year: "2023",
      courses: [
        {
          id: 1,
          typeCohorte: "Front-end",
          numberCohorte: 4,
          lastDate: "21/07/2023", 
          link: toListCertified
        },
        {
          id: 2,
          typeCohorte: "Back-end",
          numberCohorte: 3,
          lastDate: "20/08/2023",
          link: toListCertified
        },
        {
          id: 3,
          typeCohorte: "Testing",
          numberCohorte: 1,
          lastDate: "20/08/2023",
          link: toListCertified
        },
        {
          id: 4,
          typeCohorte: "Análisis de datos",
          numberCohorte: 4,
          lastDate: "21/07/2023",
          link: toListCertified
        },
        {
          id: 5,
          typeCohorte: "Back-end",
          numberCohorte: 5,
          lastDate: "15/09/2023",
          link: toListCertified
        },
        {
          id: 6,
          typeCohorte: "Front-end",
          numberCohorte: 5,
          lastDate: "30/11/2023",
          link: toListCertified
        }
      ]
    },
    {
      year: "2022",
      courses: [
        {
          id: 1,
          typeCohorte: "Testing",
          numberCohorte: 3,
          lastDate: "21/07/2023",
          link: toListCertified
        },
        {
          id: 2,
          typeCohorte: "Front-end",
          numberCohorte: 5,
          lastDate: "20/08/2022",
          link: toListCertified
        },
        {
          id: 3,
          typeCohorte: "Back-end",
          numberCohorte: 1,
          lastDate: "20/08/2022",
          link: toListCertified
        },
        {
          id: 4,
          typeCohorte: "Back-end",
          numberCohorte: 4,
          lastDate: "21/07/2022",
          link: toListCertified
        },
        {
          id: 5,
          typeCohorte: "Back-end",
          numberCohorte: 5,
          lastDate: "15/09/2022",
          link: toListCertified
        },
        {
          id: 6,
          typeCohorte: "Front-end",
          numberCohorte: 5,
          lastDate: "30/11/2022",
          link: toListCertified
        }
      ]
    }
  ]

  return (
    <>
    <HeaderSuperUser />
        <TitleAndSearchCertification>
          <p>Certificación</p>
          <SectionSearchCertification>
            <input type='search' placeholder='Search...'></input>
            <button>
              <img src={Lupa} width={20} />
            </button>
          </SectionSearchCertification>
        </TitleAndSearchCertification>

        <CoursesCertified>
          {CertifiedCourses.map((lastCourse, lastCoursekey) => (
            <>
              <p>{lastCourse.year}</p>
              <SectionYearStyle key={lastCoursekey}>
                {lastCourse.courses && lastCourse.courses.map((infoLastCourse, infolastKey) => (
                  <>
                  <ButtonLastCourse key={infolastKey} onClick={infoLastCourse.link}>
                    <div>
                      <TypeCohorte>{infoLastCourse.typeCohorte}</TypeCohorte>
                    <MoreInfoCourse>Cohorte {infoLastCourse.numberCohorte}</MoreInfoCourse>
                    <MoreInfoCourse>Finalizó: {infoLastCourse.lastDate}</MoreInfoCourse>
                    </div>
                  </ButtonLastCourse>
                  </>
                ))}
              </SectionYearStyle>
            </>
          ))}
        </CoursesCertified>
    </>
  )
}

export default Certification