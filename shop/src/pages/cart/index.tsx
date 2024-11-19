import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useBuyMutation } from "@/api";
import { CustomButton } from "@/components/custom-button";
import { Modal } from "@/components/modal";
import { Skeleton } from "@/components/skeleton";
import { routes } from "@/constants/routes";
import { usePreventScroll } from "@/hooks";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/useToast";
import { CartCard } from "@/pages/cart/cart-card";
import { CartModalItem } from "@/pages/cart/cart-modal-item";

import S from "./styled";

export const CartPage = () => {
  const navigate = useNavigate();

  const toast = useToast();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  usePreventScroll(isOpenModal);

  const [buy] = useBuyMutation();
  const { cartData, isLoading } = useCart();

  const totalPrice = useMemo(
    () =>
      cartData.data
        .map((item) => item.product.price * item.amount)
        .reduce((acc, curr) => acc + curr, 0)
        .toFixed(2),
    [cartData],
  );

  const onShopNowHandler = () => {
    setIsOpenModal(true);
  };

  const onConfirmHandler = async () => {
    setIsDeleting(true);
    try {
      await buy().unwrap();
      setIsOpenModal(false);
      navigate(routes.successfulPurchase, { state: { isSucceeded: true } });
    } catch (e) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsDeleting(false);
    }
  };

  const onCloseModalHandler = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.TitleContainer>
          Cart
          <CustomButton
            data-cy={"show-now-button"}
            disabled={cartData.data.length === 0}
            onClick={onShopNowHandler}
            fullWidth={false}
          >
            Show now
          </CustomButton>
        </S.TitleContainer>
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
            {cartData.data.length > 0 &&
              cartData.data.map((item) => (
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
      <Modal
        isOpen={isOpenModal}
        title={"Purchase confirmation"}
        confirmButtonText={"Confirm"}
        onConfirmHandler={onConfirmHandler}
        onCloseHandler={onCloseModalHandler}
        isLoading={isDeleting}
        isShowCloseIcon
        bottomText={"Total price: $" + totalPrice}
      >
        {cartData.data.map((item) => (
          <CartModalItem
            key={item.productInCartId}
            title={item.product.title}
            image={item.product.image}
            totalAmount={item.amount}
            description={item.product.description}
            pricePerOne={item.product.price}
          />
        ))}
      </Modal>
    </>
  );
};
