import { useState } from "react";

import ArrowSVG from "@/assets/svg/arrow.svg";
import { Skeleton } from "@/components/skeleton";

import S from "./styled";

type MobileDescriptionPropsType = {
  description?: string;
  isLoading: boolean;
};

export const MobileDescription = ({
  isLoading,
  description,
}: MobileDescriptionPropsType) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  const toggleDescriptionHandler = () => {
    setIsOpenDescription((prevState) => !prevState);
  };

  return (
    <S.Container onClick={toggleDescriptionHandler}>
      <S.Title>
        Description
        <S.ArrowContainer $isRotated={isOpenDescription}>
          <ArrowSVG />
        </S.ArrowContainer>
      </S.Title>
      {isOpenDescription &&
        (isLoading ? (
          <Skeleton />
        ) : (
          <S.Description>{description ?? ""}</S.Description>
        ))}
    </S.Container>
  );
};
