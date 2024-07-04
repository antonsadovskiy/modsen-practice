import { useMemo } from "react";

import ShoppingCardSVG from "@/assets/svg/shopping-cart.svg";
import { CustomIconButton } from "@/components/custom-icon-button";
import { useAppSelector } from "@/hooks";
import { selectorCartProducts } from "@/store/slices/cart";

import S from "./styled";

type CartIconPropsType = {
  onClick: () => void;
};

export const CartIcon = ({ onClick }: CartIconPropsType) => {
  const cart = useAppSelector(selectorCartProducts);

  const cartAmount = useMemo(
    () => cart.reduce((acc, item) => acc + item.amount, 0),
    [cart],
  );

  const goCartPageHandler = () => {
    onClick();
  };

  return (
    <CustomIconButton data-cy={"cart-link"} onClick={goCartPageHandler}>
      <S.CartIconContainer>
        <ShoppingCardSVG />
        {cartAmount > 0 && <S.CartCount>{cartAmount}</S.CartCount>}
      </S.CartIconContainer>
    </CustomIconButton>
  );
};
