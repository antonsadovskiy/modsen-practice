import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, List, Typography } from "antd";

import { useBuyMutation } from "@/api";
import { Skeleton } from "@/components/skeleton";
import { routes } from "@/constants/routes";
import { usePreventScroll } from "@/hooks";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/useToast";
import { CartCard } from "@/pages/cart/cart-card";

import S from "./styled";

export const CartPage = () => {
  const navigate = useNavigate();

  const toast = useToast();

  const [isOpenModal, setIsOpenModal] = useState(false);

  usePreventScroll(isOpenModal);

  const [buy] = useBuyMutation();
  const { cartData, isLoading } = useCart();

  const onConfirmHandler = async () => {
    try {
      await buy().unwrap();
      setIsOpenModal(false);
      navigate(routes.successfulPurchase, { state: { isSucceeded: true } });
    } catch (e) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <S.Wrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography.Title level={3}>Корзина</Typography.Title>
          <Button
            disabled={cartData.data.length === 0}
            onClick={onConfirmHandler}
          >
            Заказать
          </Button>
        </div>
        <S.CartContainer>
          <S.ProductsContainer>
            {cartData.data.length === 0 &&
              (isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} height={200} />
                ))
              ) : (
                <S.NoData data-cy={"cart-empty"}>
                  No products in cart yet
                </S.NoData>
              ))}
            {cartData.data.length > 0 && (
              <List
                style={{ width: "100%" }}
                itemLayout="vertical"
                size="large"
                dataSource={cartData.data}
                renderItem={(item) => (
                  <CartCard
                    productInCartId={item.productInCartId}
                    width={"200"}
                    imageSrc={item.product.image}
                    height={"200"}
                    key={item.productInCartId}
                    description={item.product.description}
                    id={item.product.id}
                    title={item.product.title}
                    price={item.product.price}
                    amountItemsInCart={item.amount}
                  />
                )}
              />
            )}
          </S.ProductsContainer>
        </S.CartContainer>
      </S.Wrapper>
    </>
  );
};
