import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BackgroundStudents, OptionsStudents, SectionStudents, IconOption } from './StudentsGeneralStyle'

import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'
import { getPageStudents } from '../../../redux/actions/coursesActions'
import { collection, doc } from 'firebase/firestore'
import { dataBase } from '../../../confiFirebase/configFirebase'

const StudentsGeneral = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const pagesData = useSelector((state) => state.courses.pageStudentsData);
const nameCollection = 'PáginaDeEstudiantes';

useEffect(() => {
  dispatch(getPageStudents(nameCollection));
},  [dispatch, nameCollection])


  return (
    <>
    <HeaderSuperUser />

<BackgroundStudents>
        <SectionStudents>
          {pagesData.map((student) => (
            <OptionsStudents key={student.id} onClick={() => navigate(`/${student.link}`)}>
              <IconOption src={student.icon} alt="" width={60}/>
              <p>{student.title}</p>
            </OptionsStudents>
          ))}
        </SectionStudents>
        </BackgroundStudents>
    </>
  )
}

export default StudentsGeneral