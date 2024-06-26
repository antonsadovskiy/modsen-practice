import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { CustomButton } from "@/components/custom-button";
import { routes } from "@/constants/routes";

import S from "./styled";

export const SuccessfulPurchasePage = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  if (!state) {
    return <Navigate to={routes.home} />;
  }

  const onClickHandler = () => {
    navigate(routes.home);
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Thank you for purchasing</S.Title>
        <S.Caption>You will have your goods soon.</S.Caption>
        <S.ButtonContainer>
          <CustomButton onClick={onClickHandler} variant={"secondary"}>
            Homepage
          </CustomButton>
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
};
