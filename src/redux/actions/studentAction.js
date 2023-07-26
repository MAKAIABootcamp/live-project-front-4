import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { dataBase } from "../../confiFirebase/configFirebase";
import Swal from "sweetalert2";
import { studentTypes } from "../types/studentType";

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
            dispatch(registerActionSync(student))
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
export const registerActionSync = (student) => {
    return {
        type: studentTypes.SET_STUDENT,
        payload: student,
    };
};

export const updataActionAsync = (telefono, correo, imagen,uid) => {

    return async (dispatch) => {
      try {
        // Crear un objeto con los campos que deseas actualizar
        const dataToUpdate = {
          celular: telefono,
          correo: correo,
          // Añade aquí cualquier otro campo que desees actualizar
        };
  
      // Crear una consulta (query) con la cláusula "where" para filtrar por el UID
      const q = query(collection(dataBase, "Estudiantes"), where("idUsuario", "==", uid));

      // Ejecutar la consulta para obtener los documentos que coinciden con el filtro
      const querySnapshot = await getDocs(q);

      // Actualizar cada documento que coincide con el filtro
      querySnapshot.forEach((docSnapshot) => {
        const studentRef = doc(dataBase, "Estudiantes", docSnapshot.id);
        updateDoc(studentRef, dataToUpdate);
  
      });
        dispatch(updateActionSync(dataToUpdate));
        Swal.fire(
          'OK!',
          'Sus datos se han actualizado exitosamente',
          'success'
        );
      } catch (error) {
        console.log(error);
        Swal.fire(
          'Oops ha ocurrido un error!',
          'Los datos no han sido guardados!',
          'error'
        );
      }
    };
  };

const updateActionSync = (dataToUpdate)=> {
  return {
    type: studentTypes.UPDATE_STUDENT,
    payload: dataToUpdate
  }
  }