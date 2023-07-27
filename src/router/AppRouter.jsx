import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { loginActionSync } from "../redux/actions/userActions";
import { dataBase as db, auth } from "../confiFirebase/configFirebase";
import { GlobalStyles } from "../StylesGlobal/GlobalStyles";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Login from "../pages/Students/login/Login";
import HomeStudents from "../pages/Students/homeStudents/HomeStudents";
import FormStudents from "../pages/Students/formStudents/FormStudents";
import StateStudents from "../pages/Students/stateStudents/StateStudents";
import ProfileStudents from "../pages/Students/profileStudents/ProfileStudents";
import BenefitsStudents from "../pages/Students/benefitsStudents/BenefitsStudents";
import BootService from "../pages/Students/bootService/BootService";
import HomeSuperUser from "../pages/SuperUser/HomeSuperUser";
import FormUser from "../pages/SuperUser/FormUser";
import Profile from "../pages/SuperUser/Profile";
import StudentsSU from "../pages/SuperUser/StudentsSU";
import { registerActionSync } from "../redux/actions/studentAction";
import NewCohort from "../pages/SuperUser/NewCohort";
import TrainingCohort from "../pages/SuperUser/TrainingCohort";
import RequestBenefis from "../pages/SuperUser/RequestBenefis";
import BenefitsReceivedStudents from "../pages/SuperUser/BenefitsReceivedStudents";
import EscortRouteStudents from "../pages/SuperUser/EscortRouteStudents";
import StudentsBenefits from "../pages/SuperUser/StudentsBenefits";
import Selection from "../componentsGeneral/componentsSuperUser/Selection/Selection";
import Certification from "../componentsGeneral/componentsSuperUser/certification/Certification";
import ProfileSelected from "../componentsGeneral/componentsSuperUser/Selection/ProfileSelected";
import ListCertification from "../componentsGeneral/componentsSuperUser/certification/ListCertification";
import AddStudents from "../pages/SuperUser/AddStudents";
import NotFoundPages from "../pages/NotFoundPages";
import ProfileCertified from "../componentsGeneral/componentsSuperUser/certification/profileCertified";
import GroupListStudenst from "../componentsGeneral/componentsSuperUser/groupListStudents/GroupListStudenst";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid) {
        setIsLoggedIn(true);

        if (!Object.entries(user).length) {
          console.log("No hay info");

          let logged = {
            email: userLogged.auth.currentUser.email,
            nombre: userLogged.auth.currentUser.displayName,
            accessToken: userLogged.auth.currentUser.accessToken,
            uid: userLogged.auth.currentUser.uid,
          };

          const usersRef = collection(db, "users");
          const q = query(usersRef, where("uid", "==", userLogged.uid));
          getDocs(q)
            .then((querySnapshot) => {
              if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();

                logged = {
                  ...userData,
                  ...logged,
                };
                // logged.userType = userData.userType;
                // logged.nombre = userData.nombre;
                // logged.formularioLlenado = userData.formularioLlenado;
                console.log("User Type:", userData.userType);
                console.log("name:", userData.nombre);
                console.log("formularioLlenado:", userData.formularioLlenado);
              }
              dispatch(loginActionSync(logged));
              console.log(logged);
            })
            .catch((error) => {
              console.log(
                "Error al obtener la información del usuario:",
                error
              );
            });

          // dispatch(loginActionSync(logged));

          const studentRef = collection(db, "Estudiantes");
          const qStudent = query(
            studentRef,
            where("uid", "==", userLogged.uid)
          );
          getDocs(qStudent)
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const studentData = doc.data();
                dispatch(registerActionSync(studentData));
              });
              dispatch(loginActionSync(logged));
            })
            .catch((error) => {
              console.log(
                "Error al obtener la información del usuario:",
                error
              );
            });
        }
      } else {
        setIsLoggedIn(false);
      }

      setLoading(false);
    });
  }, [dispatch, user]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <PublicRouter
                isAuthentication={isLoggedIn}
                userType={user?.userType}
              />
            }
          >
            <Route index element={<Login />} />
          </Route>

          <Route
            path="*"
            element={
              <PrivateRouter
                isAuthentication={isLoggedIn}
                userType={user?.userType}
              />
            }
          >
            {user?.userType === "estudiante" && (
              <>
                <Route path="homestudents" element={<HomeStudents />} />
                <Route path="formstudents" element={<FormStudents />} />
                <Route path="statestudents" element={<StateStudents />} />
                <Route path="profilestudents" element={<ProfileStudents />} />
                <Route path="benefitsStudents" element={<BenefitsStudents />} />
                <Route path="bootservice" element={<BootService />} />
              </>
            )}

            {user?.userType === "administrador" && (
              <>
                <Route path="homeSuperUser" element={<HomeSuperUser />} />
                <Route path="teamSuperUser" element={<FormUser />} />
                <Route path="profileSuperUser" element={<Profile />} />
                <Route path="formToAddStudent" element={<AddStudents />} />
                <Route path="studentSuperUser" element={<StudentsSU />} />
                <Route path="selectionSuperUser" element={<Selection />} />
                <Route path="profileSelectedSU" element={<ProfileSelected />} />
                <Route
                  path="certificationSuperUser"
                  element={<Certification />}
                />
                <Route path="listCertifiedSU" element={<ListCertification />} />
                <Route path="addNewCohort" element={<NewCohort />} />
                <Route
                  path="cohortGroupTraining"
                  element={<TrainingCohort />}
                />
                <Route
                  path="studentProfileBenefits/:document"
                  element={<StudentsBenefits />}
                />
                <Route
                  path="RequestBenefis/:uidStudent"
                  element={<RequestBenefis />}
                />
                <Route
                  path="benefitsReceived"
                  element={<BenefitsReceivedStudents />}
                />
                <Route path="escortRoute" element={<EscortRouteStudents />} />
                <Route
                  path="detailsProfileCertification"
                  element={<ProfileCertified />}
                />
                <Route
                  path="groupListStudents"
                  element={<GroupListStudenst />}
                />
              </>
            )}
            <Route path="NotFoundPages" element={<NotFoundPages />} />
          </Route>
        </Routes>
        {/* <Routes>
          <Route path="/">
            <Route
              element={
                <PublicRouter
                  isAuthentication={isLoggedIn}
                  userType={user?.userType}
                />
              }
            >
              <Route index element={<Login />} />
            </Route>
          </Route>

          <Route
            element={
              <PrivateRouter
                isAuthentication={isLoggedIn}
                userType={user?.userType}
              />
            }
          >
            <Route element={<AdminRouter userType={user?.userType} />}>
              <Route path="homeSuperUser" element={<HomeSuperUser />} />
              <Route path="teamSuperUser" element={<FormUser />} />
              <Route path="profileSuperUser" element={<Profile />} />
              <Route path="formToAddStudent" element={<AddStudents />} />
              <Route path="studentSuperUser" element={<StudentsSU />} />
              <Route path="selectionSuperUser" element={<Selection />} />
              <Route path="profileSelectedSU" element={<ProfileSelected />} />
              <Route
                path="certificationSuperUser"
                element={<Certification />}
              />
              <Route path="listCertifiedSU" element={<ListCertification />} />
              <Route path="addNewCohort" element={<NewCohort />} />
              <Route path="cohortGroupTraining" element={<TrainingCohort />} />
              <Route
                path="studentProfileBenefits/:document"
                element={<StudentsBenefits />}
              />
              <Route path="RequestBenefis/:uidStudent" element={<RequestBenefis />} />
              <Route
                path="benefitsReceived"
                element={<BenefitsReceivedStudents />}
              />
              <Route path="escortRoute" element={<EscortRouteStudents />} />
              <Route
                path="detailsProfileCertification"
                element={<ProfileCertified />}
              />
              <Route path="groupListStudents" element={<GroupListStudenst />} />
            </Route>

            <Route element={<StudentRouter userType={user?.userType} />}>
              <Route path="homestudents" element={<HomeStudents />} />
              <Route path="formstudents" element={<FormStudents />} />
              <Route path="statestudents" element={<StateStudents />} />
              <Route path="profilestudents" element={<ProfileStudents />} />
              <Route path="benefitsStudents" element={<BenefitsStudents />} />
              <Route path="bootservice" element={<BootService />} />
            </Route>
          </Route> 
        </Routes> */}
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
