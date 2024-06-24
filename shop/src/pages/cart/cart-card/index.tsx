import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import DeleteSVG from "@/assets/svg/bucket.svg";
import { CircleLoader } from "@/components/circle-loader";
import { CustomIconButton } from "@/components/custom-icon-button";
import { IncreaseAmount } from "@/components/increase-amount";
import { routes } from "@/constants/routes";
import { useAppDispatch } from "@/store/hooks";
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

export const CartCard = ({
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
        console.error(e);
      }
    },
    [docId, id, dispatch],
  );

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`${routes.product}/${id}`);
  };

  const onDeleteProductHandler = useCallback(async () => {
    setIsDeleting(true);

    await dispatch(cartThunks.deleteCartProduct({ productId: id, docId }));

    setIsDeleting(false);
  }, [dispatch, docId, id]);

  return (
    <S.CatalogCardWrapper $width={width}>
      <S.ImageAndDescription>
        <S.ImagesContainer onClick={onClickHandler}>
          <img src={imageSrc} alt={title} height={height} width={width} />
        </S.ImagesContainer>
        <S.TitleAndDescription>
          <S.TitleAndDelete>
            <S.Title>{title}</S.Title>
            {isDeleting ? (
              <CircleLoader />
            ) : (
              <CustomIconButton onClick={onDeleteProductHandler}>
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
};
