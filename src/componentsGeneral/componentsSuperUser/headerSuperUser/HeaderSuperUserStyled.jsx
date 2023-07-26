import { styled } from "styled-components";

export const ContainerHeader = styled.nav`
  display: flex;
  width: 100%; /* Change the width to 100% to fit the screen */
  z-index: 310;
  justify-content: space-around;
  align-items: center;
  background-color: #03203a;
  color: white;
  height: 70px;
  /* overflow: hidden; */
  position: fixed;
  font-size: 14px;

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 768px) {
    /* Remove the fixed width for mobile view */
    font-size: 12px;
    justify-content: space-between;
  }

  @media screen and (max-width: 414px) {
    /* Remove the fixed width for smaller mobile view */
    width: 100%;
  }

  .links {
    display: none;
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
  }

  .burguer {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const ContainerHeaderLogo = styled.div`
  display: flex;

  img {
    width: 150px;
  }

  @media screen and (max-width: 414p) {
    transform: translateX(-30px);
  }
`;

export const ContainerHeaderLinks = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-color: #03203a;
    z-index: 100;
    width: 250px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border-radius: 0 0 10px 10px;
    transform: translate(0px, 65%);
    display: ${(props) => (props.active ? "flex" : "none")};
  }

  @media screen and (max-width: 414p) {
    margin-left: 0px;
    background-color: red;
    width: 200px;
    transform: translate(20px, 85%);
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
    filter: invert(100%) sepia(0%) saturate(7487%) hue-rotate(199deg)
      brightness(99%) contrast(103%);
  }

  &:hover {
    color: yellow;

    & img {
      filter: invert(74%) sepia(69%) saturate(546%) hue-rotate(5deg)
        brightness(114%) contrast(87%);
    }
  }
`;

export const ContainerHeaderSignOff = styled.div`
  display: flex;
  align-items: center;
  /* background-color: pink; */

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

export const BgDiv = styled.div`
  width: 500px;
  height: 500px;
  background-color: #03203a;
  transform: translateY(250px);
  position: absolute;
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: block;
    background-color: #00000055;
    top: 70px;
    transform: translateX(0px);
    width: 770px;
    height: 500px;
    opacity: 0;
    margin: 0 auto;
    /* display: none; */
    transition: all 0.6s ease;

    &.active {
      opacity: 1;
      margin: 0 auto;
      width: 770px;
      height: 500px;
      z-index: 5;
      transform: translateX(0px);
    }
  }

  @media screen and (max-width: 414px) {
    position: absolute;
    display: block;
    background-color: #00000055;
    top: 70px;
    transform: translateX(0px);
    width: 770px;
    height: 500px;
    opacity: 0;
    margin: 0 auto;
    /* display: none; */
    transition: all 0.6s ease;

    &.active {
      opacity: 1;
      margin: 0 auto;
      width: 770px;
      height: 500px;
      z-index: 5;
      transform: translateX(0px);
    }
  }
`;

export const SubItems = styled.span`
  width: 130px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 0 8px 1px #a8a8a8;
  border-radius: 5px;
  position: absolute;
  display: flex;
  z-index: 3;
  justify-content: center;
  flex-direction: column;
  transform: translate(28%, 80%);
  opacity: 0;

  &.deploySubItems {
    animation: deploySub 0.5s forwards;

    @keyframes deploySub {
      0% {
        height: 0px;
        opacity: 0;
      }
      100% {
        height: auto;
        opacity: 1;
        background-color: #ffffff;
      }
    }
  }

  & div {
    /* height: 500px; */
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 20px;

    & img {
      filter: invert(0%) sepia(100%) saturate(7455%) hue-rotate(206deg)
        brightness(116%) contrast(112%);
    }
  }

  & p {
    color: black;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    background-color: #ffffff;
    box-shadow: 0 0 8px 1px #a8a8a8;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: translate(20%, 65%);
    opacity: 0;

    &.deploySubItems {
      animation: deploySub 0.5s forwards;

      @keyframes deploySub {
        0% {
          height: 0px;
          opacity: 0;
        }
        100% {
          height: auto;
          opacity: 1;
          background-color: #ffffff;
        }
      }
    }
  }
`;
