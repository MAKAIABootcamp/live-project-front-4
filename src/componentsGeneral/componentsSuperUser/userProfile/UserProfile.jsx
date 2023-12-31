import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  DivInput,
  Input,
  Form,
  Action,
  Div,
  DivProfile,
  DivDiv,
} from "./UserProfileStyled";
import { Formik } from "formik";
import { EditOutlined } from "@ant-design/icons";
import {
  getAdminAndStudents,
  updateAdminAndStudentsAction,
} from "../../../redux/actions/addAdminAndStudentsActions";
import robot from "../../../assets/avatar.jpg";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import { getAuth, updatePassword } from "firebase/auth";
import Swal from "sweetalert2";
const UserProfile = () => {
  const dispatch = useDispatch();
  const [adminAndStudentsData, setAdminAndStudentsData] = useState([]);
  const [selectedAdminAndStudentsData, setSelectedAdminAndStudentsData] =
    useState({});
  const [editedField, setEditedField] = useState("");

  useEffect(() => {
    dispatch(getAdminAndStudents())
      .then((data) => {
        console.log("este es data", data);
        setAdminAndStudentsData(data);
        setSelectedAdminAndStudentsData(data[0]);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [dispatch]);

  const handleFieldEdit = (field) => {
    setEditedField(field);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedAdminAndStudentsData((prevData) => ({
      ...prevData,
      info: {
        ...prevData.info,
        [name]: value,
      },
    }));
  };

  const updatePasswordUser = async (newPassword) => {
    const auth = getAuth();
    console.log("el auth", auth);
    const user = auth.currentUser;
    console.log("usere", user);
    console.log("Le pass", newPassword);

    await updatePassword(user, newPassword).then(() => {});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar si el campo se edito

    dispatch(updatePasswordUser(selectedAdminAndStudentsData.info.contraseña));
    // Dispatch la acción para actualizar los datos en Firestore
    dispatch(
      updateAdminAndStudentsAction({
        id: selectedAdminAndStudentsData.id,
        info: selectedAdminAndStudentsData.info,
      })
    )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Formulario enviado exitosamente!",
          text: "El formulario ha sido enviado correctamente.",
        });
        // Los datos se actualizaron correctamente, puede mostrar un mensaje de éxito o realizar otras acciones.
        setEditedField(""); //Restablecer campo editado después de una actualización exitosa
      })
      .catch((error) => {
        console.error("Error updating data in Firestore:", error);
      });
  };

  const telefono = selectedAdminAndStudentsData.info
    ? selectedAdminAndStudentsData.info.telefono
    : "";
  const cargo = selectedAdminAndStudentsData.info
    ? selectedAdminAndStudentsData.info.cargo
    : "";
  const email = selectedAdminAndStudentsData.info
    ? selectedAdminAndStudentsData.info.email
    : "";
  const contraseña = selectedAdminAndStudentsData.info
    ? selectedAdminAndStudentsData.info.contraseña
    : "";

  return (
    <DivDiv>
      <HeaderSuperUser />
      <DivProfile>
        {/* {filteredCollaborators.map((collaborator) => ( */}
        {/* <Div key={collaborator.info.nombre}> */}
        <Div>
          <img src={robot} alt="" />
          {/* <p>{collaborator.info.nombre}</p> */}
        </Div>
        {/* ))} */}
        <div>
          <Formik initialValues={{}}>
            <Form onSubmit={handleSubmit}>
              <DivInput>
                <label htmlFor="">Teléfono</label>
                {editedField === "telefono" ? (
                  <Input
                    type="text"
                    name="telefono"
                    value={telefono}
                    onChange={handleInputChange}
                  />
                ) : (
                  <Input
                    type="text"
                    name="telefono"
                    value={telefono}
                    readOnly
                  />
                )}
                {editedField !== "telefono" && (
                  <EditOutlined
                    onClick={() => handleFieldEdit("telefono")}
                    style={{ color: "blue", fontSize: "18px" }}
                  />
                )}
              </DivInput>

              <DivInput>
                <label htmlFor="">Cargo</label>
                <Input type="text" name="cargo" value={cargo} readOnly />
              </DivInput>

              <DivInput>
                <label htmlFor="">Correo</label>
                <Input type="text" name="email" value={email} readOnly />
              </DivInput>

              <DivInput>
                <label htmlFor="">Contraseña</label>
                {editedField === "contraseña" ? (
                  <Input
                    type="text"
                    name="contraseña"
                    value={contraseña}
                    onChange={handleInputChange}
                  />
                ) : (
                  <Input
                    type="text"
                    name="contraseña"
                    value={contraseña}
                    readOnly
                  />
                )}
                {editedField !== "contraseña" && (
                  <EditOutlined
                    onClick={() => handleFieldEdit("contraseña")}
                    style={{ color: "blue", fontSize: "18px" }}
                  />
                )}
              </DivInput>

              <Action>
                <button type="submit" onClick={handleSubmit}>
                  Guardar
                </button>
              </Action>
            </Form>
          </Formik>
        </div>
      </DivProfile>
    </DivDiv>
  );
};

export default UserProfile;
