import React from "react";
import {
  DivFormulario,
  ErrorFormik,
  SectionForm,
  SectionLogo,
} from "./StyledFormStudents";
import logo from "../../../assets/LOGOBOOTCAMOSCURO.png";
import * as Yup from "yup";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { dataBase } from "../../../confiFirebase/configFirebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerActionAsync } from "../../../redux/actions/studentAction";

const validationSchema = Yup.object().shape({
  nombreCompleto: Yup.string().required("Este campo es requerido"),
  tipoDocumento: Yup.string().required("Este campo es requerido"),
  numeroDocumento: Yup.string().required("Este campo es requerido"),
  sexo: Yup.string().required("Este campo es requerido"),
  edad: Yup.number().required("Este campo es requerido"),
  celular: Yup.string().required("Este campo es requerido"),
  correo: Yup.string()
    .email("Ingrese un correo electrónico válido")
    .required("Este campo es requerido"),
  nacionalidad: Yup.string().required("Este campo es requerido"),
  departamento: Yup.string().required("Este campo es requerido"),
  ciudad: Yup.string().required("Este campo es requerido"),
  direccion: Yup.string().required("Este campo es requerido"),
  estrato: Yup.string().required("Este campo es requerido"),
  raza: Yup.string().required("Este campo es requerido"),
  contacto: Yup.string().required("Este campo es requerido"),
  correoContacto: Yup.string()
    .email("Ingrese un correo electrónico válido")
    .required("Este campo es requerido"),
  telefonoContacto: Yup.string().required("Este campo es requerido"),
  poblacion: Yup.string().required("Este campo es requerido"),
  ocupacion: Yup.string().required("Este campo es requerido"),
  nivelEducativo: Yup.string().required("Este campo es requerido"),
  conocimiento: Yup.string().required("Este campo es requerido"),
  equipos: Yup.string().required("Este campo es requerido"),
  motivacion: Yup.string().required("Este campo es requerido"),
  tiempoLibre: Yup.string().required("Este campo es requerido"),
  hobbie: Yup.string().required("Este campo es requerido"),
});

const FormStudents = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    nombreCompleto: user.nombre || "",
    tipoDocumento: "",
    numeroDocumento: "",
    sexo: "",
    edad: "",
    celular: "",
    correo: user.email || "",
    nacionalidad: "",
    departamento: "",
    ciudad: "",
    direccion: "",
    estrato: "",
    raza: "",
    contacto: "",
    correoContacto: "",
    telefonoContacto: "",
    poblacion: "",
    ocupacion: "",
    nivelEducativo: "",
    conocimiento: "",
    equipos: "",
    motivacion: "",
    tiempoLibre: "",
    hobbie: "",
  };

  const registro = (dataForm) => {
    try {
      const { uid } = user;
      if (!uid) {
        console.error("El UID del usuario no está disponible.");
        return;
      }

      // Llamar a la acción `registerActionAsync` para registrar el estudiante
      dispatch(registerActionAsync(uid, dataForm)).then(async () => {
        // Actualizar el campo 'formularioLlenado' en la colección 'users'
        const usersRef = collection(dataBase, "users");
        const usersQuery = query(usersRef, where("uid", "==", uid));
        const usersSnapshot = await getDocs(usersQuery);

        if (usersSnapshot.empty) {
          console.error("No se encontró un documento con el UID del usuario.");
          return;
        }

        const userDoc = usersSnapshot.docs[0];
        const userRef = doc(usersRef, userDoc.id);
        await updateDoc(userRef, {
          formularioLlenado: true,
        });

        console.log("Campo 'formularioLlenado' actualizado a true.");

        // Redireccionar a la página de inicio de los estudiantes
        navigate("/homeStudents");
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "¡El formulario se ha enviado exitosamente!",
          confirmButtonText: "Ok",
        });
      });
    } catch (error) {
      console.error("Error al actualizar el campo 'formularioLlenado':", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha ocurrido un error. Los datos no han sido guardados.",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <>
      <DivFormulario>
        <SectionLogo>
          <figure>
            <img src={logo} alt="" />
          </figure>
        </SectionLogo>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={registro}
        >
          {(formik) => (
            <SectionForm onSubmit={formik.handleSubmit}>
              <section>
                <label htmlFor="nombreCompleto">Nombre completo</label>
                <input
                  type="text"
                  name="nombreCompleto"
                  {...formik.getFieldProps("nombreCompleto")}
                  readOnly
                />
                {formik.touched.nombreCompleto &&
                  formik.errors.nombreCompleto && (
                    <ErrorFormik>{formik.errors.nombreCompleto}</ErrorFormik>
                  )}
              </section>
              <section>
                <label htmlFor="tipoDocumento">
                  Tipo documento de identidad
                </label>
                <select
                  name="tipoDocumento"
                  id=""
                  {...formik.getFieldProps("tipoDocumento")}
                >
                  <option value="">Selecciona una respuesta</option>
                  <option value="Cédula de ciudadanía colombiana">
                    Cédula de ciudadanía colombiana
                  </option>
                  <option value="Tarjeta de Identidad Colombiana">
                    Tarjeta de identidad colombiana
                  </option>
                  <option value="Cédula de Identidad Venezolana">
                    Cédula de identidad venezolana
                  </option>
                  <option value="PPT (Permiso por Protección Temporal)">
                    PPT (Permiso por protección temporal)
                  </option>
                  <option value="PEP (Permiso Especial de Permanencia)">
                    PEP (Permiso especial de permanencia)
                  </option>
                </select>
                {formik.touched.tipoDocumento &&
                  formik.errors.tipoDocumento && (
                    <ErrorFormik>{formik.errors.tipoDocumento}</ErrorFormik>
                  )}
              </section>
              <section>
                <label htmlFor="numeroDocumento">
                  Número documento de identidad
                </label>
                <input
                  type="text"
                  name="numeroDocumento"
                  {...formik.getFieldProps("numeroDocumento")}
                />
                {formik.touched.numeroDocumento &&
                  formik.errors.numeroDocumento && (
                    <ErrorFormik>{formik.errors.numeroDocumento}</ErrorFormik>
                  )}
              </section>
              <section>
                <label htmlFor="sexo">¿Cómo te identificas?</label>
                <select name="sexo" id="" {...formik.getFieldProps("sexo")}>
                  <option value="">Selecciona una respuesta</option>
                  <option value="Mujer">Mujer</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Otro">Otro</option>
                </select>
                {formik.touched.sexo && formik.errors.sexo && (
                  <ErrorFormik>{formik.errors.sexo}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="edad">Edad</label>
                <input
                  type="text"
                  name="edad"
                  {...formik.getFieldProps("edad")}
                />
                {formik.touched.edad && formik.errors.edad && (
                  <ErrorFormik>{formik.errors.edad}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="celular">Número de celular</label>
                <input
                  type="text"
                  name="celular"
                  {...formik.getFieldProps("celular")}
                />
                {formik.touched.celular && formik.errors.celular && (
                  <ErrorFormik>{formik.errors.celular}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="correo">Correo electrónico</label>
                <input
                  type="text"
                  name="correo"
                  {...formik.getFieldProps("correo")}
                  readOnly
                />
                {formik.touched.correo && formik.errors.correo && (
                  <ErrorFormik>{formik.errors.correo}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="nacionalidad">Nacionalidad</label>
                <input
                  type="text"
                  name="nacionalidad"
                  {...formik.getFieldProps("nacionalidad")}
                />
                {formik.touched.nacionalidad && formik.errors.nacionalidad && (
                  <ErrorFormik>{formik.errors.nacionalidad}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="departamento">Departamento de residencia</label>
                <input
                  type="text"
                  name="departamento"
                  {...formik.getFieldProps("departamento")}
                />
                {formik.touched.departamento && formik.errors.departamento && (
                  <ErrorFormik>{formik.errors.departamento}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="ciudad">Ciudad o municipio de residencia</label>
                <input
                  type="text"
                  name="ciudad"
                  {...formik.getFieldProps("ciudad")}
                />
                {formik.touched.ciudad && formik.errors.ciudad && (
                  <ErrorFormik>{formik.errors.ciudad}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="direccion">Dirección de residencia</label>
                <input
                  type="text"
                  name="direccion"
                  {...formik.getFieldProps("direccion")}
                />
                {formik.touched.direccion && formik.errors.direccion && (
                  <ErrorFormik>{formik.errors.direccion}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="estrato">
                  ¿Cuál es tu estrato socioeconómico?
                </label>
                <select
                  name="estrato"
                  id=""
                  {...formik.getFieldProps("estrato")}
                >
                  <option value="">Selecciona una respuesta</option>
                  <option value="Estrato 1">Estrato 1</option>
                  <option value="Estrato 2">Estrato 2</option>
                  <option value="Estrato 3">Estrato 3</option>
                  <option value="Estrato 4">Estrato 4</option>
                  <option value="Estrato 5">Estrato 5</option>
                  <option value="Estrato 6">Estrato 6</option>
                </select>
                {formik.touched.estrato && formik.errors.estrato && (
                  <ErrorFormik>{formik.errors.estrato}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="raza">
                  De acuerdo con tu cultura, pueblo o rasgos físicos te
                  reconoces como:
                </label>
                <select name="raza" id="" {...formik.getFieldProps("raza")}>
                  <option value="">Selecciona una respuesta</option>
                  <option value="Indígena">Indígena</option>
                  <option value=" Gitano(a) o Rrom ">Gitano(a) o Rrom </option>
                  <option value=" Raizal">Raizal</option>
                  <option value="Palenquero(a)">Palenquero(a)</option>
                  <option value=" Negro(a), mulato(a), afrodescendiente, afrocolombiano(a)">
                    Negro(a), mulato(a), afrodescendiente, afrocolombiano(a)
                  </option>
                  <option value=" Ningún grupo étnico">
                    Ningún grupo étnico
                  </option>
                </select>
                {formik.touched.raza && formik.errors.raza && (
                  <ErrorFormik>{formik.errors.raza}</ErrorFormik>
                )}
              </section>

              <section>
                <label htmlFor="contacto">
                  Nombre y parentezco de persona de contacto en caso de
                  emergencia
                </label>
                <input
                  type="text"
                  name="contacto"
                  {...formik.getFieldProps("contacto")}
                />
                {formik.touched.contacto && formik.errors.contacto && (
                  <ErrorFormik>{formik.errors.contacto}</ErrorFormik>
                )}
              </section>

              <section>
                <label htmlFor="correoContacto">
                  Correo electrónico de la persona de contacto
                </label>
                <input
                  type="text"
                  name="correoContacto"
                  {...formik.getFieldProps("correoContacto")}
                />
                {formik.touched.correoContacto &&
                  formik.errors.correoContacto && (
                    <ErrorFormik>{formik.errors.correoContacto}</ErrorFormik>
                  )}
              </section>
              <section>
                <label htmlFor="telefonoContacto">
                  Teléfono de la persona de contacto
                </label>
                <input
                  type="text"
                  name="telefonoContacto"
                  {...formik.getFieldProps("telefonoContacto")}
                />
                {formik.touched.telefonoContacto &&
                  formik.errors.telefonoContacto && (
                    <ErrorFormik>{formik.errors.telefonoContacto}</ErrorFormik>
                  )}
              </section>
              <section>
                <label htmlFor="poblacion">
                  Con qué población te identificas
                </label>
                <select
                  name="poblacion"
                  id="poblacion"
                  {...formik.getFieldProps("poblacion")}
                >
                  <option value="">Selecciona una respuesta</option>
                  <option value="Desplazado">Desplazado</option>
                  <option value="Discapacidad">Discapacidad</option>
                  <option value="LGTB+">LGTB+</option>
                  <option value="Migrante">Migrante</option>
                  <option value="Víctima del conflicto">
                    Víctima del conflicto
                  </option>
                  <option value="Ninguna">Ninguna</option>
                </select>
                {formik.touched.poblacion && formik.errors.poblacion && (
                  <ErrorFormik>{formik.errors.poblacion}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="ocupacion">¿Cuál es tu ocupación actual?</label>
                <select
                  name="ocupacion"
                  id="ocupacion"
                  {...formik.getFieldProps("ocupacion")}
                >
                  <option value="">Selecciona una respuesta</option>
                  <option value="No estudio ni trabajo">
                    No estudio ni trabajo
                  </option>
                  <option value="Estudio">Estudio</option>
                  <option value="Trabajo de manera formal">
                    Trabajo de manera formal
                  </option>
                  <option value="Trabajo de manera informal">
                    Trabajo de manera informal
                  </option>
                </select>
                {formik.touched.ocupacion && formik.errors.ocupacion && (
                  <ErrorFormik>{formik.errors.ocupacion}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="nivelEducativo">
                  ¿Cuál es tu nivel educativo más alto alcanzado?
                </label>
                <select
                  name="nivelEducativo"
                  id="nivelEducativo"
                  {...formik.getFieldProps("nivelEducativo")}
                >
                  <option value="">Selecciona una respuesta</option>
                  <option value="Primaria">Primaria</option>
                  <option value="Bachillerato">Bachillerato</option>
                  <option value="Técnica">Técnica</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Pregrado">Pregrado</option>
                  <option value="Pregrado">Posgrado</option>
                </select>
                {formik.touched.nivelEducativo &&
                  formik.errors.nivelEducativo && (
                    <ErrorFormik>{formik.errors.nivelEducativo}</ErrorFormik>
                  )}
              </section>
              <section>
                <label htmlFor="conocimiento">
                  ¿Tienes conocimientos en programación y desarrollo web?
                </label>
                <select
                  name="conocimiento"
                  id="conocimiento"
                  {...formik.getFieldProps("conocimiento")}
                >
                  <option value="">Selecciona una respuesta</option>
                  <option value="Pregrado">Si</option>
                  <option value="Pregrado">No</option>
                </select>
                {formik.touched.conocimiento && formik.errors.conocimiento && (
                  <ErrorFormik>{formik.errors.conocimiento}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="equipos">Tienes acceso a</label>
                <select
                  name="equipos"
                  id="equipos"
                  {...formik.getFieldProps("equipos")}
                >
                  <option value="">Selecciona una respuesta</option>
                  <option value="Primaria">Computador</option>
                  <option value="Técnica">Internet</option>
                  <option value="Pregrado">Todas</option>
                  <option value="Pregrado">Ninguna</option>
                </select>
                {formik.touched.equipos && formik.errors.equipos && (
                  <ErrorFormik>{formik.errors.equipos}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="motivacion">
                  ¿Qué es lo que más te motiva para presentarte al Bootcamp?
                </label>
                <input
                  type="text"
                  name="motivacion"
                  {...formik.getFieldProps("motivacion")}
                />
                {formik.touched.motivacion && formik.errors.motivacion && (
                  <ErrorFormik>{formik.errors.motivacion}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="tiempoLibre">
                  Cuéntanos en que ocupas tu tiempo libre
                </label>
                <input
                  type="text"
                  name="tiempoLibre"
                  {...formik.getFieldProps("tiempoLibre")}
                />
                {formik.touched.tiempoLibre && formik.errors.tiempoLibre && (
                  <ErrorFormik>{formik.errors.tiempoLibre}</ErrorFormik>
                )}
              </section>
              <section>
                <label htmlFor="hobbie">
                  ¿Cuál es la actividad que mas disfrutas hacer?
                </label>
                <input
                  type="text"
                  name="hobbie"
                  {...formik.getFieldProps("hobbie")}
                />
                {formik.touched.hobbie && formik.errors.hobbie && (
                  <ErrorFormik>{formik.errors.hobbie}</ErrorFormik>
                )}
              </section>
              <div>
                <button type="submit">Enviar</button>
              </div>
            </SectionForm>
          )}
        </Formik>
      </DivFormulario>
    </>
  );
};

export default FormStudents;
