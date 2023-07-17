import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
import Equipoo from "../../../../assets/equipoo.png";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import { addBenefitTypesActionAsync } from "../../../../redux/actions/benefitTypesActions";
import { getBenefitAction } from "../../../../redux/actions/benefitTypesActions";

const EscortRoute = () => {
  const dispatch = useDispatch();
  const benefitTypes = useSelector((state) => state.benefitTypes.benefitTypes);

  useEffect(() => {
    dispatch(getBenefitAction("Beneficios"));
    dispatch(addBenefitTypesActionAsync());
  }, [dispatch]);

  const handleCreateLabel = (values) => {
    const { label } = values;
    if (label.trim() !== "") {
      dispatch(addBenefitTypesActionAsync(label));
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
          </Container>
        </DivInputTraining>

        <ContainerDiv>
          <Etiquetas>
            <h1>Etiquetas:</h1>
            {benefitTypes &&
              benefitTypes.map((benefit) => (
                <p key={benefit.id}>{benefit.label}</p>
              ))}
          </Etiquetas>
          <Imagen src={Equipoo} alt="" />
        </ContainerDiv>

        <DivCreate>
          <h2>Crear una nueva etiqueta:</h2>
          <Formik
            initialValues={{
              label: "",
            }}
            onSubmit={handleCreateLabel}
          >
            {({ handleChange, handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nueva Etiqueta"
                  name="label"
                  value={values.label}
                  onChange={handleChange}
                />
                <button type="submit">Crear</button>
              </form>
            )}
          </Formik>
        </DivCreate>
      </DivCohortGroupTraining>
    </div>
  );
};

export default EscortRoute;
