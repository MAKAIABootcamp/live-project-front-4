import { styled } from "styled-components"

export const SectionStudents = styled.section`
width: 30%;
display: flex;
flex-direction: column;
margin: auto;
gap: 20px;
`;

export const OptionsStudents = styled.button`
background-color: #25ABBC;
border: transparent;
border-radius: 6px;
display: flex;
justify-content: space-evenly;
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
filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(353deg) brightness(107%) contrast(101%);
`;