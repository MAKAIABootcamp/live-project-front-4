import React, { useState, useEffect } from "react";
import {
  DivInputTraining,
  Container,
  Title,
  DivCohortGroupTraining,
  TableBenefits,
  Modal,
  ModalContent,
} from "./RequestsBeneficiosStyled";
import HeaderSuperUser from "../../headerSuperUser/HeaderSuperUser";
import { CommentOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBenefitSolicitActions } from "../../../../redux/actions/getBenefitSolicitActions";

const RequestsBeneficios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const CommentIcon = styled(CommentOutlined)`
    font-size: 24px;
  `;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comentario:", comment);
    closeModal();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Dispatch para obtener los datos de Firestore
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getBenefitSolicitActions());
  // }, [dispatch]);

  // // Obtener los datos de beneficiosSolicitados del store de Redux
  // const beneficiosSolicitados = useSelector(
  //   (state) => state.BeneficiosSolicitados.beneficiosSolicitados
  // );

  const handleNavigateStudentProfileBenefits = () => {
    navigate("/studentProfileBenefits");
  };

  return (
    <div>
      <div>
        <HeaderSuperUser />
      </div>
      <DivCohortGroupTraining>
        <DivInputTraining>
          <Container>
            <ArrowLeftOutlined
              size={30}
              onClick={handleNavigateStudentProfileBenefits}
            />
            <Title>Solicitud de beneficios</Title>
          </Container>
        </DivInputTraining>
      </DivCohortGroupTraining>
      <div>
        <TableBenefits>
          <tr>
            <th>Beneficio</th>
            <th> Fecha solicitud</th>
            <th> Fecha entrega</th>
            <th> Estado</th>
            <th> Comentario</th>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>{/* Agrega aquí la fecha de entrega del beneficio */}</td>
            <td>
              <select>
                <option value="en Proceso">En proceso</option>
                <option value="aceptado">Aceptado</option>
                <option value="denegado">Denegado</option>
              </select>
            </td>
            <td>
              <CommentIcon onClick={openModal} />
            </td>
          </tr>
        </TableBenefits>

        {isModalOpen && (
          <Modal>
            <ModalContent>
              <h3>Comentario del Beneficio recibido</h3>
              <form>
                <input
                  type="text"
                  id="commentInput"
                  value={comment}
                  onChange={handleCommentChange}
                  onKeyDown={handleKeyDown}
                  style={{ textAlign: "top" }}
                />
                <div>
                  <button type="submit" onClick={handleSubmit}>
                    Guardar
                  </button>
                  <button onClick={closeModal}>Cerrar</button>
                </div>
              </form>
            </ModalContent>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default RequestsBeneficios;
