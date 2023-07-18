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
              <p>Fecha de finalización: {cohort.cohort?.fechaFinalizacion}</p>
              <p>Horario de inicio: {cohort.cohort?.horarioInicio}</p>
              <p>Horario de cierre: {cohort.cohort?.horarioCierre}</p>
              <p>Formador técnico: {cohort.cohort?.formadorTecnico}</p>
              <p>Mentor técnico: {cohort.cohort?.mentorTecnico}</p>
              <p>Facilitador: {cohort.cohort?.facilitador}</p>
              <p>Nota: {cohort.cohort?.otrosDetalles}</p>
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
