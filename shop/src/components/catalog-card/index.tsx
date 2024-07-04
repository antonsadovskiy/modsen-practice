import { memo, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import HeartSVG from "@/assets/svg/heart.svg";
import CartSVG from "@/assets/svg/shopping-cart.svg";
import { CircleLoader } from "@/components/circle-loader";
import { routes } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useToast } from "@/hooks/useToast";
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

    const toast = useToast();
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectorCartProducts);

    const [isAdding, setIsAdding] = useState(false);

    const isThisProductAlreadyInCart = !!cart.find(
      (item) => item.productId === id,
    );

    const onClickHandler = () => navigate(`${routes.product}/${id}`);

    const addToCartHandler = async (e: SyntheticEvent) => {
      e.stopPropagation();

      if (isThisProductAlreadyInCart) {
        return navigate(routes.cart);
      }

      setIsAdding(true);

      try {
        await dispatch(
          cartThunks.addCartProduct({ productId: id, amount: 1 }),
        ).unwrap();
      } catch (e) {
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setIsAdding(false);
      }
    };

    return (
      <S.CatalogCardWrapper
        data-cy={`catalog-card`}
        $width={width}
        onClick={onClickHandler}
      >
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
                  <CircleLoader size={18} />
                ) : (
                  <HeartSVG width={20} height={20} />
                )}
              </>
            )}
          </S.AddToCartButton>
        </S.ImagesContainer>
        <S.Title data-cy={"catalog-card-title"}>{title}</S.Title>
        <S.Price>$ {price}</S.Price>
      </S.CatalogCardWrapper>
    );
  },
);

CatalogCard.displayName = "CatalogCard";

export { CatalogCard };
