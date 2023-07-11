import { ADD_ETIQUETA } from "../types/userTypes";

//para el formulario del super usuario
export const saveSuperUser = (superUser) => {
  return {
    type: "SAVE_SUPER_USER",
    payload: superUser,
  };
};

//para crear una nueva etiqueta en la ruta del acompñamiento
export const addEtiqueta = (label) => {
  return {
    type: ADD_ETIQUETA,
    payload: label, //etiqueta
  };
};
