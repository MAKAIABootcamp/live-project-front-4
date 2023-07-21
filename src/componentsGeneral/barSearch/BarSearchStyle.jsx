import { styled } from "styled-components"

export const SearchGeneral = styled.div`

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
    width: 240px;
    transform: translate(180px, -50px);
}

`;
