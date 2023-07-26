import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, dataBase } from "../../confiFirebase/configFirebase";
import { userTypes } from "../types/userTypes";
import { addDoc, collection } from "firebase/firestore";
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

      const { displayName, uid, accessToken } = user.auth.currentUser;

      const userLogged = {
        uid,
        email,
        name: displayName,
        accessToken: accessToken,
      };
      dispatch(loginActionSync(userLogged));
    } catch (error) {
      console.log(error);

    }
  };
};

export const loginActionSync = (user) => {
  return {
    type: userTypes.LOGGIN_USER,
    payload: user,
  };
};

