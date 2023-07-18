import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addNewCohorTypestAsync } from "../../../redux/actions/newCohorteActions";
import styled from "styled-components";
import {
  Row,
  ErrorText,
  ButtonRow,
  Container,
  FormContainer,
  ImageContainer,
} from "./AddNewCohortStyled";
import chicaCompu from "../../../assets/chicaCompu.png";
import Swal from "sweetalert2";

const initialValues = {
  cohorte: "",
  numeroCohorte: "",
  fechaInicio: "",
  fechaFinalizacion: "",
  horario: "",
  instructores: "",
  otrosDetalles: "",
};

const validationSchema = Yup.object().shape({
  cohorte: Yup.string().required("Selecciona al menos una opción"),
  numeroCohorte: Yup.number()
    .required("Campo requerido")
    .typeError("Debe ser un número"),
  fechaInicio: Yup.string()
    .required("Campo requerido")
    .matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "La estructura de la fecha debe tener el formato dd/mm/yyyy"
    ),
  fechaFinalizacion: Yup.string()
    .required("Campo requerido")
    .matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "La estructura de la fecha debe tener el formato dd/mm/yyyy"
    ),
  horario: Yup.string()
    .required("Campo requerido"),
    // .matches(
    //   /^(0[1-9]|1[0-2]):[0-5][0-9](am|pm) - (0[1-9]|1[0-2]):[0-5][0-9](am|pm)$/,
    //   "El campo de hora debe tener el formato 14:00pm - 18:00pm"
    // )
    
  instructores: Yup.string()
    .required("Campo requerido")
    .matches(
      /^[\w\s-]+$/,
      "El campo de instructores solo debe contener nombres separados por guiones (-)"
    ),
});

const AddNewCohort = ({ addCohort }) => {
  const [isSaved, setIsSaved] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    await addCohort(values);
    setIsSaved(true);
    resetForm();

    // Mostrar el mensaje de SweetAlert
    Swal.fire({
      icon: "success",
      title: "Guardado exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  //estilo para el formulario
  const StyledForm = styled(Form)`
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
    height: 25px;
  `;

  const StyledFieldOther = styled(Field)`
    display: flex;
    border-radius: 4px;
    height: 80px;
    background-color: #fcfad5;
  `;

  const options = [
    { value: "Seleccionar" },
    { value: "Front-End" },
    { value: "Back-End" },
    { value: "Testing" },
    { value: "Análisis de datos" },
  ];

  return (
    <Container>
      <div>{/* <HeaderSuperUser /> */}</div>
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
                  <Field as="select" id="cohorte" name="cohorte">
                    {options.map((item) => (
                      <option value={item.value}>{item.value}</option>
                    ))}
                  </Field>
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
                  <label htmlFor="horario">Hora inicio y finalización</label>
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
            {isSaved && <div>Guardado exitosamente.</div>}
          </StyledForm>
        </Formik>
      </FormContainer>
      <ImageContainer>
        <img src={chicaCompu} alt="" />
      </ImageContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCohort: (newCohort) => dispatch(addNewCohorTypestAsync(newCohort)),
  };
};

export default connect(null, mapDispatchToProps)(AddNewCohort);
