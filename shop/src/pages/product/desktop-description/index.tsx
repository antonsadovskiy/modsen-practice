import { Skeleton } from "@/components/skeleton";

import S from "./styled";

type DesktopDescriptionPropsType = {
  description?: string;
  isLoading: boolean;
};

export const DesktopDescription = ({
  description,
  isLoading,
}: DesktopDescriptionPropsType) => (
  <S.Container>
    <S.Title>Description</S.Title>
    <S.Description>
      {isLoading ? <Skeleton /> : description ?? ""}
    </S.Description>
  </S.Container>
);
