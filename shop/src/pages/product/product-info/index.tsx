import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Typography } from "antd";

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
    () =>
      !!cartData.data.find((item) => item.product.id === parseInt(params.id)),
    [cartData, params],
  );

  useEffect(() => {
    if (params.id) {
      const elem = cartData.data.find(
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
      <Typography.Title level={2}>
        Название: {product?.title ?? ""}
      </Typography.Title>
      <Typography.Title level={2}>
        Цена: {product?.price ?? ""}$
      </Typography.Title>
      <Typography.Text>Описание: {product?.description ?? ""}</Typography.Text>
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
            <Button onClick={goToCartHandler}>Перейти в корзину</Button>
          ) : (
            <Button
              onClick={addToCartHandler}
              disabled={amount === 0}
              loading={isAdding}
            >
              Добавить в корзину
            </Button>
          )}
        </S.ButtonContainer>
      </S.AddToCartContainer>
      <S.CategoryContainer>
        <Typography.Title level={5}>
          Категория: <Typography.Text>{product?.category.name}</Typography.Text>
        </Typography.Title>
      </S.CategoryContainer>
    </S.Information>
  );
};
