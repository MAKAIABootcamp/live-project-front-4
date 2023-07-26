import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import {
  Panel,
  DivInput,
  Input,
  Form,
  Action,
  Select,
} from "./SuperUserFormStyled";
import CategoryCollaborators from "./category/CategoryCollaborators";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import * as Yup from "yup";
import { addAdminAndStudentsTypesActionAsync } from "../../../redux/actions/addAdminAndStudentsActions";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

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
    };

    try {
      // Agregar el usuario a Firestore usando la acción addAdminAndStudentsTypesActionAsync
      await addAdminAndStudents(userData);
      console.log("Usuario agregado correctamente a Firestore.");
      const { email, contraseña } = userData;

      // Configurar emailjs-com con los detalles de tu cuenta
      init("HG4_QlSaoJ-f9recA");

      // Datos para el correo
      const templateParams = {
        to_email: email,
        password: contraseña,
      };

      // Enviar el correo
      const response = await emailjs.send(
        "template_hg3t809",
        "service_p1kix9s",
        templateParams
      );

      console.log("Correo enviado:", response);
    } catch (error) {
      console.error("Error al agregar el usuario a Firestore:", error);
    }
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
    name: Yup.string().required("Required"),
    emailCorporate: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    phone: Yup.string().required("Required"),
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
            contraseña: "",
            userType: "administrador",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <DivInput>
                <label htmlFor="">Nombre del colaborador</label>
                <Input
                  type="text"
                  name="nombre"
                  placeholder="Nombre Completo"
                />
              </DivInput>

              <DivInput>
                <label htmlFor="">Área</label>
                <Select as="select" id=" area" name=" area">
                  {options.map((item) => (
                    <option value={item.value}>{item.value}</option>
                  ))}
                </Select>
              </DivInput>

              <DivInput>
                <label htmlFor="">Cargo</label>
                <Input type="text" name="cargo" placeholder="Cargo" />
              </DivInput>

              <DivInput>
                <label htmlFor="">Correo corporativo</label>
                <Input type="email" name="email" placeholder="Email" />
              </DivInput>

              <DivInput>
                <label htmlFor="">Número de teléfono</label>
                <Input
                  type="telefono"
                  name="telefono"
                  placeholder="325 2356 458"
                />
              </DivInput>

              <Action>
                <button type="submit" disabled={isSubmitting}>
                  Enviar formulario
                </button>
              </Action>
            </Form>
          )}
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
// export default SuperUserForm;
