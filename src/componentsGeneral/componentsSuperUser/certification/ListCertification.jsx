// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { BackgroundCertification, SectionBarCertification, SectionListFinal, ArrowBackCertification } from './CertificationStyle';
// import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser';
// import { TitleCourseFinal, Certified } from './CertificationStyle';
// import Back from '../../../assets/devolver.png';
// import BarSearch from '../../barSearch/BarSearch';

// const ListCertification = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const selectedCourse = location.state.courseData;
//   const courseTitle = location.state.courseTitle;

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const toCertification = () => {
//     navigate('/certificationSuperUser');
//   };

//   const filterCertifiedStudents = (certifiedStudents) => {
//     return certifiedStudents.filter((student) =>
//       student.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   return (
//     <>
//       <HeaderSuperUser />
//       <BackgroundCertification>
//         <ArrowBackCertification src={Back} width={20} onClick={toCertification} />
//         <div>
//           <TitleCourseFinal>
//             {courseTitle} / Cohorte {selectedCourse.id}
//             <Certified>
//               <strong>Certificados</strong>
//             </Certified>
//           </TitleCourseFinal>
//         </div>
//         <SectionBarCertification>
//           <BarSearch onSearch={handleSearch} />
//         </SectionBarCertification>

//         <SectionListFinal>
//           <div>
//             {selectedCourse && filterCertifiedStudents(selectedCourse.groupCertified).map((listFinal, keyListFinal) => (
//               <button key={keyListFinal}>
//                 <img src={listFinal.profile} width={50} alt={listFinal.name} />
//                 <p>{listFinal.name}</p>
//               </button>
//             ))}
//           </div>
//         </SectionListFinal>
//       </BackgroundCertification>
//     </>
//   );
// };

// export default ListCertification;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BackgroundCertification, SectionBarCertification, SectionListFinal, ArrowBackCertification, DivNotFoundCertified } from './CertificationStyle';
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser';
import { TitleCourseFinal, Certified } from './CertificationStyle';
import Back from '../../../assets/devolver.png';
import BarSearch from '../../barSearch/BarSearch';

const ListCertification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = location.state.courseData;
  const courseTitle = location.state.courseTitle;

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toCertification = () => {
    navigate('/certificationSuperUser');
  };

  const filterCertifiedStudents = (certifiedStudents) => {
    return certifiedStudents.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCertifiedStudents = filterCertifiedStudents(selectedCourse?.groupCertified || []);

  return (
    <>
      <HeaderSuperUser />
      <BackgroundCertification>
        <ArrowBackCertification src={Back} width={20} onClick={toCertification} />
        <div>
          <TitleCourseFinal>
            {courseTitle} / Cohorte {selectedCourse.id}
            <Certified>
              <strong>Certificados</strong>
            </Certified>
          </TitleCourseFinal>
        </div>
        <SectionBarCertification>
          <BarSearch onSearch={handleSearch} />
        </SectionBarCertification>
        <SectionListFinal>
        <div>
          {filteredCertifiedStudents.length === 0 ? (
            <>
            <DivNotFoundCertified>
            <img src='https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689736902/LIVE/Im%C3%A1genes/Icons/cerebro-unscreen_rdmhx5.gif' width={200} alt="No se han encontrado resultados" />
            <p>No se han encontrado los perfiles que buscas.</p>
          </DivNotFoundCertified>
          </>
          ) : (
            filteredCertifiedStudents.map((listFinal, keyListFinal) => (
              <button key={keyListFinal}>
                <img src={listFinal.profile} width={50} alt={listFinal.name} />
                <p>{listFinal.name}</p>
              </button>
            ))
          )}
        </div>
      </SectionListFinal>
      </BackgroundCertification>
    </>
  );
};

export default ListCertification;