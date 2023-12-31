import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Students/login/Login";
import PasswordReset from "../pages/Students/login/ResetPassword";

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
      <Route path="resetPassword" element={<PasswordReset />} />
    </Routes>
  );
};

export default PublicRouter;



//-------------------------------------------------------------------------
// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PublicRouter = ({ isAuthentication, userType }) => {
//   return (
//     <div>
//       {isAuthentication ? (
//         <Navigate
//           to={userType === "administrador" ? "/homeSuperUser" : "/homestudents"}
//         />
//       ) : (
//         <Outlet />
//       )}
//     </div>
//   );
// };

// export default PublicRouter;