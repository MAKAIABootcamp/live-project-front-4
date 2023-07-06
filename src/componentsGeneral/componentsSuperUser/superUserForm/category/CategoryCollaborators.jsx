import React from "react";
import { DivGeneral, DivButton } from "./CategoryCollaboratorStyled";

const CategoryCollaborators = () => {
  return (
    <DivGeneral>
      <h2>Categorias por área</h2>
      <DivButton>
        <button>
          <img src="" alt="" /> Entrenamiento
        </button>
        <button>
          <img src="" alt="" />
          Experiencia
        </button>
        <button>
          <img src="" alt="" />
          Empleabilidad
        </button>
        <button>
          <img src="" alt="" />
          Comercial
        </button>
      </DivButton>
    </DivGeneral>
  );
};

export default CategoryCollaborators;