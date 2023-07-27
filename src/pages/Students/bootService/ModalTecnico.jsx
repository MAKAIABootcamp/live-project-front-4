import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
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
} from "./StyledModalBootservice";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { bootserviceActionAsync } from "../../../redux/actions/bootserviceAction";
const validationSchema = Yup.object().shape({
  descripcion: Yup.string().required("La respuesta es requerida"),
});
const ModalTecnico = ({ isModalOpen, handleModalClose }) => {
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
            <p>Apoyo Técnico</p>
            <p>
              Obligatorio<span>*</span>
            </p>
          </ModalHeader>

          <BodyModal>
            <p>
              Recuerda que este espacio es para ayudarte a resolver preguntas o
              necesidades técnicas en el marco de tu proceso formativo
            </p>
            <Formik
              initialValues={{ descripcion: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                const data = {
                  nameService: "Apoyo técnico",
                  descripcion: values.descripcion,
                  argumento: null,
                  uid: user.uid,
                };
                dispatch(bootserviceActionAsync(data)).then(() => {
                  resetForm();
                });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <ol>
                    <ListItem>
                      <label htmlFor="descripcion">
                        1. Déjanos aquí tus preguntas técnicas o la descripción
                        del tema que quieres resolver. <span>*</span>
                      </label>
                      <Field
                        name="descripcion"
                        type="text"
                        placeholder="Escriba su respuesta "
                        as="textarea"
                        cols="15"
                        rows="5"
                      />
                      <ErrorMessage name="descripcion" />
                    </ListItem>
                  </ol>
                  <ButtonContainer>
                    <ButtonModal type="submit" primary>
                      Guardar
                    </ButtonModal>
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

export default ModalTecnico;
