import { styled } from "styled-components"

export const TitleSelection = styled.p`
font-size: 25px;
margin: 0 auto;
display: flex;
justify-content: center;
font-weight: bold;
padding-top: 100px; 
padding-bottom: 20px;
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
padding-bottom: 80px;
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
width: 90%;
margin-top: 20px;
`;

export const AvatarPhoto = styled.figure`
overflow: hidden;
border-radius: 200px;
border: 2px solid black;
width: 180px;
height: 180px;

& img{
 transform: translateX(-5px);
}
`;

export const SectionAvatar = styled.section`
display: flex;
gap: 30px;
align-items: center;
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
width: 95%;
display: flex;
flex-direction: column;
justify-content: center;
line-height: 20px;
`;

export const TitlesAvatar = styled.p`
font-size: 20px;
font-weight: bold;
`;

export const ScrollInfo = styled.section`
overflow: hidden;
overflow: scroll;
height: 250px; 
`;

export const ContentListInfo = styled.section`
display: flex;
padding-left: 50px;
padding-right: 50px;
`;

export const ListSelected = styled.section`
display: flex;
flex-direction: column;
`;

export const CourseSelected = styled.button`
background-color: #03203A;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 0 auto;
}

& img{
    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(121deg) brightness(106%) contrast(101%);
}
`;

export const ArrowBack = styled.img`
position: absolute;
transform: translate(-150px,-30px);
filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(121deg) brightness(106%) contrast(101%);
`;

export const ListGeneral = styled.div`
background-color: #ffffff; //Listado
overflow: hidden;
height: 370px;
padding-top: 10px;
`;

export const InfoList = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const StyleStatus = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0;

& p{
    color: gray;
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