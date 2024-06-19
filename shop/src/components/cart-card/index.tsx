import S from "./styled";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { routes } from "@/constants/routes";

export type CartCardPropsType = {
  id: number;
  imageSrc?: string;
  title: string;
  description: string;
  price: number;
  width?: string;
  height?: string;
};

export const CartCard = ({
  id,
  imageSrc,
  height = "380",
  width = "380",
  description,
  price,
  title,
}: CartCardPropsType) => {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate(`${routes.product}/${id}`);
  }, [navigate, id]);

  return (
    <S.CatalogCardWrapper $width={width} onClick={onClickHandler}>
      <S.ImageAndDescription>
        <S.ImagesContainer>
          <img src={imageSrc} alt={title} height={height} width={width} />
        </S.ImagesContainer>
        <S.TitleAndDescription>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TitleAndDescription>
      </S.ImageAndDescription>
      <S.Price>${price}</S.Price>
    </S.CatalogCardWrapper>
  );
};
