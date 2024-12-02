import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import { useAddProductInCartMutation } from "@/api";
import { ProductType } from "@/api/types";
import { IncreaseAmount } from "@/components/increase-amount";
import { routes } from "@/constants/routes";
import { useCart } from "@/hooks/useCart";

import S from "./styled";

type ProductInfoPropsType = {
  product: ProductType;
};

export const ProductInfo = ({ product }: ProductInfoPropsType) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [amount, setAmount] = useState(1);

  const [addToCart] = useAddProductInCartMutation();

  const { cartData } = useCart();

  const addToCartHandler = useCallback(async () => {
    if (product.id) {
      await addToCart({ productId: product.id, amount }).unwrap();
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
  }, [params.id]);

  return (
    <S.Information>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography variant={"h5"}>Title: {product?.title ?? ""}</Typography>
        <Typography variant={"h6"}>Price: $ {product?.price ?? ""}</Typography>
        <Typography variant={"body1"}>
          Description: {product?.description ?? ""}
        </Typography>
        <Typography>Category: {product?.category.name}</Typography>
      </div>
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
            <Button
              data-cy={"go-to-cart-button"}
              onClick={goToCartHandler}
              variant={"contained"}
            >
              Go to cart
            </Button>
          ) : (
            <Button
              data-cy={"add-to-cart-button"}
              onClick={addToCartHandler}
              disabled={amount === 0}
              variant={"contained"}
            >
              Add to cart
            </Button>
          )}
        </S.ButtonContainer>
      </S.AddToCartContainer>
    </S.Information>
  );
};
