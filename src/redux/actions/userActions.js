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
        name: user.displayName,
        accessToken: user.accessToken,
      };
      dispatch(loginActionSync(userLogged));
    } catch (error) {
      console.log(error);

    }
  };
};

export const loginActionSync = (user) => {
  console.log("Datos del usuario:", user);
  return {
    type: userTypes.LOGGIN_USER,
    payload: user,
  };
};

export const registerActionAsync = (
  uid,
  nombreCompleto,
  tipoDocumento,
  numeroDocumento,
  sexo,
  edad,
  celular,
  correo,
  nacionalidad,
  departamento,
  ciudad,
  direccion,
  estrato,
  raza,
  contacto,
  correoContacto,
  telefonoContacto,
  poblacion,
  ocupacion,
  nivelEducativo,
  conocimiento,
  equipos,
  motivacion,
  tiempoLibre,
  hobbie,
) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(dataBase, "Estudiantes"),
              {
          idUsuario: uid,
          nombreCompleto,
          tipoDocumento,
          numeroDocumento,
          sexo,
          edad,
          celular,
          correo,
          nacionalidad,
          departamento,
          ciudad,
          direccion,
          estrato,
          raza,
          contacto,
          correoContacto,
          telefonoContacto,
          poblacion,
          ocupacion,
          nivelEducativo,
          conocimiento,
          equipos,
          motivacion,
          tiempoLibre,
          hobbie
        });
        Swal.fire(
          'OK!',
          'Sus datos se han registrado exitosamente',
          'success'
        )
    } catch (error) {
      Swal.fire(
        'Error!',
        'Error al registrar sus datos',
        'danger'
      )
    }
  };
};
