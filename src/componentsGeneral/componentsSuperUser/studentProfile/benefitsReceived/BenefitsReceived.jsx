import React, { useState } from "react";
import {
  // SearchContainer,
  // SearchInput,
  // SearchButton,
  DivInputTraining,
  Container,
  Title,
  DivCohortGroupTraining,
  Modal,
  ModalContent,
  TableBenefits,
} from "./BenefitsStyled";
// import { SearchOutlined } from "@ant-design/icons";
import HeaderSuperUser from "../../headerSuperUser/HeaderSuperUser";
import { CommentOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BenefitsReceived = () => {
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
            <Title>Beneficios recibidos</Title>
            {/* <SearchContainer>
              <SearchInput type="text" placeholder="Buscar..." />
              <SearchButton>
                <SearchOutlined className="icon" style={{ color: "black" }} />
              </SearchButton>
            </SearchContainer> */}
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
            <td>Apoyo Socioecónomico</td>
            <td>02/05/2023</td>
            <td>10/05/2023</td>
            <td>Aceptado</td>
            <td>
              <CommentIcon onClick={openModal} />
            </td>
          </tr>
          <tr>
            <td>Prestamo de equipo</td>
            <td>02/05/2023</td>
            <td>10/05/2023</td>
            <td>Denegado</td>
            <td>
              <CommentIcon onClick={openModal} />
            </td>
          </tr>
          <tr>
            <td>Asesoria individual</td>
            <td>02/05/2023</td>
            <td>10/05/2023</td>
            <td>Aceptado</td>
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

export default BenefitsReceived;
