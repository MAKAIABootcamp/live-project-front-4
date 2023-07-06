import { styled } from "styled-components"

export const TitleAndSearch = styled.section`
display: flex;
justify-content: space-around;
align-items: flex-end;
`;

export const SectionSearchFormation = styled.div`
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

export const CoursesFormation = styled.section `
padding-top: 80px;
width: 80%;
display: flex;
margin: 0 auto;
`;

export const StyleSectionCourse = styled.section`
display: flex;
flex-wrap: wrap;
gap: 10px;
/* justify-content: center; */
margin: 0 auto;
`;

export const StyleButtonCourse = styled.button`
background-color: #25ABBC;
width: 250px;
height: 120px;
border: transparent;
border-radius: 5px;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
color: white;
font-size: 10px;
cursor: pointer;
transition: 0.5s;
`;

export const StyleButtonAdd = styled.button`
background-color: #EEE420;
width: 250px;
height: 120px;
border: transparent;
border-radius: 5px;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
color: white;
font-size: 60px;
cursor: pointer;
transition: 0.5s;
`;