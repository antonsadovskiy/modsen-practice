import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import BurgerNavSVG from "@/assets/svg/burger-nav.svg";
import { CustomIconButton } from "@/components/custom-icon-button";
import { CustomSwitch } from "@/components/custom-switch";
import { CartIcon } from "@/components/header/cart-icon";
import { Sidebar } from "@/components/header/sidebar";
import { routes } from "@/constants/routes";
import { useChangeTheme } from "@/hooks/useChangeTheme";
import { useAppSelector } from "@/store/hooks";
import { selectorAppTheme } from "@/store/slices/app/appSelectors";

import S from "./styled";

export const Header = () => {
  const theme = useAppSelector(selectorAppTheme);

  const { changeTheme } = useChangeTheme();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navigate = useNavigate();

  const goHomePageHandler = useCallback(() => {
    navigate(routes.home);

    setIsOpenMenu(false);
  }, [navigate]);

  const onCheckedChangeHandler = useCallback(
    (checked: boolean) => {
      changeTheme(checked ? "dark" : "light");
    },
    [changeTheme],
  );

  const onShowMenu = () => {
    setIsOpenMenu(true);
  };
  const onHideMenu = () => {
    setIsOpenMenu(false);
  };

  const navigateHandler = (link: string) => {
    navigate(link);
    setIsOpenMenu(false);
  };

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
          <S.BurgerNav>
            <CartIcon onClick={() => navigateHandler(routes.cart)} />
            <CustomIconButton onClick={isOpenMenu ? onHideMenu : onShowMenu}>
              {isOpenMenu ? (
                <S.Cross width={20} height={15} />
              ) : (
                <BurgerNavSVG width={20} height={15} />
              )}
            </CustomIconButton>
          </S.BurgerNav>
          <S.Actions>
            <Link to={routes.shop}>
              <S.ShopLink>Shop</S.ShopLink>
            </Link>
            <CustomSwitch
              checked={theme !== "light"}
              onCheckedChange={onCheckedChangeHandler}
            />
            <CartIcon onClick={() => navigateHandler(routes.cart)} />
          </S.Actions>
        </S.HeaderContent>
        <S.BorderBottomLine />
      </S.MaxWidthContainer>
      <Sidebar
        isOpenMenu={isOpenMenu}
        onClose={onHideMenu}
        onNavigate={navigateHandler}
      />
    </S.Wrapper>
  );
};
