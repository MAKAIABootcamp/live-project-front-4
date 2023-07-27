import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { CleseContainer, ModalContainer, CloseButton, ModalContent, ModalHeader, BodyModal, ListItem, ButtonContainer, ButtonModal, ButtonModalCancelar } from '../bootService/StyledModalBootservice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updataActionAsync } from '../../../redux/actions/studentAction';
import { fileUpload } from "../../../services";


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
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
`;
const ModalProfile = ({ isModalOpen, handleModalClose, telefono, correo, imagen }) => {

  const [image, setImage] = useState("");
  const [load, setLoad] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const file = e.target.files[0];
    setLoad(true)
    try {
      const url = await fileUpload(file);
      setImage(url)
      setLoad(false)
    } catch (error) {
      console.log(error);
    }
  }
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
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {

                dispatch(updataActionAsync(values.telefono, values.correo, image, user.uid));
                resetForm();
                handleModalClose()
                // fileUpLoad(image[0]).then(response => {
                //   console.log(response);
                //   //dispatch(updataActionAsync(values.telefono, values.correo, response, user.uid));
                //   resetForm();
                //   handleModalClose()
                //})

                // dispatch(updataActionAsync(values.telefono, values.correo, values.imagen, user.uid))
                //   .then(() => {
                //     resetForm();
                //     handleModalClose()
                //   })
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
                      {/* <Field name="imagen" type="file" /> */}
                      <input type="file"  onChange={(e)=>handleChange(e)} />
                      {/* <ErrorMessage name="imagen" /> */}
                    </ListItem>

                  </ListOl>
                  <ButtonContainer>
                    {!load?
                    <ButtonModal type='submit'>
                      Actualizar
                    </ButtonModal>
                    :<Loader>Cargando imagen...</Loader>
                    }
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