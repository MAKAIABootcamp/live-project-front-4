import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  max-width: 60%;
  max-height: 80%;
  min-width: 40%;
  min-height: 20%;
  background-color: #03203a;
  padding: 20px 40px 20px 10px;
  border-radius: 8px;
`;

export const CleseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.span`
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #25abbc;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

export const ButtonModal = styled.button`
  background-color: #eee420;
  color: #03203a;
  font-weight: 800;
  border: none;
  cursor: pointer;
  width: 30% !important;
`;
export const ButtonModalCancelar = styled.button`
  background-color: #25abbc !important;
  color: #03203a;
  font-weight: 800;
  border: none;
  cursor: pointer;
  width: 30% !important;
`;

export const BodyModal = styled.section`
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
    font-weight: 900;
    color: #25abbc !important;
    padding: 20px 20px 5px 50px;
  }
  label {
    color: #25abbc;
  }
`;
export const ModalHeader = styled.section`
  display: flex;
  justify-content: space-around;

  p {
    font-size: 20px;
    font-weight: 900;
    color: #25abbc !important;
  }

  span {
    font-size: 20px;
    font-weight: 900;
    color: red;
  }
`;
export const ListItem = styled.li`
  color: #25abbc;
  font-size: 18px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  span {
    color: red;
  }
`;
