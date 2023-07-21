import { styled } from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 35%;
    @media (max-width: 768px) {
      width: 55%;
    }

    @media (max-width: 376px) {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 400px;

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  background-color: #03203a;
  color: #fff;
  padding: 10px 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eee420;
    color: #000000;
  }
`;
