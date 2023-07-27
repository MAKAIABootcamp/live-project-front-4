import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addNewCohorTypestAsync } from "../../../redux/actions/newCohorteActions";
import styled from "styled-components";
import es from "date-fns/locale/es";

import {
  Row,
  ErrorText,
  ButtonRow,
  Container,
  FormContainer,
  ImageContainer,
  RowDate,
  Div,
} from "./AddNewCohortStyled";
import chicaCompu from "../../../assets/chicaCompu.png";
import Swal from "sweetalert2";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialValues = {
  programa: "",
  cohorte: "",
  fechaInicio: new Date(),
  fechaFinalizacion: new Date(),
  horarioInicio: "",
  horarioCierre: "",
  formadorTecnico: "",
  mentorTecnico: "",
  facilitador: "",
  otrosDetalles: "",
};

const validationSchema = Yup.object().shape({
  programa: Yup.string().required("Selecciona al menos una opción"),
  cohorte: Yup.number()
    .required("Campo requerido")
    .typeError("Debe ser un número"),
  fechaInicio: Yup.string().required("Campo requerido"),
  fechaFinalizacion: Yup.string().required("Campo requerido"),
  horarioInicio: Yup.string().required("Campo requerido"),
  horarioCierre: Yup.string().required("Campo requerido"),
  formadorTecnico: Yup.string().required("Campo requerido"),
  mentorTecnico: Yup.string().required("Campo requerido"),
  facilitador: Yup.string().required("Campo requerido"),
});

const AddNewCohort = ({ addCohort }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmit = async (values, { resetForm }) => {
    const formattedStartDate = values.fechaInicio.toLocaleDateString();
    const formattedEndDate = values.fechaFinalizacion.toLocaleDateString();

    values.fechaInicio = formattedStartDate;
    values.fechaFinalizacion = formattedEndDate;
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

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  //estilo para el formulario
  const StyledForm = styled(Form)`
    flex-wrap: wrap;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    background-color: #03203a;
    /* background-color: #1b7c8c; */
    border-radius: 8px;
    @media (min-width: 768px) {
      max-width: 410px;
    }
    @media screen and (max-width: 414px) {
      max-width: 340px;
    }

    h1 {
      color: #1b7c8c;
      text-align: center;
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
  const StyledDatePicker = styled(DatePicker)`
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 25px;
    width: 235px;
    @media (min-width: 768px) {
      width: 170px;
    }
    @media screen and (max-width: 414px) {
      width: 155px;
      margin-right: 5px;
    }

    .react-datepicker__header {
      background-color: #03203a;
      color: #fff;
      border-bottom: none;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header {
      font-weight: bold;
    }

    .react-datepicker__day-names {
      display: flex;
      justify-content: space-around;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    .react-datepicker__day-name {
      width: 2rem;
      line-height: 2rem;
      text-align: center;
    }

    .react-datepicker__day {
      width: 2rem;
      line-height: 2rem;
      text-align: center;
      cursor: pointer;
      border-radius: 50%;
    }

    .react-datepicker__day:hover {
      background-color: #03203a;
      color: #fff;
    }

    .react-datepicker__day--selected {
      background-color: #25abbc;
      color: #fff;
    }

    .react-datepicker__day--disabled {
      color: #ccc;
      cursor: default;
    }

    .react-datepicker__time-container {
      border-top: 1px solid #ccc;
      margin-top: 0.5rem;
      padding-top: 0.5rem;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box {
      width: 50%;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list {
      padding-left: 0;
      padding-right: 0;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item {
      padding: 0.25rem 0.5rem;
      cursor: pointer;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item:hover {
      background-color: #03203a;
      color: #fff;
    }
  `;
  const StyledDatePickerfin = styled(DatePicker)`
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 25px;
    width: 240px;
    @media (min-width: 768px) {
      width: 170px;
    }
    @media screen and (max-width: 414px) {
      width: 155px;
    }

    .react-datepicker__header {
      background-color: #03203a;
      color: #fff;
      border-bottom: none;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header {
      font-weight: bold;
    }

    .react-datepicker__day-names {
      display: flex;
      justify-content: space-around;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    .react-datepicker__day-name {
      width: 2rem;
      line-height: 2rem;
      text-align: center;
    }

    .react-datepicker__day {
      width: 2rem;
      line-height: 2rem;
      text-align: center;
      cursor: pointer;
      border-radius: 50%;
    }

    .react-datepicker__day:hover {
      background-color: #03203a;
      color: #fff;
    }

    .react-datepicker__day--selected {
      background-color: #25abbc;
      color: #fff;
    }

    .react-datepicker__day--disabled {
      color: #ccc;
      cursor: default;
    }

    .react-datepicker__time-container {
      border-top: 1px solid #ccc;
      margin-top: 0.5rem;
      padding-top: 0.5rem;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box {
      width: 50%;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list {
      padding-left: 0;
      padding-right: 0;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item {
      padding: 0.25rem 0.5rem;
      cursor: pointer;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item:hover {
      background-color: #03203a;
      color: #fff;
    }
  `;
  const options = [
    { value: "Seleccionar" },
    { value: "Back-End" },
    { value: "Data Analytics" },
    { value: "Front-End" },
    { value: "Software QA" },
  ];

  return (
    <>
      <HeaderSuperUser />
      <Container>
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
                    <label htmlFor="programa">Programa</label>
                    <Field as="select" id="programa" name="programa">
                      {options.map((item) => (
                        <option value={item.value}>{item.value}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="programa" component={ErrorText} />
                  </div>

                  <div>
                    <label htmlFor="cohorte">Cohorte</label>
                    <StyledField
                      type="text"
                      id="cohorte"
                      name="cohorte"
                      placeholder="Número de cohorte"
                    />
                    <ErrorMessage name="cohorte" component={ErrorText} />
                  </div>
                </Row>

                <RowDate>
                  <div>
                    <label htmlFor="fechaInicio">
                      Fecha de inicio <span></span>
                    </label>
                    <StyledDatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      dateFormat="dd/MM/yyyy"
                      type="text"
                      id="fechaInicio"
                      name="fechaInicio"
                      placeholder="Selecciona una fecha"
                      locale={es}
                    />
                    <ErrorMessage name="fechaInicio" component={ErrorText} />
                  </div>

                  <Div>
                    <label htmlFor="fechaFinalizacion">
                      Fecha de finalización
                    </label>
                    <StyledDatePickerfin
                      selected={endDate}
                      onChange={handleEndDateChange}
                      dateFormat="dd/MM/yyyy"
                      type="text"
                      id="fechaFinalizacion"
                      name="fechaFinalizacion"
                      placeholder="Selecciona una fecha"
                      locale={es}
                    />
                    <ErrorMessage
                      name="fechaFinalizacion"
                      component={ErrorText}
                    />
                  </Div>
                </RowDate>

                <Row>
                  <div>
                    <label htmlFor="horarioInicio">Hora de inicio</label>
                    <StyledField
                      type="time"
                      id="horarioInicio"
                      name="horarioInicio"
                      placeholder="14:00pm"
                    />
                    <ErrorMessage name="horarioInicio" component={ErrorText} />
                  </div>
                </Row>

                <Row>
                  <div>
                    <label htmlFor="horarioCierre">Hora de cierre</label>
                    <StyledField
                      type="time"
                      id="horarioCierre"
                      name="horarioCierre"
                      placeholder="14:00pm - 18:00pm"
                    />
                    <ErrorMessage name="horarioCierre" component={ErrorText} />
                  </div>
                </Row>

                <Row>
                  <div>
                    <label htmlFor="formadorTecnico">Formador técnico</label>
                    <StyledField
                      type="text"
                      id="formadorTecnico"
                      name="formadorTecnico"
                      placeholder="Nombre"
                    />
                    <ErrorMessage
                      name="formadorTecnico"
                      component={ErrorText}
                    />
                  </div>
                </Row>

                <Row>
                  <div>
                    <label htmlFor="mentorTecnico">Mentor técnico</label>
                    <StyledField
                      type="text"
                      id="mentorTecnico"
                      name="mentorTecnico"
                      placeholder="Nombre"
                    />
                    <ErrorMessage name="mentorTecnico" component={ErrorText} />
                  </div>
                </Row>

                <Row>
                  <div>
                    <label htmlFor="facilitador">Facilitador</label>
                    <StyledField
                      type="text"
                      id="facilitador"
                      name="facilitador"
                      placeholder="Nombre"
                    />
                    <ErrorMessage name="facilitador" component={ErrorText} />
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCohort: (newCohort) => dispatch(addNewCohorTypestAsync(newCohort)),
  };
};

export default connect(null, mapDispatchToProps)(AddNewCohort);
