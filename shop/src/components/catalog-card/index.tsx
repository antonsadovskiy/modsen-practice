import S from "./styled";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { routes } from "@/constants/routes";

export type CatalogCardPropsType = {
  id: number;
  imageSrc?: string;
  title: string;
  price: number;
  width?: string;
  height?: string;
};

export const CatalogCard = ({
  id,
  imageSrc,
  height = "380",
  width = "380",
  price,
  title,
}: CatalogCardPropsType) => {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate(`${routes.product}/${id}`);
  }, [navigate, id]);

  return (
    <S.CatalogCardWrapper $width={width} onClick={onClickHandler}>
      <S.ImagesContainer>
        <img src={imageSrc} alt={title} height={height} width={width} />
      </S.ImagesContainer>
      <S.Title>{title}</S.Title>
      <S.Price>$ {price}</S.Price>
    </S.CatalogCardWrapper>
  );
};
