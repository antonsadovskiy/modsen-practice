import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import ShoppingCardSVG from "@/assets/svg/shopping-cart.svg";
import { CustomIconButton } from "@/components/custom-icon-button";
import { CustomSwitch } from "@/components/custom-switch";
import { routes } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appActions } from "@/store/slices/app";
import { selectorAppTheme } from "@/store/slices/app/appSelectors";

import S from "./styled";

export const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectorAppTheme);

  const navigate = useNavigate();

  const goHomePageHandler = useCallback(() => {
    navigate(routes.home);
  }, [navigate]);

  const goCartPageHandler = useCallback(() => {
    navigate(routes.cart);
  }, [navigate]);

  const onCheckedChangeHandler = useCallback(
    (checked: boolean) => {
      dispatch(appActions.setTheme({ theme: checked ? "dark" : "light" }));
    },
    [dispatch],
  );

  return (
    <S.Wrapper>
      <S.MaxWidthContainer>
        <S.HeaderContent>
          <S.Logo
            className={"logo"}
            onClick={goHomePageHandler}
            width={290}
            height={32}
          />
          <S.Actions>
            <S.ShopLink>Shop</S.ShopLink>
            <CustomSwitch
              checked={theme !== "light"}
              defaultChecked={theme !== "light"}
              onCheckedChange={onCheckedChangeHandler}
            />
            <CustomIconButton onClick={goCartPageHandler}>
              <ShoppingCardSVG />
            </CustomIconButton>
          </S.Actions>
        </S.HeaderContent>
        <S.BorderBottomLine />
      </S.MaxWidthContainer>
    </S.Wrapper>
  );
};
