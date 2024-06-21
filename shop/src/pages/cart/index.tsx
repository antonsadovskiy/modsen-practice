import { useCallback, useMemo, useState } from "react";

import { useGetProductsQuery } from "@/api";
import { CartCard } from "@/components/cart-card";
import { CustomButton } from "@/components/custom-button";
import { Modal } from "@/components/modal";
import { Skeleton } from "@/components/skeleton";
import { CartModalItem } from "@/pages/cart/cart-modal-item";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartThunks } from "@/store/slices/cart";
import { selectorCartProducts } from "@/store/slices/cart/cartSelectors";

import S from "./styled";

export const CartPage = () => {
  const cart = useAppSelector(selectorCartProducts);
  const dispatch = useAppDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

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

  const onShopNowHandler = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onConfirmHandler = useCallback(async () => {
    setIsDeleting(true);
    try {
      await dispatch(cartThunks.clearCart()).unwrap();
      setIsOpenModal(false);
      console.log("спасибо за покупку");
    } catch (e) {
      console.log(e);
    } finally {
      setIsDeleting(false);
    }
  }, [dispatch]);

  const onCloseModalHandler = useCallback(() => {
    setIsOpenModal(false);
  }, []);

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
      {isOpenModal && (
        <Modal
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
      )}
    </>
  );
};
