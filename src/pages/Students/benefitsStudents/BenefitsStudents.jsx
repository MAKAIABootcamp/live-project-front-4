import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderStudents from "../headerStudents/HeaderStudents";
import FooterStudents from "../footerStudents/FooterStudents";
import coment from "../../../assets/coment.png";
import {
  ApplicationForBenefits,
  BenefitsReceived,
  ButtonBenefits,
  ContainerBenefitStudents,
  InputTextArea,
  TableBenefits,
} from "./StyleBenefitsStudents";
import { setBenefits } from "../../../redux/actions/benefitsActions";
import { dataBase } from "../../../confiFirebase/configFirebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import Swal from "sweetalert2";
import ModalComent from "./ModalComent";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BenefitsSchema = Yup.object().shape({
  benefit: Yup.string().required("*Selecciona un beneficio"),
  notes: Yup.string().required("*El campo Notas es obligatorio"),
});

const BenefitsStudents = () => {
  const [userBenefits, setUserBenefits] = useState([]);
  const benefitsList = useSelector((state) => state.benefits.benefitsList);
  const { student } = useSelector((store) => store.student);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const handleOpenModal = (benefitData) => {
    setSelectedBenefit(benefitData);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedBenefit(null);
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(setBenefits());

    const fetchUserBenefits = async () => {
      try {
        const q = query(
          collection(dataBase, "BeneficiosSolicitados"),
          where("uid", "==", student.uid)
        );

        const querySnapshot = await getDocs(q);
        const userBenefitsData = querySnapshot.docs.map((doc) => doc.data());

        setUserBenefits(userBenefitsData);
      } catch (error) {
        console.error("Error al obtener los beneficios del usuario:", error);
      }
    };

    fetchUserBenefits();
  }, [dispatch, student.uid]);

  const handleSubmit = async (values) => {
    const formData = {
      benefit: values.benefit,
      notes: values.notes,
      uid: student.uid,
      date: new Date(),
      estado: "en Proceso",
    };

    try {
      const docRef = await addDoc(
        collection(dataBase, "BeneficiosSolicitados"),
        formData
      );

      console.log(docRef.id);
      Swal.fire("Solicitud enviada exitosamente");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
      <HeaderStudents />
      <ContainerBenefitStudents>
        <ApplicationForBenefits>
          <div>
            <h2>Solicitud de beneficios</h2>
          </div>
          <Formik
            initialValues={{ benefit: "", notes: "" }}
            validationSchema={BenefitsSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
          >
            {({ touched, errors }) => (
              <Form>
                <label htmlFor="benefit">Beneficio</label> <br />
                <Field as="select" name="benefit" id="benefit">
                  <option value="" disabled>
                    Selecciona un beneficio
                  </option>
                  {benefitsList.map((benefitName) => (
                    <option key={benefitName} value={benefitName}>
                      {benefitName}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="benefit"
                  component="section"
                  className="error"
                />
                <br />
                <InputTextArea>
                  <label htmlFor="notes">Notas</label> <br />
                  <Field
                    as="textarea"
                    name="notes"
                    id="notes"
                    cols="50"
                    rows="10"
                  />
                </InputTextArea>
                <ErrorMessage
                  name="notes"
                  component="section"
                  className="error"
                />
                <br />
                <ButtonBenefits>
                  <button type="submit">Solicitar</button>
                </ButtonBenefits>
              </Form>
            )}
          </Formik>
        </ApplicationForBenefits>
        <BenefitsReceived>
          <div>
            <h2>Beneficios solicitados</h2>
          </div>
          <TableBenefits>
            <tbody>
              <tr>
                <th>Beneficio</th>
                <th>Fecha solicitud</th>
                <th>Fecha entrega</th>
                <th>Estado</th>
                <th>Comentario</th>
              </tr>

              {/* Iterar sobre los beneficios del usuario y mostrarlos en la tabla */}
              {userBenefits.map((benefitData) => (
                <tr key={benefitData.id}>
                  <td>{benefitData.benefit}</td>
                  <td>{benefitData.date.toDate().toLocaleDateString()}</td>
                  <td>
                    {benefitData.fechaEntrega
                      ? benefitData.fechaEntrega.toDate().toLocaleDateString()
                      : ""}
                  </td>
                  <td>{benefitData.estado}</td>
                  <td>
                    <img
                      src={coment}
                      alt=""
                      onClick={() => handleOpenModal(benefitData)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </TableBenefits>
        </BenefitsReceived>
      </ContainerBenefitStudents>
      <FooterStudents />
      {isModalOpen && (
        <ModalComent
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          selectedBenefit={selectedBenefit}
        />
      )}
    </>
  );
};
export default BenefitsStudents;
