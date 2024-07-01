import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGetProductsQuery } from "@/api";
import { CustomButton } from "@/components/custom-button";
import { Modal } from "@/components/modal";
import { Skeleton } from "@/components/skeleton";
import { routes } from "@/constants/routes";
import { useAppDispatch, useAppSelector, usePreventScroll } from "@/hooks";
import { useToast } from "@/hooks/useToast";
import { CartCard } from "@/pages/cart/cart-card";
import { CartModalItem } from "@/pages/cart/cart-modal-item";
import { cartThunks, selectorCartProducts } from "@/store/slices/cart";

import S from "./styled";

export const CartPage = () => {
  const navigate = useNavigate();

  const cart = useAppSelector(selectorCartProducts);
  const dispatch = useAppDispatch();

  const toast = useToast();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  usePreventScroll(isOpenModal);

  const { data: products, isLoading } = useGetProductsQuery(
    {},
    {
      selectFromResult: ({ data, ...rest }) => ({
        data: data ?? [],
        ...rest,
      }),
    },
  );

  const productsWithMeta = useMemo(
    () =>
      products
        .filter(
          (product) => !!cart.find((item) => item.productId === product.id),
        )
        .map((product) => {
          const cartItem = cart.find((item) => item.productId === product.id);
          return {
            ...product,
            docId: cartItem ? cartItem.docId : "",
            amountItems: cartItem ? cartItem.amount : 0,
          };
        }),
    [cart, products],
  );

  const totalPrice = useMemo(
    () =>
      productsWithMeta
        .map((item) => item.price * item.amountItems)
        .reduce((acc, curr) => acc + curr, 0)
        .toFixed(2),
    [productsWithMeta],
  );

  const isCartHasEmptyProducts = useMemo(
    () => parseInt(totalPrice) === 0,
    [totalPrice],
  );

  const onShopNowHandler = () => {
    setIsOpenModal(true);
  };

  const onConfirmHandler = async () => {
    setIsDeleting(true);
    try {
      await dispatch(cartThunks.clearCart()).unwrap();
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
            disabled={productsWithMeta.length === 0}
            onClick={onShopNowHandler}
            fullWidth={false}
          >
            Show now
          </CustomButton>
        </S.TitleContainer>
        <S.CartContainer>
          <S.ProductsContainer>
            {productsWithMeta.length === 0 &&
              (isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} height={200} />
                ))
              ) : (
                <S.NoData>No products in cart yet</S.NoData>
              ))}
            {productsWithMeta.length > 0 &&
              productsWithMeta.map((item) => (
                <CartCard
                  docId={item.docId}
                  width={"200"}
                  imageSrc={item.image}
                  height={"200"}
                  key={item.id}
                  description={item.description}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  amountItemsInCart={item.amountItems}
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
        isConfirmButtonDisabled={isCartHasEmptyProducts}
        isShowCloseIcon
        bottomText={
          isCartHasEmptyProducts
            ? "You need to choose at least one product"
            : "Total price: $" + totalPrice
        }
      >
        {productsWithMeta.map((item) => (
          <CartModalItem
            key={item.id}
            title={item.title}
            image={item.image}
            totalAmount={item.amountItems}
            description={item.description}
            pricePerOne={item.price}
          />
        ))}
      </Modal>
    </>
  );
};
