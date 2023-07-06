import React from 'react';
import { BackgroundGeneral } from '../../../router/StyleGlobal';
import Lupa from '../../../assets/lupa.png'
import { TitleAndSearch, SectionSearchFormation, CoursesFormation, StyleButtonCourse, StyleSectionCourse, StyleButtonAdd } from './FormationStyle';

const Formation = () => {

  //Pasar a Redux
  const CoursesInFormation = [
    {
      started: [
        {
          title: "Front-end",
          typeCohorte: "Cohorte 6",
          date: "25/06/2023"
        }
      ]
    },
    {
      start: [
        {
          title: "Back-end",
          typeCohorte: "Cohorte 3",
          date: "10/07/2023"
        },
        {
          title: "Front-end",
          typeCohorte: "Cohorte 7",
          date: "16/07/2023"
        },
        {
          title: "Testing",
          typeCohorte: "Cohorte 1",
          date: "10/07/2023"
        }
      ]
    }
  ];

  return (
    <>
      <BackgroundGeneral>
        <TitleAndSearch>
          <p>En formación</p>
          <SectionSearchFormation>
            <input type='search' placeholder='Search...'></input>
            <button>
              <img src={Lupa} width={20} />
            </button>
          </SectionSearchFormation>
        </TitleAndSearch>

        <CoursesFormation>
          <StyleSectionCourse>
            {CoursesInFormation.map((course) => (
              course.started && course.started.map((courseInfoPast, keyCourse) => (
                <StyleButtonCourse key={keyCourse}>
                  <div>
                    <p>{courseInfoPast.title}</p>
                    <p>{courseInfoPast.typeCohorte}</p>
                    <p>{courseInfoPast.date}</p>
                  </div>
                </StyleButtonCourse>
              ))
            ))}

            {CoursesInFormation.map((course) => (
              course.start && course.start.map((courseInfo, index) => (
                <StyleButtonCourse key={index}>
                  <div>
                    <p>{courseInfo.title}</p>
                    <p>{courseInfo.typeCohorte}</p>
                    <p>{courseInfo.date}</p>
                  </div>
                </StyleButtonCourse>
              ))
            ))}
            <StyleButtonAdd>
              <div>
                <h1>+</h1>
              </div>
            </StyleButtonAdd>
          </StyleSectionCourse>
        </CoursesFormation>
      </BackgroundGeneral>
    </>
  );
};

export default Formation;
