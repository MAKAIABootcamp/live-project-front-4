
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { CleseContainer, ModalContainer, CloseButton, ModalContent, ModalHeader, BodyModal, ListItem, ButtonContainer, ButtonModal, ButtonModalCancelar } from '../bootService/StyledModalBootservice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updataActionAsync } from '../../../redux/actions/studentAction';

// Estilos para el contenedor del modal

const validationSchema = Yup.object().shape({
  telefono: Yup.string()
    .required('La respuesta es requerida'),
  correo: Yup.string()
    .email("Debe ingresar un email")
    .required('La respuesta es requerida'),
});
const ListOl = styled.ol`
    input{
        height:30px ;
    }
`
const ModalProfile = ({ isModalOpen, handleModalClose, telefono, correo, imagen }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    isModalOpen && (
      <ModalContainer>
        <ModalContent>
          <CleseContainer>
            <CloseButton onClick={handleModalClose}>X</CloseButton>
          </CleseContainer>
          <ModalHeader>
            <p>Actualizar datos</p>
          </ModalHeader>

          <BodyModal>
            {/*Contenindo modela */}
            <Formik
              initialValues={{
                telefono: "" || telefono,
                correo: "" || correo,
                imagen: "" || imagen,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {

                dispatch(updataActionAsync(values.telefono, values.correo, values.imagen, user.uid))
                  .then(() => {
                    resetForm();
                    handleModalClose()
                  })
              }}
            >
              {({ errors, touched }) => (
                <Form>

                  <ListOl>
                    <ListItem>
                      <label htmlFor="telefono">Télefono celular</label>
                      <Field name="telefono" type="text" placeholder='Escriba su télefono' />
                      <ErrorMessage name="telefono" />
                    </ListItem>
                    <ListItem>
                      <label htmlFor="correo">Correo electrónico</label>
                      <Field name="correo" placeholder='Escriba su correo' />
                      <ErrorMessage name="correo" />
                    </ListItem>
                    <ListItem>
                      <label htmlFor="imagen">Imagen de perfil</label>
                      <Field name="imagen" type="file" />
                      <ErrorMessage name="imagen" />
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
export default ModalProfile;