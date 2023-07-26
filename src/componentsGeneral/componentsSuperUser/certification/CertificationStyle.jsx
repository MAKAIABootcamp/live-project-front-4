import { styled } from "styled-components"

export const BackgroundCertification = styled.section`
@media screen and (max-width: 1440px) {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607992/LIVE/Im%C3%A1genes/Covers/FONDO_PC_eoeuar.png')
}

@media screen and (max-width: 768px) {
background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607556/LIVE/Im%C3%A1genes/Covers/FONDO_TABLET_knpzbw.png');
}

@media screen and (max-width: 375px) {
    object-fit: cover;
    width: 430px;
    height: 1000px;
background-image: url('https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607557/LIVE/Im%C3%A1genes/Covers/FONDO_CEL_v7opjm.png');
}
`;

export const TitleCertification = styled.p`
@media screen and (max-width: 1440px) {
font-size: 25px;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
font-weight: bold;
padding-top: 150px; 
padding-bottom: 20px;  
transform: translate(-35%, -20%);
}

@media screen and (max-width: 768px) {
    transform: translate(-70%, -20%);
    width: 50%;
}

@media screen and (max-width: 375px) {
    width: 50%;
    transform: translateX(-60%);
    font-size: 18px;
}
`;

export const SectionBarCertification = styled.div`
@media screen and (max-width: 1440px) {
    width: 40%;
    position: absolute;
    transform: translate(650px, -100px);
}

@media screen and (max-width: 768px) {
    width: 0;
    position: relative;
    transform: translate(0px, 0px);
}

@media screen and (max-width: 375px) {
    transform: translate(10px, 10px);
}
`;


export const CoursesCertified = styled.section`
@media screen and (max-width: 1440px) {
padding-top: 30px;
width: 80%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-between;
margin: 0 auto;
gap: 20px;
padding-bottom: 50px;
font-size: 20px;  
}

@media screen and (max-width: 768px) {
    flex-wrap: wrap;
}

@media screen and (max-width: 375px) {
    margin: 0 auto;

    & p{
        text-align: center;
        width: 350px;
    }
}
`;

export const SectionYearStyle = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 0 auto;
gap: 20px;
`;

export const ButtonLastCourse = styled.button`
background-color: #25ABBC;
width: 340px;
height: 180px;
border: transparent;
border-radius: 5px;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 20px;
cursor: pointer;
transition: 0.5s;

@media screen and (max-width: 768px) {
    width: 290px;
}

@media screen and (max-width: 375px) {
    width: 350px;
}
`;

export const TypeCohorte = styled.p`
font-size: 30px;
font-weight: bold;
`;

export const MoreInfoCourse = styled.p`
font-size: 25px;
line-height: 10px;
`;

export const SectionListFinal = styled.section`
@media screen and (max-width: 1440px) {
   width: 80%;
margin: 0 auto;
padding-top: 50px;

& div{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

& button{
    border-radius: 5px;
    width: 340px;
    margin: 0 auto;
    cursor: pointer;
    border: transparent;
    background-color: #25ABBC;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    color: white;
    transition: 0.3s;

    &:hover{
        background-color: #03203A;
    }

    & img{
        border-radius: 50px;
    }
} 
}

@media screen and (max-width: 768px) {
    width: 90%;
    flex-wrap: wrap;

    & button{
        width: 320px;
    }
}

@media screen and (max-width: 375px) {
    width: 452px;

    & button{
        width: 450px;
        justify-content: space-around;
    }
}

`;

export const ArrowBackCertification = styled.img`
@media screen and (max-width: 1440px) {
cursor: pointer;
position: absolute;
transform: translate(40px, 140px);   
}

@media screen and (max-width: 768px) {
    transform: translate(20px, 120px);
}

@media screen and (max-width: 375px) {
    transform: translate(20px, 50px);
    padding-top: 50px;
}

`;

export const TitleCourseFinal = styled.p`
color: #25ABBC;
text-align: left;

@media screen and (max-width: 1440px) {
font-size: 25px;
width: 50%;
margin: 0 auto;
font-weight: 300;
padding-top: 100px;
transform: translate(-30%, 6%);
}

@media screen and (max-width: 768px) {
    transform: translate(-35%, 0%);
    width: 50%;
    font-size: 20px;
}

@media screen and (max-width: 375px) {
    width: 50%;
    transform: translate(-43%, 50px);
    font-size: 16px;
}
`;

export const Certified = styled.p`
font-weight: 400;
transform: translateY(-10px);
color: black;
`;

export const DivNotFoundCertified = styled.div`
@media screen and (max-width: 1440px) {
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
}
`;

export const DataProfileCertification = styled.section`
background-color: yellow;
display: flex;
width: 600px;
font-size: 20px;
justify-content: space-between;
`;

export const PhotoProfileCertification = styled.figure`
width: 300px;
height: 300px;
overflow: hidden;
object-fit: cover;
border-radius: 50%;

& img{
    width: 100%;
    object-fit: cover;
}
`;

export const ListInfoGeneral = styled.section`
@media screen and (max-width: 1440px) {
    background-image: url("https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607992/LIVE/Im%C3%A1genes/Covers/FONDO_PC_eoeuar.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
    background-image: url("https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607556/LIVE/Im%C3%A1genes/Covers/FONDO_TABLET_knpzbw.png");
}

@media screen and (max-width: 375px) {
    background-image: url("https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689607557/LIVE/Im%C3%A1genes/Covers/FONDO_CEL_v7opjm.png");
}
`;

export const ContentInfoCertified = styled.section`
background-color: green;
width: 80%;
display: flex;
justify-content: space-between;
margin: 0 auto;
align-items: center;
`;

export const MoreInfoAvatarCertified = styled.section`
width: 80%;
margin: 0 auto;

& h2{
    font-size: 30px;
    text-align: center;
}
`;

export const DataHVCertified = styled.div`
background-color: yellow;
width: 100%;
display: flex;
justify-content: space-between;
font-size: 20px;
`;
