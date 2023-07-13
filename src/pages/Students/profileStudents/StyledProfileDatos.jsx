import { styled } from "styled-components";

export const DivAvatar = styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
margin-top:5px ;
`
export const SectionImagen = styled.section`
display:flex ;
margin-top:-13px ;

`
export const FigureAvatar= styled.figure`
height: 150px;
    width:150px ;
    img {
    height: 100%;
width:100%;
border-radius:50%;
}
`
export const FigureIcon= styled.figure`
height: 30px;
    width:30px ;
    img {
    height: 100%;
width:100%;
margin-top:130px ;
margin-left: -80px;


}
`
export const SectionInformacion = styled.section`
margin-top:-55px ;
margin-right:90px ;

h4{
    font-size:18px ;
    margin-top:35px ;
    margin-bottom:-30px ;
}

`
export const SectionTelefono = styled.section`
margin-top:10px ;
display:flex;
gap:10px;
width:40% ;
margin-bottom:-15px ;

h4 {
    font-size:18px ;
}
input {
  border: none;
  background: transparent;
  outline: none;
  height:37px ;
  width:280px ;
  font-size:10px ;
  border-bottom: 1px solid black;
  margin-top:10px ;
}
img{
height:24px ;
width:24px ;
margin-top:22px ;
}
`
export const SectionDatos = styled.section`
display:flex;
gap:10px;
width:40% ;
margin-top:5px ;
margin-bottom:-15px ;
h4 {
    font-size:18px ;
}
input {
    margin-top:10px ;
  border: none;
  background: transparent;
  outline: none;
  height:37px ;
  width:280px ;
  font-size:10px ;
  border-bottom: 1px solid black;
}
img{
height:24px ;
width:24px ;
margin-top:22px ;
}
`