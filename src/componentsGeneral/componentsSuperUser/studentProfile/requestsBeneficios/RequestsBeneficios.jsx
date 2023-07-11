import React from "react";
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
} from "./RequestsBeneficiosStyled";
import { SearchOutlined } from "@ant-design/icons";
import HeaderSuperUser from "../../headerSuperUser/HeaderSuperUser";
import { CommentOutlined } from "@ant-design/icons";
import styled from "styled-components";

const RequestsBeneficios = () => {
  const CommentIcon = styled(CommentOutlined)`
    font-size: 24px;
  `;
  return (
    <div>
      <div>
        <HeaderSuperUser />
      </div>
      <DivCohortGroupTraining>
        <DivInputTraining>
          <Container>
            <Title>Solicitud de beneficios</Title>
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
            <Box>aceptado</Box>
            <Box>
              <CommentIcon />
            </Box>
          </ListItem>
        </ListContainer>
      </div>
    </div>
  );
};

export default RequestsBeneficios;
