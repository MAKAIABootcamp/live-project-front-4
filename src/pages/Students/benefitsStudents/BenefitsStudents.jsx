import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderStudents from "../headerStudents/HeaderStudents";
import FooterStudents from "../footerStudents/FooterStudents";
import coment from "../../../assets/coment.png";
import {
  ApplicationForBenefits,
  BenefitsReceived,
  ButtonBenefits,
  ContainerBenefitBackg,
  ContainerBenefitStudents,
  InputTextArea,
  TableBenefits,
} from "./StyleBenefitsStudents";
import { setBenefits } from "../../../redux/actions/benefitsActions";
import { dataBase } from "../../../confiFirebase/configFirebase";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

const BenefitsStudents = () => {
  const [benefit, setBenefit] = useState("");
  const [notes, setNotes] = useState("");

  const benefitsList = useSelector((state) => state.benefits.benefitsList);

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(setBenefits());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const formData = {
      benefit: benefit,
      notes: notes,
    };

    try {
     
      const docRef = await addDoc(
        collection(dataBase, "BeneficiosSolicitados"),
        formData
      );

     
      console.log(docRef.id);
        Swal.fire(
          'Solicitud enviada exitosamente',
          // 
        )
      
      setBenefit("");
      setNotes("");
    } catch (error) {
     
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <ContainerBenefitBackg>
      <HeaderStudents />
      <ContainerBenefitStudents>
        <ApplicationForBenefits>
          <div>
            <h2>Solicitud de beneficios</h2>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Beneficio</label> <br />
            <select
              name="Select"
              id=""
              value={benefit}
              onChange={(e) => setBenefit(e.target.value)}
            >
              <option value="Selecciona un beneficio">
                Selecciona un beneficio
              </option>
              {benefitsList.map((benefitName) => (
                <option key={benefitName} value={benefitName}>
                  {benefitName}
                </option>
              ))}
            </select>
            <br />
            <InputTextArea>
              <label htmlFor="">Notas</label> <br />
              <textarea
                name=""
                id=""
                cols="50"
                rows="10"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </InputTextArea>
            <ButtonBenefits>
              <button type="submit">Solicitar</button>
            </ButtonBenefits>
          </form>
        </ApplicationForBenefits>
        <BenefitsReceived>
          <div>
            <h2>Beneficios recibidos</h2>
          </div>
          <TableBenefits>
            <tbody>
              <tr>
                <th>Beneficio</th>
                <th> Fecha solicitud</th>
                <th> Fecha entrega</th>
                <th> Estado</th>
                <th> Comentario</th>
              </tr>

              <tr>
                <td>Apoyo socioeconómico</td>
                <td> 02 marzo 2022</td>
                <td> 15 marzo 2022</td>
                <td> Aceptado</td>
                <td>
                  <img src={coment} alt="" />
                </td>
              </tr>
              <tr>
                <td>Préstamo de equipo</td>
                <td> 15 abril 2022</td>
                <td> </td>
                <td> Denegado</td>
                <td>
                  <img src={coment} alt="" />
                </td>
              </tr>
              <tr>
                <td>Asesoría individual</td>
                <td> 17 abril 2022</td>
                <td> 25 abril 2022</td>
                <td> Aceptado</td>
                <td>
                  <img src={coment} alt="" />
                </td>
              </tr>
            </tbody>
          </TableBenefits>
        </BenefitsReceived>
      </ContainerBenefitStudents>
      <FooterStudents />
    </ContainerBenefitBackg>
  );
};

export default BenefitsStudents;
