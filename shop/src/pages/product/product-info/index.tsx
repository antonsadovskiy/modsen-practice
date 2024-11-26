import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAddProductInCartMutation } from "@/api";
import { ProductType } from "@/api/types";
import { CustomButton } from "@/components/custom-button";
import { IncreaseAmount } from "@/components/increase-amount";
import { routes } from "@/constants/routes";
import { socialMedias } from "@/constants/socials";
import { useCart } from "@/hooks/useCart";

import S from "./styled";

type ProductInfoPropsType = {
  product: ProductType;
};

export const ProductInfo = ({ product }: ProductInfoPropsType) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [amount, setAmount] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const [addToCart] = useAddProductInCartMutation();

  const { cartData } = useCart();

  const addToCartHandler = useCallback(async () => {
    if (product.id) {
      setIsAdding(true);
      await addToCart({ productId: product.id, amount }).unwrap();
      setIsAdding(false);
    }
  }, [addToCart, amount, product?.id]);

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
    () => !!cartData.find((item) => item.product.id === parseInt(params.id)),
    [cartData, params],
  );

  useEffect(() => {
    if (params.id) {
      const elem = cartData.find(
        (item) => item.product.id === parseInt(params.id),
      );

      if (elem) {
        return setAmount(elem.amount);
      }
      setAmount(1);
    }
  }, [cartData, params.id]);

  return (
    <S.Information>
      <S.ProductTitle>{product?.title ?? ""}</S.ProductTitle>
      <S.ProductPrice>$ {product?.price ?? ""}</S.ProductPrice>
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
        <S.Category>{product?.category.name}</S.Category>
      </S.CategoryContainer>
    </S.Information>
  );
};
