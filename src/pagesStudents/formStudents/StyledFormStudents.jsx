import { styled } from "styled-components";

export const DivFormulario = styled.div`
 
  width: 100%;
  height: 100vh;
  button {
    background:#EEE420 ;
    border:none;
    width:280px ;
    height:45px ;
    border-radius: 25px;
    color:#03203A  ;
   margin: 10px 90px 5px 490px ;
  }
  `
export const SectionLogo = styled.section`
  width:100% ;
  height:100px ;

  figure {
height:90px ;
width:310px;
margin-left:450px ;

  }
  img {
    height:100% ;
    width:100% ;
    
   
  }
  `
export const SectionInput = styled.section`
  display:flex ;
justify-content:space-around ;

  section {
    margin-top:15px ;
  display:flex ;
flex-direction:column ;
}
label {
  color:#03203A  ;
}
input {
  width:350px ;
  height:30px ;
  border-radius:3px ;
  border-color:#25ABBC;
}
  `

