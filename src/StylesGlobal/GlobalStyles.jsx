import { styled } from "styled-components";
import fondoGeneral from '../assets/FONDOGENERAL.png'

export const GlobalStyles = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
margin:0 ;
padding:0 ;
list-style:none;
text-decoration:none;
box-sizing:border-box;
font-family:'Monserrat',sans-serif ;`


export const Background = styled.div`
width: 100%;
background-image: url(${fondoGeneral});
background-size: cover;
height: 100vh;
`;