
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { CleseContainer, ModalContainer, CloseButton, ModalContent, ModalHeader, BodyModal, ListItem, ButtonContainer, ButtonModal, ButtonModalCancelar } from '../bootService/StyledModalBootservice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updataActionAsync } from '../../../redux/actions/studentAction';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { auth } from '../../../confiFirebase/configFirebase';
import Swal from 'sweetalert2';

// Estilos para el contenedor del modal

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('La contraseña actual es requerida'),
  newPassword: Yup.string()
    .min(6, 'La nueva contraseña debe tener al menos 6 caracteres')
    .required('La nueva contraseña es requerida'),
  repitNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Las contraseñas no coinciden')
    .required('Repite la nueva contraseña'),
});
const ListOl = styled.ol`
    input{
        height:30px ;
    }
`

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
            {/*Contenindo modela */}
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                repitNewPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                const user = auth.currentUser;
                const currentPassword = values.oldPassword; // Reemplaza esto con la contraseña actual del usuario
                
                const credentials = EmailAuthProvider.credential(user.email, currentPassword);
                
                reauthenticateWithCredential(user, credentials)
                  .then(() => {
                    // La reautenticación fue exitosa, ahora puedes actualizar la contraseña
                    updatePassword(user, values.newPassword)
                      .then(() => {
                        // La actualización de contraseña fue exitosa
                        Swal.fire({
                          icon: 'success',
                          title: 'Contraseña actualizada',
                          text: 'La contraseña se actualizó correctamente.',
                        });
                        resetForm()
                      })
                      .catch((error) => {
                        // Ocurrió un error al actualizar la contraseña
                        const errorCode = error.code;
                        if (errorCode === 'auth/weak-password') {
                          Swal.fire({
                            icon: 'error',
                            title: 'Contraseña débil',
                            text: 'La nueva contraseña es demasiado débil. Debe contener al menos 6 caracteres.',
                          });
                        } else {
                          Swal.fire({
                            icon: 'error',
                            title: 'Error al actualizar la contraseña',
                            text: error.message,
                          });
                        }
                      });
                  })
                  .catch((error) => {
                    // Ocurrió un error al reautenticar al usuario
                    const errorCode = error.code;
                    if (errorCode === 'auth/wrong-password') {
                      Swal.fire({
                        icon: 'error',
                        title: 'Contraseña incorrecta',
                        text: 'Contraseña actual incorrecta. Inténtalo nuevamente con la contraseña actual correcta.',
                      });
                    } else {
                      Swal.fire({
                        icon: 'error',
                        title: 'Error al reautenticar al usuario',
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
                      <label htmlFor="repitNewPassword">Repetir nueva contraseña</label>
                      <Field name="repitNewPassword" type="password" />
                      <ErrorMessage name="repitNewPassword" />
                    </ListItem>
                  </ListOl>
                  <ButtonContainer>
                    <ButtonModal type='submit'>
                      Actualizar
                    </ButtonModal>
                    <ButtonModalCancelar onClick={handleModalClose}>Cancelar</ButtonModalCancelar>
                  </ButtonContainer>
                </Form>
              )}
            </Formik>

            {/* Fin ontenindo modela */}
          </BodyModal>

        </ModalContent>
      </ModalContainer>
    )
  );
};
export default ModalPassword;