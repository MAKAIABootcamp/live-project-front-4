import React from "react";
import {
  // SearchContainer,
  // SearchInput,
  // SearchButton,
  GridContainer,
  GridItem,
  DivInputTraining,
  Container,
  Title,
  GridItemAgregate,
  DivCohortGroupTraining,
} from "./CohortGroupTrainingStyled";
// import { SearchOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import { useNavigate } from "react-router-dom";

const CohortGroupTraining = () => {
  const navigate = useNavigate();

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
            {/* <SearchContainer>
              <SearchInput type="text" placeholder="Buscar..." />
              <SearchButton>
                <SearchOutlined className="icon" style={{ color: "black" }} />
              </SearchButton>
            </SearchContainer> */}
          </Container>
        </DivInputTraining>

        <GridContainer>
          <GridItem>
            <h2>Front-End</h2>
            <p>Cohorte 6</p>
            <p>Fecha de inicio 21/07/2023</p>
          </GridItem>

          <GridItem>
            <h2>Back-End</h2>
            <p>Cohorte 3</p>
            <p>Fecha de inicio 21/07/2023</p>
          </GridItem>

          <GridItem>
            <h2>Front-End</h2>
            <p>Cohorte 7</p>
            <p>Fecha de inicio 21/07/2023</p>
          </GridItem>

          <GridItem>
            <h2>Testing</h2>
            <p>Cohorte 1</p>
            <p>Fecha de inicio 21/07/2023</p>
          </GridItem>

          <GridItem>
            <h2>Analisis de datos</h2>
            <p>Cohorte 4</p>
            <p>Fecha de inicio 21/07/2023</p>
          </GridItem>

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
