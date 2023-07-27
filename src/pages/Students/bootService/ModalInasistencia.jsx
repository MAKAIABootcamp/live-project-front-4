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
} from "./StyledModalBootservice";
import { useDispatch, useSelector } from "react-redux";
import { bootserviceActionAsync } from "../../../redux/actions/bootserviceAction";

// Estilos para el contenedor del modal

const validationSchema = Yup.object().shape({
  diasInasistecias: Yup.string().required("La respuesta es requerida"),
  argumento: Yup.string().required("La respuesta es requerida"),
});
const ModalInasistencia = ({ isModalOpen, handleModalClose }) => {
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
            <p>Reporte de inasistencia</p>
            <p>
              Obligatorio<span>*</span>
            </p>
          </ModalHeader>

          <BodyModal>
            {/*Contenindo modela */}
            <Formik
              initialValues={{ diasInasistecias: "", argumento: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                const data = {
                  nameService: "Reporte de inasistencia",
                  descripcion: values.diasInasistecias,
                  argumento: values.argumento,
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
                      <label htmlFor="diasInasistecias">
                        1. Escribe el día o los días en los que no podrás
                        conectarte <span>*</span>
                      </label>
                      <Field
                        name="diasInasistecias"
                        type="text"
                        placeholder="Escriba su respuesta "
                        as="textarea"
                        cols="15"
                        rows="5"
                      />
                      <ErrorMessage name="diasInasistecias" />
                    </ListItem>
                    <ListItem>
                      <label htmlFor="">
                        2. Argumenta <span>*</span>
                      </label>
                      <Field
                        name="argumento"
                        placeholder="Escriba su respuesta"
                        as="textarea"
                        cols="15"
                        rows="5"
                      />
                      <ErrorMessage name="argumento" />
                    </ListItem>
                  </ol>
                  <ButtonContainer>
                    <ButtonModal type="submit">Guardar</ButtonModal>
                    <ButtonModalCancelar onClick={handleModalClose}>
                      Cancelar
                    </ButtonModalCancelar>
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
export default ModalInasistencia;
