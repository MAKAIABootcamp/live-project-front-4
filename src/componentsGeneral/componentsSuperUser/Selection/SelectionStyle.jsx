import { styled } from "styled-components"

export const BackgroundSelection = styled.section`
background-repeat: no-repeat;
width: 1440px;
height: auto;
background-size: cover;
background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607992/LIVE/Im%C3%A1genes/Covers/FONDO_PC_eoeuar.png');

@media screen and (max-width: 768px) {
width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607556/LIVE/Im%C3%A1genes/Covers/FONDO_TABLET_knpzbw.png');
}

@media screen and (max-width: 375px) {
width: 435px;
height: 1000px;
background-repeat: no-repeat;
background-size: cover;
object-fit: cover;
background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607557/LIVE/Im%C3%A1genes/Covers/FONDO_CEL_v7opjm.png');
}
`;

export const TitleSelection = styled.p`

@media screen and (max-width: 1440px) {
font-size: 25px;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
font-weight: bold;
padding-top: 150px; 
padding-bottom: 20px;  
transform: translateX(0 auto) 
}

@media screen and (max-width: 768px) {
    transform: translate(-70%, -20%);
    width: 50%;
}

@media screen and (max-width: 375px) {
    width: 50%;
    transform: translateX(-70%);
    font-size: 20px;
}

`;

export const SearchSelection = styled.div`

@media screen and (max-width: 1440px) {
   display: flex;
width: 450px;
justify-content: space-between;
padding-left: 100px;
padding-top: 20px;

& input{
    width: 90%;
    border-radius: 20px 0px 0px 20px;
    border: #c6c4c4 solid 2px;
    padding: 10px;
}

& button {
    background-color:#EEE420; 
    border: #c6c4c4 solid 2px;
    border-radius: 0 20px 20px 0;
    width: 40px;
    cursor: pointer;

    & img {
        filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(353deg) brightness(107%) contrast(101%);
    }
} 
}

@media screen and (max-width: 768px) {
    width: 400px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    z-index: 200;
    padding-left: 0;
    padding-top: 0;
    transform: translate(300px, -80px);

    & input{
width: 100%;
    }
}

@media screen and (max-width: 375px) {
    width: 350px;
    transform: translate(180px, -50px);
}

`;

export const ContentSelection = styled.section`

@media screen and (max-width: 1440px) {
display: flex;
margin: 0 auto;
width: 100%;
align-items: center;
justify-content: space-around;
margin-top: 3%;
padding-bottom: 80px;  
}

@media screen and (max-width: 768px) {
    flex-direction: column;
    width: 10%;
    align-items: center;
    margin: 0 auto;
    padding-top: 20px;
}

@media screen and (max-width: 375px) {
    width: 100%;
}

`;

export const CoverSelection = styled.img`
@media screen and (max-width: 1440px) {
width: 700px;
margin-top: 50px;
transform: translate(10px);   
}

@media screen and (max-width: 768px) {
    transform: translateX(0%);
    margin-top: -10px;
    width: 500px;
}

@media screen and (max-width: 375px) {
    transform: translateX(20%);
    width: 300px;
}
`;

export const CoverSelectionDetails = styled.img`
@media screen and (max-width: 1440px) {
width: 700px;
margin-top: 50px;
margin-right: 110px;
position: block;
transform: translate(50px, 40px);   
}

@media screen and (max-width: 768px) {
    transform: translateX(0%);
    margin-top: -10px;
    width: 500px;
}

@media screen and (max-width: 375px) {
    transform: translate(20%, 65%);
    width: 300px;
}
`;


export const ContentCourses = styled.div`
@media screen and (max-width: 1440px) {
display: flex;
flex-direction: column;
width: 25%;
gap: 5px;  
transform: translateX(-20%)
}

@media screen and (max-width: 768px) {
    transform: translateX(-4px);
    width: 700px;
    height: auto;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   flex-wrap: wrap;
}

@media screen and (max-width: 375px) {
    margin: 0 auto;
    width: 450px;
}

`;

export const ContentButtonCourses = styled.button`

@media screen and (max-width: 1440px) {
background-color: #25ABBC;
height: 100px;
border: transparent;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-around;
gap: 10px;
color: white;
font-size: 20px;
cursor: pointer;
transition: 0.5s;
width: 350px;

& div{
width: 250px;
display: flex;
align-items: center;
justify-content: space-between;
}

& img{
    filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(353deg) brightness(107%) contrast(101%);
}

&:hover{
    width: 400px;
    transform: translateX(-50px);
    background-color: #03203A;
}
}

@media screen and (max-width: 768px) {
    width: 300px; //tamaño de los botones

    &:hover{
    width: 340px;
    transform: translateX(0px);
    background-color: #03203A;
}
}

@media screen and (max-width: 376px) {
    width: 215px;
}

`;

export const SearchAndBack = styled.div`
display: flex;
flex-direction: row-reverse; 
justify-content: flex-end;
align-items: flex-end;
width: 80%;
margin: 0 auto;
`;

export const ProfileContent = styled.section`
@media screen and (max-width: 1440px) {
width: 800px;
margin-top: 20px;   
overflow: hidden;
/* background-color: olive;  */
}

@media screen and (max-width: 768px) {
    width: 100%;
}

`;

export const AvatarPhoto = styled.div`
overflow: hidden;
background-color: orange;
border-radius: 200px;
width: 200px;
height: 200px;

& img{
    width: 100%;
    object-fit: cover;
}
@media screen and (width: 1440px) {
overflow: hidden;
background-color: orange;
border-radius: 200px;
border: 2px solid black;
width: 200px;
height: 200px;
object-fit: cover;
background-size: cover;

& img{
overflow: hidden;
width: 100%;
object-fit: cover;
/* transform: translateX(-20%); */
}  
}

@media screen and (width: 768px) {
    width: 150px;
    height: 150px;
}

`;

export const SectionAvatar = styled.section`
display: flex;
gap: 30px;
align-items: center;

@media screen and (max-width: 375px) {
    flex-direction: column;
}
`;

export const AvatarData = styled.section`
display: flex;
gap: 100px;
`;

export const DataInfo = styled.section`
gap: 5px;
display: flex;
flex-direction: column;

& h4{
    font-weight: 700;
}

& p{
    line-height: 0px;
    font-weight: 200;
}
`;

export const MoreInfoAvatar = styled.div`
text-align: justify;
width: 100%;
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
line-height: 20px;

@media screen and (max-width: 375px) {
    text-align: left;
    width: 100%;
    margin-top: 50px;
}
`;

export const TitlesAvatar = styled.p`
font-size: 20px;
font-weight: bold;

@media screen and (max-width: 375px) {
    margin: 0 auto;
    text-align: center;
}
`;

export const ScrollInfo = styled.section`
overflow: hidden;
overflow: scroll;
height: 300px; 
`;

export const ContentListInfo = styled.section`

@media screen and (max-width: 1440px) {
display: flex;
padding-left: 50px;
padding-right: 50px; 
}

@media screen and (max-width: 768px) {
 padding-left: 0px;
 padding-right: 0px; 
 flex-direction: column;
}

@media screen and (max-width: 375px) {
display: flex;
flex-direction: column-reverse;
width: 440px;
}
`;

export const ListSelected = styled.section`
display: flex;
flex-direction: column;
`;

export const CourseSelected = styled.button`
@media screen and (max-width: 1440px) {
background-color: #03203A;
height: 110px;
overflow: hidden;
border: transparent;
position: absolute;
z-index: 20;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-around;
gap: 10px;
color: white;
font-size: 20px;
cursor: pointer;
transition: 0.5s;
width: 400px;
/* transform: translate(-20%, 20%); */
animation: deployList 1.5s forwards;

@keyframes deployList {
0%{
    transform: translate(80px, 250px)
}

100%{
    transform: translate(80px, 100px);
}
}

& div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 0 auto;
}

& img{
    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(121deg) brightness(106%) contrast(101%);
} 
}

@media screen and (max-width: 768px) {
    width: 98%;
    animation: deployListablet 1.5s forwards;

@keyframes deployListablet {
0%{
    transform: translate(0px, 250px)
}

100%{
    transform: translate(0px, 100px);
}
}
}

@media screen and (max-width: 376px) {
    width: 430px;
    animation: deployListablet 1.5s forwards;

@keyframes deployListablet {
0%{
    transform: translate(0px, 250px)
}

100%{
    transform: translate(0px, 100px);
}
}
}

`;

export const ArrowBack = styled.img`
@media screen and (max-width: 1440px) {
position: absolute;
transform: translate(-150px,-30px);
filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(121deg) brightness(106%) contrast(101%);
}

@media screen and (max-width: 768px) {
    transform: translate(-300px, -30px);
}

@media screen and (max-width: 375px) {
    transform: translate(-200px, -30px)
}
`;

export const ListGeneral = styled.div`
@media screen and (max-width: 1440px) {
overflow: hidden;
width: 400px;
display: flex;
height: 0px;
flex-direction: column;
padding-top: 10px; 
transform: translate(80px, 220px);
animation: 2.5s deployStudentsSelection forwards;

@keyframes deployStudentsSelection {

    0%{
        height: 0px;
        opacity: 0;
    }

    100%{
        height: 370px;
        opacity: 1;
    }
}
}

@media screen and (max-width: 768px) {
transform: translate(0px, 220px);
animation: 2.5s deployStudentsSelection forwards;

@keyframes deployStudentsSelection {

    0%{
        height: 0px;
        opacity: 0;
    }

    100%{
        height: 370px;
        opacity: 1;
    }
}
}

`;

export const InfoList = styled.section`
@media screen and (max-width: 1440px) {
width: 100%;
display: flex;
justify-content: space-between;
/* flex-direction: column; */
align-items: center;
background-color: white;
border: transparent;
cursor: pointer;

& div{
    flex-direction: column;
}  
}

`;

export const StyleStatus = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0;

& p{
    color: gray;
    font-size: 10px;
}
`;

export const CircleProfile = styled.div`
overflow: hidden;
width: 50px;
height: 50px;
border-radius: 100px;
`;

export const ArrowBackSelection = styled.button`
background-color: transparent;
border: transparent;
cursor: pointer;

& img{
 width: 20px; 
}

`;

export const StyleSelected = styled.div`
border-radius: 5px;
cursor: pointer;
transition: 0.3s;

& select{
    cursor: pointer;
    padding: 5px;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    transition: 0.3s;
}

& :hover{
    border: 1px solid yellow;
}
`;

export const DivNotFound = styled.div`
@media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 20px;
}
`;

export const DataHV = styled.section`
display: flex;
justify-content: space-between;
`;



// Ventana emergente

export const SectionModalStatus = styled.section`
background-color: #0000005c;
width: 1440px;
height: 880px;
position: absolute;
z-index: 300;
margin-top: -800px;
display: flex;

& h2{
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    padding-top: 15px;
}

& .popup{
    background-color: #03203A;
    border-radius: 10px;
    margin: auto;
    width: 30%;
    height: 280px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
}

& textarea {
    height: 100px;
    font-size: 20px;
    border: transparent;
    text-align: left;
    vertical-align: top;
}

& .divButtonsModalStatus{
    margin: 0 auto;
    display: flex;
    gap: 20px;
    padding: 10px;

    & button{
        width: 100px;
        height: 30px;
        border-radius: 3px;
        border: transparent;
        font-size: 15px;
        color: white;
        cursor: pointer;
        background-color: #25ABBC;
        transition: 0.3s;
        font-weight: 600;

        &:hover {
           background-color: #EEE420;
           color: #03203A;
        }
    }
    }
`;