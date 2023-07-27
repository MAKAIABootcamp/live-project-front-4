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
import { bootserviceActionAsync } from "../../../redux/actions/bootserviceAction";
import { useDispatch, useSelector } from "react-redux";
const validationSchema = Yup.object().shape({
  descripcion: Yup.string().required("La respuesta es requerida"),
  situacion: Yup.string().required("La respuesta es requerida"),
});
const ModalPsicosocial = ({ isModalOpen, handleModalClose }) => {
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
            <p>Apoyo Psicosocial</p>
            <p>
              Obligatorio<span>*</span>
            </p>
          </ModalHeader>

          <BodyModal>
            <Formik
              initialValues={{
                situacion: "",
                descripcion: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                const data = {
                  nameService: "Apoyo psicosocial",
                  descripcion: values.descripcion,
                  argumento: values.situacion,
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
                        1. Déjanos aquí una breve descripción de tu situación y
                        el porqué está afectando tu proceso formativo en el
                        Bootcamp <span>*</span>
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
                    <ListItem>
                      <label htmlFor="situacion">
                        2. ¿Cómo consideras que podemos apoyarte en esta
                        situación? <span>*</span>
                      </label>
                      <Field
                        name="situacion"
                        placeholder="Escriba su respuesta"
                        as="textarea"
                        cols="15"
                        rows="5"
                      />
                      <ErrorMessage name="situacion" />
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

export default ModalPsicosocial;
