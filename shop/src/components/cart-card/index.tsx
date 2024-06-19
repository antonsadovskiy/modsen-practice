import S from "./styled";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { routes } from "@/constants/routes";
import { IncreaseAmount } from "@/components/increase-amount";
import { useUpdateCart } from "@/hooks/useUpdateCart";
import { useDebounce } from "@/hooks/useDebounce";

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
  const [amount, setAmount] = useState(amountItemsInCart);

  const debouncedAmount = useDebounce(amount, 700);

  const { updateCart } = useUpdateCart();

  const increaseHandler = useCallback(() => {
    setAmount((prevState) => prevState + 1);
  }, []);

  const decreaseHandler = useCallback(() => {
    setAmount((prevState) => prevState - 1);
  }, []);

  const totalPrice = useMemo(
    () => (amount * (price ?? 0)).toFixed(2),
    [amount, price],
  );

  const updateCartProduct = useCallback(async () => {
    try {
      await updateCart(id, docId, amount);
    } catch (e) {
      console.error(e);
    }
  }, [amount, updateCart, docId, id]);

  useEffect(() => {
    if (debouncedAmount !== amount) {
      updateCartProduct();
    }
  }, [debouncedAmount, amount, updateCartProduct]);

  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate(`${routes.product}/${id}`);
  }, [navigate, id]);

  return (
    <S.CatalogCardWrapper $width={width}>
      <S.ImageAndDescription>
        <S.ImagesContainer onClick={onClickHandler}>
          <img src={imageSrc} alt={title} height={height} width={width} />
        </S.ImagesContainer>
        <S.TitleAndDescription>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <IncreaseAmount
            amount={amount}
            increaseHandler={increaseHandler}
            decreaseHandler={decreaseHandler}
            totalPrice={totalPrice}
            disabled={false}
          />
        </S.TitleAndDescription>
      </S.ImageAndDescription>
    </S.CatalogCardWrapper>
  );
};
