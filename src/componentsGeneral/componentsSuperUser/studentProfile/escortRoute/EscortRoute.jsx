import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { SearchOutlined } from "@ant-design/icons";
import {
  // SearchContainer,
  // SearchInput,
  // SearchButton,
  DivInputTraining,
  Container,
  Title,
  DivCohortGroupTraining,
  ContainerDiv,
  Etiquetas,
  Imagen,
  DivCreate,
} from "./EscortRouteStyled";
import HeaderSuperUser from "../../headerSuperUser/HeaderSuperUser";
import Equipo from "../../../../assets/equipoo.png";
import { ArrowLeftOutlined } from "@ant-design/icons";
// import { addEtiqueta } from "../../../../redux/actions/userActions";
import { Formik } from "formik";
import { addNewTypeCourseAsync } from "../../../../redux/actions/typeCourseActions";

const EscortRoute = () => {
  const dispatch = useDispatch();
  const labels = useSelector((state) => state.label);

  //  const [newLabel, setNewLabel] = useState("");

  const handleCreateLabel = ({ label }) => {
    if (label.trim() !== "") {
      console.log("esta llegando al if", label);
      dispatch(addNewTypeCourseAsync());
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
            <ArrowLeftOutlined size={30} />
            <Title>Ruta de acompañamiento</Title>
            {/* <SearchContainer>
              <SearchInput type="text" placeholder="Buscar..." />
              <SearchButton>
                <SearchOutlined className="icon" style={{ color: "black" }} />
              </SearchButton>
            </SearchContainer> */}
          </Container>
        </DivInputTraining>
      </DivCohortGroupTraining>

      <ContainerDiv>
        <Etiquetas>
          <h1>Etiquetas:</h1>
          {/* <p>Apoyo Socieconómico</p>
          <p>Apoyo de Equipo</p>
          <p>Apoyo Psicosocial</p>
          <p>Apoyo en Mentoría</p>
          <p>Apoyo en Técnico</p> */}
          {labels &&
            labels.length > 0 &&
            labels.map((etiqueta, index) => <p key={index}>{etiqueta}</p>)}
          {/* <p>{label}</p>  */}
        </Etiquetas>
        <Imagen src={Equipo} alt="" />
      </ContainerDiv>

      <DivCreate>
        <h2>Crear una nueva etiqueta:</h2>
        <Formik
          initialValues={{
            label: "",
          }}
          onSubmit={handleCreateLabel}
        >
          {({ isSubmitting }) => (
            <form>
              <input type="text" placeholder="Nueva Etiqueta" />
              <button type="submit">Crear</button>
            </form>
          )}
        </Formik>
      </DivCreate>
    </div>
  );
};

export default EscortRoute;
