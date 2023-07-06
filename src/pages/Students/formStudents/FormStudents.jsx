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
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Numero Documento Identidad</label>
      <input type="text" />
      </section>
      </SectionInput>
      <SectionInput>
        <section>
      <label htmlFor="">Genero</label>
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Edad</label>
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Numero de celular</label>
      <input type="text" />
      </section>
      </SectionInput>
      <SectionInput>
        <section>
      <label htmlFor="">Correo electronico</label>
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Nacionalidad</label>
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Departemento en que vives</label>
      <input type="text" />
      </section>
      </SectionInput>
      <SectionInput>
        <section>
      <label htmlFor="">Ciudad o municipio en que vives</label>
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Direccion de Residencia</label>
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Ocupacion Actual</label>
      <input type="text" />
      </section>
      </SectionInput>
      <SectionInput>
        <section>
      <label htmlFor="">Cual es tu Nivel Educativo Alcanzado</label>
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Tienes Acseso A</label>
      <input type="text" />
      </section>
      <section>
      <label htmlFor="">Segun tu recibo cual es tu  estracto socieconomico</label>
      <input type="text" />
      </section>
      </SectionInput>
      <button>Enviar</button>
    </DivFormulario>

    <FooterStudents/>

    </>
  )
}

export default FormStudents