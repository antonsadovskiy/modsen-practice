import { useNavigate } from "react-router-dom";

import { CustomButton } from "@/components/custom-button";
import { routes } from "@/constants/routes";

import S from "./styled";

type AdditionalPagePropsType = {
  title: string;
  caption: string;
};

export const AdditionalPage = ({ caption, title }: AdditionalPagePropsType) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(routes.home);
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Caption>{caption}</S.Caption>
        <S.ButtonContainer>
          <CustomButton onClick={onClickHandler} variant={"secondary"}>
            Homepage
          </CustomButton>
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
};
