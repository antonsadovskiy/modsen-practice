import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import BurgerNavSVG from "@/assets/svg/burger-nav.svg";
import { CustomIconButton } from "@/components/custom-icon-button";
import { CustomSwitch } from "@/components/custom-switch";
import { CartIcon } from "@/components/header/cart-icon";
import { Sidebar } from "@/components/header/sidebar";
import { routes } from "@/constants/routes";
import { useAppSelector, useChangeTheme } from "@/hooks";
import { selectorAppTheme } from "@/store/slices/app";

import S from "./styled";

export const Header = () => {
  const theme = useAppSelector(selectorAppTheme);

  const { changeTheme } = useChangeTheme();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isShowDivider, setIsShowDivider] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const goHomePageHandler = () => {
    navigate(routes.home);
    setIsOpenMenu(false);
  };

  const onCheckedChangeHandler = (checked: boolean) => {
    changeTheme(checked ? "dark" : "light");
  };

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

  useEffect(() => {
    if (location.pathname === routes.home) {
      const swiper = document.getElementById("swiper");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              return setIsShowDivider(false);
            }
            return setIsShowDivider(true);
          });
        },
        {
          rootMargin: "-114px",
        },
      );

      observer.observe(swiper);
      return;
    }
    setIsShowDivider(true);
  }, [location]);

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
        <S.BorderBottomLine $isShow={isShowDivider} />
      </S.MaxWidthContainer>
      <Sidebar
        isOpenMenu={isOpenMenu}
        onClose={onHideMenu}
        onNavigate={navigateHandler}
      />
    </S.Wrapper>
  );
};
