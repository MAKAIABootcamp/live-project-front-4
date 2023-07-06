//para el formulario del super usuario
export const saveSuperUser = (superUser) => {
  return {
    type: "SAVE_SUPER_USER",
    payload: superUser,
  };
};
