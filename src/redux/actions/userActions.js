import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, dataBase } from "../../confiFirebase/configFirebase";
import { userTypes } from "../types/userTypes";
import { addDoc, collection, doc, getDoc} from "firebase/firestore";





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

      const { uid, accessToken,  } = user.auth.currentUser;
      const userRef = doc(dataBase, "users", uid);
      console.log(uid);
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
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginActionSync = (user) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: user,
  };
};

export const registerActionAsync = async (uid, studentData) => {
  try {
    const student = {
      idUsuario: uid,
      ...studentData,
    };
    const studentInfo = await addDoc(collection(dataBase, "Estudiantes"), student);
    console.log(studentInfo.id);
    return studentInfo; // Devolver la información del estudiante registrado
  } catch (error) {
    console.log(error);
    throw error;
  }
};

