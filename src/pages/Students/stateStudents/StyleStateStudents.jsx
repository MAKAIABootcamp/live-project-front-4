import { styled } from "styled-components";
import backgroundState from "../../../assets/FONDOGENERAL.png";

export const ContainerStateStudents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundState});
  padding-bottom: 30px;
  h2 {
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 2px;
  }
  @media screen and (max-width: 376px) {
    height: 90vh;
    padding: 100px 0px 150px 150px;
  }
`;

export const ContainerProgress = styled.section`
  display: flex;
`;
export const ContainerStep = styled.section`
  span {
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

  hr {
    height: 105px;
    width: 1px;
    border: none;
    margin-top: -4px;
    margin-bottom: 0px;
    border-right: dashed;
    border-color: #e0e0e0;
  }
`;
export const ContainerP = styled.section`
  display: ${(props) => (props.active ? "flex" : "none")};
  display: flex;
  width: 460px;
  height: 160px;
  text-align: right;

  h3 {
    color: #25abbcff;
    text-align: right;
    padding-right: 10px;
  }

  hr,
  span {
    background-color: ${(props) => (props.active ? "#eee420" : "transparent")};
    color: ${(props) => (props.active ? "transparent" : "#999")};
    border-color: ${(props) => (props.active ? "transparent" : "#e0e0e0")};
  }

  img {
    display: ${(props) => (props.active ? "flex" : "none")};
    width: 30px;
    margin-left: -13px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    gap: 20px;
  }
`;
export const ContainerP2 = styled.section`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  padding: 0px 0px 0px 403px;
  width: 460px;
  height: 160px;
  text-align: left;

  h3 {
    color: #25abbcff;
  }
  hr,
  span {
    background-color: ${(props) => (props.active ? "#eee420" : "transparent")};
    color: ${(props) => (props.active ? "transparent" : "#999")};
    border-color: ${(props) => (props.active ? "transparent" : "#e0e0e0")};
  }

  img {
    display: ${(props) => (props.active ? "flex" : "none")};
    width: 30px;
    margin-left: -13px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;
export const ContainerP4 = styled.section`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  padding: 0px 0px 0px 403px;
  width: 460px;
  height: 160px;
  text-align: left;

  h3 {
    color: #25abbcff;
  }

  hr,
  span {
    background-color: ${(props) => (props.active ? "#eee420" : "transparent")};
    color: ${(props) => (props.active ? "transparent" : "#999")};
    border-color: ${(props) => (props.active ? "transparent" : "#e0e0e0")};
  }

  img {
    display: ${(props) => (props.active ? "flex" : "none")};
    width: 30px;
    margin-left: -13px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;