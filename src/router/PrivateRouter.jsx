import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FormUser from "../pages/SuperUser/FormUser";
import Profile from "../pages/SuperUser/Profile";
import StudentsSU from "../pages/SuperUser/StudentsSU";
import FormStudents from "../pages/Students/formStudents/FormStudents";
import HomeStudents from "../pages/Students/homeStudents/HomeStudents";
import StateStudents from "../pages/Students/stateStudents/StateStudents";
import ProfileStudents from "../pages/Students/profileStudents/ProfileStudents";
import BenefitsStudents from "../pages/Students/benefitsStudents/BenefitsStudents";
import BootService from "../pages/Students/bootService/BootService";
import HomeSuperUser from "../pages/SuperUser/HomeSuperUser";
import ProgressStudent from "../pages/Students/progressStudent/ProgressStudent";
import Selection from "../componentsGeneral/componentsSuperUser/Selection/Selection";

const PrivateRouter = (props) => {
  const { isAuthentication, userType } = props;

  if (!isAuthentication) {
    return <Navigate to="/" />;
  }

  // Define un objeto con las rutas correspondientes a cada tipo de usuario
  const userRoutes = {
    estudiante: [
      { path: "homestudents", element: <HomeStudents /> },
      { path: "formstudents", element: <FormStudents /> },
      { path: "statestudents", element: <StateStudents /> },
      { path: "profilestudents", element: <ProfileStudents /> },
      { path: "benefitsStudents", element: <BenefitsStudents /> },
      { path: "bootservice", element: <BootService /> },
    ],
    administrador: [
      { path: "homeSuperUser", element: <HomeSuperUser /> },
      { path: "teamSuperUser", element: <FormUser /> },
      { path: "profileSuperUser", element: <Profile /> },
      { path: "studentSuperUser", element: <StudentsSU /> },
      { path: "progressStudent", element: <ProgressStudent /> },
      {path: "selectionSuperUser", element: <Selection />}
    ],
  };

  // Buscar las rutas correspondientes al userType
  const routes = userRoutes[userType] || [];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {/* Redirigir a la página principal si el userType no está definido o es inválido */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PrivateRouter;
