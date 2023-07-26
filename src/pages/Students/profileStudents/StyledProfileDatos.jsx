import { styled } from "styled-components";

export const DivAvatar = styled.div`
 @media screen and (max-width: 1440px) {
display:flex ;
flex-direction:column ;
align-items:center ;
margin:0 ;
 }
 @media screen and (max-width: 376px) {
    justify-content:center ;
    

 }
`
export const SectionImagen = styled.section`
 @media screen and (max-width: 1440px) {
    display:flex ;
    align-items:center ;
    justify-content:center ;
 }
`
export const FigureAvatar = styled.figure`
 @media screen and (max-width: 1440px) {
    height: 25%;
    width:45%;
}
    img {
    height: 100%;
width:100%;
border-radius:50%;
}
 
`
export const FigureIcon = styled.figure`
 @media screen and (max-width: 1440px) {
height:5%;
    width:10%;
    margin-left:-40px;

    figure{
height: 15%;
    width:15%;

}
    img {
    height: 100%;
width:100%;
margin-top:50px ;

}
 }
`
export const SectionInformacion = styled.section`
 @media screen and (max-width: 1440px) {
    display:flex ;
    align-items:center ;
    justify-content:center ;
    flex-direction:column ;
margin-top:-55px ;


h4{
    margin-top:30px ;
    margin-bottom:-25px ;
    color:#03203A  ;
    font-size:18px ;
    line-height: 1;
    font-weight:700 ;
}
 }
`
export const DivForm = styled.div`
  display:flex ;
  flex-wrap: wrap;
  justify-content: space-between;
margin-top:15px ;
align-items:center ;
padding-left:10px ;
@media screen and (max-width: 769px) {
    section {
      width: calc(50% - 20px);
    }
  }
  @media screen and (max-width: 414px) {
    section {
      width: 100%;
    }
}
`
export const SectionDatos = styled.section`
 @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: calc(33.33% - 20px);
  
h4 {
 
    font-size:18px ;
    font-weight:700 ;
    color:#25ABBC ;
}
input {
  border: none;
  background: transparent;
  outline: none;
  width:280px ;
  font-size:16px ;
  border-bottom: 3px solid #EEE420 ;
  color:#03203A  ;
  font-weight:600 ;
}
img{
height:20px ;
width:20px ;

}
 }
 
`