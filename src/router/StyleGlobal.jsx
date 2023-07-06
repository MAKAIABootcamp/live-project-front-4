import { styled } from "styled-components";
import fondoGeneral from '../assets/FONDO.png'

// `:root{
//     --colorBlue: #25ABBC
// }`


export const BackgroundGeneral = styled.section`
  margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: content-box;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background-image: url(${fondoGeneral});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;