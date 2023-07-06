import { styled } from "styled-components"

export const TitleAndSearchCertification = styled.section`
display: flex;
justify-content: space-around;
align-items: flex-end;
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
`;

export const SectionYearStyle = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 0 auto;
gap: 10px;
`;

export const ButtonLastCourse = styled.button`
background-color: #25ABBC;
width: 320px;
height: 150px;
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