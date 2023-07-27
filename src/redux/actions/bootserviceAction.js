import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { dataBase } from "../../confiFirebase/configFirebase";

export const bootserviceActionAsync = (data) => {
    return async (dispatch) => {
        try {

            const studentInfo = await addDoc(collection(dataBase, "bootService"), data);
            console.log(studentInfo.id);
            Swal.fire(
                'OK!',
                'Sus solicitud se han registrado exitosamente',
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
    }
};