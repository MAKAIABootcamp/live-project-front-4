import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TitleCertification, CoursesCertified, SectionYearStyle, ButtonLastCourse, TypeCohorte, MoreInfoCourse, BackgroundCertification, SectionBarCertification } from './CertificationStyle';
import HeaderSuperUser from '../headerSuperUser/HeaderSuperUser';
import BarSearch from '../../barSearch/BarSearch';
import { getCoursesCertification } from '../../../redux/actions/coursesActions';
import { DivNotFound } from '../Selection/SelectionStyle';

const Certification = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    console.log('Search Term:', term);
    setSearchTerm(term);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursesCertification('Certificacion'));
  }, [dispatch]);

  const coursesDataCertification = useSelector((state) => state.courses.coursesDataCertification);

  const filterCoursesBySearchTerm = (courses) => {
    return courses.filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const [selectedCourse, setSelectedCourse] = useState(null);

  const toCertification = (courseData) => {
    navigate('/listCertifiedSU', { state: { courseData, courseTitle: courseData.title } });
  };

  return (
    <>
      <HeaderSuperUser />
      <BackgroundCertification>
        <TitleCertification>Certificación</TitleCertification>
        <SectionBarCertification>
          <BarSearch onSearch={handleSearch} />
        </SectionBarCertification>
        {/* <section>
          <button>resultado 1</button>
          <button>resultado 2</button>
          </section> */}
        <CoursesCertified>
          {coursesDataCertification.map((studentsCertified) => (
            <React.Fragment key={studentsCertified.id}>
              <p>{studentsCertified.year}</p>
              <SectionYearStyle>
              {studentsCertified.courses && filterCoursesBySearchTerm(studentsCertified.courses).length === 0 ? (
                <DivNotFound>
                  <img src='https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689736902/LIVE/Im%C3%A1genes/Icons/cerebro-unscreen_rdmhx5.gif' width={200} alt="No se han encontrado resultados" />
                  <p>No se han encontrado los cursos que buscas.</p>
                </DivNotFound>
              ) : (
                filterCoursesBySearchTerm(studentsCertified.courses).map((course) => (
                  <React.Fragment key={course.id}>
                    <ButtonLastCourse onClick={() => toCertification(course)}>
                      <div>
                        <TypeCohorte>{course.title}</TypeCohorte>
                        <MoreInfoCourse>Cohorte {course.id}</MoreInfoCourse>
                        <MoreInfoCourse>Finalizó: {course.lastDate}</MoreInfoCourse>
                      </div>
                    </ButtonLastCourse>
                  </React.Fragment>
                ))
              )}
              </SectionYearStyle>
            </React.Fragment>
          ))}
        </CoursesCertified>
      </BackgroundCertification>
    </>
  );
};

export default Certification;


