import { styled } from "styled-components"
import fondoGeneral from '../../../assets/FONDO.png'

export const BackgroundPageStudents = styled.section`
width: 100%;
background-image: url(${fondoGeneral});
background-size: cover;
background-position: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const SectionStudents = styled.section`
width: 30%;
display: flex;
flex-direction: column;
margin: 0 auto;
gap: 20px;
`;

export const OptionsStudents = styled.button`
background-color: #25ABBC;
border: transparent;
border-radius: 6px;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 120px;
color: #ffffff;
font-size: 25px;
cursor: pointer;

img {
    filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(353deg) brightness(107%) contrast(101%);
}

`;