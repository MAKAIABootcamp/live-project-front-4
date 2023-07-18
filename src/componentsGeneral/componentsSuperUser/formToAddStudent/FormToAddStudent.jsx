import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormContainer,
  FormGroup,
  SubmitButton,
  ErrorText,
} from "./FormToAddStudentStyled";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import * as Yup from "yup";

const FormToAddStudent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .required("Campo requerido")
      .matches(/^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, "Solo se permiten letras y tilde"),
    celular: Yup.string()
      .required("Campo requerido")
      .matches(/^\d+(\.\d+)*$/, "Formato de celular inválido"),
    curso: Yup.string().required("Campo requerido"),
    correo: Yup.string()
      .required("Campo requerido")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
        "Correo inválido (ejemplo@gmail.com)"
      ),
  });

  const initialValues = {
    nombre: "",
    celular: "",
    curso: "",
    correo: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <HeaderSuperUser />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormContainer>
              <FormGroup>
                <label htmlFor="nombre">Nombre del estudiante:</label>
                <Field type="text" id="nombre" name="nombre" />
                <ErrorMessage name="nombre" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="celular">Número de Celular:</label>
                <Field type="text" id="celular" name="celular" />
                <ErrorMessage name="celular" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="curso">Curso:</label>
                <Field type="text" id="curso" name="curso" />
                <ErrorMessage name="curso" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="correo">Correo:</label>
                <Field type="text" id="correo" name="correo" />
                <ErrorMessage name="correo" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  Estudiante
                </label>
                {isChecked}
                <ErrorMessage name="correo" component={ErrorText} />
              </FormGroup>

              <SubmitButton type="submit">Enviar</SubmitButton>
            </FormContainer>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormToAddStudent;
