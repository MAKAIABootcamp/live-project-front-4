import { styled } from "styled-components";
import fondoGeneral from '../../../assets/FONDOGENERAL.png'

export const DivFormulario = styled.div`

  @media screen and (max-width: 1440px) {
  width: 100%;
  height: 100vh;
 margin-top:5px ;
 background-image: url(${fondoGeneral});
 background-size: cover;
  background-position: center;

  
}

  @media screen and (max-width: 769px) {
    button {
    margin: 35px 0px 10px 15px ;
    width:360px ;
  }
  }
  @media screen and (max-width: 376px) {
    width: 100%;
  height: 100vh;
  button {
    margin: 15px 0px 10px 15px ;
    width:340px ;
  }
  }
  `
export const SectionLogo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  figure {
height:100px ;
width:40%;
  }
  img {
    height:100% ;
    width:100% ;
    object-fit:contain;
  }
  @media screen and (max-width: 1440px) {
  width:100% ;
  height:100px ;

  
  }
@media screen and (max-width: 376px) {
  figure {
height:100px ;
width:80%;
margin-bottom:5px ;
  }
}
  `
export const SectionForm = styled.form`
div {
    display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  
}
button {
    background:#EEE420 ;
    border:none;
   width:32% ;
   height:40px ;
    border-radius: 25px;
    color:#03203A  ;
   font-size:20px ;
   font-weight:600 ;
 margin-top:10px ;
  }
 @media screen and (max-width: 1440px) {
  display:flex ;
  flex-wrap: wrap;
  justify-content: space-between;
margin-top:15px ;
align-items:center ;
padding-left:10px ;

  section {
    display: flex;
    flex-direction: column;
    width: calc(33.33% - 20px);
    margin-bottom: 15px;
  }

label {
  color:#03203A  ;
  margin-bottom:5px ;
}
input {
  width:98%;
  height:41px ;
  border: 1px solid #25ABBC;
  border-radius: 4px;
  font-size: 16px;
  color: #03203a;
}
select {
  width:99%;
  height:45px ;
  border: 1px solid #25ABBC;
  border-radius: 4px;
  font-size: 16px;
  color:#03203A;
}
option {
  border-color:#25ABBC; 
  width:350px ;
  height:30px ;
}

 }

@media screen and (max-width: 769px) {
    section {
      width: calc(50% - 20px);
    }
  }
  @media screen and (max-width: 376px) {
    section {
      width: 100%;
    }
input {
  width: 338px;
}
button {
  width:80% ;
 margin-bottom: 10px;
}
  }
`

export const ErrorFormik = styled.p`
color: #25ABBC;
font-size:10px ;
border-color:#03203a ;

`