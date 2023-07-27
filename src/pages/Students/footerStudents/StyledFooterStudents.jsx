import { styled } from "styled-components";

export const Footer = styled.footer`
  @media screen and (max-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #03203a;
    height: 50px;
    width: 100%;
    bottom: 0;
    margin: 0;
    position: fixed;
    @media screen and (max-width: 415px) {
      flex-direction: column-reverse;
      padding: 35px 0 20px 0px;
      gap: 5px;
    }
  }
`;

export const SectionDerechos = styled.section`
  @media screen and (max-width: 1440px) {
    color: white;
    padding-left: 40px;
  }
  @media screen and (max-width: 414px) {
  }
`;

export const SectionIconos = styled.section`
  @media screen and (max-width: 1440px) {
    display: flex;
    justify-content: space-around;
    figure {
      width: 30px;
      height: 30px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 414px) {
    figure {
      width: 15px;
      height: 15px;
    }
  }
`;
