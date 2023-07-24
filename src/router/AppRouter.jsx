import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { GlobalStyles } from "../StylesGlobal/GlobalStyles";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { loginActionSync } from "../redux/actions/userActions";
import { collection, query, where, getDocs } from "firebase/firestore";
import { dataBase as db, auth } from "../confiFirebase/configFirebase";
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
import ProgressStudent from "../pages/Students/progressStudent/ProgressStudent";

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
          const logged = {
            email: userLogged.auth.currentUser.email,
            nombre: userLogged.auth.currentUser.displayName,
            accessToken: userLogged.auth.currentUser.accessToken,
            uid:userLogged.auth.currentUser.uid,
          };

          const usersRef = collection(db, "users");
          
          const q = query(usersRef, where("uid", "==", userLogged.uid));
          getDocs(q)
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const userData = doc.data();
                logged.userType = userData.userType;
                console.log("User Type:", userData.userType);
              });
              dispatch(loginActionSync(logged));
            })
            .catch((error) => {
              console.log(
                "Error al obtener la información del usuario:",
                error
              );
            });

          dispatch(loginActionSync(logged));
        }
        console.log(userLogged);
        console.log("Tipo de usuario:", user?.userType || "No definido");
      } else {
        setIsLoggedIn(false);
      }

      setLoading(false);
    });
  }, [user, dispatch]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <GlobalStyles>
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
                <Route path="studentSuperUser" element={<StudentsSU />} />
                <Route path="progressStudent" element={<ProgressStudent />} />
              </>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  );
};

export default AppRouter;
