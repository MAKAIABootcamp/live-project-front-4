import { styled } from "styled-components";

export const ContainerHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #03203a;
  color: white;
  height: 55px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 14px;
`;
export const ContainerHeaderLogo = styled.div`
  display: flex;

  img {
    width: 120px;
  }
`;
export const ContainerHeaderLinks = styled.div`
  display: flex;
`;
export const ContainerHeaderLinksUnt = styled.div`
  display: flex;
  align-items: center;
  figure{
    display: flex;
    gap: 10px;
  }
`;

export const ContainerHeaderSignOff = styled.div`
display: flex;
align-items: center;
figure{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
    img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
}
`
