import React from 'react'
import {   DivImagen, DivLogin, General,  SectionRegistro } from './StyledLogin'
import logo from '../assets/LOGOBOOTCAMOSCURO.png'
import login from '../assets/loginActualizado.png'
const Login = () => {
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