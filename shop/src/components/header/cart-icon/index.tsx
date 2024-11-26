import { useMemo } from "react";

import ShoppingCardSVG from "@/assets/svg/shopping-cart.svg";
import { CustomIconButton } from "@/components/custom-icon-button";
import { useCart } from "@/hooks/useCart";

import S from "./styled";

type CartIconPropsType = {
  onClick: () => void;
  isMobile?: boolean;
};

export const CartIcon = ({ onClick, isMobile = false }: CartIconPropsType) => {
  const { cartData } = useCart();

  const cartAmount = useMemo(
    () => cartData.reduce((acc, item) => acc + item.amount, 0),
    [cartData],
  );

  const goCartPageHandler = () => {
    onClick();
  };

  return (
    <CustomIconButton
      data-cy={`cart-link-${isMobile ? "mobile" : "desktop"}`}
      onClick={goCartPageHandler}
    >
      <S.CartIconContainer>
        <ShoppingCardSVG />
        {cartAmount > 0 && <S.CartCount>{cartAmount}</S.CartCount>}
      </S.CartIconContainer>
    </CustomIconButton>
  );
};
