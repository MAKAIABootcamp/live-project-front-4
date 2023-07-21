import React from "react";
import { DivImagen, DivLogin, General, SectionRegistro } from "./StyledLogin";
import logo from "../../../assets/LOGOBOOTCAMOSCURO.png";
import login from "../../../assets/loginActualizado.png";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { loginActionAsync } from "../../../redux/actions/userActions";
import { Link, useNavigate,  } from "react-router-dom";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // const navigate = useNavigate();

  const logIn = (dataForm) => {
    navigate("/formStudents")
    console.log(dataForm);
    dispatch(loginActionAsync(dataForm.email, dataForm.password));

    // navigate("/formstudents");
    Swal.fire(
      'Inicio sesión exitoso!',
      '¡Bienvenid@!',
      'success'
    )
  };

  return (
    <General>
      <DivImagen>
        <figure>
          <img src={login} alt="" />
        </figure>
      </DivImagen>
      <DivLogin>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={logIn}
        >
          {(formik) => (
            <SectionRegistro onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Correo electrónico </label>
              <input
                type="text"
                id="email"
                name="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div>{formik.errors.email}</div>
              )}

              <label htmlFor="password">Contraseña</label>
              <Field
                type="password"
                id="password"
                name="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div>{formik.errors.password}</div>
              )}
             
                <button type="submit" >
                  Entrar
                </button>
           
            </SectionRegistro>
          )}
        </Formik>
      </DivLogin>
    </General>
  );
};

export default Login;


