import styled from "styled-components";

import { CustomIconButton } from "@/components/custom-icon-button";
import { breakpoints } from "@/constants/styles";

const ModalHeader = styled.div<{ $isShowCloseIcon: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $isShowCloseIcon }) =>
    $isShowCloseIcon ? "space-between" : "center"};
  margin-bottom: 10px;
`;

const ModalTitle = styled.div`
  color: ${({ theme }) => theme.mainTextColor};
  font: var(--h4);

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h5);
  }
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: var(--modal-background-z-index);
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
  z-index: var(--modal-z-index);
`;
const Modal = styled.div`
  width: 50vw;
  color: white;
  z-index: var(--modal-z-index);
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  padding: 25px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundColor};

  @media (max-width: ${breakpoints.large}) {
    width: calc(100vw - 80px);
  }
`;

const ModalContent = styled.div`
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 5px 5px 5px;
  width: calc(100% - 10px);
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

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3-mobile);
  }
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
