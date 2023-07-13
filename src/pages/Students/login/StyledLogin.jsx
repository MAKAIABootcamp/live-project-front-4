import { styled } from "styled-components";
import fondoGeneral from '../../../assets/FONDOGENERAL.png'


export const General = styled.div`
display:flex ;
width:100% ;
height:100vh;
background-image: url(${fondoGeneral});
  background-size: cover;
  background-position: center;
 
`
export const DivImagen = styled.div`
margin-top:-38px;
width:100% ;
height:100vh;
figure{
width:650px ;
height:850px;

}

img {
height:100% ;
width:100% ;
object-fit:cover ;
}
`
export const DivLogin = styled.div`
width:100% ;
height:100vh;
margin:40px  ;
  figure {
    height:150px ;
    width:450px ; 
  }
  img {
    height:100% ;
    width:100% ;
   object-fit:cover ;
  }

`

export const SectionRegistro = styled.form`
display:flex ;
flex-direction:column ;
align-items:center ;
margin-top:70px ;

 label {
    color:#03203A ;
  font-size:25px ;
  margin-top:30px ;
  font-weight:bold ;
  }

  input {

    height:40px ;
    width:350px ;
    border-radius:6px ;
    border-color:#25ABBC ;
    margin-bottom:20px ;


  }
  button {
    background:#EEE420 ;
    border:none;
    width:350px ;
    height:55px ;
    border-radius: 25px;
    color:#03203A  ;
    margin-top:40px ;
    font-weight:bold ;
    font-size:25px ;
  }
 
`