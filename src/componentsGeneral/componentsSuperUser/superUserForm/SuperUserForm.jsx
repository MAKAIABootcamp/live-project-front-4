import React from "react";
import { connect } from "react-redux";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { Panel, DivInput, ErrorText, Action } from "./SuperUserFormStyled";
import CategoryCollaborators from "./category/CategoryCollaborators";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import * as Yup from "yup";
import { addAdminAndStudentsTypesActionAsync } from "../../../redux/actions/addAdminAndStudentsActions";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SuperUserForm = ({ addAdminAndStudents }) => {
  const handleSubmit = async (values) => {
    const { nombre, area, cargo, email, telefono } = values;
    const password = generateRandomPassword(8); // Generar contraseña aleatoria de 8 caracteres

    const userData = {
      nombre,
      area,
      cargo,
      email,
      telefono,
      contraseña: password,
      userType: "administrador",
      uid: "",
    };
    try {
      //creando la autenticacion y tomando el uid
  
    
          // Agregar el usuario a Firestore usando la acción addAdminAndStudentsTypesActionAsync

          console.log("Usuario agregado correctamente a Firestore.");
  
        createUserWithMailAndPassword(values.email, password,userData);

     
    } catch (error) {
      console.error("Error al agregar el usuario a Firestore:", error);
    }
  };

  const createUserWithMailAndPassword = (email, password, userData) => {
    console.log("email es", email);
    console.log("password es", password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //logueado
        const user = userCredential.user;
        console.log("Usuario creado", user);
        userData.uid =userCredential.user.uid;
        addAdminAndStudents(userData);
        // Datos para el correo
        const { email, contraseña, nombre } = userData;
        const templateParams = {
          nombre: nombre,
          email: email,
          password: contraseña,
        };
        //enviar mail
        sendMailWelcome(templateParams);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return "ERROR_CREANDO_USUARIO";
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

  const generateRandomPassword = () => {
    // contraseña aleatoria de 8 caracteres
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("Campo requerido"),
    email: Yup.string().required("Campo requerido"),
    telefono: Yup.string().required("Campo requerido"),
  });

  const options = [
    { value: "Seleccionar" },
    { value: "Entrenamiento" },
    { value: "Experiencia" },
    { value: "Empleabilidad" },
    { value: "Comercial" },
  ];

  return (
    <div>
      <div>
        <HeaderSuperUser />
      </div>
      <Panel>
        <h1>Equipo de trabajo</h1>
        <p>Aquí puedes ingresar a tus colaboradores</p>
        <Formik
          initialValues={{
            nombre: "",
            area: "",
            cargo: "",
            email: "",
            telefono: "",
            userType: "administrador",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <DivInput>
              <label htmlFor="">Nombre del colaborador</label>
              <Field
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre Completo"
              />
              <ErrorMessage name="nombre" component={ErrorText} />
            </DivInput>

            <DivInput>
              <label htmlFor="">Área</label>
              <Field as="select" id="area" name="area">
                {options.map((item) => (
                  <option value={item.value}>{item.value}</option>
                ))}
              </Field>
              <ErrorMessage name="area" component={ErrorText} />
            </DivInput>

            <DivInput>
              <label htmlFor="">Cargo</label>
              <Field type="text" name="cargo" id="cargo" placeholder="Cargo" />
              <ErrorMessage name="cargo" component={ErrorText} />
            </DivInput>

            <DivInput>
              <label htmlFor="">Correo corporativo</label>
              <Field type="email" name="email" id="email" placeholder="Email" />
              <ErrorMessage name="email" component={ErrorText} />
            </DivInput>

            <DivInput>
              <label htmlFor="">Número de teléfono</label>
              <Field
                type="telefono"
                name="telefono"
                id="telefono"
                placeholder="325 2356 458"
              />
              <ErrorMessage name="telefono" component={ErrorText} />
            </DivInput>
            <Action>
              <button type="submit">Enviar formulario</button>
            </Action>
          </Form>
        </Formik>
      </Panel>
      <div>
        <CategoryCollaborators />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAdminAndStudents: (userData) =>
      dispatch(addAdminAndStudentsTypesActionAsync(userData)),
  };
};

export default connect(null, mapDispatchToProps)(SuperUserForm);
