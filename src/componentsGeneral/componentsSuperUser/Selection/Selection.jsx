import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ContentButtonCourses, ContentCourses, ContentSelection, TitleSelection, CoverSelection, BackgroundSelection } from '../Selection/SelectionStyle'
import Flecha from '../../../assets/flecha-hacia-abajo.png'
import Portada from '../../../assets/portada-selection.png'
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'
import { getCourses } from '../../../redux/actions/coursesActions'
import BarSearch from '../../barSearch/BarSearch'

const Selection = () => {

const navigate = useNavigate();

const toBackEnd = () => {
  navigate('/profileSelectedSU')
}

const dispatch = useDispatch();
const coursesData = useSelector((state) => state.courses.coursesData);
const nameCollection = 'Selección';

useEffect(() => {
  dispatch(getCourses(nameCollection));
},  [dispatch, nameCollection])

  return (
    <>
    <HeaderSuperUser />
    <BackgroundSelection>
        <TitleSelection>Selección</TitleSelection>

        <BarSearch />

        <ContentSelection>
          <div>
            <CoverSelection src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689684710/LIVE/Im%C3%A1genes/Covers/PORTADA_SELECTION_ncugeo.png" alt="" />
          </div>

          <ContentCourses>
{coursesData.map((topic) => (
  <ContentButtonCourses key={topic.id} onClick={toBackEnd}>
    <div>
      <img src={Flecha} alt="" width={30}/>
      <p>{topic.course}</p>
    </div>
      
  </ContentButtonCourses>
))}
          </ContentCourses>
        </ContentSelection>
        </BackgroundSelection>
    </>
  )
}

export default Selection