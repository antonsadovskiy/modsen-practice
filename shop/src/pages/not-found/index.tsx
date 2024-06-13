import { Wrapper } from "./styled";
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
      <div className={"notFound"}>
        <div className={"title"}>404 ERROR</div>
        <div className={"caption"}>
          This page not found;
          <br /> back to home and start again
        </div>
        <CustomButton onClick={onClickHandler} variant={"secondary"}>
          Homepage
        </CustomButton>
      </div>
    </Wrapper>
  );
};
