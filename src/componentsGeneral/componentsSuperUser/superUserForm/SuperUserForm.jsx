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

const SuperUserForm = ({ addAdminAndStudentsTypesActionAsync }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Guardar el usuario en Redux
      addAdminAndStudentsTypesActionAsync(values);

      //Enviar la contraseña al correo corporativo del usuario utilizando
      const sendPasswordEmail = "sendPasswordEmail";
      const password = generatePassword();
      await sendPasswordEmail({
        email: values.emailCorporate,
        password,
      });

      // Restablecer los valores del formulario
      setSubmitting(false);
    } catch (error) {
      console.log("Error al enviar la contraseña por correo:", error);
      // Manejar el error apropiadamente
    }
  };

  const generatePassword = () => {
    // contraseña aleatoria de 8 caracteres
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
    newAdminAndStydentsType: (userData) => {
      dispatch(addAdminAndStudentsTypesActionAsync(userData));
    },

  };
};

export default connect(mapDispatchToProps)(SuperUserForm);
// export default SuperUserForm;
