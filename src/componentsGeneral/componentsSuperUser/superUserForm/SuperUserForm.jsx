import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
// import { saveSuperUser } from "../../../redux/actions/userActions";
import {
  Panel,
  DivInput,
  Input,
  Form,
  Action,
  DivTitleSearch,
  Select,
} from "./SuperUserFormStyled";
import CategoryCollaborators from "./category/CategoryCollaborators";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
// import { functions } from "../../../redux/confiFirebase/configFirebase";
import "firebase/functions";
import * as Yup from "yup";

const SuperUserForm = ({ saveSuperUser }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Guardar el usuario en Redux
      saveSuperUser(values);

      // Enviar la contraseña al correo corporativo del usuario utilizando Firebase Functions
      // const sendPasswordEmail = functions.httpsCallable("sendPasswordEmail");
      // const password = generatePassword();
      // await sendPasswordEmail({
      //   email: values.emailCorporate,
      //   password,
      // });

      // Restablecer los valores del formulario
      setSubmitting(false);
    } catch (error) {
      console.log("Error al enviar la contraseña por correo:", error);
      // Manejar el error apropiadamente
    }
  };

  // const generatePassword = () => {
  //   // contraseña aleatoria de 8 caracteres
  //   const characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let password = "";
  //   for (let i = 0; i < 8; i++) {
  //     password += characters.charAt(
  //       Math.floor(Math.random() * characters.length)
  //     );
  //   }
  //   return password;
  // };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    emailCorporate: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    phone: Yup.string().required("Required"),
  });

  return (
    <div>
      <div>
        <HeaderSuperUser />
      </div>
      <Panel>
        <DivTitleSearch>
          <h1>Equipo de trabajo</h1>
        </DivTitleSearch>
        <p>Aquí puedes ingresar a tus colaboradores</p>
        <Formik
          initialValues={{
            name: "",
            area: "",
            post: "",
            emailCorporate: "",
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <DivInput>
                <label htmlFor="">Nombre del colaborador</label>
                <Input type="text" name="name" placeholder="Nombre Completo" />
              </DivInput>

              <DivInput>
                <label htmlFor="">Area</label>
                <Select type="text" name="area">
                  <option value="Entrenamiento">Entrenamiento</option>
                  <option value="Experiencia">Experiencia</option>
                  <option value="Empleabilidad">Empleabilidad</option>
                  <option value="Comercial">Comercial</option>
                </Select>
              </DivInput>

              <DivInput>
                <label htmlFor="">Cargo</label>
                <Input type="text" name="post" placeholder="Cargo" />
              </DivInput>

              <DivInput>
                <label htmlFor="">Correo Corporativo</label>
                <Input type="email" name="emailCorporate" placeholder="Email" />
              </DivInput>

              <DivInput>
                <label htmlFor="">Número de Teléfono</label>
                <Input type="phone" name="phone" placeholder="325 2356 458" />
              </DivInput>

              <Action>
                <button type="submit" disabled={isSubmitting}>
                  Enviar Formulario
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     saveSuperUser: (userData) => {
//       dispatch(saveSuperUser(userData));
//     },
//     // Puedes agregar más acciones de Redux para mapear a props del componente aquí
//   };
// };

// export default connect(mapDispatchToProps)(SuperUserForm);
export default SuperUserForm;
