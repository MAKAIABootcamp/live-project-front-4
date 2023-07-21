import { styled } from "styled-components";
import fondoGeneral from '../../../assets/FONDOGENERAL.png'

export const DivBootserviceGeneral = styled.div`
background-image: url(${fondoGeneral});
  background-size: cover;
  background-position: center;
  width:100% ;
height:100vh;
`


export const SectionRobot= styled.section`
 @media screen and (max-width: 1440px) {
 display:flex ;
 margin:0;
figure{
 width:5%;
height:5%; 
}
img {
width:100%;
height:100% ;
object-fit:contain;
}
h1 {
    font-size:40px ;
    font-weight:bold ;
    color:#03203A  ;
    margin-top:28px ;
}
 }
 @media screen and (max-width: 376px) {
    figure {
        width:15%;
height:15%;   
    }
    h1 {
        margin-top:20px ; 
        font-size:38px ;
    }
  }
  
`
export const DivBootservices = styled.div`
 @media screen and (max-width: 1440px) {
    display: flex;
  width: 100%;
   margin:0;
 }
 @media screen and (max-width: 376px) {
   flex-direction:column ;
  }
  
`
export const SectionServicios= styled.section`
padding:20px ;

 @media screen and (max-width: 1440px) {
    height:250px ;
    flex: 1;
  
img{
width:100%;
object-fit:contain;
border-radius:10px;
}
h2{
  
    color:#03203A  ;
    font-size:30px ;
    font-weight:bold ;

    
}
p{
    color:#03203A  ;
    font-size:18px ;
    margin-top:-10px ;
   
}
button{
    background:#EEE420 ;
    border:none;
    width:40%;
    height:25px ;
    border-radius: 25px;
    color:#03203A  ;
    font-weight:bold ;
    font-size:16px ;

}
 }
 @media screen and (max-width: 376px) {
    height:100px ;
    margin-top:-20px ;
    h2 {
        margin-top:10px;
    }
    p{
        margin-top:10px;
    }
    button {
        display:flex ;
        justify-content:center ;
        align-items:center ;
        width:100% ;
        height:35px ;
        margin-top:10px;
    }
 }
`
