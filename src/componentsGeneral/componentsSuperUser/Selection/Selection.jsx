import Flecha from "../../../assets/flecha-hacia-abajo.png";
import {
  ContentButtonCourses,
  ContentCourses,
  ContentSelection,
  TitleSelection,
  CoverSelection,
  BackgroundSelection,
} from "../Selection/SelectionStyle";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Agregar la importación de "useSelector"
import { getByCollectionName, selectCourse } from "../../../redux/actions/coursesActions";
import { useNavigate } from "react-router-dom";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";

const Selection = () => {



  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Asegúrate de obtener el estado "coursesSelected" desde el store
  const coursesSelected = useSelector((state) => state.courses.coursesSelected);

  useEffect(() => {
    dispatch(getByCollectionName("Selección"));
  }, [dispatch]);

  const filteredCourses = coursesSelected.filter((topic) =>
    topic.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseSelection = (course) => {
    dispatch(selectCourse(course));
    navigate("/profileSelectedSU", { state: course });
  };

  return (
    <>
      <HeaderSuperUser />
      <BackgroundSelection>
        <TitleSelection>Selección</TitleSelection>
        <ContentSelection>
          <div>
            <CoverSelection
              src="https:res.cloudinary.com/ddlvk2lsi/image/upload/v1689684710/LIVE/Im%C3%A1genes/Covers/PORTADA_SELECTION_ncugeo.png"
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
