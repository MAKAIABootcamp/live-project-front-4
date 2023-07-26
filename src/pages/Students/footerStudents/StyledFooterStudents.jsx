import { styled } from "styled-components";

export const Footer= styled.footer`
 @media screen and (max-width: 1440px) {
display:flex ;
justify-content:space-between;
align-items:center;
background:#03203A  ;
height:50px ;
width:100% ;
bottom: 0;
margin:0;
position:fixed ;
@media screen and (max-width: 414px) {
  position: relative;
  justify-content:flex-start ;
}
 }
`

export const SectionDerechos = styled.section`
 @media screen and (max-width: 1440px) {
  color: white;
  padding-left: 40px;
 }
 @media screen and (max-width: 414px) {
  padding-left: 20px;
  
 }
`;

export const SectionIconos = styled.section`
 @media screen and (max-width: 1440px) {
  display: flex;
  justify-content:space-around;
figure {
  width: 30px;
    height: 30px;
}
  img {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 414px) {
  
  figure {
    width: 15px;
    height: 15px;
  }
 }
`;
