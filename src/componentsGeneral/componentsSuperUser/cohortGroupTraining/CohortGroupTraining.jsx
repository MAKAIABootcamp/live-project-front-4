import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GridContainer,
  GridItem,
  DivInputTraining,
  Container,
  Title,
  GridItemAgregate,
  DivCohortGroupTraining,
} from "./CohortGroupTrainingStyled";
import { PlusOutlined } from "@ant-design/icons";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import { useNavigate } from "react-router-dom";
import { getCohortAction } from "../../../redux/actions/newCohorteActions";
import { getStudentsByProgramAction } from "../../../redux/actions/addAdminAndStudentsActions";

const CohortGroupTraining = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cohorts = useSelector((state) => state.cohort.cohorts);

  useEffect(() => {
    dispatch(getCohortAction());
  }, [dispatch]);

  const handleNavigateAddNewCohort = () => {
    navigate("/addNewCohort");
  };

  const handleStudentProfileBenefits = async (programa) => {
    console.log(".......:", programa);
    try {
      // Obtén los estudiantes por programa y pasa la lista a la página GroupListStudents
      const users = await dispatch(getStudentsByProgramAction(programa));
      navigate("/groupListStudents", {
        state: { users, programa }, // Aquí es donde se pasa la información
      });
    } catch (error) {
      console.error("Error al obtener los estudiantes:", error);
    }
  };

  return (
    <div>
      <div>
        <HeaderSuperUser />
      </div>
      <DivCohortGroupTraining>
        <DivInputTraining>
          <Container>
            <Title>En Formación</Title>
          </Container>
        </DivInputTraining>

        <GridContainer>
          {cohorts.map((cohort) => (
            <GridItem
              key={cohort.id}
              onClick={() =>
                handleStudentProfileBenefits(cohort.cohort?.programa)
              }
            >
              <h2>{cohort.cohort?.programa}</h2>
              <p>Cohorte: {cohort.cohort?.cohorte}</p>
              <p>Fecha de inicio: {cohort.cohort?.fechaInicio}</p>
              <p>Fecha de cierre: {cohort.cohort?.fechaFinalizacion}</p>
            </GridItem>
          ))}

          <GridItemAgregate onClick={handleNavigateAddNewCohort}>
            <button onClick={handleNavigateAddNewCohort}>
              <PlusOutlined
                onClick={handleNavigateAddNewCohort}
                className="join"
                style={{ color: "#EEE420", fontSize: "50px" }}
              />
            </button>
          </GridItemAgregate>
        </GridContainer>
      </DivCohortGroupTraining>
    </div>
  );
};

export default CohortGroupTraining;


