import { styled } from "styled-components";
import fondoForm from '../../../assets/bg-form.png'

export const DivFormulario = styled.div`
  width: 100%;
  height: 100vh;
 margin-top:5px ;
 background-image: url(${fondoForm});
  background-size: cover;
  background-position: center;
  button {
    background:#EEE420 ;
    border:none;
    width:380px ;
    height:50px ;
    border-radius: 25px;
    color:#03203A  ;
   margin: 20px 90px 5px 440px ;
   font-size:20px ;
   font-weight:600 ;
  }
  `
export const SectionLogo = styled.section`
  width:100% ;
  height:100px ;
 

  figure {
height:100px ;
width:450px;
margin-left:400px ;
margin-bottom:10px ;
  }
  img {
    height:100% ;
    width:100% ;
    object-fit:cover ;
  }
  `
export const SectionInput = styled.section`
  display:flex ;
justify-content:space-around ;
margin-top:30px ;

  section {
  display:flex ;
flex-direction:column ;
}
label {
  color:#03203A  ;
  margin-bottom:5px ;
}
input {
  width:350px ;
  height:35px ;
  padding: 5px;
  border: 1px solid #25ABBC;
  border-radius: 4px;
  font-size: 16px
}
select {
  width:350px ;
  height:45px ;
  padding: 10px;
  border: 1px solid #25ABBC;
  border-radius: 4px;
  font-size: 16px
  color:#03203A 
}
option {
  border-color:#25ABBC; 
  width:350px ;
  height:30px ;

}
`

