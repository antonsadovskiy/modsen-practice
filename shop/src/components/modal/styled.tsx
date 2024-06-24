import styled from "styled-components";

import { CustomIconButton } from "@/components/custom-icon-button";

const ModalHeader = styled.div<{ $isShowCloseIcon: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $isShowCloseIcon }) =>
    $isShowCloseIcon ? "space-between" : "center"};
`;

const ModalTitle = styled.div`
  color: ${({ theme }) => theme.mainTextColor};
  font: var(--h4);
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;
const Modal = styled.div`
  width: 50vw;
  color: white;
  z-index: 10;
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  padding: 32px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const ModalContent = styled.div`
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 50vh;
  overflow-y: scroll;
  padding-right: 10px;
`;
const CloseIconButton = styled(CustomIconButton)`
  rotate: 45deg;

  svg {
    fill: ${({ theme }) => theme.color.black};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;
const AdditionalText = styled.div`
  color: ${({ theme }) => theme.color.darkGray};
  font: var(--h5);
`;

export default {
  ModalHeader,
  ModalWrapper,
  Background,
  ModalContent,
  ModalTitle,
  CloseIconButton,
  ButtonContainer,
  Modal,
  AdditionalText,
};
