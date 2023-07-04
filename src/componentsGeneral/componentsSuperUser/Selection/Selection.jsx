import React from 'react'
import { BackgroundPageStudents, titleSelection } from './SelectionStyle'
import Lupa from '../../../assets/lupa.png'
import Flecha from '../../../assets/flecha-hacia-abajo.png'
import Portada from '../../../assets/portada-selection.png'

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
    <BackgroundPageStudents>
      <section>
        <titleSelection>Selección</titleSelection>
        <div>
          <input type='search'></input>
          <button>
            <img src={Lupa} width={20}/>
          </button>
        </div>

        <section>
          <div>
            <img src={Portada} alt="" />
          </div>

          <div>
{TopicCourses.map((topic, topicKey) => (
  <button key={topicKey}>
    <img src={Flecha} alt="" width={30}/>
    <p>{topic.title}</p>
  </button>
))}
          </div>
        </section>
      </section>

    </BackgroundPageStudents>
    </>
  )
}

export default Selection