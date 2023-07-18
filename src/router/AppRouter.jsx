import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Students/login/Login";
import HomeStudents from "../pages/Students/homeStudents/HomeStudents";
import FormStudents from "../pages/Students/formStudents/FormStudents";
import StateStudents from "../pages/Students/stateStudents/StateStudents";
import ProfileStudents from "../pages/Students/profileStudents/ProfileStudents";
import BenefitsStudents from "../pages/Students/benefitsStudents/BenefitsStudents";
import BootService from "../pages/Students/bootService/BootService";
import { GlobalStyles } from "../StylesGlobal/GlobalStyles";
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

const AppRouter = () => {
  return (
    <GlobalStyles>
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
            <Route path="studentSuperUser" element={<StudentsSU />} />
              
            {/* Ruta de Selección y Certificación */}
            <Route path="selectionSuperUser" element={<Selection />} />

            {/*Sub ruta de Selección*/}
            <Route path="profileSelectedSU" element={<ProfileSelected />} />

            {/* <Route path="formationSuperUser" element={<Formation />} /> */}
            <Route path="certificationSuperUser" element={<Certification />} />

            {/*Sub ruta de Certificación*/}
            <Route path="listCertifiedSU" element={<ListCertification />} />
              
            {/* Inicia Formación */}
            <Route path="addNewCohort" element={<NewCohort />} />{/* CREAR UNA NUEVA COHORTE */}
            <Route path="cohortGroupTraining" element={<TrainingCohort />} />{/* LISTO Grupo de formación */}
            <Route path="studentProfileBenefits" element={<StudentsBenefits />} />{/*LISTO selecion de informacion */}
            <Route path="RequestBenefis" element={<RequestBenefis />}/>{/* LISTO solicitud de beneficios */}
            <Route path="benefitsReceived" element={<BenefitsReceivedStudents />}/>{/* LISTO Beneficios recibidos */}
            <Route path="escortRoute" element={<EscortRouteStudents/>} />{/* ruta de acompañamiento */}
          </Routes>
        </BrowserRouter>
    </GlobalStyles>

  );
};


export default AppRouter;
