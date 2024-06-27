import { memo, SyntheticEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import HeartSVG from "@/assets/svg/heart.svg";
import CartSVG from "@/assets/svg/shopping-cart.svg";
import { CircleLoader } from "@/components/circle-loader";
import { routes } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { cartThunks, selectorCartProducts } from "@/store/slices/cart";

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

    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectorCartProducts);

    const [isAdding, setIsAdding] = useState(false);

    const isThisProductAlreadyInCart = useMemo(
      () => !!cart.find((item) => item.productId === id),
      [cart, id],
    );

    const onClickHandler = () => navigate(`${routes.product}/${id}`);

    const addToCartHandler = async (e: SyntheticEvent) => {
      e.stopPropagation();

      if (isThisProductAlreadyInCart) {
        return navigate(routes.cart);
      }

      setIsAdding(true);
      await dispatch(cartThunks.addCartProduct({ productId: id, amount: 1 }));
      setIsAdding(false);
    };

    return (
      <S.CatalogCardWrapper $width={width} onClick={onClickHandler}>
        <S.ImagesContainer $height={height} $width={width}>
          <img src={imageSrc} alt={title} height={"100%"} width={"100%"} />
          <S.AddToCartButton onClick={addToCartHandler}>
            {isThisProductAlreadyInCart ? (
              <>
                <span>Already in cart</span>
                <CartSVG width={20} height={20} />
              </>
            ) : (
              <>
                <span>Add to cart</span>
                {isAdding ? (
                  <CircleLoader size={16} />
                ) : (
                  <HeartSVG width={20} height={20} />
                )}
              </>
            )}
          </S.AddToCartButton>
        </S.ImagesContainer>
        <S.Title>{title}</S.Title>
        <S.Price>$ {price}</S.Price>
      </S.CatalogCardWrapper>
    );
  },
);

CatalogCard.displayName = "CatalogCard";

export { CatalogCard };
