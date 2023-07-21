import React from 'react'
import { DivFormulario, SectionInput, SectionLogo } from './StyledFormStudents'
import FooterStudents from '../footerStudents/FooterStudents'
import logo from '../../../assets/LOGOBOOTCAMOSCURO.png'

const FormStudents = () => {
  return (
    <>
      <DivFormulario>
        <SectionLogo>
          <figure>
            <img src={logo} alt="" />
          </figure>
        </SectionLogo>
        <SectionInput>
          <section>
            <label htmlFor="">Nombre y Apellido</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Tipo Documento Identidad</label>
            <select name="" id="">
              <option value="">Selecciona una respuesta</option>
              <option value="">Cédula de Ciudadanía Colombiana</option>
              <option value="Tarjeta de Identidad Colombiana">Tarjeta de Identidad Colombiana</option>
              <option value="Cédula de Identidad Venezolana">Cédula de Identidad Venezolana</option>
              <option value="PPT (Permiso por Protección Temporal)">PPT (Permiso por Protección Temporal)</option>
              <option value="PEP (Permiso Especial de Permanencia)">PEP (Permiso Especial de Permanencia)</option>
            </select>
          </section>
          <section>
            <label htmlFor="">Número Documento Identidad</label>
            <input type="text" />
          </section>
        </SectionInput>
        <SectionInput>
          <section>
            <label htmlFor="">Género</label>
           <select name="" id="">
            <option value="">Selecciona una respuesta</option>
            <option value="Mujer">Mujer</option>
            <option value="Hombre<">Hombre</option>
            <option value="Otro">Otro</option>
           </select>
          </section>
          <section>
            <label htmlFor="">Edad</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Número de celular</label>
            <input type="text" />
          </section>
        </SectionInput>
        <SectionInput>
          <section>
            <label htmlFor="">Correo electrónico</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Nacionalidad</label>
            <select name="" id="">
              <option value="">Selecciona una respuesta</option>
              <option value="Colombiana">Colombiana</option>
              <option value="Venezolana">Venezolana</option>
              <option value="Colombo-Venezolana">Colombo-Venezolana</option>
            </select>
          </section>
          <section>
            <label htmlFor="">Departamento en que vives</label>
            <input type="text" />
          </section>
        </SectionInput>
        <SectionInput>
          <section>
            <label htmlFor="">Ciudad o municipio en que vives</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Dirección de Residencia</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Ocupación Actual</label>
          <select name="" id="">
          <option value="">Selecciona una respuesta</option>
            <option value="No estudio ni trabajo">No estudio ni trabajo</option>
            <option value="Estudio">Estudio</option>
            <option value="Trabajo de manera formal">Trabajo de manera formal</option>
            <option value="Trabajo de manera informal">Trabajo de manera informal</option>
          </select>
          </section>
        </SectionInput>
        <SectionInput>
          <section>
            <label htmlFor=""> Nivel Educativo Alcanzado</label>
           <select name="" id="">
           <option value="">Selecciona una respuesta</option>
           <option value="Primaria">Primaria</option>
           <option value="Bachillerato">Bachillerato</option>
           <option value="Técnica">Técnica</option>
           <option value="Tecnología">Tecnología</option>
           <option value="Pregrado">Pregrado</option>
           <option value="Pregrado">Pregrado</option>
           </select>
          </section>
          <section>
            <label htmlFor="">Tienes Acceso A</label>
            <input type="text" />
          </section>
          <section>
            <label htmlFor="">Según tu recibo cuál es tu estrato socioeconómico</label>
          <select name="" id="">
          <option value="">Selecciona una respuesta</option>
          <option value="Estrato 1">Estrato 1</option>
          <option value="Estrato 2">Estrato 2</option>
          <option value="Estrato 3">Estrato 3</option>
          <option value="Estrato 4">Estrato 4</option>
          <option value="Estrato 5">Estrato 5</option>
          <option value="Estrato 6">Estrato 6</option>
          </select>
          </section>
        </SectionInput>
        <button>Enviar</button>
      </DivFormulario>

      <FooterStudents />

    </>
  )
}

export default FormStudents