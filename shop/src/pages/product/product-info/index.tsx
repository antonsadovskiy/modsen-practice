import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductType } from "@/api/types";
import { CustomButton } from "@/components/custom-button";
import { IncreaseAmount } from "@/components/increase-amount";
import { routes } from "@/constants/routes";
import { socialMedias } from "@/constants/socials";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { StarRating } from "@/pages/product/star-rating";
import { cartThunks, selectorCartProducts } from "@/store/slices/cart";

import S from "./styled";

type ProductInfoPropsType = {
  product: ProductType;
};

export const ProductInfo = ({ product }: ProductInfoPropsType) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectorCartProducts);

  const [amount, setAmount] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const addToCartHandler = useCallback(async () => {
    if (product.id) {
      setIsAdding(true);
      await dispatch(
        cartThunks.addCartProduct({ productId: product.id, amount }),
      );
      setIsAdding(false);
    }
  }, [amount, dispatch, product?.id]);

  const goToCartHandler = () => {
    navigate(routes.cart);
  };

  const changeAmountHandler = useCallback(
    (newValue: number) => {
      setAmount(newValue);
    },
    [setAmount],
  );

  const isThisProductAlreadyInCart = useMemo(
    () => !!cart.find((item) => item.productId === parseInt(params.id)),
    [cart, params],
  );

  useEffect(() => {
    if (params.id) {
      const elem = cart.find((item) => item.productId === parseInt(params.id));

      if (elem) {
        return setAmount(elem.amount);
      }
      setAmount(1);
    }
  }, [cart, params.id]);

  return (
    <S.Information>
      <S.ProductTitle>{product?.title ?? ""}</S.ProductTitle>
      <S.ProductPrice>$ {product?.price ?? ""}</S.ProductPrice>
      <S.RatingContainer>
        <StarRating value={product?.rating?.rate ?? 0} />
        {product?.rating?.count ?? 0} customer review
      </S.RatingContainer>
      <S.ProductDescription>{product?.description ?? ""}</S.ProductDescription>
      <S.AddToCartContainer>
        <IncreaseAmount
          min={1}
          startAmount={amount}
          pricePerItem={product?.price}
          disabled={isThisProductAlreadyInCart}
          onChangeValue={changeAmountHandler}
        />
        <S.ButtonContainer data-cy={"product-info-button-container"}>
          {isThisProductAlreadyInCart ? (
            <CustomButton
              data-cy={"go-to-cart-button"}
              onClick={goToCartHandler}
              variant={"secondary"}
            >
              Go to cart
            </CustomButton>
          ) : (
            <CustomButton
              data-cy={"add-to-cart-button"}
              onClick={addToCartHandler}
              disabled={amount === 0}
              isLoading={isAdding}
              variant={"secondary"}
            >
              Add to cart
            </CustomButton>
          )}
        </S.ButtonContainer>
      </S.AddToCartContainer>
      <S.IconsContainer>
        {socialMedias.map((item, index) => (
          <S.SocialMediaIconButton
            target={"_blank"}
            href={item.link}
            key={index}
          >
            {<item.icon />}
          </S.SocialMediaIconButton>
        ))}
      </S.IconsContainer>
      <S.CategoryContainer>
        <S.CategoryTitle>Categories:</S.CategoryTitle>
        <S.Category>{product?.category}</S.Category>
      </S.CategoryContainer>
    </S.Information>
  );
};
