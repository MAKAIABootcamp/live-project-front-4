import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ContentButtonCourses, ContentCourses, ContentSelection, SearchSelection, TitleSelection, barSearchSelection, CoverSelection } from '../Selection/SelectionStyle'
import Lupa from '../../../assets/lupa.png'
import Flecha from '../../../assets/flecha-hacia-abajo.png'
import Portada from '../../../assets/portada-selection.png'
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'
import { coursesReducer } from '../../../redux/reducers/coursesReducer'
import { listCourses } from '../../../redux/actions/coursesActions'
import { getCourses } from '../../../redux/actions/coursesActions'

const Selection = () => {

const navigate = useNavigate();

const toBackEnd = () => {
  navigate('/profileSelectedSU')
}

const dispatch = useDispatch();
const coursesData = useSelector((state) => state.courses.coursesData);
const nameCollection = 'Cursos';

useEffect(() => {
  dispatch(getCourses(nameCollection));
},  [dispatch, nameCollection])

  return (
    <>
    <HeaderSuperUser />
        <TitleSelection>Selección</TitleSelection>
        <SearchSelection>
          <input type='search' placeholder='Search...'></input>
          <button>
            <img src={Lupa} width={20}/>
          </button>
        </SearchSelection>

        <ContentSelection>
          <div>
            <CoverSelection src={Portada} alt="" />
          </div>

          <ContentCourses>
{coursesData.map((topic) => (
  <ContentButtonCourses key={topic.id} onClick={toBackEnd}>
    <div>
      <img src={Flecha} alt="" width={30}/>
      <p>{topic.type}</p>
    </div>
      
  </ContentButtonCourses>
))}
          </ContentCourses>
        </ContentSelection>
    </>
  )
}

export default Selection