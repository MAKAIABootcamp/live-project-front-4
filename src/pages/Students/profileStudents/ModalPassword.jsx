import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CleseContainer,
  ModalContainer,
  CloseButton,
  ModalContent,
  ModalHeader,
  BodyModal,
  ListItem,
  ButtonContainer,
  ButtonModal,
  ButtonModalCancelar,
} from "../bootService/StyledModalBootservice";
import styled from "styled-components";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { auth } from "../../../confiFirebase/configFirebase";
import Swal from "sweetalert2";

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("La contraseña actual es requerida"),
  newPassword: Yup.string()
    .min(6, "La nueva contraseña debe tener al menos 6 caracteres")
    .required("La nueva contraseña es requerida"),
  repitNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Las contraseñas no coinciden")
    .required("Repite la nueva contraseña"),
});
const ListOl = styled.ol`
  input {
    height: 30px;
  }
`;

const ModalPassword = ({ isModalOpen, handleModalClose }) => {
  return (
    isModalOpen && (
      <ModalContainer>
        <ModalContent>
          <CleseContainer>
            <CloseButton onClick={handleModalClose}>X</CloseButton>
          </CleseContainer>
          <ModalHeader>
            <p>Actualizar Contraseña</p>
          </ModalHeader>

          <BodyModal>
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                repitNewPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                const user = auth.currentUser;
                const currentPassword = values.oldPassword;

                const credentials = EmailAuthProvider.credential(
                  user.email,
                  currentPassword
                );

                reauthenticateWithCredential(user, credentials)
                  .then(() => {
                    updatePassword(user, values.newPassword)
                      .then(() => {
                        Swal.fire({
                          icon: "success",
                          title: "Contraseña actualizada",
                          text: "La contraseña se actualizó correctamente.",
                        });
                        resetForm();
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        if (errorCode === "auth/weak-password") {
                          Swal.fire({
                            icon: "error",
                            title: "Contraseña débil",
                            text: "La nueva contraseña es demasiado débil. Debe contener al menos 6 caracteres.",
                          });
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Error al actualizar la contraseña",
                            text: error.message,
                          });
                        }
                      });
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode === "auth/wrong-password") {
                      Swal.fire({
                        icon: "error",
                        title: "Contraseña incorrecta",
                        text: "Contraseña actual incorrecta. Inténtalo nuevamente con la contraseña actual correcta.",
                      });
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Error al reautenticar al usuario",
                        text: error.message,
                      });
                    }
                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <ListOl>
                    <ListItem>
                      <label htmlFor="oldPassword">Contraseña actual</label>
                      <Field name="oldPassword" type="password" />
                      <ErrorMessage name="oldPassword" />
                    </ListItem>
                    <ListItem>
                      <label htmlFor="newPassword">Nueva contraseña</label>
                      <Field name="newPassword" type="password" />
                      <ErrorMessage name="newPassword" />
                    </ListItem>
                    <ListItem>
                      <label htmlFor="repitNewPassword">
                        Repetir nueva contraseña
                      </label>
                      <Field name="repitNewPassword" type="password" />
                      <ErrorMessage name="repitNewPassword" />
                    </ListItem>
                  </ListOl>
                  <ButtonContainer>
                    <ButtonModal type="submit">Actualizar</ButtonModal>
                    <ButtonModalCancelar onClick={handleModalClose}>
                      Cancelar
                    </ButtonModalCancelar>
                  </ButtonContainer>
                </Form>
              )}
            </Formik>
          </BodyModal>
        </ModalContent>
      </ModalContainer>
    )
  );
};
export default ModalPassword;
