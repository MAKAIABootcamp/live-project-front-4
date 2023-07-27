import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, dataBase } from "../../confiFirebase/configFirebase";
import { userTypes } from "../types/userTypes";
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

//para el formulario del super usuario
export const saveSuperUser = (superUser) => {
  return {
    type: "SAVE_SUPER_USER",
    payload: superUser,
  };
};

export const logoutActionAsync = () => {
  return async (dispatch) => {
    let errors = null;
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      errors = {
        error: true,
        code: error.code,
        message: error.message,
      };
    } finally {
      dispatch(logoutActionSync(errors));
    }
  };
};

const logoutActionSync = (error) => {
  return {
    type: userTypes.LOGOUT_USER,
    payload: error,
  };
};

export const loginActionAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const { uid, accessToken } = user.auth.currentUser;
      const userRef = doc(dataBase, "users", uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const { nombre } = userData;

        const userLogged = {
          uid,
          email,
          nombre,
          accessToken: accessToken,
        };

        dispatch(loginActionSync(userLogged));
      }
      Swal.fire("Inicio sesión exitoso!", "¡Bienvenid@!", "success");
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error al iniciar sesión!",
        "Contraseña o usuario no coinciden",
        "error"
      );
    }
  };
};

export const loginActionSync = (user) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: user,
  };
};
