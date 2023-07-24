import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Students/login/Login";
import HomeStudents from "../pages/Students/homeStudents/HomeStudents";
import FormStudents from "../pages/Students/formStudents/FormStudents";
import StateStudents from "../pages/Students/stateStudents/StateStudents";
import ProfileStudents from "../pages/Students/profileStudents/ProfileStudents";
import BenefitsStudents from "../pages/Students/benefitsStudents/BenefitsStudents";
import BootService from "../pages/Students/bootService/BootService";
import GlobalStyles from "../StylesGlobal/GlobalStyles";
import HomeSuperUser from "../pages/SuperUser/HomeSuperUser";
import FormUser from "../pages/SuperUser/FormUser";
import Profile from "../pages/SuperUser/Profile";
import StudentsSU from "../pages/SuperUser/StudentsSU";
import NewCohort from "../pages/SuperUser/NewCohort";
import TrainingCohort from "../pages/SuperUser/TrainingCohort";
import RequestBenefis from "../pages/SuperUser/RequestBenefis";
import BenefitsReceivedStudents from "../pages/SuperUser/BenefitsReceivedStudents";
import EscortRouteStudents from "../pages/SuperUser/EscortRouteStudents";
import StudentsBenefits from "../pages/SuperUser/StudentsBenefits";
import Selection from '../componentsGeneral/componentsSuperUser/Selection/Selection'
import Formation from '../componentsGeneral/componentsSuperUser/Formation/Formation'
import Certification from '../componentsGeneral/componentsSuperUser/certification/Certification'
import ProfileSelected from '../componentsGeneral/componentsSuperUser/Selection/ProfileSelected';
import ListCertification from '../componentsGeneral/componentsSuperUser/certification/ListCertification';
import AddStudents from "../pages/SuperUser/AddStudents";
import NotFoundPages from "../pages/NotFoundPages";
import ProfileCertified from "../componentsGeneral/componentsSuperUser/certification/profileCertified";

const AppRouter = () => {
  return (
    <>
    <GlobalStyles />
        <BrowserRouter>
          <Routes>
            {/* Ruta Pública */}
            <Route index element={<Login />} />

            {/* Ruta del Estudiante */}
            <Route path="formstudents" element={<FormStudents />} />
            <Route path="homestudents" element={<HomeStudents />} />
            <Route path="statestudents" element={<StateStudents />} />
            <Route path="profilestudents" element={<ProfileStudents />} />
            <Route path="benefitsStudents" element={<BenefitsStudents />} />
            <Route path="bootservice" element={<BootService />} />
              

            {/* Ruta del Admin */}
            <Route path="homeSuperUser" element={<HomeSuperUser />} />
            <Route path="teamSuperUser" element={<FormUser />} /> {/* EQUIPO */}
            <Route path="profileSuperUser" element={<Profile />} />
            <Route path="formToAddStudent" element={<AddStudents />} /> {/* formulario para crear estidiantes*/}
            <Route path="studentSuperUser" element={<StudentsSU />} />
              
            {/* Ruta de Selección y Certificación */}
            <Route path="selectionSuperUser" element={<Selection />} />

            {/*Sub ruta de Selección*/}
            <Route path="profileSelectedSU" element={<ProfileSelected />} />

            {/* <Route path="formationSuperUser" element={<Formation />} /> */}
            <Route path="certificationSuperUser" element={<Certification />} />

            {/*Sub ruta de Certificación*/}
            <Route path="listCertifiedSU" element={<ListCertification />} />
            <Route path="detailsProfileCertification" element={<ProfileCertified />}/>
              
            {/* Inicia Formación */}
            <Route path="addNewCohort" element={<NewCohort />} />{/* CREAR UNA NUEVA COHORTE LISTO EN CODIGO */}
            <Route path="cohortGroupTraining" element={<TrainingCohort />} />{/* LISTO Grupo de formación LISTO EN CODIGO  */}
            <Route path="studentProfileBenefits" element={<StudentsBenefits />} />{/*LISTO selecion de informacion */}
            <Route path="RequestBenefis" element={<RequestBenefis />}/>{/* LISTO solicitud de beneficios */}
            <Route path="benefitsReceived" element={<BenefitsReceivedStudents />}/>{/* LISTO Beneficios recibidos */}
            <Route path="escortRoute" element={<EscortRouteStudents/>} />{/* ruta de acompañamiento LISTO EN CODIGO  */}
            <Route path="NotFoundPages" element={<NotFoundPages/>} />{/* lista  */}
          </Routes>
        </BrowserRouter>
    </>

  );
};


export default AppRouter;
