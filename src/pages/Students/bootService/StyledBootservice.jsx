import { styled } from "styled-components";
import fondoGeneral from "../../../assets/FONDOGENERAL.png";

export const DivBootserviceGeneral = styled.div`
  background-image: url(${fondoGeneral});
  background-size: cover;
  background-position: center;
  width:100% ;
height:100vh;
margin:0px 0px 30px 0px ;
`


export const SectionRobot= styled.section`
 @media screen and (max-width: 1440px) {
 display:flex ;
 margin:5px 0 0 20px;
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
    font-size:30px ;
    font-weight:bold ;
    color:#03203A  ;
    margin-top:15px ;
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
    height:200px ;
    flex: 1;

  
img{
width:80%;
object-fit:contain;
border-radius:10px;
}
h2{
  
    color:#03203A  ;
    font-size:25px ;
    font-weight:bold ;
    display: inline;

    
}
p{
    color:#03203A  ;
    font-size:18px ;
    line-height: 1;
    margin-top:5px ;
   
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
    margin-top:15px ;


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