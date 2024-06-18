import S from "./styled";
import { CustomButton } from "@/components/custom-button";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { routes } from "@/constants/routes";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate(routes.home);
  }, [navigate]);

  return (
    <S.Wrapper>
      <S.NotFound>
        <S.Title>404 ERROR</S.Title>
        <S.Caption>
          This page not found;
          <br /> back to home and start again
        </S.Caption>
        <CustomButton onClick={onClickHandler} variant={"secondary"}>
          Homepage
        </CustomButton>
      </S.NotFound>
    </S.Wrapper>
  );
};
