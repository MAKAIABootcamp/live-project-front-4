import React from "react";
import {
  DivInput,
  Input,
  Form,
  Action,
  Div,
  DivProfile,
} from "./UserProfileStyled";
import { Formik } from "formik";
// import azul from "../../../assets/azul.jpg";
import robot from '../../../assets/robot gris.svg'
import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
import { EditOutlined } from "@ant-design/icons";

const UserProfile = () => {
  return (
    <div>
      <HeaderSuperUser />
      <DivProfile>
        <Div>
          <img src={robot} alt="" />

          <p>
            Luisa Lafaure <EditOutlined />
          </p>
          <p>
            18 años <EditOutlined />
          </p>
        </Div>
        <div>
          <Formik initialValues={{}}>
            <Form>
              <DivInput>
                <label htmlFor="">Teléfono</label>
                <Input type="text" name="telephone" /> <EditOutlined />
              </DivInput>

              <DivInput>
                <label htmlFor="">Cuidad</label>
                <Input type="text" name="city" />
              </DivInput>

              <DivInput>
                <label htmlFor="">Dirección</label>
                <Input type="text" name="adress" />
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
    </div>
  );
};

export default UserProfile;