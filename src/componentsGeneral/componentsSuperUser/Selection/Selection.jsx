import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentButtonCourses, ContentCourses, ContentSelection, SearchSelection, TitleSelection, barSearchSelection } from '../Selection/SelectionStyle'
import Lupa from '../../../assets/lupa.png'
import Flecha from '../../../assets/flecha-hacia-abajo.png'
import Portada from '../../../assets/portada-selection.png'
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser'

const Selection = () => {

const navigate = useNavigate();

const toBackEnd = () => {
  navigate('/profileSelectedSU')
}

//Pasar al redux

const TopicCourses = [
  {
    title: "Back-end",
    link: toBackEnd 
  },
  {
    title: "Front-end"
  },
  {
    title: "Testing"
  },
  {
    title: "Análisis de datos"
  }
]

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
            <img src={Portada} alt="" />
          </div>

          <ContentCourses>
{TopicCourses.map((topic, topicKey) => (
  <ContentButtonCourses key={topicKey} onClick={topic.link}>
    <div>
      <img src={Flecha} alt="" width={30}/>
      <p>{topic.title}</p>
    </div>
      
  </ContentButtonCourses>
))}
          </ContentCourses>
        </ContentSelection>
    </>
  )
}

export default Selection