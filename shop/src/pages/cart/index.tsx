import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

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
        <S.TitleContainer>
          <Button
            variant={"contained"}
            data-cy={"show-now-button"}
            disabled={cartData.length === 0}
            onClick={onConfirmHandler}
            fullWidth={false}
          >
            Show now
          </Button>
        </S.TitleContainer>
        <S.CartContainer>
          <S.ProductsContainer>
            {cartData.length === 0 &&
              (isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} height={200} />
                ))
              ) : (
                <S.NoData data-cy={"cart-empty"}>
                  No products in cart yet
                </S.NoData>
              ))}
            {cartData.length > 0 &&
              cartData.map((item) => (
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
              ))}
          </S.ProductsContainer>
        </S.CartContainer>
      </S.Wrapper>
    </>
  );
};
