import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormContainer,
  FormGroup,
  SubmitButton,
  ErrorText,
  FormGroupSelect,
  DivDiv,
} from "./FormToAddStudentStyled";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import * as Yup from "yup";
import { addAdminAndStudentsTypesActionAsync } from "../../../redux/actions/addAdminAndStudentsActions";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const FormToAddStudent = ({ addAdminAndStudents }) => {
  const handleSubmit = async (values) => {
    const { nombre, celular, programa, email } = values;
    const password = generateRandomPassword(8);

    const userData = {
      nombre,
      celular,
      programa,
      email,
      contraseña: password,
      userType: "estudiante",
      uid: "",
      formularioLlenado: "false",
      img: "https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690344748/LIVE/Im%C3%A1genes/PhotoProfiles/photo-1494790108377-be9c29b29330_mobc0t.jpg",
      estado:['selección']
    };

    try {
      //creando la autenticacion y tomando el uid
      createLoginAndSaveUserInFireStore(values.email, password, userData);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error creando cuenta!",
        text: "Ocurrio un error creando y/o registrando el usuario::".concat(
          error
        ),
      });
    }
  };

  const createLoginAndSaveUserInFireStore = (email, password, userData) => {
    const auth = getAuth();
    //creando autenticacion
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //logueado
        const user = userCredential.user;
        console.log("Usuario creado", user);
        userData.uid = userCredential.user.uid;

        //añadir datos a firestore
        addAdminAndStudents(userData);

        // Datos para enviar en el correo
        const { email, contraseña, nombre } = userData;
        const templateParams = {
          nombre: nombre,
          email: email,
          password: contraseña,
        };

        //enviando el mail
        sendMailWelcome(templateParams);
      })
      .catch((error) => {
        // console.error("ERROR_CREANDO_USUARIO ", error);
      });
  };
  const sendMailWelcome = async (templateParams) => {
    // Configurar emailjs-com con los detalles de tu cuenta
    init("HG4_QlSaoJ-f9recA");
    // Enviar el correo
    const response = await emailjs.send(
      "service_ewi3quf",
      "template_hg3t809",
      templateParams,
      "aNjV2AvY_XWC4wve6"
    );
    Swal.fire({
      icon: "success",
      title: "¡Formulario enviado exitosamente!",
      text: "El formulario ha sido enviado y el usuario ha sido agregado correctamente.",
    });

    console.log("Correo enviado:", response);
  };

  const generateRandomPassword = (length) => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
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
    email: Yup.string()
      .required("Campo requerido")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
        "Correo inválido (ejemplo@gmail.com)"
      ),
  });

  const initialValues = {
    nombre: "",
    celular: "",
    programa: "",
    email: "",
    userType: "estudiante",
    contraseña: "",
    formularioLlenado: "false",
    img: "https://res.cloudinary.com/ddlvk2lsi/image/upload/v1690344748/LIVE/Im%C3%A1genes/PhotoProfiles/photo-1494790108377-be9c29b29330_mobc0t.jpg",
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
      <div>
        <HeaderSuperUser />
      </div>

      <DivDiv>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormContainer>
              <FormGroup>
                <label htmlFor="nombre">Nombre del estudiante:</label>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre Completo"
                />
                <ErrorMessage name="nombre" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="celular">Número de Celular:</label>
                <Field
                  type="text"
                  id="celular"
                  name="celular"
                  placeholder="Número de Celular"
                />
                <ErrorMessage name="celular" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">Correo:</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Correo"
                />
                <ErrorMessage name="email" component={ErrorText} />
              </FormGroup>

              <FormGroupSelect>
                <label htmlFor="programa">Programa:</label>
                <Field as="select" id="programa" name="programa">
                  {options.map((item) => (
                    <option value={item.value}>{item.value}</option>
                  ))}
                </Field>
                <ErrorMessage name="programa" component={ErrorText} />
              </FormGroupSelect>

              <SubmitButton type="submit">Enviar</SubmitButton>
            </FormContainer>
          </Form>
        </Formik>
      </DivDiv>
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
