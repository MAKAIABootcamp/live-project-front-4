import React from "react";

const ModalComent = ({ isModalOpen, handleModalClose, selectedBenefit }) => {
  // Estilos CSS para el modal
  const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: isModalOpen ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    position: "absolute",
    top: "57%", // Posición vertical centrada
    left: "73%", // Posición horizontal centrada
    transform: "translate(-50%, -50%)", // Centrar el modal con respecto a su contenido
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "30%",
    border: "10px solid #03203a",
  };

  return (
    <div style={modalStyles}>
      <div style={contentStyles}>
        <div onClick={handleModalClose} style={{ cursor: "pointer" }}>
          X
        </div>
        <p>Notas: {selectedBenefit?.notes}</p>
      </div>
    </div>
  );
};

export default ModalComent;
