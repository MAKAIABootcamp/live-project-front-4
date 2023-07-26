// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ContentButtonCourses, ContentCourses, ContentSelection, TitleSelection, CoverSelection, BackgroundSelection, DivNotFound } from '../Selection/SelectionStyle';
// import Flecha from '../../../assets/flecha-hacia-abajo.png';
// import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser';
// import { getCoursesSelection } from '../../../redux/actions/coursesActions';
// import { useNavigate } from 'react-router-dom';
// import BarSearch from '../../barSearch/BarSearch';

// const Selection = () => {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState(null);
  
//   const { coursesSelected } = useSelector((state) => state.courses);
//   console.log(coursesSelected);
//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };
  


  
//   useEffect(() => {
//     dispatch(getCoursesSelection());
//   }, [dispatch]);



//   const filteredCourses = (coursesSelected && coursesSelected.length) ? coursesSelected.filter((topic) =>
//     topic.course.toLowerCase().includes(searchTerm.toLowerCase())
//   ):[];

//   const handleCourseSelection = (course) => {
//     setSelectedCourse(course);
//     navigate('/profileSelectedSU', { state: course }); 
//   };

  
//   return (
//     <>
//       <HeaderSuperUser />
//       <BackgroundSelection>
//         <TitleSelection>Selección</TitleSelection>

//         <BarSearch onSearch={handleSearch} />

//         <ContentSelection>
//           <div>
//             <CoverSelection src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689684710/LIVE/Im%C3%A1genes/Covers/PORTADA_SELECTION_ncugeo.png" alt="" />
//           </div>

//           <ContentCourses>
//             {filteredCourses.length === 0 ? (
//               <DivNotFound>
//                 <img src='https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689736902/LIVE/Im%C3%A1genes/Icons/cerebro-unscreen_rdmhx5.gif' width={200} />
//                 <p>No se han encontrado resultados para tu búsqueda.</p>
//               </DivNotFound>
//             ) : (
//               filteredCourses.map((topic) => (
//                 <ContentButtonCourses key={topic.id} onClick={() => handleCourseSelection(topic)}>
//                   <div>
//                     <img src={Flecha} alt="" width={30} />
//                     <p>{topic.course}</p>
//                   </div>
//                 </ContentButtonCourses>
//               ))
//             )}
//           </ContentCourses>
//         </ContentSelection>
//       </BackgroundSelection>
//     </>
//   );
// };

// export default Selection;


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentButtonCourses, ContentCourses, ContentSelection, TitleSelection, CoverSelection, BackgroundSelection, DivNotFound } from '../Selection/SelectionStyle';
import Flecha from '../../../assets/flecha-hacia-abajo.png';
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser';
import { getCoursesSelection } from '../../../redux/actions/coursesActions';
import { useNavigate } from 'react-router-dom';
import BarSearch from '../../barSearch/BarSearch';

const Selection = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const { coursesSelected } = useSelector((state) => state.courses);
  console.log(coursesSelected);
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  


  
  useEffect(() => {
    dispatch(getCoursesSelection());
  }, [dispatch]);



  const filteredCourses = (coursesSelected && coursesSelected.length) ? coursesSelected.filter((topic) =>
    topic.course.toLowerCase().includes(searchTerm.toLowerCase())
  ):[];

  const handleCourseSelection = (course) => {
    setSelectedCourse(course);
    navigate('/profileSelectedSU', { state: course }); 
  };

  
  return (
    <>
      <HeaderSuperUser />
      <BackgroundSelection>
        <TitleSelection>Selección</TitleSelection>

        <BarSearch onSearch={handleSearch} />

        <ContentSelection>
          <div>
            <CoverSelection src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689684710/LIVE/Im%C3%A1genes/Covers/PORTADA_SELECTION_ncugeo.png" alt="" />
          </div>

          <ContentCourses>
            {filteredCourses.length === 0 ? (
              <DivNotFound>
                <img src='https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689736902/LIVE/Im%C3%A1genes/Icons/cerebro-unscreen_rdmhx5.gif' width={200} />
                <p>No se han encontrado resultados para tu búsqueda.</p>
              </DivNotFound>
            ) : (
              filteredCourses.map((topic) => (
                <ContentButtonCourses key={topic.id} onClick={() => handleCourseSelection(topic)}>
                  <div>
                    <img src={Flecha} alt="" width={30} />
                    <p>{topic.course}</p>
                  </div>
                </ContentButtonCourses>
              ))
            )}
          </ContentCourses>
        </ContentSelection>
      </BackgroundSelection>
    </>
  );
};

export default Selection;
