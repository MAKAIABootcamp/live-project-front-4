import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Students/login/Login";

const PublicRouter = ({ isAuthentication, userType }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthentication && userType === "estudiante") {
      navigate("/homestudents");
    }

    if (isAuthentication && userType === "administrador") {
      navigate("/homeSuperUser");
    }
  }, [isAuthentication, userType, navigate]);

  return (
    <Routes>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default PublicRouter;
