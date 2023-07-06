import React from 'react'
import { ContentButtonCourses, ContentCourses, ContentSelection, SearchSelection, TitleSelection, barSearchSelection } from '../Selection/SelectionStyle'
import Lupa from '../../../assets/lupa.png'
import Flecha from '../../../assets/flecha-hacia-abajo.png'
import Portada from '../../../assets/portada-selection.png'
import { BackgroundGeneral } from '../../../router/StyleGlobal'

const Selection = () => {

//Pasar al redux

const TopicCourses = [
  {
    title: "Back-end"
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
    <BackgroundGeneral>
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
  <ContentButtonCourses key={topicKey}>
    <img src={Flecha} alt="" width={30}/>
    <p>{topic.title}</p>
  </ContentButtonCourses>
))}
          </ContentCourses>
        </ContentSelection>
    </BackgroundGeneral>
    </>
  )
}

export default Selection