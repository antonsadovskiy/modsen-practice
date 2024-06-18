import S from "./styled";
import ShoppingCardSVG from "@/assets/svg/shopping-cart.svg";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";
import { CustomSwitch } from "@/components/custom-switch";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appActions } from "@/store/slices/app";
import { selectorAppTheme } from "@/store/slices/app/appSelectors";

export const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectorAppTheme);

  const navigate = useNavigate();

  const goHomePageHandler = useCallback(() => {
    navigate(routes.home);
  }, [navigate]);

  const onCheckedChangeHandler = useCallback(
    (checked: boolean) => {
      dispatch(appActions.setTheme({ theme: checked ? "dark" : "light" }));
    },
    [dispatch],
  );

  return (
    <S.Wrapper>
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
          <Link to={routes.cart}>
            <ShoppingCardSVG />
          </Link>
        </S.Actions>
      </S.HeaderContent>
      <S.BorderBottomLine />
    </S.Wrapper>
  );
};
