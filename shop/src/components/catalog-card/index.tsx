import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { routes } from "@/constants/routes";

import S from "./styled";

export type CatalogCardPropsType = {
  id: number;
  imageSrc?: string;
  title: string;
  price: number;
  width?: string;
  height?: string;
  isWithPrice?: boolean;
};

const CatalogCard = memo(
  ({
    id,
    imageSrc,
    height = "380",
    width = "380",
    price,
    title,
  }: CatalogCardPropsType) => {
    const navigate = useNavigate();

    const onClickHandler = () => navigate(`${routes.product}/${id}`);

    return (
      <S.CatalogCardWrapper $width={width} onClick={onClickHandler}>
        <S.ImagesContainer $height={height} $width={width}>
          <img src={imageSrc} alt={title} height={"100%"} width={"100%"} />
        </S.ImagesContainer>
        <S.Title>{title}</S.Title>
        <S.Price>$ {price}</S.Price>
      </S.CatalogCardWrapper>
    );
  },
);

CatalogCard.displayName = "CatalogCard";

export { CatalogCard };
