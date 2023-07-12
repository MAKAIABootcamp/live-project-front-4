import React from "react";
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

const BenefitsStudents = () => {
  return (
    <>
      <HeaderStudents />
      <ContainerBenefitStudents>
        <ApplicationForBenefits>
          <div>
            <h2>Solicitud de beneficios</h2>
          </div>
          <form action="">
            <label htmlFor="">Beneficio</label> <br />
            <select name="Select" id="">
              <option value="Selecciona un beneficio">
                Selecciona un beneficio
              </option>
              <option value="Prestamo de equipo">Prestamo de equipo</option>
              <option value="Apoyo socioeconomico">Apoyo socioeconomico</option>
              <option value="Asesoría individual">Asesoría individual</option>
            </select>{" "}
            <br />
            <InputTextArea>
              <label htmlFor="">Notas</label> <br />
              <textarea name="" id="" cols="50" rows="10"></textarea>
            </InputTextArea>
            <ButtonBenefits>
              <button>Solicitar</button>
            </ButtonBenefits>
          </form>
        </ApplicationForBenefits>
        <BenefitsReceived>
          <div>
            <h2>Beneficios recibidos</h2>
          </div>
          <TableBenefits>
            <tr>
              <th>Beneficio</th>
              <th> Fecha solicitud</th>
              <th> Fecha entrega</th>
              <th> Estado</th>
              <th> Comentario</th>
            </tr>

            <tr>
              <td>Apoyo socieconómico</td>
              <td> 02 marzo 2022</td>
              <td> 15 marzo 2022</td>
              <td> Aceptado</td>
              <td>
                <img src={coment} alt="" />
              </td>
            </tr>
            <tr>
              <td>Prestamo de equipo</td>
              <td> 15 abril 2022</td>
              <td> </td>
              <td> Denegado</td>
              <td>
                <img src={coment} alt="" />
              </td>
            </tr>
            <tr>
              <td>Asesoria individual</td>
              <td> 17 abril 2022</td>
              <td> 25 abril 2022</td>
              <td> Aceptado</td>
              <td>
                <img src={coment} alt="" />
              </td>
            </tr>
          </TableBenefits>
        </BenefitsReceived>
      </ContainerBenefitStudents>
      <FooterStudents />
    </>
  );
};

export default BenefitsStudents;
