import { styled } from "styled-components";


export const ContainerStateStudents = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
font-family: 'Montserrat', sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(https://res.cloudinary.com/dvk0btnav/image/upload/v1688442314/backgroundLive_htg9zu.jpg);
height: 92vh;
h2{
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 2px;
}
`

export const ContainerProgress = styled.div`
display: flex;
`
export const ContainerStep = styled.div`

span{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    color: #999;
    border: 4px solid #e0e0e0;
    font-size: 22px;
    font-weight: 500;
}

hr{
    background-color:transparent;
    height: 105px;
    width: 1px;
    border: none;
    margin-top: -4px;
    margin-bottom: 0px ;
    border-right: dashed;
    border-color: #e0e0e0;
}
`
export const ContainerP = styled.div`
display: flex;
width: 460px;
height: 160px;
text-align: left;

h3{
    color: #25ABBCFF;
}
`
export const ContainerP2 = styled.div`
display: flex;
flex-direction: row-reverse;
gap: 20px;
padding: 0px 0px 0px 403px;
width: 460px;
height: 160px;
text-align: left;
h3{
    color: #25ABBCFF;
}
`
export const ContainerP4 = styled.div`
display: flex;
flex-direction: row-reverse;
gap: 20px;
padding: 0px 0px 0px 403px;
width: 460px;
height: 160px;
text-align: left;
h3{
    color: #25ABBCFF;
}
`