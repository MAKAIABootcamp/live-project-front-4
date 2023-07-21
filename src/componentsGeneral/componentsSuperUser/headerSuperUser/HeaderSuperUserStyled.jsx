// import { styled } from "styled-components";

// export const ContainerHeader = styled.nav`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background-color: #03203a;
//   color: white;
//   height: 70px;
//   overflow: hidden;
//   font-size: 14px;

//   a {
//     text-decoration: none;
//     color: white;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 12px;
//     justify-content: space-between;
//   }

//   @media screen and (max-width: 376px) {
//     width: 460px;
//   }

//   .links {
//     display: none;
//   }

//   &.active .links {
//     display: flex;
//     flex-direction: column;
//     position: absolute;
//     top: 70px;
//     left: 0;
//     width: 100%;
//     padding: 20px;
//     z-index: 1;
//   }

//   .burguer {
//     @media screen and (min-width: 768px) {
//       display: none;
//     }
//   }
// `;

// export const ContainerHeaderLogo = styled.div`
//   display: flex;

//   img {
//     width: 150px;
//   }
// @media screen and (max-width: 376px) {
// transform: translateX(-30px)
// }

// `;

// export const ContainerHeaderLinks = styled.div`
//   display: flex;

//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     position: absolute;
//     margin-top: 318px;
//     margin-left: 412px;
//     /* background-color: #03203a; */
//     z-index: 100;
//     width: 250px;
//     transform: translateX(27%);
//     display: ${(props) => (props.active ? "flex" : "none")};
//   }

//   @media screen and (max-width: 376px) {
//     margin-left: 0px;
//     width: 200px;
//     transform: translateX(250px);
//   }
// `;

// export const ContainerHeaderLinksUnt = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   width: 180px;
//   overflow: hidden;
//   transition: all 0.6s ease;

//   figure {
//     display: flex;
//     gap: 10px;
//   }

//   .navlink {
//     display: flex;
//     align-items: center;
//   }
// `;

// export const Item = styled.button`
//   cursor: pointer;
//   border: transparent;
//   background-color: transparent;

//   & img {
//     filter: invert(100%) sepia(0%) saturate(7487%) hue-rotate(199deg) brightness(99%) contrast(103%);
//   }

//   &:hover {
//     color: yellow;

//     & img {
//       filter: invert(74%) sepia(69%) saturate(546%) hue-rotate(5deg) brightness(114%) contrast(87%);
//     }
//   }
// `;

// export const ContainerHeaderSignOff = styled.div`
//   display: flex;
//   align-items: center;
//   /* background-color: pink; */

//   figure {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     gap: 10px;

//     img {
//       width: 25px;
//       height: 25px;
//       border-radius: 50%;
//     }
//   }
// `;

// export const BgDiv = styled.div`
//   @media screen and (max-width: 1440px) {
//     position: absolute;
//     background-color: #03203a;
//     top: 76px;
//     left: 426.323px;
//     border-radius: 0 0 10px 10px;
//     transition: all 0.6s ease;

//     &.active {
//       width: 40%;
//       height: 50%;
//       z-index: 5;
//       transform: translateX(-136px);
//     }
//   }

//   @media screen and (max-width: 376px) {
//     left: 379px;

//     &.active {
//       width: 60%;
//       height: 46%;
//     }
//   }
// `;

// export const SubItems = styled.span`
//   width: 130px;
//   overflow: hidden;
//   background-color: #ffffff;
//   box-shadow: 0 0 8px 1px #a8a8a8;
//   border-radius: 5px;
//   position: absolute;
//   display: flex;
//   z-index: 3;
//   justify-content: center;
//   flex-direction: column;
//   transform: translate(28%, 80%);
//   opacity: 0;

//   &.deploySubItems {
//     animation: deploySub 0.5s forwards;

//     @keyframes deploySub {
//       0% {
//         height: 0px;
//         opacity: 0;
//       }
//       100% {
//         height: auto;
//         opacity: 1;
//         background-color: #ffffff;
//       }
//     }
//   }

//   & div {
//     /* height: 500px; */
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     justify-content: space-between;
//     padding-left: 15px;
//     padding-right: 20px;

//     & img {
//       filter: invert(0%) sepia(100%) saturate(7455%) hue-rotate(206deg) brightness(116%) contrast(112%);
//     }
//   }

//   & p {
//     color: black;
//   }
// `;

// HeaderSuperUserStyled.jsx

// HeaderSuperUserStyled.jsx

// HeaderSuperUserStyled.jsx

// HeaderSuperUserStyled.jsx (Estilos)
// HeaderSuperUserStyled.jsx
// HeaderSuperUserStyled.jsx (Estilos)
import { styled } from "styled-components";

export const ContainerHeader = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 200;
  align-items: center;
  background-color: #03203a;
  color: white;
  height: 70px;
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  margin-top: 0;

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    justify-content: space-between;
    width: 768px;
  }

  @media screen and (max-width: 376px) {
    font-size: 10px;
    width: 440px;
    z-index: 210;
  }

  &.active .links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 20px;
    z-index: 1;
    background-color: #03203a;
  }
`;

export const ContainerHeaderLogo = styled.div`
  display: flex;

  img {
    width: 150px;
  }

  @media screen and (max-width: 376px) {
    img {
      width: 120px;
    }
  }
`;

export const ContainerHeaderLinks = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 20px;
    z-index: 1;
    background-color: #03203a;
    display: ${(props) => (props.active ? "flex" : "none")};
  }
`;

export const ContainerHeaderLinksUnt = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 180px;
  overflow: hidden;
  transition: all 0.6s ease;

  figure {
    display: flex;
    gap: 10px;
  }

  .navlink {
    display: flex;
    align-items: center;
  }
`;

export const Item = styled.button`
  cursor: pointer;
  border: transparent;
  background-color: transparent;

  & img {
    filter: invert(100%) sepia(0%) saturate(7487%) hue-rotate(199deg) brightness(99%) contrast(103%);
  }

  &:hover {
    color: yellow;

    & img {
      filter: invert(74%) sepia(69%) saturate(546%) hue-rotate(5deg) brightness(114%) contrast(87%);
    }
  }
`;

export const ContainerHeaderSignOff = styled.div`
  display: flex;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
`;

export const BgDiv = styled.div`
  @media screen and (max-width: 1440px) {
    position: none;
    top: 76px;
    left: 426.323px;
    border-radius: 0 0 10px 10px;
    transition: all 0.6s ease;

    &.active {
      width: 40%;
      height: 50%;
      z-index: 5;
      transform: translateX(-136px);
    }
  }

  @media screen and (max-width: 768px) {
    left: 0;
    top: 70px;
    border-radius: 0;
    width: 100%;
    height: 100%;
    transform: ${(props) => (props.active ? "translateX(0)" : "translateX(100%)")};
    transition: all 0.3s ease;

    &.active {
      transform: translateX(0);
    }
  }
`;

export const SubItems = styled.span`
  width: 130px;
  background-color: #8ecc23;
  box-shadow: 0 0 8px 1px #a8a8a8;
  border-radius: 5px;
  position: absolute;
  z-index: 200;
  display: ${(props) => (props.deploySubItems ? "flex" : "none")};
  flex-direction: column;
  opacity: 0;
  transition: all 0.3s ease;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 20px;

    img {
      filter: invert(0%) sepia(100%) saturate(7455%) hue-rotate(206deg) brightness(116%) contrast(112%);
    }
  }

  p {
    color: black;
  }
`;

export const BurgerButtonWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
