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

  // Función para verificar si un estudiante puede unirse a una cohorte
  const canJoinCohort = (cohort) => {
    const maxStudentsPerCohort = 40;
    return cohort.estudiantes.length < maxStudentsPerCohort;
  };

  // Función para unir al estudiante a una cohorte
  const joinCohort = (cohort) => {
    cohort.estudiantes.push(/* Código para agregar al estudiante aquí */);
    // Código para actualizar la información del estudiante en Firestore aquí
  };

  const handleJoinCohort = (cohort) => {
    if (canJoinCohort(cohort)) {
      joinCohort(cohort);
    } else {
      // Encuentra la siguiente cohorte disponible con el mismo programa y únete a ella
      const nextCohort = cohorts.find(
        (c) => c.cohort.programa === cohort.cohort.programa && canJoinCohort(c)
      );
      if (nextCohort) {
        joinCohort(nextCohort);
      } else {
        // No hay más cohortes disponibles para este programa
        alert(
          "No hay más cupos disponibles para este programa en ninguna cohorte."
        );
      }
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
            <GridItem key={cohort.id}>
              <h2>{cohort.cohort?.programa}</h2>
              <p>Cohorte: {cohort.cohort?.cohorte}</p>
              <p>Fecha de inicio: {cohort.cohort?.fechaInicio}</p>
              <p>Fecha de cierre: {cohort.cohort?.fechaFinalizacion}</p>
              <button onClick={() => handleJoinCohort(cohort)}>Unirse</button>
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
