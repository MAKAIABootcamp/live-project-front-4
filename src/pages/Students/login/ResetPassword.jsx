import React, { useState } from 'react';
import {sendPasswordResetEmail } from 'firebase/auth';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { auth } from '../../../confiFirebase/configFirebase';
import { useNavigate } from 'react-router-dom/dist';


const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #03203A;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonCancelar = styled.button`
background-color: #25ABBC;
color: #fff;
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
`;
const Button = styled.button`
  background-color: #EEE420;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ContainerBottom = styled.section`
    display:flex ;
    gap:15px ;
`
const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        Swal.fire({
          icon: 'success',
          title: 'Correo enviado',
          text: 'Se ha enviado un correo electrónico para restablecer tu contraseña.',
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        let title = '';
        let message = '';

        switch (errorCode) {
          case 'auth/invalid-email':
            title = 'Correo electrónico inválido';
            message = 'Por favor, ingresa un correo electrónico válido.';
            break;
          case 'auth/user-not-found':
            title = 'Usuario no encontrado';
            message = 'No se encontró ningún usuario con este correo electrónico.';
            break;
          default:
            title = 'Error al enviar el correo';
            message = errorMessage;
        }

        Swal.fire({
          icon: 'error',
          title: title,
          text: message,
        });
      });
  };
  
  const navigate = useNavigate()

  return (

   <CenteredContainer>
      <FormContainer>
        <Label>Correo electrónico:</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ContainerBottom>
        <Button onClick={handlePasswordReset}>Restablecer Contraseña</Button>
        <ButtonCancelar onClick={() => navigate(-2)}>Volver</ButtonCancelar>
        </ContainerBottom>
      </FormContainer>
    </CenteredContainer>
  );
};

export default PasswordReset;
