import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ContentButtonCourses,
  ContentCourses,
  ContentSelection,
  TitleSelection,
  CoverSelection,
  BackgroundSelection,
} from "../Selection/SelectionStyle";
import Flecha from "../../../assets/flecha-hacia-abajo.png";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import { getByCollectionName } from "../../../redux/actions/coursesActions";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getByCollectionName("Selección"));
  }, [dispatch]);

  const coursesData = useSelector((state) => state.courses.coursesData);

  const filteredCourses = coursesData.filter((topic) =>
    topic.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseSelection = (course) => {
    setSelectedCourse(course);
    navigate("/profileSelectedSU", { state: course }); // Pasamos el curso seleccionado como estado en el objeto de ubicación.
  };

  return (
    <>
      <HeaderSuperUser />
      <BackgroundSelection>
        <TitleSelection>Selección</TitleSelection>
        <ContentSelection>
          <div>
            <CoverSelection
              src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689684710/LIVE/Im%C3%A1genes/Covers/PORTADA_SELECTION_ncugeo.png"
              alt=""
            />
          </div>

          <ContentCourses>
            {filteredCourses.map((topic) => (
              <ContentButtonCourses
                key={topic.id}
                onClick={() => handleCourseSelection(topic)}
              >
                <div>
                  <img src={Flecha} alt="" width={30} />
                  <p>{topic.course}</p>
                </div>
              </ContentButtonCourses>
            ))}
          </ContentCourses>
        </ContentSelection>
      </BackgroundSelection>
    </>
  );
};

export default Selection;
