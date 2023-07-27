import { styled } from "styled-components"

export const BackgroundStudents = styled.section`
@media screen and (max-width: 1440px) {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607992/LIVE/Im%C3%A1genes/Covers/FONDO_PC_eoeuar.png')
}

@media screen and (max-width: 768px) {
background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607556/LIVE/Im%C3%A1genes/Covers/FONDO_TABLET_knpzbw.png');
}

@media screen and (max-width: 375px) {
background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607557/LIVE/Im%C3%A1genes/Covers/FONDO_CEL_v7opjm.png');
}
`;

export const SectionStudents = styled.section`
@media screen and (max-width: 1440px){
width: 30%;
height: 100vh;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
padding-top: 70px;

}

@media screen and (max-width: 768px){
width: 60%;
height: auto;
margin: auto;
padding-top: 100px;
padding-bottom: 50px;
}

@media screen and (max-width: 414px){
width: 80%;
}
`;

export const OptionsStudents = styled.button`
background-color: #25ABBC;
border: transparent;
border-radius: 6px;
display: flex;
justify-content: space-between;
padding-left: 50px;
padding-right: 50px;
align-items: center;
width: 100%;
height: 120px;
color: #ffffff;
font-size: 25px;
cursor: pointer;
transition: 0.4s;

&:hover{
    background-color: #03203A;
}

`;

export const IconOption = styled.img`
/* filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(353deg) brightness(107%) contrast(101%); */
`;