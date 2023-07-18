import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Row,
  ErrorText,
  ButtonRow,
  Container,
  FormContainer,
  ImageContainer,
} from "./AddNewCohortStyled";
import styled from "styled-components";
import chicaCompu from "../../../assets/chicaCompu.png";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";

const initialValues = {
  cohorte: "",
  numeroCohorte: "",
  fechaInicio: "",
  fechaFinalizacion: "",
  horarioInicio: "",
  horarioTerminacion: "",
  instructores: "",
  otrosDetalles: "",
};

const validationSchema = Yup.object().shape({
  cohorte: Yup.string().required("Campo requerido"),
  numeroCohorte: Yup.string().required("Campo requerido"),
  fechaInicio: Yup.string().required("Campo requerido"),
  fechaFinalizacion: Yup.string().required("Campo requerido"),
  horarioInicio: Yup.string().required("Campo requerido"),
  horarioTerminacion: Yup.string().required("Campo requerido"),
  instructores: Yup.string().required("Campo requerido"),
  otrosDetalles: Yup.string(),
});

const onSubmit = (values) => {
  console.log(values);
};

const AddNewCohort = () => {
  //estilo para el formulario
  const StyledForm = styled(Form)`
    /* display: flex; */
    flex-wrap: wrap;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    background-color: #03203a;
    border-radius: 8px;

    h1 {
      color: #25abbc;
    }
  `;

  const StyledField = styled(Field)`
    display: flex;
    border-radius: 4px;
    height: 20px;
  `;

  const StyledFieldOther = styled(Field)`
    display: flex;
    border-radius: 4px;
    height: 80px;
    background-color: #fcfad5;
  `;

  return (
    <>
    <HeaderSuperUser />
    <Container>
      <div>
      </div>
      <div>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <StyledForm>
            <h1>Crear un nuevo grupo</h1>
            <div>
              <Row>
                <div>
                  <label htmlFor="cohorte">Cohorte</label>
                  <StyledField as="select" id="cohorte" name="cohorte">
                    <option value="">Seleccionar</option>
                    <option value="Front-end">Front-end</option>
                    <option value="Backend">Backend</option>
                    <option value="Testing">Testing</option>
                    <option value="Análisis de datos">Análisis de datos</option>
                  </StyledField>

                  <ErrorMessage name="cohorte" component={ErrorText} />
                </div>

                <div>
                  <label htmlFor="numeroCohorte">Número de Cohorte</label>
                  <StyledField
                    type="text"
                    id="numeroCohorte"
                    name="numeroCohorte"
                  />
                  <ErrorMessage name="numeroCohorte" component={ErrorText} />
                </div>
              </Row>

              <Row>
                <div>
                  <label htmlFor="fechaInicio">Fecha Inicio</label>
                  <StyledField
                    type="text"
                    id="fechaInicio"
                    name="fechaInicio"
                    placeholder="15/08/2023"
                  />
                  <ErrorMessage name="fechaInicio" component={ErrorText} />
                </div>

                <div>
                  <label htmlFor="fechaFinalizacion">Fecha Finalización</label>
                  <StyledField
                    type="text"
                    id="fechaFinalizacion"
                    name="fechaFinalizacion"
                    placeholder="15/01/2024"
                  />
                  <ErrorMessage
                    name="fechaFinalizacion"
                    component={ErrorText}
                  />
                </div>
              </Row>

              <Row>
                <div>
                  <label htmlFor="horario">Horario</label>
                  <StyledField
                    type="text"
                    id="horario"
                    name="horario"
                    placeholder="14:00pm - 18:00pm"
                  />
                  <ErrorMessage name="horario" component={ErrorText} />
                </div>
              </Row>

              <Row>
                <div>
                  <label htmlFor="instructores">Instructores</label>
                  <StyledField
                    type="text"
                    id="instructores"
                    name="instructores"
                    placeholder="Nombre"
                  />
                  <ErrorMessage name="instructores" component={ErrorText} />
                </div>
              </Row>

              <Row>
                <div>
                  <label htmlFor="otrosDetalles">Otros Detalles</label>
                  <StyledFieldOther
                    type="textarea"
                    id="otrosDetalles"
                    name="otrosDetalles"
                    placeholder="Añade notas sobre detalles a tener encuenta"
                  />
                  <ErrorMessage name="otrosDetalles" component={ErrorText} />
                </div>
              </Row>
            </div>
            <ButtonRow>
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => {}}>
                Descartar
              </button>
            </ButtonRow>
          </StyledForm>
        </Formik>
      </FormContainer>
      </div>
      <ImageContainer>
        <img src={chicaCompu} alt="" />
      </ImageContainer>
    </Container>
    </>
  );
};

export default AddNewCohort;
