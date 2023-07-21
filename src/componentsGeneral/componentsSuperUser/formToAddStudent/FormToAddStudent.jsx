import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormContainer,
  FormGroup,
  SubmitButton,
  ErrorText,
} from "./FormToAddStudentStyled";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import * as Yup from "yup";
import { addAdminAndStudentsTypesActionAsync } from "../../../redux/actions/addAdminAndStudentsActions";

const FormToAddStudent = ({ addAdminAndStudents }) => {
  const handleSubmit = async (values) => {
    const { nombre, celular, programa, correo } = values;
    const password = generateRandomPassword(8); // Generar contraseña aleatoria de 8 caracteres
    const userData = {
      nombre,
      celular,
      programa,
      correo,
      contraseña: password,
      userType: "estudiante",
    };

    try {
      // Agregar el usuario a Firestore usando la acción addAdminAndStudentsTypesActionAsync
      await addAdminAndStudents(userData);
      console.log("Usuario agregado correctamente a Firestore.");
    } catch (error) {
      console.error("Error al agregar el usuario a Firestore:", error);
    }
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .required("Campo requerido")
      .matches(
        /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/,
        "No se permiten números y signos de puntuación"
      ),
    celular: Yup.string()
      .required("Campo requerido")
      .matches(/^\d+(\.\d+)*$/, "Formato de celular inválido"),
    programa: Yup.string().required("Campo requerido"),
    correo: Yup.string()
      .required("Campo requerido")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
        "Correo inválido (ejemplo@gmail.com)"
      ),
  });

  const generateRandomPassword = (length) => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  };

  const initialValues = {
    nombre: "",
    celular: "",
    programa: "",
    correo: "",
    userType: "estudiante",
    contraseña: "",
  };

  const options = [
    { value: "Seleccionar" },
    { value: "Back-End" },
    { value: "Data Analytics" },
    { value: "Front-End" },
    { value: "Software QA" },
  ];
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
                <label htmlFor="correo">Correo:</label>
                <Field type="text" id="correo" name="correo" />
                <ErrorMessage name="correo" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="programa">Programa:</label>
                <Field as="select" id="programa" name="programa">
                  {options.map((item) => (
                    <option value={item.value}>{item.value}</option>
                  ))}
                </Field>
                <ErrorMessage name="programa" component={ErrorText} />
              </FormGroup>

              <SubmitButton type="submit">Enviar</SubmitButton>
            </FormContainer>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

// export default FormToAddStudent;
const mapDispatchToProps = (dispatch) => {
  return {
    addAdminAndStudents: (userData) =>
      dispatch(addAdminAndStudentsTypesActionAsync(userData)),
  };
};

export default connect(null, mapDispatchToProps)(FormToAddStudent);
