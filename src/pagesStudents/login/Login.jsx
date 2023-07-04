import React from 'react'
import {  DivImagen, DivLogin, General,  SectionRegistro } from './StyledLogin'
import logo from '../assets/WhatsApp Image 2023-07-04 at 9.33.41 AM.jpeg'
import general from '../assets/Image 2586.png'
const Login = () => {
  return (
   <General>
    <DivImagen>
      <figure>
        <img src={general} alt="" />
      </figure>
      </DivImagen>
       <DivLogin>
      <figure>
        <img src={logo} alt="" />
      </figure>
      <SectionRegistro>
      <label htmlFor="">CORREO</label>
      <input type="text" />
      <label htmlFor="">CONTRASEÑA</label>
      <input type="text" />
      
      <button>
        Entrar
      </button>
      </SectionRegistro>
    
    </DivLogin>
    </General>
  )
}

export default Login