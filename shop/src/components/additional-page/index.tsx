import { useNavigate } from "react-router-dom";

import { Button, Typography } from "antd";

import { routes } from "@/constants/routes";

import S from "./styled";

type AdditionalPagePropsType = {
  title: string;
  caption: string;
  type: "error" | "success";
};

export const AdditionalPage = ({
  caption,
  title,
  type,
}: AdditionalPagePropsType) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(routes.home);
  };

  return (
    <S.Wrapper data-cy={type === "error" ? "error-page" : "success-page"}>
      <S.Content>
        <Typography.Title level={3}>{title}</Typography.Title>
        <Typography.Title level={4}>{caption}</Typography.Title>
        <S.ButtonContainer>
          <Button onClick={onClickHandler}>Главная страница</Button>
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
};
