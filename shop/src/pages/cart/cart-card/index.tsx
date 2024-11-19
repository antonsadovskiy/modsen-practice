import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useDeleteProductFromCartMutation,
  useUpdateProductInCartMutation,
} from "@/api";
import DeleteSVG from "@/assets/svg/bucket.svg";
import { CircleLoader } from "@/components/circle-loader";
import { CustomIconButton } from "@/components/custom-icon-button";
import { IncreaseAmount } from "@/components/increase-amount";
import { routes } from "@/constants/routes";
import { useToast } from "@/hooks/useToast";

import S from "./styled";

export type CartCardPropsType = {
  productInCartId: number;
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
    productInCartId,
    id,
    imageSrc,
    height = "380",
    width = "380",
    description,
    price,
    title,
    amountItemsInCart,
  }: CartCardPropsType) => {
    const toast = useToast();

    const [isDeleting, setIsDeleting] = useState(false);

    const [updateProduct] = useUpdateProductInCartMutation();
    const [deleteProduct] = useDeleteProductFromCartMutation();

    const updateCartProduct = useCallback(
      async (newValue: number) => {
        try {
          await updateProduct({ productInCartId, amount: newValue });
        } catch (e) {
          toast.error(
            "Failed to update product quantity, please try again later",
          );
        }
      },
      [productInCartId, updateProduct],
    );

    const navigate = useNavigate();

    const onClickHandler = () => {
      navigate(`${routes.product}/${id}`);
    };

    const onDeleteProductHandler = async () => {
      setIsDeleting(true);

      try {
        await deleteProduct(productInCartId).unwrap();
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
            <img
              src={`http://localhost:9000/products/${imageSrc}`}
              alt={title}
              height={height}
              width={width}
            />
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
              min={1}
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
