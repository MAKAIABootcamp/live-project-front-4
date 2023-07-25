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
  console.log("Datos del usuario:", user);
  return {
    type: userTypes.USER_LOGIN,
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
    console.log(uid);
    try {
      const student = {
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
      };
      const studentInfo = await addDoc(collection(dataBase, "Estudiantes"), student);
      console.log(studentInfo.id);
        Swal.fire(
          'OK!',
          'Sus datos se han registrado exitosamente',
          'success'
        )
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Oops ha ocurrido un error!',
        'los datos no han sido guardado!',
        'error'
      )
    }
  };
};
