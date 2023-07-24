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


// import React, { useEffect } from "react";
// import {
//   DivInput,
//   Input,
//   Form,
//   Action,
//   Div,
//   DivProfile,
//   DivDiv,
// } from "./UserProfileStyled";
// import { Formik } from "formik";
// // import azul from "../../../assets/azul.jpg";
// import robot from "../../../assets/avatar.jpg";
// import HeaderSuperUser from "../headerSuperUser/HeaderSuperUser";
// import { EditOutlined } from "@ant-design/icons";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getAdminAndStudents,
//   updateAdminAndStudentsAction,
// } from "../../../redux/actions/addAdminAndStudentsActions";

// const UserProfile = () => {
//   const dispatch = useDispatch();

//   // Obtenemos la información del usuario desde el estado de Redux
//   const userInfo = useSelector(
//     (state) => state.newAdminAndStydentsType.newAdminAndStydentsType[0]
//   );

//   // Utilizamos useEffect para obtener los datos del usuario cuando el componente se monta
//   useEffect(() => {
//     // Llamamos a la acción para obtener la información del usuario
//     dispatch(getAdminAndStudents());
//   }, [dispatch]);

//   const handleFormSubmit = (values) => {
//     // Aquí puedes realizar el manejo de envío y actualización de los datos en Firestore si es necesario.
//     // Por ejemplo, puedes llamar a la acción updateAdminAndStudentsAction para actualizar los datos del usuario.
//     dispatch(updateAdminAndStudentsAction(values));
//   };

//   return (
//     <DivDiv>
//       <HeaderSuperUser />
//       <DivProfile>
//         <Div>
//           <img src={robot} alt="" />
//           <p>Luisa Lafaure</p>
//         </Div>
//         <div>
//           <Formik initialValues={{ ...userInfo }} onSubmit={handleFormSubmit}>
//             <Form>
//               <DivInput>
//                 <label htmlFor="telefono">Teléfono</label>
//                 <Input
//                   type="telefono"
//                   name="telefono"
//                   id="telefono"
//                   value={userInfo.telefono || ""} // Mostrará el valor si existe o cadena vacía si es nulo
//                 />
//                 <EditOutlined />
//               </DivInput>

//               <DivInput>
//                 <label htmlFor="cargo">Cargo</label>
//                 <Input
//                   type="text"
//                   name="cargo"
//                   id="cargo"
//                   value={userInfo.cargo || ""} // Mostrará el valor si existe o cadena vacía si es nulo
//                 />
//               </DivInput>

//               <DivInput>
//                 <label htmlFor="email">Correo</label>
//                 <Input
//                   type="text"
//                   name="email"
//                   id="email"
//                   value={userInfo.email || ""} // Mostrará el valor si existe o cadena vacía si es nulo
//                 />
//               </DivInput>

//               <DivInput>
//                 <label htmlFor="contraseña">Contraseña</label>
//                 <Input
//                   type="text"
//                   name="contraseña"
//                   id="contraseña"
//                   value={userInfo.contraseña || ""} // Mostrará el valor si existe o cadena vacía si es nulo
//                 />
//                 <EditOutlined />
//               </DivInput>

//               <Action>
//                 <button type="submit">Guardar</button>
//               </Action>
//             </Form>
//           </Formik>
//         </div>
//       </DivProfile>
//     </DivDiv>
//   );
// };

// export default UserProfile;
