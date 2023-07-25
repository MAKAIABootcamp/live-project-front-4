import React from "react";
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
// import azul from "../../../assets/azul.jpg";
import robot from "../../../assets/avatar.jpg";
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import { EditOutlined } from "@ant-design/icons";

const UserProfile = () => {
  return (
    <DivDiv>
      <HeaderSuperUser />
      <DivProfile>
        <Div>
          <img src={robot} alt="" />
          <p>Luisa Lafaure</p>
        </Div>
        <div>
          <Formik initialValues={{}}>
            <Form>
              <DivInput>
                <label htmlFor="">Teléfono</label>
                <Input type="text" name="telephone" /> <EditOutlined />
              </DivInput>

              <DivInput>
                <label htmlFor="">Cargo</label>
                <Input type="text" name="cargo" />
              </DivInput>

              <DivInput>
                <label htmlFor="">Correo</label>
                <Input type="text" name="correo" />
              </DivInput>

              <DivInput>
                <label htmlFor="">Contraseña</label>
                <Input type="text" name="password" /> <EditOutlined />
              </DivInput>

              <Action>
                <button type="submit">Guardar</button>
              </Action>
            </Form>
          </Formik>
        </div>
      </DivProfile>
    </DivDiv>
  );
};

export default UserProfile;
