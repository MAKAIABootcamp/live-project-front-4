import { styled } from "styled-components";

export const ContainerHeader = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #03203a;
  color: white;
  height: 70px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 769px) {
    font-size: 12px;
    justify-content: space-between;
  }

  @media screen and (max-width: 474px) {
    
  }

  .links {
    display: none;
  }

  &.active .links {
    display: flex;
    flex-direction: column;
    position: absolute;
    /* top: 70px;
    left: 0;
    width: 100%; */
    /* padding: 30px; */
    z-index: 1;
  }

  .burguer {
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;

export const ContainerHeaderLogo = styled.div`
  display: flex;

  img {
    width: 120px;
  }
`;

export const ContainerHeaderLinks = styled.div`
  display: flex;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    position: absolute;
    /* margin-top: 318px;
    margin-left: 164px; */
    background-color: #03203a;
    z-index: 100;
    display: flex;
    justify-content: space-evenly;
    top: 7%;
    width: 100%;
    border-radius: 0 0 253px 10px;
    font-size: 18px;
    display: ${(props) => (props.active ? "flex" : "none")};
  }

  @media screen and (max-width: 474px) {
    border-radius: 0 0 253px 10px;
   
  }
`;

export const ContainerHeaderLinksUnt = styled.div`
  figure {
    display: flex;
    gap: 10px;
  }

  .navlink {
    display: flex;
    align-items: center;
  }

  .active {
    border-bottom: 2px solid white;
    color: white;
  }

  .navlink:hover {
    border-bottom: 2px solid white;
  }
`;

export const ContainerHeaderSignOff = styled.div`
  display: flex;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;

    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
`;

// export const BgDiv = styled.div`
//   position: absolute;
//   background-color: #03203a;
//   top: 76px;
//   left: 426.323px;
//   border-radius: 0 0 0 50%;
//   transition: all 0.6s ease;

//   &.active {
//     width: 45%;
//     height: 40%;
//     z-index: 1;
//     transform: translateX(-20%);
//   }
//   @media screen and (max-width: 376px) {
//     left: 379px;

//     &.active {
//       width: 60%;
//       height: 35%;
//     }
//   }
// `;
