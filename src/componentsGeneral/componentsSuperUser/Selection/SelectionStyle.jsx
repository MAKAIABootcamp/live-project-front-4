import { styled } from "styled-components"

export const TitleSelection = styled.p`
font-size: 30px;
margin: 0 auto;
padding-top: 20px; 
`;

export const SearchSelection = styled.div`
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

export const ContentSelection = styled.section`
display: flex;
margin: 0 auto;
width: 100%;
align-items: center;
justify-content: space-around;
margin-top: 3%;
`;

export const ContentCourses = styled.div`
display: flex;
flex-direction: column;
width: 25%;
gap: 5px;
`;

export const ContentButtonCourses = styled.button`
background-color: #25ABBC;
height: 100px;
border: transparent;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
color: white;
font-size: 25px;
cursor: pointer;
transition: 0.5s;

& img{
    filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(353deg) brightness(107%) contrast(101%);
}

&:hover{
    background-color: #03203A;
}
`;