import { Caption, NotFound, Title, Wrapper } from "./styled";
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
    <Wrapper>
      <NotFound>
        <Title>404 ERROR</Title>
        <Caption>
          This page not found;
          <br /> back to home and start again
        </Caption>
        <CustomButton onClick={onClickHandler} variant={"secondary"}>
          Homepage
        </CustomButton>
      </NotFound>
    </Wrapper>
  );
};
