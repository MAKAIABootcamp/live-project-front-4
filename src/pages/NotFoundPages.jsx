import React from "react";
import NoFound from "../componentsGeneral/notFoundpages/NoFound";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f44336;
  color: #fff;
`;

const NotFoundText = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px #444;
`;

const NotFoundPages = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>404</NotFoundText>
      <NoFound />
      <NotFoundText>Page Not Found</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFoundPages;
