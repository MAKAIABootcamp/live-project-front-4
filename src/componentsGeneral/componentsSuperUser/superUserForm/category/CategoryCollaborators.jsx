import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  DivGeneral,
  DivButton,
  TableBenefits,
  Figure,
  Modal,
  ModalContent,
  H2,
  Th,
} from "./CategoryCollaboratorStyled";
import { CloseOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import Equipo from "../../../../assets/equipoo.png";
import { CarryOutOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";
import { BankOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { getAdminAndStudents } from "../../../../redux/actions/addAdminAndStudentsActions";
import { updateAdminAndStudentsAction } from "../../../../redux/actions/addAdminAndStudentsActions";
import "firebase/firestore";

const CategoryCollaborators = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [adminAndStudentsData, setAdminAndStudentsData] = useState([]);
  const [filteredCollaborators, setFilteredCollaborators] = useState([]);
  const [selectedAdminAndStudentsData, setSelectedCollaborator] =
    useState(null);
  const [editedField, setEditedField] = useState("");

  useEffect(() => {
    dispatch(getAdminAndStudents())
      .then((data) => {
        setAdminAndStudentsData(data);
        // console.log("esto es data", data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    setFilteredCollaborators(
      adminAndStudentsData.filter(
        (collaborator) => collaborator.info.area === selectedCategory
      )
    );
  }, [adminAndStudentsData, selectedCategory]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment(value);
    setSelectedCollaborator((prevData) => ({
      ...prevData,
      info: {
        ...prevData.info,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedAdminAndStudentsData.info || editedField === "") {
      console.error("No se ha seleccionado un colaborador para editar.");
      return;
    }

    if (comment === "") {
      closeModal();
      return;
    }

    const updateAdminAndStudentsData = {
      ...selectedAdminAndStudentsData,
      // Actualiza solo el campo editado
      [editedField]: comment,
    };
    // Actualiza los datos del colaborador en Firestore a través de la acción de Redux
    dispatch(updateAdminAndStudentsAction(updateAdminAndStudentsData));
    closeModal();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleEditClick = (collaborator, field) => {
    setSelectedCollaborator(collaborator);
    setEditedField(field);
    setComment(""); // Limpiamos el campo de comentario cada vez que se abre el modal
    setIsModalOpen(true); // Asegurarse de que isModalOpen sea true
  };

  const options = [
    { value: "Seleccionar" },
    { value: "Entrenamiento" },
    { value: "Experiencia" },
    { value: "Empleabilidad" },
    { value: "Comercial" },
  ];
  return (
    <>
      <H2>Categorías por área</H2>
      <DivButton>
        <button onClick={() => setSelectedCategory("Entrenamiento")}>
          <div>
            <CarryOutOutlined style={{ fontSize: "24px" }} />{" "}
            <p>Entrenamiento</p>
          </div>
        </button>
        <button onClick={() => setSelectedCategory("Experiencia")}>
          <div>
            <RocketOutlined style={{ fontSize: "24px" }} />
            <p>Experiencia</p>
          </div>
        </button>
        <button onClick={() => setSelectedCategory("Empleabilidad")}>
          <div>
            <BankOutlined style={{ fontSize: "24px" }} />
            <p>Empleabilidad</p>
          </div>
        </button>
        <button onClick={() => setSelectedCategory("Comercial")}>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
            <p>Comercial</p>
          </div>
        </button>
      </DivButton>

      <DivGeneral>
        <div>
          <TableBenefits>
            <tr>
              <Th>Colaboradores</Th>
            </tr>
            {/* Mapear la información de los colaboradores filtrados */}
            {filteredCollaborators.map((collaborator) => (
              <tr key={collaborator.info.nombre}>
                <td>{collaborator.info.nombre}</td>
                <td>
                  {/* <CloseOutlined style={{ color: "red", fontSize: "18px" }} /> */}
                  <EditOutlined
                    style={{ color: "blue", fontSize: "18px" }}
                    onClick={() => handleEditClick(collaborator)}
                  />
                </td>
              </tr>
            ))}
          </TableBenefits>
          {isModalOpen && (
            <Modal>
              <ModalContent>
                <h3>Editar información del colaborador</h3>

                <form
                  key={selectedAdminAndStudentsData.info.nombre}
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="">Área</label>
                  <select
                    as="select"
                    id="area"
                    name="area"
                    value={
                      editedField === "area"
                        ? comment
                        : selectedAdminAndStudentsData.info.area
                    }
                    onChange={handleCommentChange}
                  >
                    {options.map((item) => (
                      <option value={item.value}>{item.value}</option>
                    ))}
                  </select>

                  <label htmlFor="">Cargo</label>
                  <input
                    type="text"
                    name="cargo"
                    id="cargo"
                    value={
                      editedField === "cargo"
                        ? comment
                        : selectedAdminAndStudentsData.info.cargo
                    }
                    onChange={handleCommentChange}
                    onKeyDown={handleKeyDown}
                    style={{ textAlign: "top" }}
                  />

                  <label htmlFor="">Correo corporativo</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={
                      editedField === "email"
                        ? comment
                        : selectedAdminAndStudentsData.info.email
                    }
                    onChange={handleCommentChange}
                    onKeyDown={handleKeyDown}
                    style={{ textAlign: "top" }}
                  />

                  <label htmlFor="">Teléfono</label>
                  <input
                    type="telefono"
                    name="telefono"
                    id="telefono"
                    value={
                      editedField === "telefono"
                        ? comment
                        : selectedAdminAndStudentsData.info.telefono
                    }
                    onChange={handleCommentChange}
                    onKeyDown={handleKeyDown}
                    style={{ textAlign: "top" }}
                  />
                  <div>
                    <button type="submit" onClick={handleSubmit}>
                      Guardar
                    </button>
                    <button onClick={closeModal}>Cerrar</button>
                  </div>
                </form>
              </ModalContent>
            </Modal>
          )}
        </div>
        <Figure>
          <img src={Equipo} alt="" />
        </Figure>
      </DivGeneral>
    </>
  );
};

export default CategoryCollaborators;
