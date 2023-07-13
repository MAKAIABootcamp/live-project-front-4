import React, { useState } from "react";
import {
  DivGeneral,
  DivButton,
  TableBenefits,
  Figure,
  Modal,
  ModalContent,
} from "./CategoryCollaboratorStyled";
import { CloseOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import Equipo from "../../../../assets/equipoo.png";
import { CarryOutOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";
import { BankOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";

const CategoryCollaborators = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comentario:", comment);
    closeModal();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return (
    <>
      <DivGeneral>
        <div>
          <h2>Categorias por área</h2>
          <DivButton>
            <button>
              <div>
                <CarryOutOutlined style={{ fontSize: "24px" }} />{" "}
                <p>Entrenamiento</p>
              </div>
            </button>
            <button>
              <div>
                <RocketOutlined style={{ fontSize: "24px" }} />
                <p>Experiencia</p>
              </div>
            </button>
            <button>
              <div>
                <BankOutlined style={{ fontSize: "24px" }} />
                <p>Empleabilidad</p>
              </div>
            </button>
            <button>
              <div>
                <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                <p>Comercial</p>
              </div>
            </button>
          </DivButton>
        </div>

        <div>
          <TableBenefits>
            <tr>
              <th>Colaborador</th> <th> Editar o Eliminar </th>
            </tr>

            <tr>
              <td>Luisa Lafaurie</td>
              <td>
                <CloseOutlined style={{ color: "red", fontSize: "20px" }} />
                <EditOutlined
                  style={{ color: "blue", fontSize: "20px" }}
                  onClick={openModal}
                />
              </td>
            </tr>
            <tr>
              <td>Laura Ospina</td>
              <td>
                <CloseOutlined style={{ color: "red", fontSize: "20px" }} />
                <EditOutlined
                  style={{ color: "blue", fontSize: "20px" }}
                  onClick={openModal}
                />
              </td>
            </tr>
            <tr>
              <td>Carlos Hernandez</td>
              <td>
                <CloseOutlined style={{ color: "red", fontSize: "20px" }} />
                <EditOutlined
                  style={{ color: "blue", fontSize: "20px" }}
                  onClick={openModal}
                />
              </td>
            </tr>
            <tr>
              <td>Luisa Lafaurie</td>
              <td>
                <CloseOutlined style={{ color: "red", fontSize: "20px" }} />
                <EditOutlined
                  style={{ color: "blue", fontSize: "20px" }}
                  onClick={openModal}
                />
              </td>
            </tr>
          </TableBenefits>
          {isModalOpen && (
            <Modal>
              <ModalContent>
                <h3>Editar información del colaborador</h3>
                <form>
                  <label htmlFor="">Nombre del colaborador</label>
                  <input
                    type="text"
                    id="commentInput"
                    value={comment}
                    onChange={handleCommentChange}
                    onKeyDown={handleKeyDown}
                    style={{ textAlign: "top" }}
                  />

                  <label htmlFor="">Área</label>
                  <input
                    type="text"
                    id="commentInput"
                    value={comment}
                    onChange={handleCommentChange}
                    onKeyDown={handleKeyDown}
                    style={{ textAlign: "top" }}
                  />

                  <label htmlFor="">Crago</label>
                  <input
                    type="text"
                    id="commentInput"
                    value={comment}
                    onChange={handleCommentChange}
                    onKeyDown={handleKeyDown}
                    style={{ textAlign: "top" }}
                  />

                  <label htmlFor="">Correo corporativo</label>
                  <input
                    type="text"
                    id="commentInput"
                    value={comment}
                    onChange={handleCommentChange}
                    onKeyDown={handleKeyDown}
                    style={{ textAlign: "top" }}
                  />

                  <label htmlFor="">Teléfono</label>
                  <input
                    type="text"
                    id="commentInput"
                    value={comment}
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
