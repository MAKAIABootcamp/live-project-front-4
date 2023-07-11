import React, { useState } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  DivInputTraining,
  Container,
  Title,
  DivCohortGroupTraining,
  ListContainer,
  ListItem,
  Box,
  ListItemcolumn,
  Modal,
  ModalContent,
} from "./BenefitsStyled";
import { SearchOutlined } from "@ant-design/icons";
import HeaderSuperUser from "../../headerSuperUser/HeaderSuperUser";
import { CommentOutlined } from "@ant-design/icons";
import styled from "styled-components";

const BenefitsReceived = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");

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

  return (
    <div>
      <div>
        <HeaderSuperUser />
      </div>
      <DivCohortGroupTraining>
        <DivInputTraining>
          <Container>
            <Title>Beneficios recibidos</Title>
            <SearchContainer>
              <SearchInput type="text" placeholder="Buscar..." />
              <SearchButton>
                <SearchOutlined className="icon" style={{ color: "black" }} />
              </SearchButton>
            </SearchContainer>
          </Container>
        </DivInputTraining>
      </DivCohortGroupTraining>
      <div>
        <ListContainer>
          <ListItemcolumn>
            <Box>Beneficio</Box>
            <Box>Fecha Solicitud</Box>
            <Box>Fecha Entrega</Box>
            <Box>Estado</Box>
            <Box>Comentario</Box>
          </ListItemcolumn>
          <ListItem>
            <Box>Socioecónomico</Box>
            <Box>02/05/2023</Box>
            <Box>10/05/2023</Box>
            <Box>
              <select>
                <option value="aceptado">Aceptado</option>
                <option value="denegado">Denegado</option>
              </select>
            </Box>
            <Box>
              <CommentIcon onClick={openModal} />
            </Box>
          </ListItem>
        </ListContainer>
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
