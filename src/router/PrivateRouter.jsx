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
import AddStudents from "../pages/SuperUser/AddStudents";
import Selection from "../componentsGeneral/componentsSuperUser/Selection/Selection";
import ProfileSelected from "../componentsGeneral/componentsSuperUser/Selection/ProfileSelected";
import Certification from "../componentsGeneral/componentsSuperUser/certification/Certification";
import ListCertification from "../componentsGeneral/componentsSuperUser/certification/ListCertification";
import TrainingCohort from "../pages/SuperUser/TrainingCohort";
import StudentsBenefits from "../pages/SuperUser/StudentsBenefits";
import RequestBenefis from "../pages/SuperUser/RequestBenefis";
import BenefitsReceivedStudents from "../pages/SuperUser/BenefitsReceivedStudents";
import EscortRouteStudents from "../pages/SuperUser/EscortRouteStudents";
import ProfileCertified from "../componentsGeneral/componentsSuperUser/certification/profileCertified";
import GroupListStudenst from "../componentsGeneral/componentsSuperUser/groupListStudents/GroupListStudenst";


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
      { path: "formToAddStudent", element: <AddStudents /> },
      { path: "selectionSuperUser", element: <Selection /> },
      { path: "profileSelectedSU", element: <ProfileSelected /> },
      { path: "certificationSuperUser", element: <Certification /> },
      { path: "listCertifiedSU", element: <ListCertification /> },
      { path: "cohortGroupTraining", element: <TrainingCohort/> },
      { path: "studentProfileBenefits/:document", element: <StudentsBenefits/> },
      { path: "RequestBenefis", element: <RequestBenefis/> },
      { path: "benefitsReceived", element: <BenefitsReceivedStudents/> },
      { path: "escortRoute", element: <EscortRouteStudents/> },
      { path: "detailsProfileCertification", element: <ProfileCertified/> },
      { path: "groupListStudents", element: <GroupListStudenst/> },
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