import { styled } from "styled-components";


export const General = styled.div`
display:flex ;
width:100% ;
padding:0 ;
margin:0 ;
box-sizing: border-box;

`
export const DivImagen = styled.div`

width:70% ;
height:100vh ;
padding:0 ;
margin:0 ;

figure {
  
    width:700px ;
    height:100vh ;

  }
  img {
    height:100% ;
    width:100% ;
    object-fit:cover ;
    object-position:top ;
   
  }

  `
export const DivLogin = styled.div`
margin:20px  ;
  figure {
    height:150px ;
    width:350px ;

    
  }
  img {
    height:100% ;
    width:100% ;
    border-radius:40px ;
  }

`

export const SectionRegistro = styled.section`
display:flex ;
flex-direction:column ;
align-items:center ;
margin-top:60px ;

 label {
    color:#03203A ;
  
    
   
  }
  input {
  
    height:28px ;
    width:250px ;
    border-radius:3px ;
    border-color:#25ABBC ;
    margin-bottom:20px ;


  }
  button {
    background:#EEE420 ;
    border:none;
    width:280px ;
    height:45px ;
    border-radius: 25px;
    color:#03203A  ;
    margin-top:40px ;
 
    
  }
 
`