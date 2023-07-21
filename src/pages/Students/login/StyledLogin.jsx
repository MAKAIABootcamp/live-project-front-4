import { styled, keyframes } from "styled-components";
import fondoGeneral from '../../../assets/FONDOGENERAL.png'
import login from "../../../assets/loginActualizado.png";


export const appearAnimation = keyframes`
   0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const General = styled.div`
 @media screen and (max-width: 1440px) {
display:flex ;
width:100% ;
height:100vh;
background-image: url(${fondoGeneral});
  background-size: cover;
  background-position: center;
  justify-content: space-around;

 }
  @media screen and (max-width: 769px) {
    margin:80px 0px 0px 15px;
    position:absolute ;
  }

  @media screen and (max-width: 376px) {
    margin:0 ;
  }
  
  
`
export const DivImagen = styled.div`
animation: ${appearAnimation} 1s ease-in-out;
 @media screen and (max-width: 1440px) {
width:100% ;
height:100vh;
display: flex;


figure{
width:99%;

}
img {
height:100% ;
width:100% ;
object-fit:contain;
}
 }
@media screen and (max-width: 769px) {
  margin-top:10px ;

  figure{
width:350px ;
height:650px;
}
img {
object-fit:contain;

}
    
  }
  @media screen and (max-width: 376px) {
    display:none ;
    figure{
      display:none ;
    }
  }
`
export const DivLogin = styled.div`
 @media screen and (max-width: 1440px) {
width:100% ;
height:100vh;

  figure {
    height:40%;
    width:80% ; 
  }
  img {
    height:100% ;
    width:100% ;
   object-fit:contain;
  }
}
  @media screen and (max-width: 769px) {
    margin: 80px 0px 20px -90px;
  figure{
width:450px ;
height:120px;

}
    
  }
  @media screen and (max-width: 376px)  {
  margin:30px 0px 0px 0px ;
    figure{
      margin:0 ;
      display: flex;
      justify-content: center;
      align-items: center;
      width:100%;
    }
    img{
     
    }
  }
 
`

export const SectionRegistro = styled.form`
 @media screen and (max-width: 1440px) {
display:flex ;
flex-direction:column ;
align-items:center ;

 label {
    color:#03203A ;
  font-size:25px ;
  font-weight:bold ;
  padding-top:15px ;
  padding-bottom:15px ;
  }

  input {
    height:40px ;
    width:60%;
    border-radius:6px ;
    border-color:#25ABBC ;
   


  }
  button {
    background:#EEE420 ;
    border:none;
    width:60%;
    height:45px ;
    border-radius: 25px;
    color:#03203A  ;
    font-weight:bold ;
    font-size:25px ;
    margin-top:20px ;
  } 
}
@media screen and (max-width: 376px)  {
  display:flex ;
flex-direction:column ;
align-items:center ;
margin-top:60px ;
  input {
    width:80% ;
  }
  button {
    margin-top:40px ;
    width:80%;
  }
}
`