import { ReactNode } from "react";

import CrossSVG from "@/assets/svg/plus.svg";
import { CustomButton } from "@/components/custom-button";

import S from "./styled";

type ModalPropsType = {
  isOpen: boolean;
  confirmButtonText: string;
  onConfirmHandler: () => void;
  onCloseHandler: () => void;
  title: string;
  isShowCloseIcon?: boolean;
  children?: ReactNode;
  bottomText?: string;
  isLoading?: boolean;
  isConfirmButtonDisabled?: boolean;
};

export const Modal = ({
  isOpen,
  title,
  onCloseHandler,
  isShowCloseIcon = false,
  confirmButtonText,
  onConfirmHandler,
  children,
  bottomText,
  isLoading = false,
  isConfirmButtonDisabled = false,
}: ModalPropsType) => {
  const confirmHandler = () => {
    onConfirmHandler?.();
  };

  return (
    isOpen && (
      <div data-cy={"modal"}>
        <S.Background onClick={onCloseHandler} />
        <S.ModalWrapper>
          <S.Modal>
            <S.ModalHeader $isShowCloseIcon={isShowCloseIcon}>
              <S.ModalTitle>{title}</S.ModalTitle>
              {isShowCloseIcon && (
                <S.CloseIconButton onClick={onCloseHandler}>
                  <CrossSVG />
                </S.CloseIconButton>
              )}
            </S.ModalHeader>
            {children && <S.ModalContent>{children}</S.ModalContent>}
            {bottomText && <S.AdditionalText>{bottomText}</S.AdditionalText>}
            <S.ButtonContainer>
              <CustomButton
                data-cy={"modal-confirm-button"}
                isLoading={isLoading}
                disabled={isConfirmButtonDisabled}
                fullWidth
                onClick={confirmHandler}
              >
                {confirmButtonText}
              </CustomButton>
            </S.ButtonContainer>
          </S.Modal>
        </S.ModalWrapper>
      </div>
    )
  );
};
