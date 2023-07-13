import { styled } from "styled-components"

export const TitleAndSearchCertification = styled.section`
display: flex;
width: 80%;
margin: 0 auto;
justify-content: space-between;
align-items: flex-start;
padding-top: 100px;
font-size: 25px;
font-weight: bold;
`;

export const SectionSearchCertification = styled.section`
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
`;

export const CoursesCertified = styled.section`
padding-top: 30px;
width: 80%;
display: flex;
flex-direction: column;
margin: 0 auto;
gap: 20px;
padding-bottom: 50px;
font-size: 20px;
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
`;

export const ArrowBackCertification = styled.img`
cursor: pointer;
position: absolute;
transform: translate(-40px, 30px);
`;

export const TitleCourseFinal = styled.p`
color: #25ABBC;
`;

export const Certified = styled.p`
font-weight: 400;
transform: translateY(-10px);
`;