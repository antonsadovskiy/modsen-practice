import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import DeleteSVG from "@/assets/svg/bucket.svg";
import { CircleLoader } from "@/components/circle-loader";
import { CustomIconButton } from "@/components/custom-icon-button";
import { IncreaseAmount } from "@/components/increase-amount";
import { routes } from "@/constants/routes";
import { useAppDispatch } from "@/hooks";
import { useToast } from "@/hooks/useToast";
import { cartThunks } from "@/store/slices/cart";

import S from "./styled";

export type CartCardPropsType = {
  docId: string;
  id: number;
  imageSrc?: string;
  title: string;
  description: string;
  price: number;
  width?: string;
  height?: string;
  amountItemsInCart: number;
};

const CartCard = memo(
  ({
    docId,
    id,
    imageSrc,
    height = "380",
    width = "380",
    description,
    price,
    title,
    amountItemsInCart,
  }: CartCardPropsType) => {
    const dispatch = useAppDispatch();

    const toast = useToast();

    const [isDeleting, setIsDeleting] = useState(false);

    const updateCartProduct = useCallback(
      (newValue: number) => {
        try {
          dispatch(
            cartThunks.updateCartProduct({
              productId: id,
              docId,
              amount: newValue,
            }),
          );
        } catch (e) {
          toast.error(
            "Failed to update product quantity, please try again later",
          );
        }
      },
      [dispatch, id, docId, toast],
    );

    const navigate = useNavigate();

    const onClickHandler = () => {
      navigate(`${routes.product}/${id}`);
    };

    const onDeleteProductHandler = async () => {
      setIsDeleting(true);

      try {
        await dispatch(
          cartThunks.deleteCartProduct({ productId: id, docId }),
        ).unwrap();
      } catch (e) {
        toast.error(
          "Failed to delete product from cart, please try again later",
        );
      } finally {
        setIsDeleting(false);
      }
    };

    return (
      <S.CatalogCardWrapper data-cy={"cart-card"} $width={width}>
        <S.ImageAndDescription>
          <S.ImagesContainer
            data-cy={"cart-card-image"}
            onClick={onClickHandler}
          >
            <img src={imageSrc} alt={title} height={height} width={width} />
          </S.ImagesContainer>
          <S.TitleAndDescription>
            <S.TitleAndDelete>
              <S.Title>{title}</S.Title>
              {isDeleting ? (
                <CircleLoader />
              ) : (
                <CustomIconButton
                  data-cy={"delete-from-cart-button"}
                  onClick={onDeleteProductHandler}
                >
                  <DeleteSVG />
                </CustomIconButton>
              )}
            </S.TitleAndDelete>
            <S.Description>{description}</S.Description>
            <IncreaseAmount
              startAmount={amountItemsInCart}
              onChangeDebouncedValue={updateCartProduct}
              pricePerItem={price}
            />
          </S.TitleAndDescription>
        </S.ImageAndDescription>
      </S.CatalogCardWrapper>
    );
  },
);

CartCard.displayName = "CartCard";

export { CartCard };
